import { researchLines } from "@/data/site";

export function ResearchLines() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {researchLines.map((line) => (
        <article key={line.title} className="card p-8">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display text-4xl font-semibold text-petroleum dark:text-sand">{line.title}</h3>
            <div className="rounded-full bg-sand px-4 py-2 text-xs font-bold text-petroleum dark:bg-white/10 dark:text-sand">{line.researchers} pesquisadores</div>
          </div>
          <p className="mt-5 text-sm leading-7 text-graphite/70 dark:text-sand/70">{line.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {line.tags.map((tag) => <span key={tag} className="rounded-full border border-sage/40 bg-sage/10 px-3 py-1 text-xs font-bold text-petroleum dark:text-sand">{tag}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}
