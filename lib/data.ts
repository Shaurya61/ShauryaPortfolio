// Rich text in descriptions: {old|new} renders as a struck-out before value
// followed by the after value, and **text** renders bold.

export const links = [
  { name: "Home", hash: "#home" },
  { name: "Work", hash: "#work" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

// Hero commit graph. Branch start and end months are real; commits are
// highlights spread evenly along their branch, not exact dates.
export type BranchKey = "main" | "basyo" | "redsling" | "sayso" | "zfunds";

export const branches = [
  { key: "main", lane: 0, start: "2020-12", end: null, label: "main", dates: "Dec 2020 – today" },
  { key: "basyo", lane: 1, start: "2024-04", end: "2024-06", label: "basyo", dates: "Apr – Jun 2024" },
  { key: "redsling", lane: 2, start: "2024-09", end: "2025-06", label: "redsling", dates: "Sep 2024 – Jun 2025" },
  { key: "sayso", lane: 3, start: "2024-10", end: null, label: "sayso", dates: "Oct 2024 – today" },
  { key: "zfunds", lane: 1, start: "2025-09", end: null, label: "zfunds", dates: "Sep 2025 – today" },
] as const;

export const commits: { branch: BranchKey; message: string; detail: string; at?: string }[] = [
  { branch: "main", at: "2020-12", message: "init: B.Tech in ECE at NSUT", detail: "Started Electronics and Communication Engineering at Netaji Subhas University of Technology, New Delhi." },
  { branch: "main", at: "2024-05", message: "release: graduated from NSUT", detail: "Finished the B.Tech while already shipping production code at Basyo." },
  { branch: "basyo", message: "feat: three-sided booking marketplace", detail: "One account can be an enthusiast, venue provider and instructor, so users upgrade in place." },
  { branch: "basyo", message: "release: MVP in 7 weeks, 100+ signups in week one", detail: "Built end to end and launched in under seven weeks." },
  { branch: "redsling", message: "feat(ci): parallel Docker exports, setup time down 80%", detail: "A Docker build pipeline that exports containers in parallel." },
  { branch: "redsling", message: "fix(payments): CORS proxy, support tickets down 90%", detail: "A proxy that resolved CORS failures in FatZebra payments." },
  { branch: "redsling", message: "perf(bundle): 13 MB → 5 MB with Terser", detail: "Restored performance on large client projects." },
  { branch: "redsling", message: "feat(scheduler): cron jobs for client scripts", detail: "Client scripts in the site builder run on custom schedules without manual triggers." },
  { branch: "sayso", message: "init: feedback forms that answer back", detail: "Started Sayso, feedback forms with an AI analyst built in." },
  { branch: "sayso", message: "feat(forms): 15 field types, themes, AI drafts", detail: "Describe a form in one line and AI drafts it." },
  { branch: "sayso", message: "feat(ai): RAG with hybrid pgvector search", detail: "Vector and full-text search over 10,000+ responses." },
  { branch: "sayso", message: "feat(ai): answers cite customer quotes", detail: "Every answer links to the exact responses behind it." },
  { branch: "zfunds", message: "feat(desk): portfolio reviews with failure alerts", detail: "Recurring reviews for advisors, with alerts for KYC, mandate and order failures." },
  { branch: "zfunds", message: "feat(orders): STP and SWP with daily reconciliation", detail: "BSE StAR MF orders, reconciled twice a day with investor notifications." },
  { branch: "zfunds", message: "feat(sites): website builder in 4 days, 40,000+ users", detail: "Built and released in four days, and cut its OpenAI image cost by 50%." },
  { branch: "zfunds", message: "perf(certs): 90s → 3s with in-memory templates", detail: "Caching preprocessed templates in memory, serving 15,000+ certificates." },
];

export const experiencesData = [
  {
    company: "ZFunds",
    branch: "zfunds",
    url: "https://zfunds.in/",
    role: "Software Development Engineer",
    location: "Gurugram",
    start: "2025-09",
    end: null,
    date: "Sep 2025 – Present",
    description: [
      "Built **Desk**, an advisor platform for recurring portfolio reviews with alerts for KYC, mandate and order failures, plus proposal tracking and WhatsApp notifications on FastAPI.",
      "Integrated **BSE StAR MF** APIs for STP and SWP orders, with a twice daily cron that reconciles every order with BSE and notifies investors.",
      "Built a website builder for financial advisors in **4 days**, released to **40,000+ users**, and cut its OpenAI image cost by **50%**.",
      "Cut certificate generation from {90s|3s} by caching preprocessed templates in memory, serving 15,000+ certificates.",
      "Built the backend for a portfolio proposal tool projecting SIP, STP and SWP returns in Node.js and Postgres for web and mobile.",
      "Migrated the banner carousel from a legacy Python service to Node.js, adding admin controls so staff manage banners without a deploy.",
    ],
  },
  {
    company: "redSling",
    branch: "redsling",
    url: "https://redsling.com/",
    role: "Software Developer",
    location: "Remote",
    start: "2024-09",
    end: "2025-06",
    date: "Sep 2024 – Jun 2025",
    description: [
      "Built a Docker build pipeline with parallel container exports, cutting developer setup time by **80%**.",
      "Automated image and license key generation, removing 40% of manual release steps.",
      "Built a proxy to resolve CORS failures in FatZebra payments, cutting payment support tickets by **90%**.",
      "Reduced bundle size from {13 MB|5 MB} with Terser, restoring performance on large client projects.",
      "Added a cron scheduler to the site builder so client scripts run on custom schedules without manual triggers.",
      "Triaged 10+ production incidents, cutting mean time to resolution by **50%**.",
    ],
  },
  {
    company: "Basyo",
    branch: "basyo",
    url: "https://basyo.online",
    role: "Software Engineer",
    location: "Remote",
    start: "2024-04",
    end: "2024-06",
    date: "Apr 2024 – Jun 2024",
    description: [
      "Built a three-sided booking marketplace end to end in under **7 weeks**, reaching **100+ registrations** in its first week.",
      "Designed a role model where one account can be an enthusiast, venue provider and instructor, so users upgrade in place instead of signing up again.",
      "Built the venue-to-class booking flow: an instructor prices a class and reserves a venue slot in one step, and the class opens for enthusiasts to book.",
      "Onboarded users through the **LINE** official account, so new users sign up in the app they already use.",
    ],
  },
] as const;

export const featuredProject = {
  title: "Sayso",
  summary:
    "Feedback forms with an AI analyst built in. Build a form or describe it in a sentence, share the link, then ask questions about the responses and get answers backed by the exact quotes they came from.",
  date: "Oct 2024 – Present",
  liveUrl: "https://aiform-olive.vercel.app/",
  sourceUrl: "https://github.com/Shaurya61/aiform",
  stack: ["Next.js", "PostgreSQL", "pgvector", "Gemini API"],
  description: [
    "Answers questions about form responses and cites the customer quotes behind each answer.",
    "**RAG** with hybrid vector and full-text search on **pgvector**, scaling to **10,000+ responses**.",
    "A form engine with **15 field types**, custom themes and AI form generation from a one-line prompt.",
  ],
} as const;

export const skillsData = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "PostgreSQL", "pgvector", "MongoDB", "DynamoDB"],
  },
  { group: "Frontend", items: ["React.js", "Next.js", "React Native", "Tailwind CSS"] },
  {
    group: "Tools",
    items: ["Docker", "AWS EC2", "Nginx", "Git", "OpenAI API", "Gemini API", "MSG91"],
  },
  {
    group: "Areas I've worked in",
    items: ["AI products and RAG", "Booking platforms", "Site builders", "Build and release pipelines", "Payments", "Fintech (mutual funds, BSE StAR MF)"],
  },
] as const;

export const education = {
  school: "Netaji Subhas University of Technology",
  degree: "B.Tech in Electronics and Communication Engineering",
  location: "New Delhi",
  date: "Dec 2020 – May 2024",
} as const;
