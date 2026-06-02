"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => (
        <div key={faq.q} className="rounded-[1.5rem] border border-petroleum/10 bg-white/72 shadow-soft dark:border-white/10 dark:bg-white/5">
          <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-petroleum dark:text-sand">
            {faq.q}<span className="text-gold">{open === index ? "−" : "+"}</span>
          </button>
          {open === index && <p className="px-5 pb-5 text-sm leading-7 text-graphite/70 dark:text-sand/70">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
