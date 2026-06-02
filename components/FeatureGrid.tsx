export function FeatureGrid() {
  const items = [
    ["Pesquisa", "Agenda cientifica, linhas de pesquisa, DGP/CNPq, estudos observacionais e intervencionais."],
    ["Formacao", "Clube do artigo, aulas, oficinas, eventos e trilhas para estudantes e profissionais."],
    ["Laboratorio NutEV", "Espaco para discutir diretrizes, protocolo, representacao visual e indice como proposicoes."],
    ["Biblioteca", "Curadoria de guias, diretrizes, temas clinicos e materiais para sustentar a construcao."],
  ];
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map(([title, description], index) => (
        <article key={title} className="card group min-h-[260px] cursor-default p-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-petroleum/10 text-xl text-petroleum transition duration-300 group-hover:scale-110 group-hover:bg-petroleum group-hover:text-white dark:bg-white/10 dark:text-sand dark:group-hover:bg-sand dark:group-hover:text-petroleum">✦</div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-gold">0{index + 1}</div>
          </div>
          <h3 className="font-display text-3xl font-semibold text-petroleum transition duration-300 group-hover:translate-x-1 dark:text-sand">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-graphite/65 dark:text-sand/65">{description}</p>
          <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-sand dark:bg-white/10">
            <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-petroleum via-sage to-gold transition-all duration-500 group-hover:w-full" />
          </div>
        </article>
      ))}
    </div>
  );
}
