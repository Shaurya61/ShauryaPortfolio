"use client";

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { BsMoon, BsSun } from "react-icons/bs";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  const goTo = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header className="sticky top-0 z-50 border-b border-rule/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-4 sm:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2.5 font-bold"
          onClick={() => goTo("Home")}
        >
          <span
            aria-hidden
            className="h-3.5 w-3.5 rounded-full border-[3px] border-zfunds"
          />
          <span className="sm:hidden">SN</span>
          <span className="hidden sm:inline">Shaurya Nayyar</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-3">
          <ul className="flex items-center text-[0.9rem] font-medium">
            {links
              .filter((link) => link.name !== "Home")
              .map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    aria-current={activeSection === link.name ? "true" : undefined}
                    className={clsx(
                      "block px-2 py-2 underline-offset-[6px] transition-colors hover:text-ink sm:px-3",
                      activeSection === link.name
                        ? "text-ink underline decoration-sayso decoration-2"
                        : "text-muted"
                    )}
                    onClick={() => goTo(link.name)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/10 hover:text-ink"
          >
            {theme === "light" ? <BsMoon /> : <BsSun />}
          </button>
        </nav>
      </div>
    </header>
  );
}
