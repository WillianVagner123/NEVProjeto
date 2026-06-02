const steps = [
  {
    title: "1. Curadoria de evidências",
    text: "Reunir guias alimentares, consensos, documentos de sociedades científicas e estudos relevantes para formar a matriz inicial.",
  },
  {
    title: "2. Extração de domínios",
    text: "Identificar temas recorrentes, recomendações convergentes, lacunas e pontos controversos em nutrição, comportamento e saúde metabólica.",
  },
  {
    title: "3. Formulação de proposições",
    text: "Transformar evidências em hipóteses de diretrizes, camadas do protocolo, critérios da pirâmide e itens do índice de adesão.",
  },
  {
    title: "4. Debate acadêmico",
    text: "Usar a Liga como ambiente de seminários, clubes do artigo e oficinas para discutir clareza, riscos, aplicabilidade e limites das proposições.",
  },
  {
    title: "5. Consenso e validação",
    text: "Submeter versões amadurecidas a especialistas, estudos piloto, avaliação de aplicabilidade e validação científica progressiva.",
  },
];

export function ConstructionTimeline() {
  return (
    <div className="relative space-y-4">
      <div className="absolute bottom-4 left-5 top-4 hidden w-px bg-petroleum/15 dark:bg-white/10 md:block" />
      {steps.map((step) => (
        <article key={step.title} className="relative rounded-[1.8rem] border border-petroleum/10 bg-white/70 p-6 pl-8 shadow-soft dark:border-white/10 dark:bg-white/5 md:ml-12">
          <div className="absolute -left-[3.75rem] top-6 hidden h-10 w-10 rounded-full border border-gold/30 bg-petroleum text-center text-sm font-bold leading-10 text-sand md:block">✦</div>
          <h3 className="font-display text-3xl font-semibold text-petroleum dark:text-sand">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-graphite/68 dark:text-sand/68">{step.text}</p>
        </article>
      ))}
    </div>
  );
}
