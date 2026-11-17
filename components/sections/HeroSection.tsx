import Image from "next/image";
import type { HeroData } from "@/types/templates.types";
import { Eyebrow } from "@/components/ui/SectionHeading";

/** Dark banner: headline on the left, hero photo on the right melting into a blurred dark extension of the salon */
export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section
      id={data.id}
      className="relative isolate flex min-h-[36rem] scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-hero)] sm:min-h-[38rem] lg:min-h-0 lg:h-[34rem] lg:scroll-mt-[5.5rem]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[var(--color-bg-hero)]">
        {/* Desktop: the photo's own left strip stretched across the text side and heavily blurred */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[calc(100%-44rem)] overflow-hidden lg:block"
        >
          <div className="absolute -inset-y-8 left-0 w-[600%] blur-[22px] brightness-[0.62] saturate-[0.9]">
            <Image src={data.image} alt="" fill sizes="20vw" quality={40} className="object-fill" />
          </div>
        </div>

        {/* Photo: full cover on phones/tablets, right-hand 52rem block on desktop with a soft left fade */}
        <div className="absolute inset-0 lg:left-auto lg:w-[52rem] lg:[mask-image:linear-gradient(to_right,transparent_0%,var(--color-black-60)_6%,var(--color-bg-black)_15%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,var(--color-black-60)_6%,var(--color-bg-black)_15%)]">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            preload
            quality={90}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[75%_center] lg:object-center"
          />
        </div>

        {/* Desktop: light blur over the photo's left edge so it melts into the blurred extension */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[46rem] hidden w-[10rem] backdrop-blur-[8px] lg:block [mask-image:linear-gradient(to_right,transparent,var(--color-bg-black)_35%,var(--color-bg-black)_55%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,var(--color-bg-black)_35%,var(--color-bg-black)_55%,transparent)]"
        />

        {/* Desktop: dark fade from the left keeps the headline area deep black */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--color-bg-darker)_96%,transparent)_0%,color-mix(in_srgb,var(--color-bg-darker)_90%,transparent)_18%,color-mix(in_srgb,var(--color-bg-darker)_72%,transparent)_30%,color-mix(in_srgb,var(--color-bg-darker)_42%,transparent)_40%,color-mix(in_srgb,var(--color-bg-darker)_14%,transparent)_50%,transparent_58%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block [background-image:linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bg-darker)_35%,transparent)_0%,transparent_22%,transparent_80%,color-mix(in_srgb,var(--color-bg-darker)_25%,transparent)_100%)]"
        />

        {/* Mobile & tablet overlays: dark gradient ensuring headline readability over the photo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lg:hidden bg-gradient-to-r from-[var(--color-bg-hero)] via-[var(--color-bg-hero-60)] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lg:hidden bg-gradient-to-t from-[var(--color-bg-hero)] via-[var(--color-bg-hero-40)] to-transparent"
        />
      </div>

      <div className="flex w-full flex-col justify-center px-4 py-16 sm:px-6 lg:justify-start lg:px-[5.15rem] lg:py-0 lg:pt-[4.2rem]">
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
