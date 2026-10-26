"use client";

import React from "react";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import CommitGraph from "./commit-graph";

export default function Intro({ today }: { today: string }) {
  const { ref } = useSectionInView("Home");

  return (
    <section ref={ref} id="home" className="scroll-mt-20 pb-20 pt-14 sm:pb-28 sm:pt-20">
      <h1 className="display text-[clamp(3rem,10.5vw,8.75rem)] font-extrabold leading-[0.88]">
        Shaurya
        <br />
        <span className="ml-[0.6em] inline-block">Nayyar</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
        <p className="max-w-[38rem] text-lg leading-relaxed text-muted sm:text-xl">
          <span className="font-semibold text-ink">Full-stack engineer in New Delhi.</span>{" "}
          I build products end to end, from APIs and build pipelines to fast
          frontends and AI features. Below is the whole history, as a commit
          graph.
        </p>

        <div className="flex flex-wrap items-center gap-3 font-medium">
          <a
            href="mailto:shauryanayyar.dev@gmail.com"
            className="rounded-full bg-ink px-6 py-3 text-bg transition-transform hover:-translate-y-0.5"
          >
            Email me
          </a>
          <a
            href="/Shaurya-Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-rule bg-surface px-6 py-3 transition-colors hover:border-ink"
          >
            Resume <HiDownload aria-hidden />
          </a>
          <a
            href="https://github.com/Shaurya61"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-3 text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shaurya8555/"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-3 text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-14 sm:mt-16">
        <CommitGraph today={today} />
      </div>
    </section>
  );
}
