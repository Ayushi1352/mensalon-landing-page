import type { TestimonialsData } from "@/types/templates.types";
import { Eyebrow, MustacheDivider } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";

/** Black band with a thin gold arc in the corner, a two-line title and the review cards */
export const TestimonialsSection = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-darker)] py-[var(--section-gap)] lg:scroll-mt-[5.5rem] lg:pb-[4.25rem] lg:pt-[3.5rem]">
      <span
        aria-hidden="true"
        className="absolute -right-[30%] top-[8%] -z-10 aspect-square w-[70%] rounded-full border-t border-[var(--color-gold-50)] bg-gradient-to-b from-[var(--color-white-3)] to-transparent to-30% lg:-right-[32%] lg:top-[16%] lg:w-[62%] lg:border-t-[0.15rem]"
      />
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-[1.9rem]">
        <div data-reveal className="text-center">
          <Eyebrow
            label={data.label}
            lines="both"
            className="text-sm font-semibold tracking-[0.25em] text-[var(--color-white)] lg:text-[1.4rem] lg:tracking-[0.22em]"
            lineClassName="w-10 text-[var(--color-gold)] sm:w-16 lg:w-[5.6rem]"
          />
          <h2 className="mt-3 font-heading text-[2.125rem] font-semibold leading-[1.12] text-[var(--color-white)] sm:text-5xl lg:mt-[1.4rem] lg:text-[3.48rem] lg:leading-[1.1]">
            <span className="block">{data.titleTop}</span>
            <span className="block text-[var(--color-gold)]">{data.titleAccent}</span>
          </h2>
          <MustacheDivider className="mt-3 text-[var(--color-gold)] lg:mt-[1.1rem]" mustacheClassName="h-6 w-14 lg:h-[1.85rem] lg:w-[5.4rem]" lineClassName="w-20 sm:w-32 lg:w-[11rem]" />
        </div>

        <div className="mt-8 lg:mt-[1.7rem]">
          <TestimonialSlider data={data} />
        </div>
      </div>
    </section>
  );
};
