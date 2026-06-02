import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { academyTracks } from "@/data/site";
import { InterestQuiz } from "@/components/InterestQuiz";

export const metadata = { title: "Liga Acadêmica" };

export default function LeaguePage() {
  return (
    <>
      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container max-w-5xl">
          <div className="eyebrow">LANEV UnB</div>
          <h1 className="display-title mt-6">Liga Acadêmica de Nutrição do Estilo de Vida.</h1>
          <p className="body-lg mt-7 max-w-3xl">Uma comunidade acadêmica para formar estudantes, conectar pesquisadores, discutir evidências e desenvolver ferramentas para o futuro da nutrição baseada em estilo de vida.</p>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Missão da Liga" title="Ensino, pesquisa e extensão com linguagem científica, humana e aplicada.">
            A LANEV pode atuar como ponte entre graduação, pós-graduação, grupo de pesquisa e comunidade, criando uma cultura acadêmica em torno da Nutrição do Estilo de Vida.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Formação científica", "Comunidade acadêmica", "Extensão em saúde"].map((item, i) => (
              <article key={item} className="card">
                <div className="font-display text-6xl font-semibold text-gold">0{i + 1}</div>
                <h3 className="mt-4 font-display text-3xl font-semibold text-petroleum dark:text-sand">{item}</h3>
                <p className="mt-4 text-sm leading-7 text-graphite/65 dark:text-sand/65">Atividades, eventos e materiais para transformar evidência em aprendizado, prática e impacto social.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Programas" title="Trilhas que dão vida à Liga." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {academyTracks.map((track) => (
              <article key={track.title} className="card p-8">
                <div className="rounded-full bg-sage/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-petroleum dark:text-sand">{track.status}</div>
                <h3 className="mt-5 font-display text-4xl font-semibold text-petroleum dark:text-sand">{track.title}</h3>
                <p className="mt-4 text-sm leading-7 text-graphite/68 dark:text-sand/68">{track.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <InterestQuiz />
          <LeadForm />
        </div>
      </section>
    </>
  );
}
