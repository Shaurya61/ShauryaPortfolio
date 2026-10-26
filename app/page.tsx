import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  // Computed at build time and passed down so server and client agree
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  return (
    <main className="mx-auto max-w-page px-4 sm:px-8">
      <Intro today={today} />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
