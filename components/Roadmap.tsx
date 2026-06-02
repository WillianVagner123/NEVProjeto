import { roadmap } from "@/data/site";

export function Roadmap() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {roadmap.map((item) => (
        <article key={item.phase} className="card relative overflow-hidden">
          <div className="absolute right-4 top-4 font-display text-7xl font-bold text-petroleum/5 dark:text-white/5">{item.phase}</div>
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-petroleum font-bold text-white dark:bg-sand dark:text-petroleum">{item.phase}</div>
            <h3 className="mt-6 font-display text-3xl font-semibold leading-tight text-petroleum dark:text-sand">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-graphite/65 dark:text-sand/65">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
