import { events } from "@/data/site";

export function EventTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-sage to-petroleum md:block" />
      <div className="space-y-5">
        {events.map((event) => (
          <article key={event.title} className="relative grid gap-4 rounded-[2rem] border border-petroleum/10 bg-white/72 p-6 shadow-soft dark:border-white/10 dark:bg-white/5 md:ml-12 md:grid-cols-[160px_1fr_auto]">
            <div className="absolute -left-[3.2rem] top-8 hidden h-8 w-8 rounded-full border-4 border-sand bg-gold shadow-soft dark:border-[#0f1f25] md:block" />
            <div>
              <div className="font-display text-4xl font-semibold text-petroleum dark:text-sand">{event.date}</div>
              <div className="mt-2 rounded-full bg-sand px-3 py-1 text-xs font-bold text-petroleum dark:bg-white/10 dark:text-sand">{event.format}</div>
            </div>
            <div>
              <h3 className="font-display text-3xl font-semibold text-petroleum dark:text-sand">{event.title}</h3>
              <p className="mt-3 text-sm leading-7 text-graphite/68 dark:text-sand/68">{event.description}</p>
            </div>
            <a href="/contato" className="btn-secondary self-center">Inscrever</a>
          </article>
        ))}
      </div>
    </div>
  );
}
