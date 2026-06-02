import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProgressBar } from "@/components/ProgressBar";
import { site } from "@/data/site";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "LANEV UnB | Nutrição do Estilo de Vida",
    template: "%s | LANEV UnB",
  },
  description: site.description,
  keywords: ["Nutrição do Estilo de Vida", "LANEV", "UnB", "NutEV", "NEV", "GLP-1", "obesidade", "Medicina do Estilo de Vida", "CNPq"],
  openGraph: {
    title: "LANEV UnB | Nutrição do Estilo de Vida",
    description: site.description,
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
