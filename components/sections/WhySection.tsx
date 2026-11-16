import Image from "next/image";
import type { WhyData } from "@/types/templates.types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

/** Tall photo in a two-corner gold frame on the left; title, text, four numbers and a wide photo on the right */
export const WhySection = ({ data }: { data?: WhyData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-[4.5rem] bg-[var(--color-bg-blush)] py-[var(--section-gap)] lg:scroll-mt-[5.5rem] lg:pb-[3.5rem] lg:pt-[3.75rem]">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 sm:px-6 lg:grid-cols-[35.4rem_1fr] lg:gap-[3.4rem] lg:pl-[1.65rem] lg:pr-[1.5rem]">
        <div data-reveal className="relative mx-auto w-full max-w-[28rem] pb-[0.9rem] pl-[1.1rem] pr-[0.85rem] pt-[1rem] max-lg:order-last lg:max-w-none lg:pb-[1.27rem] lg:pl-[1.6rem] lg:pr-[1.17rem] lg:pt-[1.5rem]">
          <span aria-hidden="true" className="absolute left-0 top-0 h-[37.7%] w-[57.6%] rounded-tl-[2.75rem] border-l-[0.55rem] border-t-[0.55rem] border-[var(--color-amber)] lg:rounded-tl-[3.75rem] lg:border-l-[0.8rem] lg:border-t-[0.8rem]" />
          <span aria-hidden="true" className="absolute bottom-0 right-0 h-[21.3%] w-[45.7%] rounded-br-[2.5rem] border-b-[0.55rem] border-r-[0.55rem] border-[var(--color-amber)] lg:rounded-br-[3.25rem] lg:border-b-[0.8rem] lg:border-r-[0.8rem]" />
          <div className="relative aspect-[690/1105] overflow-hidden rounded-[2rem] lg:rounded-[2.75rem]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 34vw, 28rem" className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col">
          <div data-reveal>
            <Eyebrow
              label={data.label}
              lines="both"
              className="!justify-start text-sm tracking-[0.2em] text-[var(--color-amber-dark)] lg:-ml-[1.1rem] lg:text-[1.4rem] lg:tracking-[0.17em]"
              lineClassName="w-10 lg:w-[5.25rem]"
            />
            <h2 className="mt-4 font-heading text-[2.375rem] font-medium leading-[1.15] text-[var(--color-heading-soft)] sm:text-5xl lg:mt-[1.5rem] lg:text-[3.57rem] lg:leading-[1.2]">
              {data.titleTop} <span className="text-[var(--color-amber)]">{data.titleAccent}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg lg:mt-[1.2rem] lg:text-[1.4rem] lg:leading-[1.97rem]">{data.description}</p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:mt-[2.4rem] lg:-ml-[1.5rem]">
            {data.stats.map((stat, index) => (
              <li
                key={stat.id}
                data-reveal
                data-reveal-delay={index * 100}
                className={`flex flex-col items-center px-2 text-center ${index > 0 ? "sm:border-l sm:border-[var(--color-border-warm)]" : ""} ${index % 2 === 1 ? "max-sm:border-l max-sm:border-[var(--color-border-warm)]" : ""}`}
              >
                <Icon name={stat.icon} className="size-12 text-[var(--color-amber)] lg:size-[4.4rem]" strokeWidth={1.5} />
                <span className="mt-2 font-label text-[2rem] font-bold leading-none text-[var(--color-heading-soft)] lg:mt-[0.7rem] lg:text-[2.8rem]">{stat.value}</span>
                <span className="mt-2 whitespace-pre-line text-base leading-snug text-[var(--color-text-muted)] lg:mt-[0.6rem] lg:text-[1.3rem] lg:leading-[1.75rem]">{stat.label}</span>
              </li>
            ))}
          </ul>

          <div data-reveal className="relative mt-10 aspect-[1067/432] overflow-hidden rounded-[1.75rem] lg:mt-[4.8rem] lg:aspect-auto lg:min-h-[12rem] lg:flex-1 lg:-ml-[1.9rem] lg:rounded-[2.8rem]">
            <Image src={data.secondaryImage} alt={data.secondaryImageAlt} fill quality={90} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
