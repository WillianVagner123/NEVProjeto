import Image from "next/image";
import Link from "next/link";
import { metrics } from "@/data/site";
import { Reveal } from "./Reveal";
import { MetricCounter } from "./MetricCounter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-premium noise">
      <div className="absolute inset-0 bg-grid-premium bg-[length:48px_48px] opacity-35 dark:opacity-15" />
      <div className="premium-container relative grid min-h-[calc(100svh-64px)] items-center gap-10 py-10 sm:min-h-[calc(100vh-80px)] sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        <Reveal>
          <div className="relative z-10">
            <div className="eyebrow">NEV · Nutricao do Estilo de Vida</div>
            <h1 className="display-title mt-6 max-w-4xl">
              Um ecossistema cientifico para construir a Nutricao do Estilo de Vida.
            </h1>
            <p className="body-lg mt-6 max-w-2xl">Pesquisa, formacao, biblioteca cientifica, eventos e proposicoes NutEV em desenvolvimento, sempre com linguagem responsavel e sem apresentar ferramentas como se ja estivessem finalizadas.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/framework-nutev" className="btn-primary">Abrir laboratorio NutEV</Link>
              <Link href="/grupo-de-pesquisa" className="btn-secondary">Ver grupo de pesquisa</Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {metrics.map((metric) => <MetricCounter key={metric.label} {...metric} />)}
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[520px] rounded-[2.5rem] border border-petroleum/10 bg-white/65 p-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sage/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative mx-auto aspect-square w-full max-w-[380px] rounded-full border border-gold/30 bg-petroleum p-4 shadow-soft sm:max-w-[430px]">
              <div className="absolute inset-4 rounded-full border border-sand/35" />
              <Image src="/brand/nev-symbol.png" alt="Circulo da Vida NEV" fill className="rounded-full object-contain p-5" priority />
            </div>
            <div className="relative mt-6 rounded-[1.75rem] border border-petroleum/10 bg-white/85 p-5 shadow-soft dark:border-white/10 dark:bg-[#0f1f25]/80">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold sm:text-xs">Lifestyle Nutrition Framework</div>
              <p className="mt-2 text-sm leading-6 text-petroleum dark:text-sand">Ciencia, comportamento e alimentacao para saude, desempenho e longevidade saudavel.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
