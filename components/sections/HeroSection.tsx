import Image from "next/image";
import type { HeroData } from "@/types/templates.types";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Dark banner: the barbershop photo across the whole width, headline on its dark left side */
export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate flex min-h-[36rem] scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-hero)] sm:min-h-[38rem] lg:min-h-0 lg:h-[37.5rem] lg:scroll-mt-[5.5rem]">
      {/* desktop shows the photo exactly as the design (same proportions); phones and tablets show its right part, darkened under the text */}
      <div className="absolute inset-0 -z-10">
        <Image src={data.image} alt={data.imageAlt} fill preload quality={90} sizes="100vw" className="object-cover object-[72%_center] lg:object-center" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-hero)] via-[var(--color-bg-hero-60)] to-transparent lg:hidden" />
        <div aria-hidden="true" className="absolute inset-0 bg-[var(--color-bg-hero-40)] md:hidden" />
      </div>

      <div className="flex w-full flex-col justify-center px-4 py-16 sm:px-6 lg:justify-start lg:px-[5.15rem] lg:py-0 lg:pt-[5.5rem]">
        <Eyebrow
          label={data.label}
          className="text-xs !font-medium tracking-[0.3em] text-[var(--color-white-90)] lg:text-[1.03rem] lg:tracking-[0.3em]"
          lineClassName="w-12 text-[var(--color-gold-soft)] lg:w-[4.5rem] lg:!h-px"
        />
        <h1 className="mt-4 font-heading text-[2.875rem] font-bold leading-[1.02] tracking-[-0.01em] text-[var(--color-white)] sm:text-[3.75rem] lg:mt-[0.95rem] lg:text-[4.55rem] lg:leading-[0.95]">
          <span className="block">{data.titleTop}</span>
          <span className="text-[var(--color-hero-cream)]">{data.titleBottom}</span>{" "}
          <span className="bg-gradient-to-b from-[var(--color-gold-light)] via-[var(--color-gold-soft)] to-[var(--color-gold-deep)] bg-clip-text pr-[0.08em] italic text-transparent">
            {data.titleAccent}
          </span>
        </h1>
        <p className="mt-5 max-w-sm font-accent text-lg leading-relaxed text-[var(--color-white-90)] sm:max-w-md lg:mt-[1rem] lg:max-w-none lg:whitespace-pre-line lg:text-[1.45rem] lg:leading-[1.82rem] lg:tracking-[0.01em]">
          {data.description}
        </p>
      </div>
    </section>
  );
};
