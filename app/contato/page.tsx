import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Contato" };

export default function ContactPage() {
  return (
    <>
      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container max-w-5xl">
          <div className="eyebrow">Contato e participação</div>
          <h1 className="display-title mt-6">Vamos construir a LANEV.</h1>
          <p className="body-lg mt-7 max-w-3xl">Use esta página para captar interessados na Liga, pesquisadores, parceiros institucionais, participantes de eventos e profissionais que querem acompanhar o NutEV.</p>
        </div>
      </section>
      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Formulários" title="Captação pronta para integrar com backend." />
            <div className="mt-8 rounded-[2rem] border border-petroleum/10 bg-sand/60 p-6 text-sm leading-7 text-graphite/70 shadow-soft dark:border-white/10 dark:bg-white/5 dark:text-sand/70">
              Em produção, conecte o formulário a Google Sheets, Airtable, Supabase, Formspree, Brevo, HubSpot ou Cloud Run. A versão atual salva localmente e exporta CSV para testes.
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
