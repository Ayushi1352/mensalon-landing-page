import type { GalleryData } from "@/types/templates.types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MustacheDivider } from "@/components/ui/MustacheDivider";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

/** Centred heading with the mustache ornament above eight gold-framed photos */
export const GallerySection = ({ data }: { data?: GalleryData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-[4.5rem] bg-[var(--color-bg-main)] py-[var(--section-gap)] lg:scroll-mt-[5.5rem] lg:pb-[2.1rem] lg:pt-[2.5rem]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-[1.95rem]">
        <div data-reveal className="text-center">
          <Eyebrow
            label={data.label}
            lines="both"
            className="text-lg !font-semibold tracking-[0.3em] text-[var(--color-bronze)] lg:text-[2.05rem] lg:tracking-[0.3em]"
            lineClassName="w-10 sm:w-16 lg:w-[6.55rem] lg:!h-[0.15rem]"
          />
          <h2 className="mt-2 font-heading text-[2.25rem] font-bold leading-tight text-[var(--color-heading)] sm:text-5xl lg:mt-[1.05rem] lg:text-[3.48rem]">
            {data.titleTop}{" "}
            <span className="bg-gradient-to-b from-[var(--color-amber-light)] to-[var(--color-bronze)] bg-clip-text text-transparent">{data.titleAccent}</span>
          </h2>
          <MustacheDivider className="mt-2 text-[var(--color-bronze)] lg:mt-[1.15rem]" lineClassName="w-20 sm:w-28 lg:w-[9.6rem]" />
          <p className="mt-2 text-base text-[var(--color-text)] sm:text-lg lg:mt-[0.2rem] lg:text-[1.4rem]">{data.description}</p>
        </div>

        <div className="mt-8 lg:mt-[1.9rem]">
          <GalleryGrid data={data} />
        </div>
      </div>
    </section>
  );
};
