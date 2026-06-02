"use client";

import { useState } from "react";
import { frameworkLayers } from "@/data/site";

export function FrameworkExplorer() {
  const [active, setActive] = useState(0);
  const item = frameworkLayers[active];
  return (
    <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
      <div className="space-y-3">
        {frameworkLayers.map((layer, index) => (
          <button
            key={layer.title}
            onClick={() => setActive(index)}
            className={`w-full rounded-[1.5rem] border p-5 text-left transition duration-300 ${index === active ? "border-gold bg-petroleum text-white shadow-premium" : "border-petroleum/10 bg-white/70 text-petroleum hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-sand"}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs font-bold uppercase tracking-[0.22em] opacity-70">{layer.label}</div>
              <span className="rounded-full border border-current/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] opacity-80">{layer.status}</span>
            </div>
            <div className="mt-2 font-display text-3xl font-semibold">{layer.title}</div>
          </button>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-petroleum/10 bg-white p-8 shadow-premium dark:border-white/10 dark:bg-white/5 lg:p-10">
        <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-sage/20 blur-3xl" />
        <div className="relative">
          <div className="eyebrow">{item.label} · {item.status}</div>
          <h3 className="mt-6 font-display text-5xl font-semibold text-petroleum dark:text-sand">{item.title}</h3>
          <div className="mt-6 rounded-3xl border border-gold/20 bg-gold/8 p-5 dark:bg-gold/10">
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Pergunta orientadora</div>
            <p className="mt-2 text-base font-semibold leading-7 text-petroleum dark:text-sand">{item.question}</p>
          </div>
          <p className="body-lg mt-6">{item.description}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {item.bullets.map((bullet) => (
              <div key={bullet} className="rounded-2xl border border-petroleum/10 bg-sand/60 p-4 text-sm font-bold text-petroleum dark:border-white/10 dark:bg-white/5 dark:text-sand">{bullet}</div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl bg-petroleum p-6 text-sand">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-gold">O que ainda não está definido</div>
              <p className="mt-2 text-sm leading-7 text-sand/82">{item.notDefined}</p>
            </div>
            <div className="rounded-3xl border border-petroleum/10 bg-sand/70 p-6 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Próximo passo científico</div>
              <p className="mt-2 text-sm leading-7 text-graphite/75 dark:text-sand/75">{item.nextStep}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
