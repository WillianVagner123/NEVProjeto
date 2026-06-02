import Image from "next/image";
import Link from "next/link";
import { metrics, site } from "@/data/site";
import { Reveal } from "./Reveal";
import { MetricCounter } from "./MetricCounter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-premium noise">
      <div className="absolute inset-0 bg-grid-premium bg-[length:48px_48px] opacity-70" />
      <div className="premium-container relative grid min-h-[calc(100vh-80px)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_.92fr]">
        <Reveal>
          <div>
            <div className="eyebrow">Liga Acadêmica · NutEV em construção</div>
            <h1 className="display-title mt-7">
              Nutrição do Estilo de Vida: uma agenda científica em construção.
            </h1>
            <p className="body-lg mt-7 max-w-2xl">{site.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/framework-nutev" className="btn-primary">Abrir laboratório NutEV</Link>
              <Link href="/grupo-de-pesquisa" className="btn-secondary">Ver grupo de pesquisa</Link>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
              {metrics.map((metric) => <MetricCounter key={metric.label} {...metric} />)}
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:justify-self-end">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="orbit-ring" />
            <div className="absolute inset-[8%] rounded-full border border-petroleum/10 bg-white/50 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5" />
            <div className="absolute inset-[18%] animate-float overflow-hidden rounded-full border border-gold/30 bg-petroleum shadow-premium">
              <Image src="/brand/nev-symbol.png" alt="Círculo da Vida NEV" fill className="object-cover" priority />
            </div>
            <div className="absolute bottom-5 left-0 max-w-xs rounded-[2rem] border border-white/60 bg-white/75 p-5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-[#0f1f25]/70">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Lifestyle Nutrition · proposição científica</div>
              <p className="mt-2 text-sm leading-6 text-petroleum dark:text-sand">Da Medicina do Estilo de Vida à construção crítica da Nutrição do Estilo de Vida.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
