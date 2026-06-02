import { constructionPrinciples, discussionQuestions } from "@/data/site";
import { Reveal } from "./Reveal";

export function PropositionBoard() {
  return (
    <div className="space-y-12">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {constructionPrinciples.map((item, index) => (
          <Reveal key={item.title}>
            <article className="card h-full">
              <div className="mb-6 inline-flex rounded-full bg-gold/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                Princípio {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-3xl font-semibold text-petroleum dark:text-sand">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-graphite/68 dark:text-sand/68">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="rounded-[2.5rem] border border-petroleum/10 bg-white/75 p-6 shadow-premium backdrop-blur dark:border-white/10 dark:bg-white/5 lg:p-8">
        <div className="eyebrow">Agenda de discussão</div>
        <h3 className="mt-5 max-w-3xl font-display text-4xl font-semibold text-petroleum dark:text-sand md:text-5xl">
          Perguntas que o site deve abrir, não responder de forma definitiva.
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {discussionQuestions.map((item) => (
            <article key={item.title} className="rounded-[1.7rem] border border-petroleum/10 bg-sand/60 p-5 dark:border-white/10 dark:bg-white/5">
              <h4 className="font-display text-2xl font-semibold text-petroleum dark:text-sand">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-graphite/68 dark:text-sand/68">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
