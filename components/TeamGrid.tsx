"use client";

import { useMemo, useState } from "react";
import { team } from "@/data/site";

export function TeamGrid() {
  const [filter, setFilter] = useState("Todos");
  const filters = ["Todos", "Pesquisador", "Pesquisadora", "Estudante de doutorado", "GLP-1", "Nutrição do Estilo de Vida"];
  const visible = useMemo(() => {
    if (filter === "Todos") return team;
    return team.filter((member) => member.role === filter || member.line.includes(filter) || member.topics.some((t) => t.includes(filter)));
  }, [filter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${filter === item ? "bg-petroleum text-white dark:bg-sand dark:text-petroleum" : "border border-petroleum/10 bg-white/65 text-petroleum dark:border-white/10 dark:bg-white/5 dark:text-sand"}`}>{item}</button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((member) => (
          <article key={member.name} className="card group overflow-hidden p-0">
            <div className="h-28 bg-gradient-to-br from-petroleum via-sage to-gold opacity-90" />
            <div className="p-6">
              <div className="-mt-16 mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border-4 border-white bg-sand font-display text-3xl font-bold text-petroleum shadow-soft dark:border-[#12272e]">
                {member.name.split(" ").slice(0,2).map((x) => x[0]).join("")}
              </div>
              <h3 className="font-display text-3xl font-semibold text-petroleum dark:text-sand">{member.name}</h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-gold">{member.role} · {member.degree}</p>
              <p className="mt-4 text-sm leading-7 text-graphite/65 dark:text-sand/65">Linha: {member.line}. Inclusão: {member.date}.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {member.topics.map((topic) => <span key={topic} className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-petroleum dark:bg-white/10 dark:text-sand">{topic}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
