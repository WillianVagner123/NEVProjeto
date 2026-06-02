import { researchLines } from "@/data/site";

export function ResearchLines() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {researchLines.map((line) => (
        <article key={line.title} className="card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="font-display text-3xl font-semibold leading-tight text-petroleum sm:text-4xl dark:text-sand">{line.title}</h3>
            <div className="w-fit rounded-full bg-sand px-4 py-2 text-xs font-bold text-petroleum dark:bg-white/10 dark:text-sand">{line.researchers} pesquisadores</div>
          </div>
          <p className="mt-5 text-sm leading-7 text-graphite/70 dark:text-sand/70">{line.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {line.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-sage/40 bg-sage/10 px-3 py-1 text-xs font-bold text-petroleum dark:text-sand">{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
