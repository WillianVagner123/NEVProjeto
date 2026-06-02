import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ResearchLines } from "@/components/ResearchLines";
import { TeamGrid } from "@/components/TeamGrid";
import { Roadmap } from "@/components/Roadmap";
import { repercussions, site } from "@/data/site";

export const metadata = { title: "Grupo de Pesquisa" };

export default function ResearchGroupPage() {
  return (
    <>
      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <div className="eyebrow">Frente cientifica do NEV</div>
            <h1 className="display-title mt-6">Grupo de Pesquisa em Nutricao do Estilo de Vida.</h1>
            <p className="body-lg mt-7 max-w-3xl">O grupo e uma das frentes do ecossistema NEV. Ele sustenta a agenda cientifica sobre consumo alimentar, obesidade, GLP-1, bariatrica, composicao corporal, metabolismo energetico e construcao das proposicoes NutEV.</p>
          </div>
          <div className="card">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Espelho DGP/CNPq</div>
            <p className="mt-4 text-sm leading-7 text-graphite/70 dark:text-sand/70">As informacoes publicas do grupo devem ser conferidas no espelho do Diretorio dos Grupos de Pesquisa do CNPq.</p>
            <Link href={site.cnpqUrl} className="btn-primary mt-6">Abrir DGP/CNPq</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Repercussoes" title="Producao cientifica qualificada e ferramentas futuras para clinica e pesquisa.">
            O texto abaixo sintetiza a finalidade publica informada para o grupo. As ferramentas citadas devem ser entendidas como proposicoes em estruturacao, teste e validacao.
          </SectionHeading>
          <div className="mt-10 rounded-[2rem] border border-petroleum/10 bg-sand/55 p-5 text-sm leading-8 text-graphite/75 shadow-soft sm:rounded-[2.5rem] sm:p-8 dark:border-white/10 dark:bg-white/5 dark:text-sand/75">{repercussions}</div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Linhas de pesquisa" title="Dois eixos para sustentar ciencia aplicada." />
          <div className="mt-10 sm:mt-12"><ResearchLines /></div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Recursos humanos" title="Pesquisadores e estudante vinculados ao grupo." />
          <div className="mt-10 sm:mt-12"><TeamGrid /></div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Roadmap cientifico" title="Proximas entregas do grupo." />
          <div className="mt-10 sm:mt-12"><Roadmap /></div>
        </div>
      </section>
    </>
  );
}
