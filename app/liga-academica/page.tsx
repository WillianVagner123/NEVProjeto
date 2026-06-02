import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { academyTracks } from "@/data/site";
import { InterestQuiz } from "@/components/InterestQuiz";

export const metadata = { title: "LANEV" };

export default function LeaguePage() {
  return (
    <>
      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container max-w-5xl">
          <div className="eyebrow">Frente academica do NEV</div>
          <h1 className="display-title mt-6">LANEV: Liga Academica de Nutricao do Estilo de Vida.</h1>
          <p className="body-lg mt-7 max-w-3xl">A LANEV e uma area dentro do ecossistema NEV para formar estudantes, conectar pesquisadores, discutir evidencias e apoiar a construcao cientifica das proposicoes NutEV.</p>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Missao da Liga" title="Ensino, pesquisa e extensao com linguagem cientifica, humana e aplicada.">
            A Liga nao substitui o Grupo de Pesquisa nem representa todo o NEV. Ela funciona como frente academica de formacao, eventos, clube do artigo, oficinas e extensao.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3 sm:mt-12">
            {["Formacao cientifica", "Comunidade academica", "Extensao em saude"].map((item, i) => (
              <article key={item} className="card">
                <div className="font-display text-5xl font-semibold text-gold sm:text-6xl">0{i + 1}</div>
                <h3 className="mt-4 font-display text-3xl font-semibold text-petroleum dark:text-sand">{item}</h3>
                <p className="mt-4 text-sm leading-7 text-graphite/65 dark:text-sand/65">Atividades, eventos e materiais para transformar evidencia em aprendizado, pratica e impacto social.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Programas" title="Trilhas que dao vida a frente academica." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-12">
            {academyTracks.map((track) => (
              <article key={track.title} className="card p-6 sm:p-8">
                <div className="w-fit rounded-full bg-sage/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-petroleum dark:text-sand">{track.status}</div>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-petroleum sm:text-4xl dark:text-sand">{track.title}</h3>
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
