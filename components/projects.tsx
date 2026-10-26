"use client";

import React, { useState } from "react";
import clsx from "clsx";
import SectionHeading from "./section-heading";
import RichText from "./rich-text";
import { featuredProject as project } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type Example = {
  question: string;
  // Each part is plain text or a citation number pointing into quotes
  answer: (string | number)[];
  quotes: { id: number; text: string }[];
};

const examples: Example[] = [
  {
    question: "Why are people leaving after the trial?",
    answer: ["Price is the most common reason, usually tied to how rarely people use it", 1, 3, ". Setup time comes second", 2, "."],
    quotes: [
      { id: 412, text: "I open it maybe twice a month. Hard to justify the price for that." },
      { id: 87, text: "Took me an evening to connect our CRM, and I gave up halfway." },
      { id: 1033, text: "Good tool, but our team only needs it during launches." },
    ],
  },
  {
    question: "What do people like most?",
    answer: ["The shared inbox comes up again and again", 1, 2, ", followed by how fast search is", 3, "."],
    quotes: [
      { id: 56, text: "Finally one place where the whole team sees every customer email." },
      { id: 731, text: "The shared inbox alone is worth it for us." },
      { id: 219, text: "Search is instant, even across two years of threads." },
    ],
  },
  {
    question: "What should we fix first?",
    answer: ["Onboarding. People stall at the integrations step", 1, 2, ", and some never find the import button", 3, "."],
    quotes: [
      { id: 98, text: "The CRM step asked for an API key and I didn't know where to get it." },
      { id: 640, text: "Stuck on connecting Slack for twenty minutes." },
      { id: 1177, text: "I only found import after emailing support." },
    ],
  },
];

function AskAiDemo() {
  const [active, setActive] = useState(0);
  const [cited, setCited] = useState<number | null>(null);
  const example = examples[active];

  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-rule bg-bg text-ink shadow-[0_30px_60px_-30px_rgb(var(--sayso)/0.45)]">
        <div className="flex items-center justify-between border-b border-rule px-5 py-4 text-sm sm:px-6">
          <span className="font-semibold">Ask AI</span>
          <span className="text-muted">Customer survey, 1,284 responses</span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Example questions">
            {examples.map((ex, i) => (
              <button
                key={ex.question}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => {
                  setActive(i);
                  setCited(null);
                }}
                className={clsx(
                  "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  i === active
                    ? "border-sayso bg-sayso text-bg"
                    : "border-rule text-muted hover:border-ink hover:text-ink"
                )}
              >
                {ex.question}
              </button>
            ))}
          </div>

          <p key={active} className="mt-6 text-lg leading-relaxed">
            {example.answer.map((part, i) =>
              typeof part === "number" ? (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show quote ${part}`}
                  onMouseEnter={() => setCited(part)}
                  onMouseLeave={() => setCited(null)}
                  onFocus={() => setCited(part)}
                  onBlur={() => setCited(null)}
                  className={clsx(
                    "mx-0.5 inline-flex h-5 min-w-[1.25rem] -translate-y-1.5 items-center justify-center rounded px-1 align-baseline text-xs font-semibold transition-colors",
                    cited === part ? "bg-sayso text-bg" : "bg-ink/10 text-ink hover:bg-ink/20"
                  )}
                >
                  {part}
                </button>
              ) : (
                <React.Fragment key={i}>{part}</React.Fragment>
              )
            )}
          </p>

          <ol className="mt-6 space-y-2 text-sm">
            {example.quotes.map((quote, i) => (
              <li
                key={quote.id}
                className={clsx(
                  "grid grid-cols-[1.5rem_1fr] gap-2 rounded-lg px-3 py-2.5 transition-colors",
                  cited === i + 1 ? "bg-sayso/15" : "bg-ink/[0.04]"
                )}
              >
                <span className={cited === i + 1 ? "font-semibold text-sayso" : "text-muted"}>
                  {i + 1}
                </span>
                <span>
                  <q>{quote.text}</q>
                  <span className="mt-0.5 block text-muted">Response {quote.id}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Example data. Pick a question, then point at a citation to see the quote
        behind it.
      </figcaption>
    </figure>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section id="projects" ref={ref} className="scroll-mt-20 py-20 sm:py-28">
      <SectionHeading note="A product I design, build and run on my own, on a branch that's been open since Oct 2024.">
        Projects
      </SectionHeading>

      <article className="relative overflow-hidden rounded-3xl border border-rule bg-surface p-6 sm:p-10 lg:p-14">
        {/* Soft wash in the branch colour, anchored behind the demo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-sayso/20 blur-[90px]"
        />

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-16">
          <div className="max-w-[34rem]">
            <span className="inline-block rounded-md bg-sayso/15 px-2 py-0.5 font-mono text-sm font-semibold text-sayso">
              sayso
            </span>
            <h3 className="display mt-4 text-6xl font-extrabold leading-none sm:text-8xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-muted">{project.date}</p>
            <p className="mt-6 text-lg leading-relaxed">{project.summary}</p>

            <ul className="relative mt-8 space-y-4 pl-8">
              <span
                aria-hidden
                className="absolute bottom-2 left-[5px] top-2 w-[3px] rounded-full bg-sayso/35"
              />
              {project.description.map((item, index) => (
                <li key={index} className="relative leading-relaxed text-ink/85">
                  <span
                    aria-hidden
                    className="absolute -left-8 top-[0.4em] h-[13px] w-[13px] rounded-full border-[3px] border-sayso bg-surface"
                  />
                  <RichText text={item} />
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex flex-wrap gap-2 font-mono text-sm">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-md border border-rule px-2.5 py-1">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 font-medium">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sayso px-6 py-3 text-bg transition-transform hover:-translate-y-0.5"
              >
                Try Sayso
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-rule px-6 py-3 transition-colors hover:border-ink"
              >
                View source
              </a>
            </div>
          </div>

          <AskAiDemo />
        </div>
      </article>
    </section>
  );
}
