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
        <div className="premium-container grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <div className="eyebrow">DGP/CNPq</div>
            <h1 className="display-title mt-6">Grupo de Pesquisa em Nutrição do Estilo de Vida.</h1>
            <p className="body-lg mt-7 max-w-3xl">Pesquisa observacional, intervenção dietoterápica, GLP-1, obesidade, bariátrica, composição corporal, metabolismo energético e construção científica das proposições NutEV, com comunicação educacional e não prescritiva.</p>
          </div>
          <div className="card">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Espelho institucional</div>
            <p className="mt-4 text-sm leading-7 text-graphite/70 dark:text-sand/70">As informações públicas do grupo devem ser conferidas no espelho do Diretório dos Grupos de Pesquisa do CNPq.</p>
            <Link href={site.cnpqUrl} className="btn-primary mt-6">Abrir DGP/CNPq</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Repercussões" title="Produção científica qualificada e ferramentas para clínica e pesquisa.">
            O texto abaixo sintetiza a finalidade pública informada para o grupo e deve ser usado como base revisável para chamadas, editais, apresentações e página da Liga.
          </SectionHeading>
          <div className="mt-10 rounded-[2.5rem] border border-petroleum/10 bg-sand/55 p-8 text-sm leading-8 text-graphite/75 shadow-soft dark:border-white/10 dark:bg-white/5 dark:text-sand/75">{repercussions}</div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Linhas de pesquisa" title="Dois eixos para sustentar ciência aplicada." />
          <div className="mt-12"><ResearchLines /></div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Recursos humanos" title="Pesquisadores e estudante vinculados ao grupo." />
          <div className="mt-12"><TeamGrid /></div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Roadmap científico" title="Próximas entregas do grupo." />
          <div className="mt-12"><Roadmap /></div>
        </div>
      </section>
    </>
  );
}
