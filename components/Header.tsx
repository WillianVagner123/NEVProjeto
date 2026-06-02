"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { CommandPalette } from "./CommandPalette";

export function Header() {
  const [open, setOpen] = useState(false);
  const [cmd, setCmd] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmd(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-petroleum/10 bg-sand/88 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0f1f25]/92">
        <div className="premium-container flex h-16 items-center justify-between gap-3 sm:h-20">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Voltar para a pagina inicial NEV">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-gold/30 bg-petroleum p-1 shadow-soft sm:h-12 sm:w-12">
              <Image src="/brand/nev-symbol.png" alt="Simbolo NEV" fill className="object-cover" />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="font-display text-2xl font-bold text-petroleum dark:text-sand sm:text-3xl">NEV</div>
              <div className="hidden max-w-[190px] text-[9px] font-bold uppercase tracking-[0.22em] text-graphite/55 sm:block dark:text-sand/55">Nutricao do Estilo de Vida</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-graphite/70 transition hover:bg-white/70 hover:text-petroleum xl:px-4 dark:text-sand/70 dark:hover:bg-white/10 dark:hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button onClick={() => setCmd(true)} className="hidden rounded-full border border-petroleum/10 bg-white/70 px-4 py-2 text-xs font-bold text-petroleum shadow-soft backdrop-blur transition hover:-translate-y-0.5 md:inline-flex dark:border-white/15 dark:bg-white/10 dark:text-sand">
              Buscar <span className="ml-2 command-kbd">Ctrl K</span>
            </button>
            <ThemeToggle />
            <Link href="/contato" className="hidden btn-primary sm:inline-flex">Participar</Link>
            <button onClick={() => setOpen(!open)} className="rounded-full border border-petroleum/10 bg-white/70 px-3 py-2 font-bold text-petroleum lg:hidden dark:border-white/15 dark:bg-white/10 dark:text-sand" aria-label="Abrir menu">
              {open ? "Fechar" : "Menu"}
            </button>
          </div>
        </div>
        {open && (
          <div className="premium-container pb-5 lg:hidden">
            <div className="grid gap-2 rounded-3xl border border-petroleum/10 bg-white/90 p-3 shadow-soft dark:border-white/10 dark:bg-[#142a31]">
              {nav.map((item) => (
                <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-bold text-petroleum hover:bg-sand dark:text-sand dark:hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
              <button onClick={() => { setCmd(true); setOpen(false); }} className="rounded-2xl px-4 py-3 text-left text-sm font-bold text-petroleum hover:bg-sand dark:text-sand dark:hover:bg-white/10">Buscar no site</button>
              <Link onClick={() => setOpen(false)} href="/contato" className="btn-primary w-full">Participar</Link>
            </div>
          </div>
        )}
      </header>
      <CommandPalette open={cmd} onClose={() => setCmd(false)} />
    </>
  );
}
