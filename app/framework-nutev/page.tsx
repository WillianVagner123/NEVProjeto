import { CircleOfLife } from "@/components/CircleOfLife";
import { FrameworkExplorer } from "@/components/FrameworkExplorer";
import { PropositionBoard } from "@/components/PropositionBoard";
import { ConstructionTimeline } from "@/components/ConstructionTimeline";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Laboratório NutEV" };

export default function FrameworkPage() {
  return (
    <>
      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container max-w-5xl">
          <div className="eyebrow">Laboratório NutEV · Proposições em construção</div>
          <h1 className="display-title mt-6">Antes de apresentar uma pirâmide, vamos construir a pergunta certa.</h1>
          <p className="body-lg mt-7 max-w-3xl">
            Esta página não trata diretrizes, protocolo, representação visual ou índice como ferramentas prontas. Ela organiza a discussão científica necessária para que essas proposições possam ser formuladas, debatidas, testadas e validadas.
          </p>
          <div className="mt-8 rounded-[2rem] border border-gold/25 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-gold/20 dark:bg-white/5">
            <p className="text-sm font-semibold leading-7 text-petroleum dark:text-sand">
              Posição editorial: o NutEV é uma agenda de construção científica. O site deve mostrar o processo, as dúvidas e os critérios, não vender um modelo fechado nem substituir orientação profissional.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container">
          <SectionHeading eyebrow="Tese central" title="O framework e a pirâmide são hipóteses de trabalho.">
            A proposta do site passa a ser abrir uma conversa pública e acadêmica: quais elementos devem compor a Nutrição do Estilo de Vida, como representá-los e como validar a aplicabilidade clínica?
          </SectionHeading>
          <div className="mt-12"><PropositionBoard /></div>
        </div>
      </section>

      <section className="section bg-sand/70 dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Explorer de proposições" title="Navegue pelo que está em debate.">
            Cada camada abaixo é uma proposição, acompanhada de pergunta orientadora, limites atuais e próximo passo científico.
          </SectionHeading>
          <div className="mt-12"><FrameworkExplorer /></div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0f1f25]">
        <div className="premium-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Método de construção" title="Da curadoria à validação.">
              A robustez do NutEV depende menos de uma imagem bonita e mais de método: matriz de evidências, critérios, debate, consenso e testes progressivos.
            </SectionHeading>
          </div>
          <ConstructionTimeline />
        </div>
      </section>

      <section className="section bg-radial-premium dark:bg-[#12272e]">
        <div className="premium-container">
          <SectionHeading eyebrow="Círculo da Vida" title="Símbolo como ponto de partida, não como conclusão científica.">
            O símbolo ajuda a comunicar alimentação, comportamento, saúde, integração e trajetória. A construção científica precisa decidir como esses elementos se transformam em domínios, indicadores e ferramentas.
          </SectionHeading>
          <div className="mt-12"><CircleOfLife /></div>
        </div>
      </section>
    </>
  );
}
