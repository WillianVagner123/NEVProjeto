import { SectionHeading } from "@/components/SectionHeading";
import { TeamGrid } from "@/components/TeamGrid";

export const metadata = { title: "Equipe" };

export default function TeamPage() {
  return (
    <>
      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container max-w-5xl">
          <div className="eyebrow">Recursos humanos</div>
          <h1 className="display-title mt-6">Equipe científica.</h1>
          <p className="body-lg mt-7 max-w-3xl">Pesquisadores e estudante vinculados ao grupo, organizados em uma página preparada para receber Lattes, ORCID, fotos e perfis completos.</p>
        </div>
      </section>
      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Perfis" title="Filtre por linha, papel e tema de interesse." />
          <div className="mt-12"><TeamGrid /></div>
        </div>
      </section>
    </>
  );
}
