import Image from "next/image";
import Link from "next/link";
import { metrics, site } from "@/data/site";
import { Reveal } from "./Reveal";
import { MetricCounter } from "./MetricCounter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-premium noise">
      <div className="absolute inset-0 bg-grid-premium bg-[length:48px_48px] opacity-45 dark:opacity-20" />
      <div className="premium-container relative grid min-h-[calc(100svh-64px)] items-center gap-10 py-10 sm:min-h-[calc(100vh-80px)] sm:py-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
        <Reveal>
          <div className="relative z-10">
            <div className="eyebrow">NEV · Nutricao do Estilo de Vida</div>
            <h1 className="display-title mt-6 max-w-4xl">
              Um ecossistema cientifico para construir a Nutricao do Estilo de Vida.
            </h1>
            <p className="body-lg mt-6 max-w-2xl">{site.description}</p>
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
          <div className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[560px]">
            <div className="orbit-ring" />
            <div className="absolute inset-[8%] rounded-full border border-petroleum/10 bg-white/55 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5" />
            <div className="absolute inset-[18%] animate-float overflow-hidden rounded-full border border-gold/30 bg-petroleum shadow-premium">
              <Image src="/brand/nev-symbol.png" alt="Circulo da Vida NEV" fill className="object-cover" priority />
            </div>
            <div className="absolute bottom-2 left-1/2 w-[88%] -translate-x-1/2 rounded-[1.5rem] border border-white/60 bg-white/85 p-4 shadow-soft backdrop-blur sm:bottom-5 sm:left-0 sm:w-auto sm:max-w-xs sm:translate-x-0 sm:rounded-[2rem] sm:p-5 dark:border-white/10 dark:bg-[#0f1f25]/80">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold sm:text-xs">Lifestyle Nutrition · proposicao cientifica</div>
              <p className="mt-2 text-xs leading-5 text-petroleum sm:text-sm sm:leading-6 dark:text-sand">LANEV e Grupo de Pesquisa sao frentes dentro do ecossistema NEV.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
