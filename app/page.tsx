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
          <SectionHeading eyebrow="Plataforma" title="Muito além de uma landing page: um ecossistema científico em construção.">
            A LANEV propõe organizar pesquisa, ensino, extensão e inovação em torno da construção científica do NutEV, conectando universidade, prática clínica, formação profissional e saúde pública.
          </SectionHeading>
          <div className="mt-12"><FeatureGrid /></div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Símbolo interativo" title="O Círculo da Vida como mapa conceitual da marca.">
            Clique nos elementos para explorar a lógica simbólica que inspira a discussão: alimentação, comportamento, saúde, integração e trajetória de longevidade saudável.
          </SectionHeading>
          <div className="mt-12"><CircleOfLife /></div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Laboratório NutEV" title="Proposições em debate: diretrizes, protocolo, pirâmide, índice e aplicações clínicas.">
            A experiência abaixo não apresenta uma pirâmide pronta. Ela mostra perguntas, limites e próximos passos para construir cientificamente o NutEV.
          </SectionHeading>
          <div className="mt-12"><FrameworkExplorer /></div>
        </div>
      </section>

      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
          <Reveal>
            <div className="sticky top-28">
              <div className="eyebrow">DGP/CNPq</div>
              <h2 className="section-title mt-5">Grupo de Pesquisa em Nutrição do Estilo de Vida.</h2>
              <p className="body-lg mt-6">O texto de repercussões foi convertido em narrativa institucional, mas mantendo clareza: o grupo pretende estruturar e validar proposições, sem divulgar ferramentas como se já estivessem finalizadas.</p>
              <Link href="/grupo-de-pesquisa" className="btn-primary mt-8">Abrir página do grupo</Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[2.5rem] border border-petroleum/10 bg-white/78 p-8 shadow-premium backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-sm leading-8 text-graphite/72 dark:text-sand/72">{repercussions}</p>
              <div className="mt-8"><ResearchLines /></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Roadmap" title="Do grupo e da Liga para uma plataforma de referência.">
            Uma trajetória planejada para sair da organização inicial e chegar a produção científica, eventos, ferramentas e parcerias.
          </SectionHeading>
          <div className="mt-12"><Roadmap /></div>
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
          <SectionHeading eyebrow="Perguntas frequentes" title="Clareza institucional desde o início." />
          <FAQ />
        </div>
      </section>
      <CTA />
    </>
  );
}
