export function FeatureGrid() {
  const items = [
    ["Pesquisa", "Estudos observacionais e intervencionais em consumo alimentar, composição corporal e metabolismo energético."],
    ["Ensino", "Clube do artigo, aulas, oficinas e formação científica em Nutrição do Estilo de Vida."],
    ["Extensão", "Educação alimentar, prevenção de DCNTs e conexão entre universidade e comunidade."],
    ["Construção NutEV", "Debate estruturado sobre diretrizes, protocolo, pirâmide, índice de adesão e aplicações clínicas como proposições a validar."],
  ];
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map(([title, description]) => (
        <article key={title} className="card">
          <div className="mb-8 h-12 w-12 rounded-2xl bg-petroleum/10 p-3 text-center text-xl text-petroleum dark:bg-white/10 dark:text-sand">✦</div>
          <h3 className="font-display text-3xl font-semibold text-petroleum dark:text-sand">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-graphite/65 dark:text-sand/65">{description}</p>
        </article>
      ))}
    </div>
  );
}
