import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer @ redSling",
    location: "Remote",
    date: "Sept 2024 – Present",
    description: [
      "Architected a Docker-build pipeline reducing developer setup time by 80% and enabling parallel container exports.",
      "Optimized page payloads from 13 MB to 5 MB, restoring performance on large client projects.",
      "Delivered a Grapes.JS/Blockly bulk-email workflow capable of batching 1,000 emails per batch.",
      "Triaged and resolved 10+ production incidents, cutting Mean Time to Recovery (MTTR) by 50%."
    ],
    icon: React.createElement(FaReact), 
  },
  {
    title: "Software Engineer @ Basyo",
    location: "Remote",
    date: "Apr 2024 – Jun 2024",
    description: [
      "Launched a Minimum Viable Product (MVP) delivering the project under 7 weeks.",
      "Spearheaded product development for MVP, defining core user flows and UI/UX, resulting in 100+ user registrations in the first week.",
      "Maintained a 95% client satisfaction rate through regular meetings to gather requirements and provide updates."
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Full Stack Web Development Project Intern @ NullClass",
    location: "Remote",
    date: "Jun 2023 – Jul 2023",
    description: [
      "Launched a chatbot for coding support, automating 80% of user queries and boosting support efficiency.",
      "Established and integrated subscription plans, allowing users to select and manage billing options seamlessly.",
      "Integrated Stripe for secure payment processing, ensuring PCI compliance and robust transaction management."
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Netaji Subhas University of Technology",
    location: "New Delhi",
    date: "Dec 2020 – May 2024",
    description: "Graduated with a Bachelor of Technology in Electronics and Communication Engineering.",
    icon: React.createElement(LuGraduationCap), 
  },
] as const;

export const projectsData = [
  {
    title: "AI Forms",
    description:
      "AI-driven form builder (Next.js, RAG & Gemini API) that generates detailed summaries from a single prompt. Secure Auth.js & shadcn/ui; CSV export coming soon.",
    tags: ["Next.js", "Auth.js", "shadcn/ui", "Gemini API", "RAG"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Connectify",
    description:
      "Launched a real-time social app (Next.js, Prisma & MongoDB) with Pusher-powered chat and Cloudinary image uploads.",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB", "Pusher"],
    imageUrl: wordanalyticsImg,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Data Structure & Algorithms",
  "System Design"
] as const;
