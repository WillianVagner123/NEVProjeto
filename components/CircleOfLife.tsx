"use client";

import Image from "next/image";
import { useState } from "react";
import { circleItems } from "@/data/site";

export function CircleOfLife() {
  const [active, setActive] = useState(circleItems[0]);
  const positions = [
    "left-[45%] top-[0%]",
    "right-[2%] top-[30%]",
    "right-[16%] bottom-[4%]",
    "left-[12%] bottom-[7%]",
    "left-[2%] top-[30%]",
  ];
  const progress = ((circleItems.findIndex((i) => i.key === active.key) + 1) / circleItems.length) * 100;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-10">
      <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[520px]">
        <div className="absolute inset-0 rounded-full border border-gold/30 bg-white/60 shadow-premium dark:border-white/10 dark:bg-white/5" />
        <div className="absolute inset-[15%] overflow-hidden rounded-full bg-petroleum shadow-soft">
          <Image src="/brand/nev-symbol.png" alt="Circulo da Vida" fill className="object-cover opacity-95" />
        </div>
        {circleItems.map((item, index) => (
          <button
            key={item.key}
            onClick={() => setActive(item)}
            className={`absolute ${positions[index]} hidden h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full border p-3 text-center text-[11px] font-bold uppercase tracking-[0.12em] shadow-soft transition duration-300 hover:scale-105 sm:flex ${active.key === item.key ? "border-gold bg-petroleum text-white" : "border-petroleum/10 bg-white/90 text-petroleum dark:border-white/10 dark:bg-[#12272e]/90 dark:text-sand"}`}
          >
            {item.subtitle}
          </button>
        ))}
      </div>

      <div className="order-first grid grid-cols-2 gap-2 sm:hidden">
        {circleItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item)}
            className={`rounded-2xl border px-3 py-3 text-xs font-bold uppercase tracking-[0.12em] transition ${active.key === item.key ? "border-gold bg-petroleum text-white" : "border-petroleum/10 bg-white/80 text-petroleum dark:border-white/10 dark:bg-white/5 dark:text-sand"}`}
          >
            {item.subtitle}
          </button>
        ))}
      </div>

      <div className="card p-6 lg:p-10">
        <div className="eyebrow">Circulo da Vida</div>
        <h3 className="mt-5 font-display text-4xl font-semibold text-petroleum sm:text-5xl dark:text-sand">{active.title}</h3>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-gold">{active.subtitle}</p>
        <p className="body-lg mt-6">{active.description}</p>
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-sand dark:bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-petroleum via-sage to-gold transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
