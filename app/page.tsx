import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CircleOfLife } from "@/components/CircleOfLife";
import { FrameworkExplorer } from "@/components/FrameworkExplorer";
import { ResearchLines } from "@/components/ResearchLines";
import { Roadmap } from "@/components/Roadmap";
import { InterestQuiz } from "@/components/InterestQuiz";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { repercussions } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Ecossistema NEV" title="Uma plataforma para pesquisa, formacao, debate e construcao cientifica.">
            O NEV organiza frentes complementares: Grupo de Pesquisa, LANEV, Laboratorio NutEV, Biblioteca, eventos e equipe. Cada area tem funcao propria dentro da Nutricao do Estilo de Vida.
          </SectionHeading>
          <div className="mt-10 sm:mt-12"><FeatureGrid /></div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Simbolo interativo" title="O Circulo da Vida como mapa conceitual da marca NEV.">
            Explore a logica simbolica que inspira a discussao: alimentacao, comportamento, saude, integracao e trajetoria de longevidade saudavel.
          </SectionHeading>
          <div className="mt-10 sm:mt-12"><CircleOfLife /></div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Laboratorio NutEV" title="Proposicoes em debate: diretrizes, protocolo, representacao visual, indice e aplicacoes clinicas.">
            Esta area nao apresenta uma piramide pronta. Ela organiza perguntas, limites e proximos passos para construir cientificamente o NutEV.
          </SectionHeading>
          <div className="mt-10 sm:mt-12"><FrameworkExplorer /></div>
        </div>
      </section>

      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow">Frente cientifica</div>
              <h2 className="section-title mt-5">Grupo de Pesquisa em Nutricao do Estilo de Vida.</h2>
              <p className="body-lg mt-6">Dentro do ecossistema NEV, o grupo sustenta a agenda de pesquisa, linhas cientificas e desenvolvimento das proposicoes NutEV.</p>
              <Link href="/grupo-de-pesquisa" className="btn-primary mt-8">Abrir pagina do grupo</Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[2rem] border border-petroleum/10 bg-white/80 p-5 shadow-premium backdrop-blur sm:rounded-[2.5rem] sm:p-8 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm leading-8 text-graphite/72 dark:text-sand/72">{repercussions}</p>
              <div className="mt-8"><ResearchLines /></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Roadmap" title="Da organizacao inicial a uma plataforma de referencia em Nutricao do Estilo de Vida.">
            Uma trajetoria planejada para sair da curadoria cientifica e chegar a producao academica, eventos, ferramentas testaveis e parcerias.
          </SectionHeading>
          <div className="mt-10 sm:mt-12"><Roadmap /></div>
        </div>
      </section>

      <section className="section bg-sand/75 dark:bg-[#12272e]">
        <div className="premium-container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <InterestQuiz />
          <LeadForm />
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading eyebrow="Perguntas frequentes" title="Clareza institucional desde o inicio." />
          <FAQ />
        </div>
      </section>
      <CTA />
    </>
  );
}
