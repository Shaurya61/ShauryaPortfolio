"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { education, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="scroll-mt-20 py-20 sm:py-28">
      <SectionHeading>Skills</SectionHeading>

      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill) => (
          <div key={skill.group}>
            <dt className="border-b border-rule pb-2 font-semibold">{skill.group}</dt>
            <dd>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-rule bg-surface px-2.5 py-1 text-[0.95rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}

        <div>
          <dt className="border-b border-rule pb-2 font-semibold">Education</dt>
          <dd className="mt-3">
            <p>{education.degree}</p>
            <p className="mt-1 text-muted">
              {education.school}, {education.date}
            </p>
          </dd>
        </div>
      </dl>
    </section>
  );
}
