import { EventTimeline } from "@/components/EventTimeline";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Eventos" };

export default function EventsPage() {
  return (
    <>
      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container max-w-5xl">
          <div className="eyebrow">Agenda</div>
          <h1 className="display-title mt-6">Eventos, clubes e oficinas.</h1>
          <p className="body-lg mt-7 max-w-3xl">Uma agenda inicial para dar vida à Liga e transformar a página em um ponto de encontro acadêmico.</p>
        </div>
      </section>
      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <SectionHeading eyebrow="Calendário" title="Próximas atividades planejadas." />
            <div className="mt-12"><EventTimeline /></div>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start"><LeadForm compact /></div>
        </div>
      </section>
    </>
  );
}
