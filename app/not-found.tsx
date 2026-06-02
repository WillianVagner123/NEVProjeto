import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-radial-premium dark:bg-[#12272e]">
      <div className="premium-container max-w-3xl text-center">
        <div className="eyebrow mx-auto">404</div>
        <h1 className="display-title mt-6">Página não encontrada.</h1>
        <p className="body-lg mt-7">O caminho solicitado ainda não existe na plataforma LANEV.</p>
        <Link href="/" className="btn-primary mt-8">Voltar ao início</Link>
      </div>
    </section>
  );
}
