import Link from "next/link";

export function CTA() {
  return (
    <section className="section bg-petroleum text-sand">
      <div className="premium-container">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Próximo passo</div>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">Entre na construção da Nutrição do Estilo de Vida.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-sand/70">Participe da Liga, acompanhe o grupo de pesquisa, colabore com a construção NutEV ou receba convites para eventos e materiais científicos.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contato" className="rounded-full bg-sand px-6 py-3 text-center text-sm font-bold text-petroleum transition hover:-translate-y-0.5">Quero participar</Link>
            <Link href="/framework-nutev" className="rounded-full border border-sand/20 px-6 py-3 text-center text-sm font-bold text-sand transition hover:-translate-y-0.5 hover:bg-white/10">Ver laboratório NutEV</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
