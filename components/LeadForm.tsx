"use client";

import { FormEvent, useState } from "react";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/wvagners@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error("Falha no envio");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="inscricao" className={`rounded-[2.5rem] border border-white/15 bg-petroleum p-6 text-sand shadow-premium ${compact ? "" : "lg:p-10"}`}>
      <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Contato</div>
      <h3 className="mt-3 font-display text-4xl font-semibold">Fale com o NEV</h3>
      <p className="mt-3 text-sm leading-7 text-sand/70">Envie seu interesse em pesquisa, Liga Acadêmica, eventos, parcerias ou acompanhamento das proposições NutEV.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
        <input type="hidden" name="_subject" value="Novo contato pelo site NEV" />
        <input type="hidden" name="_captcha" value="false" />
        <input required name="name" placeholder="Nome completo" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none focus:ring-2 focus:ring-gold" />
        <input required type="email" name="email" placeholder="E-mail" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none focus:ring-2 focus:ring-gold" />
        <div className="grid gap-3 sm:grid-cols-2">
          <select required name="profile" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none focus:ring-2 focus:ring-gold">
            <option value="">Perfil</option>
            <option>Estudante</option>
            <option>Nutricionista</option>
            <option>Profissional de saúde</option>
            <option>Pesquisador(a)</option>
            <option>Instituição parceira</option>
          </select>
          <select required name="interest" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none focus:ring-2 focus:ring-gold">
            <option value="">Interesse</option>
            <option>Participar da Liga</option>
            <option>Eventos</option>
            <option>Pesquisa</option>
            <option>Laboratório NutEV</option>
            <option>Parceria</option>
          </select>
        </div>
        <textarea name="message" rows={4} placeholder="Mensagem ou contexto do contato" className="rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm font-semibold text-petroleum outline-none focus:ring-2 focus:ring-gold" />
        <label className="flex gap-3 text-xs leading-5 text-sand/68"><input required type="checkbox" className="mt-1" /> Concordo em enviar meus dados para contato sobre o NEV e entendo que posso solicitar remoção a qualquer momento.</label>
        <button disabled={status === "sending"} className="mt-2 rounded-full bg-sand px-6 py-3 text-sm font-bold text-petroleum transition hover:-translate-y-0.5 disabled:opacity-60">
          {status === "sending" ? "Enviando..." : "Enviar contato"}
        </button>
      </form>

      {status === "sent" && <div className="mt-4 rounded-2xl border border-sage/40 bg-white/10 p-4 text-sm">Mensagem enviada. Obrigado pelo contato.</div>}
      {status === "error" && <div className="mt-4 rounded-2xl border border-gold/40 bg-white/10 p-4 text-sm">Não foi possível enviar agora. Escreva para wvagners@gmail.com.</div>}
    </div>
  );
}
