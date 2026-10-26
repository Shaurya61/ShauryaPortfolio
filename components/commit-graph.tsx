"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { branches, commits, type BranchKey } from "@/lib/data";

const WIDTH = 1000;
const LANE_GAP = 58;
const TOP = 34;
const HEIGHT = TOP + LANE_GAP * 3 + 46;
const LEFT = 24;
const RIGHT = WIDTH - 56;
const CURVE = 42;

const laneY = (lane: number) => TOP + lane * LANE_GAP;

function monthIndex(month: string) {
  const [y, m] = month.split("-").map(Number);
  return y * 12 + m;
}

// University years are compressed into the first fifth so the busy
// 2024 onwards stretch gets most of the width
function makeX(today: string) {
  const origin = monthIndex("2020-12");
  const pivot = monthIndex("2024-03");
  const end = monthIndex(today);
  const pivotX = LEFT + (RIGHT - LEFT) * 0.2;
  return (month: string) => {
    const i = monthIndex(month);
    if (i <= pivot) return LEFT + ((i - origin) / (pivot - origin)) * (pivotX - LEFT);
    return pivotX + ((i - pivot) / (end - pivot)) * (RIGHT - pivotX);
  };
}

const colorVar = (key: BranchKey) => `rgb(var(--${key}))`;

type Props = { today: string };

export default function CommitGraph({ today }: Props) {
  const x = makeX(today);
  const [active, setActive] = useState(commits.length - 1);

  const branchGeometry = branches.map((b) => {
    const y = laneY(b.lane);
    const xs = x(b.start);
    const xe = b.end ? x(b.end) : RIGHT;
    let d: string;
    if (b.key === "main") {
      d = `M${xs},${y} L${RIGHT},${y}`;
    } else {
      const y0 = laneY(0);
      d = `M${xs - CURVE},${y0} C${xs - CURVE / 3},${y0} ${xs - CURVE / 1.5},${y} ${xs},${y} L${xe},${y}`;
      if (b.end) {
        d += ` C${xe + CURVE / 1.5},${y} ${xe + CURVE / 3},${y0} ${xe + CURVE},${y0}`;
      }
    }
    return { ...b, y, xs, xe, d };
  });

  // Spread each branch's commits evenly between its start and end
  const nodes = commits.map((c, index) => {
    const b = branchGeometry.find((g) => g.key === c.branch)!;
    const siblings = commits.filter((s) => s.branch === c.branch && !s.at);
    const order = siblings.indexOf(c);
    const cx = c.at
      ? x(c.at)
      : b.xs + ((order + 0.5) / siblings.length) * (b.xe - b.xs);
    return { ...c, index, cx, cy: b.y, dates: b.dates, label: b.label };
  });

  const current = nodes[active];
  const years = ["2021", "2022", "2023", "2024", "2025", "2026"].filter(
    (yr) => monthIndex(`${yr}-01`) <= monthIndex(today)
  );

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="block h-auto w-full min-w-[46rem]"
          role="group"
          aria-label="Career as a commit graph. Select a commit to read it."
        >
          {years.map((yr) => (
            <g key={yr}>
              <line
                x1={x(`${yr}-01`)}
                x2={x(`${yr}-01`)}
                y1={8}
                y2={HEIGHT - 26}
                stroke="rgb(var(--rule))"
                strokeDasharray="2 5"
              />
              <text
                x={x(`${yr}-01`) + 6}
                y={HEIGHT - 10}
                fontSize="12"
                fill="rgb(var(--muted))"
                className="font-mono"
              >
                {yr}
              </text>
            </g>
          ))}

          {branchGeometry.map((b, i) => (
            <g key={b.key}>
              <path
                className="graph-branch"
                style={{ "--i": i } as React.CSSProperties}
                d={b.d}
                pathLength={1}
                fill="none"
                stroke={colorVar(b.key)}
                strokeWidth={b.key === "main" ? 2.5 : 3.5}
                strokeLinecap="round"
              />
              <text
                // Labels sit past the fork; short branches get theirs below the lane
                x={b.key === "main" ? b.xs : b.xe - b.xs < 80 ? b.xs - 6 : b.xs + 34}
                y={b.xe - b.xs < 80 ? b.y + 27 : b.y - 13}
                fontSize="13"
                fontWeight="600"
                fill={colorVar(b.key)}
                className="font-mono"
              >
                {b.label}
              </text>
              {!b.end && (
                <g className="graph-commit" style={{ "--i": i } as React.CSSProperties}>
                  <path
                    d={`M${RIGHT + 6},${b.y - 6} L${RIGHT + 14},${b.y} L${RIGHT + 6},${b.y + 6}`}
                    fill="none"
                    stroke={colorVar(b.key)}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              )}
            </g>
          ))}

          <text
            x={RIGHT + 22}
            y={laneY(0) + 4}
            fontSize="12"
            fontWeight="700"
            fill="rgb(var(--ink))"
            className="font-mono"
          >
            HEAD
          </text>

          {nodes.map((n) => {
            const isActive = n.index === active;
            const order = branches.findIndex((b) => b.key === n.branch);
            return (
              <g
                key={n.index}
                role="button"
                tabIndex={0}
                aria-label={n.message}
                aria-pressed={isActive}
                className="graph-commit cursor-pointer outline-none [&:focus-visible>circle:last-child]:stroke-ink"
                style={
                  {
                    "--i": order,
                    transformOrigin: `${n.cx}px ${n.cy}px`,
                  } as React.CSSProperties
                }
                onClick={() => setActive(n.index)}
                onMouseEnter={() => setActive(n.index)}
                onFocus={() => setActive(n.index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(n.index);
                  }
                }}
              >
                <circle cx={n.cx} cy={n.cy} r="16" fill="transparent" />
                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r={isActive ? 9 : 6.5}
                  fill={isActive ? colorVar(n.branch) : "rgb(var(--bg))"}
                  stroke={colorVar(n.branch)}
                  strokeWidth="3"
                  className="transition-all duration-200"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div
        className="mt-6 grid gap-x-8 gap-y-3 rounded-2xl border border-rule bg-surface p-5 sm:grid-cols-[auto_1fr] sm:p-6"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
          <span
            className="rounded-md px-2 py-0.5 font-mono text-sm font-semibold"
            style={{
              color: colorVar(current.branch),
              background: `rgb(var(--${current.branch}) / 0.14)`,
            }}
          >
            {current.label}
          </span>
          <span className="text-sm text-muted">{current.dates}</span>
        </div>
        <div>
          <p className="font-mono text-[0.95rem] font-medium sm:text-base">{current.message}</p>
          <p className="mt-1.5 text-muted">{current.detail}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-muted">
        <span className={clsx("sm:hidden")}>Swipe the graph and tap a commit. </span>
        <span className="hidden sm:inline">Point at or tab to a commit. </span>
        Branch dates are real; commits are highlights.
      </p>
    </div>
  );
}
