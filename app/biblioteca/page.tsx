import { LibraryHub } from "@/components/LibraryHub";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Biblioteca Científica" };

export default function LibraryPage() {
  return (
    <>
      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container max-w-5xl">
          <div className="eyebrow">Hub científico</div>
          <h1 className="display-title mt-6">Biblioteca LANEV.</h1>
          <p className="body-lg mt-7 max-w-3xl">Um espaço para curadoria de guias, diretrizes, artigos, protocolos, aulas, ferramentas e materiais da construção NutEV.</p>
        </div>
      </section>
      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Filtro inteligente" title="Explore temas, status e tipos de produção." />
          <div className="mt-12"><LibraryHub /></div>
        </div>
      </section>
    </>
  );
}
