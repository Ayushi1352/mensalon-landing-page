import Image from "next/image";
import type { AboutData } from "@/types/templates.types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { AboutVideo } from "@/components/sections/AboutVideo";

/** Title beside two short paragraphs, three feature cards, then the salon photo with the barber photo laid over its right side */
export const AboutSection = ({ data }: { data?: AboutData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-[4.5rem] bg-[var(--color-bg-cream)] py-[var(--section-gap)] lg:scroll-mt-[5.5rem] lg:pb-[2.7rem] lg:pt-[3.6rem]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-[4.15rem]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[28.2rem_1.28fr_1fr] lg:items-center lg:gap-0 lg:pl-[1.5rem]">
          <div data-reveal className="md:col-span-2 lg:col-span-1">
            <Eyebrow
              label={data.label}
              className="text-sm tracking-[0.25em] text-[var(--color-bronze)] lg:text-[1.22rem] lg:tracking-[0.27em]"
              lineClassName="w-12 lg:w-[4.8rem]"
            />
            <h2 className="mt-3 font-heading text-[2.625rem] leading-[1.02] text-[var(--color-heading)] sm:text-5xl lg:mt-[0.9rem] lg:text-[3.56rem] lg:leading-[1.05]">
              <span className="block font-normal lg:text-[3.26rem]">{data.titleTop}</span>
              <span className="block font-bold text-[var(--color-bronze-dark)] lg:text-[3.94rem]">{data.titleAccent}</span>
            </h2>
          </div>
          {data.paragraphs.map((text, index) => (
            <p
              key={text}
              data-reveal
              data-reveal-delay={(index + 1) * 100}
              // the first paragraph has a gold line before it and the second a light one, as in the design
              className={`border-l-2 pl-5 text-base leading-relaxed text-[var(--color-text)] lg:text-[1.18rem] lg:leading-[1.69rem] ${
                index === 0 ? "border-[var(--color-bronze-line)] lg:pl-[4.25rem] lg:pr-[2.7rem]" : "border-[var(--color-border-warm)] lg:pl-[2.95rem]"
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        {/* the design's first card is a little wider than the other two */}
        <ul className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-[2rem] lg:grid-cols-[1.055fr_1fr_1.015fr] lg:gap-[2.2rem]">
          {data.features.map((feature, index) => (
            <li
              key={feature.id}
              data-reveal
              data-reveal-delay={index * 100}
              className="group flex items-center gap-5 rounded-[1.5rem] bg-[var(--color-bg-main)] p-5 shadow-[0_0.75rem_2.5rem_-1rem_var(--color-shadow-card)] md:flex-col md:items-start lg:h-[9rem] lg:flex-row lg:items-center lg:gap-[2.25rem] lg:rounded-[1.875rem] lg:px-[1.73rem] lg:py-0"
            >
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--color-amber-light)] to-[var(--color-bronze)] text-[var(--color-white)] shadow-[0_0.5rem_1.25rem_-0.5rem_var(--color-shadow-bronze)] transition-transform duration-500 group-hover:scale-105 lg:size-[5.6rem]">
                <Icon name={feature.icon} className="size-8 lg:size-[2.75rem]" strokeWidth={1.7} />
              </span>
              <span>
                <span className="block text-lg font-semibold text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-bronze)] lg:text-[1.4rem]">{feature.title}</span>
                <span className="mt-1 block text-base leading-snug text-[var(--color-text)] lg:mt-[0.35rem] lg:text-[1.22rem] lg:leading-[1.69rem]">{feature.text}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* the barber photo sits over the salon photo exactly where the design puts it, at every screen size */}
        <div data-reveal className="relative mt-8 lg:mt-[2.75rem]">
          <div className="relative aspect-[1172/645] w-[67.3%] overflow-hidden rounded-xl lg:rounded-[1.05rem]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 55vw, 67vw" className="object-cover" />
          </div>
          <div className="absolute left-[58.8%] top-[14.6%] aspect-[712/487] w-[40.9%] overflow-hidden rounded-xl border-[0.1875rem] border-[var(--color-white)] shadow-[0_1.25rem_2.5rem_-1rem_var(--color-shadow-photo)] sm:border-4 lg:rounded-[1rem] lg:border-[0.3rem]">
            <Image src={data.secondaryImage} alt={data.secondaryImageAlt} fill quality={90} sizes="(min-width: 1024px) 34vw, 41vw" className="object-cover" />
            <AboutVideo url={data.videoUrl} playLabel={data.videoPlayLabel} closeLabel={data.videoCloseLabel} />
          </div>
        </div>
      </div>
    </section>
  );
};
