import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProgressBar } from "@/components/ProgressBar";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

const description = "NEV e o ecossistema de Nutricao do Estilo de Vida que organiza pesquisa, formacao academica, biblioteca cientifica, eventos e proposicoes NutEV em construcao.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "NEV | Nutricao do Estilo de Vida",
    template: "%s | NEV",
  },
  description,
  keywords: ["Nutrição do Estilo de Vida", "NEV", "NutEV", "LANEV", "UnB", "GLP-1", "obesidade", "Medicina do Estilo de Vida", "CNPq"],
  openGraph: {
    title: "NEV | Nutricao do Estilo de Vida",
    description,
    type: "website",
    images: ["/brand/nev-brand-board.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        <ProgressBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
