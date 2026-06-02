"use client";

import { useMemo, useState } from "react";
import { libraryItems } from "@/data/site";

export function LibraryHub() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("Todos");
  const themes = ["Todos", ...Array.from(new Set(libraryItems.map((item) => item.theme)))];
  const visible = useMemo(() => {
    const q = query.toLowerCase();
    return libraryItems.filter((item) => {
      const matchesTheme = theme === "Todos" || item.theme === theme;
      const matchesQuery = `${item.title} ${item.type} ${item.summary} ${item.status}`.toLowerCase().includes(q);
      return matchesTheme && matchesQuery;
    });
  }, [query, theme]);

  return (
    <div>
      <div className="mb-8 grid gap-3 lg:grid-cols-[1fr_auto]">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por tema, tipo, status..." className="rounded-full border border-petroleum/10 bg-white/70 px-6 py-4 text-sm font-semibold text-petroleum outline-none shadow-soft placeholder:text-graphite/40 focus:border-gold dark:border-white/10 dark:bg-white/5 dark:text-sand" />
        <div className="flex flex-wrap gap-2">
          {themes.map((item) => <button key={item} onClick={() => setTheme(item)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${theme === item ? "bg-petroleum text-white dark:bg-sand dark:text-petroleum" : "border border-petroleum/10 bg-white/65 text-petroleum dark:border-white/10 dark:bg-white/5 dark:text-sand"}`}>{item}</button>)}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <article key={item.title} className="card flex min-h-[260px] flex-col">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-sage/15 px-3 py-1 text-xs font-bold text-petroleum dark:text-sand">{item.theme}</span>
              <span className="rounded-full border border-gold/30 px-3 py-1 text-xs font-bold text-gold">{item.status}</span>
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold leading-tight text-petroleum dark:text-sand">{item.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-graphite/68 dark:text-sand/68">{item.summary}</p>
            <div className="mt-6 flex items-center justify-between border-t border-petroleum/10 pt-4 dark:border-white/10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-graphite/45 dark:text-sand/45">{item.type}</span>
              <button className="text-sm font-bold text-petroleum dark:text-gold">Ver resumo →</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
