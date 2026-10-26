"use client";

import React from "react";
import SectionHeading from "./section-heading";
import RichText from "./rich-text";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Work");

  return (
    <section id="work" ref={ref} className="scroll-mt-20 py-20 sm:py-28">
      <SectionHeading note="Three companies, each its own branch. The colours match the graph above.">
        Work
      </SectionHeading>

      <ol className="space-y-6">
        {experiencesData.map((job) => {
          const color = `rgb(var(--${job.branch}))`;
          return (
            <li
              key={job.company}
              className="grid gap-8 rounded-3xl border border-rule bg-surface p-6 sm:p-10 lg:grid-cols-[18rem_1fr] lg:gap-14"
            >
              <div className="lg:sticky lg:top-24 lg:self-start">
                <span
                  className="inline-block rounded-md px-2 py-0.5 font-mono text-sm font-semibold"
                  style={{ color, background: `rgb(var(--${job.branch}) / 0.14)` }}
                >
                  {job.branch}
                </span>
                <h3 className="display mt-4 text-[2.25rem] font-bold leading-none sm:text-[2.75rem]">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-[6px] hover:underline"
                    style={{ textDecorationColor: color }}
                  >
                    {job.company}
                  </a>
                </h3>
                <p className="mt-3 font-medium">{job.role}</p>
                <p className="mt-1 text-muted">
                  {job.date}, {job.location}
                </p>
              </div>

              {/* Bullets hang off a branch line, like commits on a lane */}
              <ul className="relative space-y-5 pl-8">
                <span
                  aria-hidden
                  className="absolute bottom-2 left-[5px] top-2 w-[3px] rounded-full"
                  style={{ background: `rgb(var(--${job.branch}) / 0.35)` }}
                />
                {job.description.map((item, index) => (
                  <li key={index} className="relative leading-relaxed text-ink/85">
                    <span
                      aria-hidden
                      className="absolute -left-8 top-[0.4em] h-[13px] w-[13px] rounded-full border-[3px] bg-surface"
                      style={{ borderColor: color }}
                    />
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
