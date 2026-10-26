import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-page px-4 pb-10 sm:px-8">
      <p className="border-t border-rule pt-6 text-sm text-muted">
        &copy; {new Date().getFullYear()} Shaurya Nayyar
      </p>
    </footer>
  );
}
