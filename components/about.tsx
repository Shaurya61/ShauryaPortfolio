"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-6">
        I hold a degree in{" "}
        <span className="font-medium">Electronics &amp; Communication from NSUT</span>,
        but discovered my true passion in programming. I’ve worked with both
        traditional code and no-code tools, and have since{" "}
        <span className="font-medium">gained proficiency in full-stack web development</span>.{" "}
        <span className="italic">Problem-solving</span> is what drives me—I love
        that moment when everything clicks. My core stack is{" "}
        <span className="font-medium">
          React · Next.js · Node.js · Express · MongoDB
        </span>
        , and I’m also comfortable with TypeScript and Prisma.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, you’ll find me
        gaming, watching anime, or exploring new neighborhoods on foot. I’m
        always eager to learn—whether it’s a new framework or a fresh
        perspective from someone halfway across the globe.
      </p>
    </motion.section>
  );
}
