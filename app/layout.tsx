import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Inter, Jost, Montserrat, Open_Sans, Roboto_Condensed, Source_Serif_4 } from "next/font/google";
import rawData from "@/data/templates.json";
import type { MensSalonTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-inter" });
const jost = Jost({ subsets: ["latin"], weight: ["400", "500", "600"], fallback: ["Arial", "sans-serif"], variable: "--font-jost" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  fallback: ["Georgia", "serif"],
  variable: "--font-source-serif",
});
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"], fallback: ["Arial", "sans-serif"], variable: "--font-open-sans" });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: ["500"], fallback: ["Arial Narrow", "sans-serif"], variable: "--font-roboto-condensed" });

const templateData: MensSalonTemplateData = rawData;
const sectionData = templateData.categories.MensSalon.sections;
const commonData = templateData.common;
const headerData = sectionData.Header?.variants?.MensSalonHeader1;

const fontVariables = {
  "--font-primary": commonData.theme.fonts.primary,
  "--font-heading": commonData.theme.fonts.heading,
  "--font-label": commonData.theme.fonts.label,
  "--font-condensed": commonData.theme.fonts.condensed,
  "--font-accent": commonData.theme.fonts.accent,
  "--font-footer": commonData.theme.fonts.footer,
} as CSSProperties;

export const metadata: Metadata = {
  title: commonData.metadata.title,
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // Root font size: 16px, and from 1024px up it follows the 1440px design (1rem = 1/90 of the screen, at most 16px),
      // so 1024px shows exactly the 1440px layout, only smaller. Every size on the page is in rem, so it all scales together.
      // Header and footer links scroll smoothly to their section on this one page. Everything clickable gets the pointer.
      className={`${inter.variable} ${jost.variable} ${sourceSerif.variable} ${openSans.variable} ${montserrat.variable} ${robotoCondensed.variable} h-full text-[16px] lg:text-[length:min(16px,calc(100vw/90))] scroll-smooth antialiased [&_:where(a[href],button:not(:disabled),select,summary,[role=button])]:cursor-pointer motion-reduce:scroll-auto motion-reduce:[&_*]:!duration-[0.01ms]`}
    >
      <body className="min-h-full bg-[var(--color-bg-backdrop)] font-sans text-[var(--color-text)] selection:bg-[var(--color-gold)] selection:text-[var(--color-heading)]">
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. Up to 1920px it fills the screen, so
          nothing changes; on wider screens or when the browser is zoomed out the page stays in the middle with
          equal space on both sides instead of stretching.
          --section-gap is the one space above and below every section: 3.5rem (56px) on phones and tablets,
          3.75rem on desktop (60px at 1440px; it scales with the page, see the font size above).
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[120rem] flex-col overflow-x-clip bg-[var(--color-bg-main)] [--section-gap:3.5rem] lg:[--section-gap:3.75rem]">
          <Header data={headerData} company={commonData.company} />
          {children}
          <ScrollReveal />
          <Footer data={commonData.Footer} company={commonData.company} links={headerData?.navLinks} />
        </div>
      </body>
    </html>
  );
}
