"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { quickActions } from "@/data/site";

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return quickActions;
    return quickActions.filter((item) => `${item.title} ${item.keywords}`.toLowerCase().includes(q));
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center bg-graphite/40 px-4 pt-24 backdrop-blur" onClick={onClose}>
      <div className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/40 bg-sand shadow-premium dark:border-white/10 dark:bg-[#12272e]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-petroleum/10 p-4 dark:border-white/10">
          <span className="text-xl">⌕</span>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar páginas, eventos, construção científica, equipe..."
            className="w-full bg-transparent text-base font-semibold text-petroleum outline-none placeholder:text-graphite/40 dark:text-sand dark:placeholder:text-sand/35"
          />
          <button onClick={onClose} className="command-kbd">ESC</button>
        </div>
        <div className="max-h-[430px] overflow-auto p-3 fancy-scrollbar">
          {results.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="group flex items-center justify-between rounded-2xl px-4 py-4 transition hover:bg-white/70 dark:hover:bg-white/10">
              <div>
                <div className="font-bold text-petroleum dark:text-sand">{item.title}</div>
                <div className="text-xs text-graphite/50 dark:text-sand/50">{item.keywords}</div>
              </div>
              <span className="text-gold transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
          {results.length === 0 && <div className="p-8 text-center text-sm text-graphite/60 dark:text-sand/60">Nenhum resultado encontrado.</div>}
        </div>
      </div>
    </div>
  );
}
