export const metadata = { title: "Política de Privacidade" };

export default function PrivacyPage() {
  return (
    <section className="section bg-radial-premium dark:bg-[#12272e]">
      <div className="premium-container max-w-4xl">
        <div className="eyebrow">LGPD</div>
        <h1 className="display-title mt-6">Política de privacidade.</h1>
        <div className="mt-10 rounded-[2.5rem] border border-petroleum/10 bg-white/75 p-8 text-sm leading-8 text-graphite/75 shadow-premium dark:border-white/10 dark:bg-white/5 dark:text-sand/75">
          <p>Esta é uma versão inicial para fins de protótipo. Antes da publicação oficial, revise com a equipe institucional/jurídica responsável.</p>
          <h2 className="mt-8 font-display text-3xl font-semibold text-petroleum dark:text-sand">Coleta de dados</h2>
          <p className="mt-3">Os formulários podem coletar nome, e-mail, perfil e interesse para comunicação sobre a Liga, eventos, pesquisas e materiais científicos.</p>
          <h2 className="mt-8 font-display text-3xl font-semibold text-petroleum dark:text-sand">Finalidade</h2>
          <p className="mt-3">Os dados serão usados apenas para contato, organização de atividades, envio de atualizações e gestão de interessados.</p>
          <h2 className="mt-8 font-display text-3xl font-semibold text-petroleum dark:text-sand">Remoção</h2>
          <p className="mt-3">O titular poderá solicitar a remoção dos dados a qualquer momento pelo canal oficial de contato definido pela Liga.</p>
        </div>
      </div>
    </section>
  );
}
