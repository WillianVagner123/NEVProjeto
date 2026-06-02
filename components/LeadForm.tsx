"use client";

import { FormEvent, useState } from "react";

type Lead = { name: string; email: string; profile: string; interest: string; createdAt: string };

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [count, setCount] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lead: Lead = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      profile: String(form.get("profile") || ""),
      interest: String(form.get("interest") || ""),
      createdAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("lanev-leads") || "[]") as Lead[];
    const next = [lead, ...existing];
    localStorage.setItem("lanev-leads", JSON.stringify(next));
    setCount(next.length);
    setSent(true);
    e.currentTarget.reset();
  }

  function exportCsv() {
    const leads = JSON.parse(localStorage.getItem("lanev-leads") || "[]") as Lead[];
    const header = ["nome", "email", "perfil", "interesse", "criado_em"];
    const rows = leads.map((lead) => [lead.name, lead.email, lead.profile, lead.interest, lead.createdAt].map((v) => `"${String(v).replaceAll('"', '""')}"`).join(","));
    const blob = new Blob([[header.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lanev-interessados.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div id="inscricao" className={`rounded-[2.5rem] border border-white/15 bg-petroleum p-6 text-sand shadow-premium ${compact ? "" : "lg:p-10"}`}>
      <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Participar</div>
      <h3 className="mt-3 font-display text-4xl font-semibold">Entre na comunidade LANEV</h3>
      <p className="mt-3 text-sm leading-7 text-sand/70">Demonstração local: os dados ficam salvos no navegador. Em produção, conecte este formulário a Google Forms, Sheets, Supabase, Formspree ou Cloud Run.</p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
        <input required name="name" placeholder="Nome completo" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none" />
        <input required type="email" name="email" placeholder="E-mail" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none" />
        <div className="grid gap-3 sm:grid-cols-2">
          <select required name="profile" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none">
            <option value="">Perfil</option>
            <option>Estudante</option>
            <option>Nutricionista</option>
            <option>Profissional de saúde</option>
            <option>Pesquisador(a)</option>
            <option>Instituição parceira</option>
          </select>
          <select required name="interest" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none">
            <option value="">Interesse</option>
            <option>Participar da Liga</option>
            <option>Eventos</option>
            <option>Pesquisa</option>
            <option>Laboratório NutEV</option>
            <option>Parceria</option>
          </select>
        </div>
        <label className="flex gap-3 text-xs leading-5 text-sand/68"><input required type="checkbox" className="mt-1" /> Concordo em receber comunicações sobre a LANEV/NEV e entendo que posso solicitar remoção a qualquer momento.</label>
        <button className="mt-2 rounded-full bg-sand px-6 py-3 text-sm font-bold text-petroleum transition hover:-translate-y-0.5">Enviar interesse</button>
      </form>
      {sent && <div className="mt-4 rounded-2xl border border-sage/40 bg-white/10 p-4 text-sm">Inscrição registrada neste navegador. Total local: {count}.</div>}
      <button type="button" onClick={exportCsv} className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold hover:text-white">Exportar CSV local</button>
    </div>
  );
}
