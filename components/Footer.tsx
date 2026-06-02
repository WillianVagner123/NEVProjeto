import Link from "next/link";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-petroleum text-sand">
      <div className="absolute inset-0 bg-grid-premium bg-[length:42px_42px] opacity-25" />
      <div className="premium-container relative py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="font-display text-5xl font-semibold">NEV</div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-sand/72">Nutricao do Estilo de Vida · ecossistema para pesquisa, formacao, debate, eventos e construcao cientifica das proposicoes NutEV.</p>
            <p className="mt-6 rounded-3xl border border-sand/15 bg-white/5 p-4 text-xs leading-6 text-sand/70">Conteudo educacional e cientifico. Nao substitui avaliacao, diagnostico ou tratamento individualizado por profissional de saude. O uso de nomes institucionais deve ser revisado e aprovado pelas instancias competentes antes de publicacao oficial. Pesquisas com seres humanos dependem das aprovacoes eticas cabiveis.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Mapa</h3>
            <div className="mt-5 grid gap-3">
              {nav.map((item) => <Link className="text-sm text-sand/70 hover:text-white" href={item.href} key={item.href}>{item.label}</Link>)}
              <Link className="text-sm text-sand/70 hover:text-white" href="/politica-de-privacidade">Politica de privacidade</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Contato</h3>
            <div className="mt-5 space-y-3 text-sm text-sand/70">
              <p>{site.email}</p>
              <p>Instagram · LinkedIn · YouTube</p>
              <Link href={site.cnpqUrl} className="inline-flex text-gold hover:text-white">Espelho DGP/CNPq →</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-sand/10 pt-6 text-xs text-sand/50">© {new Date().getFullYear()} NEV · Nutricao do Estilo de Vida.</div>
      </div>
    </footer>
  );
}
