import Image from "next/image";
import type { ServicesData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/** Dark band with six photo cards; on desktop every second card sits lower, like a zig-zag */
export const ServicesSection = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-[4.5rem] bg-[var(--color-bg-dark)] py-[var(--section-gap)] lg:scroll-mt-[5.5rem] lg:pb-[4rem] lg:pt-[3.5rem]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-[2.2rem]">
        <div data-reveal className="text-center">
          <p className="font-label text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-gold)] lg:text-[1.3rem] lg:tracking-[0.12em]">{data.label}</p>
          <div className="mt-2 flex items-center justify-center gap-4 lg:mt-[0.45rem] lg:gap-[2.35rem]">
            <span aria-hidden="true" className="h-0.5 w-10 shrink-0 bg-gradient-to-r from-transparent to-[var(--color-gold)] sm:w-16 lg:h-[0.15rem] lg:w-[6.55rem]" />
            <h2 className="font-heading text-[2.125rem] font-semibold leading-tight text-[var(--color-white)] sm:text-[2.5rem] lg:text-[2.8rem]">{data.title}</h2>
            <span aria-hidden="true" className="h-0.5 w-10 shrink-0 bg-gradient-to-l from-transparent to-[var(--color-gold)] sm:w-16 lg:h-[0.15rem] lg:w-[6.55rem]" />
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-[3.6rem] lg:grid-cols-6 lg:items-start lg:gap-[0.95rem]">
          {data.items.map((item, index) => (
            <li
              key={item.id}
              data-reveal
              data-reveal-delay={index * 80}
              className={`group overflow-hidden rounded-2xl bg-[var(--color-bg-panel)] shadow-[0_1.25rem_2.5rem_-1.25rem_var(--color-shadow-dark)] ring-1 ring-[var(--color-white-15)] lg:rounded-[1rem] ${
                index % 2 === 1 ? "lg:mt-[4.7rem]" : ""
              }`}
            >
              <div className="relative aspect-[288/305] overflow-hidden">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 15vw, (min-width: 640px) 33vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
              </div>
              <div className="flex h-[4.5rem] items-center gap-2.5 bg-gradient-to-b from-[var(--color-bg-panel-light)] to-[var(--color-bg-panel)] px-3 sm:gap-3 sm:px-4 lg:h-[5.45rem] lg:gap-0 lg:pl-[2.25rem] lg:pr-[0.4rem]">
                <Icon name={item.icon} className="size-8 shrink-0 text-[var(--color-gold)] sm:size-9 lg:size-[2.55rem]" strokeWidth={1.6} />
                <span aria-hidden="true" className="h-9 w-px shrink-0 bg-[var(--color-white-20)] lg:ml-[0.94rem] lg:mr-[0.7rem] lg:h-[2.4rem]" />
                <h3 className="whitespace-pre-line font-condensed text-[0.9375rem] font-medium leading-tight text-[var(--color-white)] sm:text-base lg:text-[1.3rem] lg:leading-[1.75rem]">{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
