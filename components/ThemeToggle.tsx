"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lanev-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const value = stored ? stored === "dark" : prefers;
    setDark(value);
    document.documentElement.classList.toggle("dark", value);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("lanev-theme", next ? "dark" : "light");
  }

  return (
    <button aria-label="Alternar tema" onClick={toggle} className="rounded-full border border-petroleum/10 bg-white/60 px-3 py-2 text-sm font-bold text-petroleum shadow-soft backdrop-blur transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-white/10 dark:text-sand">
      {dark ? "☾" : "☼"}
    </button>
  );
}
