import type { PackageItem, PackagesData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { MustacheDivider } from "@/components/ui/SectionHeading";

/** Ribbon-style price tag (ends cut inwards), flanked by thin lines */
const PriceTag = ({ price, featured }: { price: string; featured: boolean }) => (
  <div className="mt-4 flex items-center justify-center gap-3 lg:mt-[0.45rem] lg:gap-[0.6rem]">
    <span aria-hidden="true" className={`h-px w-10 lg:w-[3.05rem] ${featured ? "bg-[var(--color-maroon-40)]" : "bg-[var(--color-gold-50)]"}`} />
    <span
      className={`grid h-12 min-w-[8.5rem] place-items-center px-6 font-heading text-[1.75rem] font-bold [clip-path:polygon(0_0,100%_0,94%_50%,100%_100%,0_100%,6%_50%)] lg:h-[2.8rem] lg:min-w-[9.4rem] lg:px-[1.5rem] lg:text-[2.05rem] ${
        featured
          ? "bg-gradient-to-b from-[var(--color-maroon)] to-[var(--color-maroon-dark)] text-[var(--color-white)]"
          : "bg-gradient-to-b from-[var(--color-gold-light)] to-[var(--color-gold-deep)] text-[var(--color-heading)]"
      }`}
    >
      {price}
    </span>
    <span aria-hidden="true" className={`h-px w-10 lg:w-[3.05rem] ${featured ? "bg-[var(--color-maroon-40)]" : "bg-[var(--color-gold-50)]"}`} />
  </div>
);

const PackageCard = ({ item, index }: { item: PackageItem; index: number }) => {
  const { featured } = item;

  return (
    <li data-reveal data-reveal-delay={index * 100} className="relative flex pt-7 lg:pt-[1.75rem]">
      {/* icon badge sitting on the top edge of the card */}
      <span
        className={`absolute left-1/2 top-0 z-10 grid h-14 w-[5.5rem] -translate-x-1/2 place-items-center rounded-2xl border-2 lg:h-[3.3rem] lg:w-[5.4rem] lg:rounded-[0.9rem] ${
          featured
            ? "border-[var(--color-gold-deep)] bg-gradient-to-b from-[var(--color-gold-light)] to-[var(--color-gold-deep)] text-[var(--color-heading)]"
            : "border-[var(--color-gold-deep)] bg-[var(--color-bg-card-dark)] text-[var(--color-gold-light)]"
        }`}
      >
        <Icon name={item.icon} className="size-8 lg:size-[2.2rem]" strokeWidth={1.8} />
      </span>

      <div
        className={`relative flex w-full flex-col overflow-hidden rounded-3xl border px-6 pb-8 pt-10 text-center lg:rounded-[1.3rem] lg:px-[1.5rem] lg:pb-[1.2rem] lg:pt-[2.1rem] ${
          featured
            ? "border-[var(--color-gold-deep)] bg-[radial-gradient(120%_80%_at_50%_0%,var(--color-cream-light),var(--color-cream-gold)_70%,var(--color-gold-soft))] shadow-[0_0_2.5rem_-0.75rem_var(--color-gold-50)]"
            : "border-[var(--color-gold-line)] bg-gradient-to-b from-[var(--color-bg-card-dark)] to-[var(--color-bg-darker)]"
        }`}
      >
        {/* corner ribbon of the featured package */}
        {item.badge && (
          <span className="absolute -right-[2.4rem] top-[1.1rem] w-[9rem] rotate-45 bg-gradient-to-b from-[var(--color-maroon)] to-[var(--color-maroon-dark)] py-1 text-center font-heading text-sm font-semibold italic text-[var(--color-white)] lg:-right-[2.45rem] lg:top-[1.05rem] lg:w-[9rem] lg:py-[0.2rem] lg:text-[1.05rem]">
            {item.badge}
          </span>
        )}

        <h3 className={`font-heading text-2xl font-bold lg:text-[1.7rem] ${featured ? "text-[var(--color-heading)]" : "text-[var(--color-white)]"}`}>{item.title}</h3>
        <PriceTag price={item.price} featured={featured} />

        {/* on desktop the list starts at a fixed distance from the card's left edge, as in the design */}
        <ul className={`mx-auto mb-7 mt-5 grid w-fit gap-2.5 text-left lg:mb-[0.7rem] lg:mt-[0.75rem] lg:gap-[0.5rem] ${featured ? "lg:ml-[4.2rem]" : "lg:ml-[3.2rem]"}`}>
          {item.features.map((feature) => (
            <li
              key={feature.id}
              className={`flex items-center gap-3 text-base lg:gap-[1.25rem] lg:text-[1.05rem] lg:leading-[1.4rem] ${featured ? "text-[var(--color-heading)]" : "text-[var(--color-white-85)]"}`}
            >
              <Icon name="LuCircleCheck" className={`size-5 shrink-0 lg:size-[1.4rem] ${featured ? "text-[var(--color-maroon)]" : "text-[var(--color-gold-deep)]"}`} strokeWidth={2} />
              {feature.text}
            </li>
          ))}
        </ul>

        <a
          href={item.buttonUrl}
          className={`group mx-auto mt-auto inline-flex h-12 whitespace-nowrap font-accent items-center justify-center gap-2.5 rounded-xl px-10 text-lg font-bold transition-[color,background-color,transform] hover:-translate-y-0.5 hover:bg-none lg:h-[2.65rem] lg:w-[11.8rem] lg:rounded-[0.75rem] lg:px-0 lg:text-[1.3rem] ${
            featured
              ? "bg-gradient-to-b from-[var(--color-maroon)] to-[var(--color-maroon-dark)] text-[var(--color-white)] hover:bg-[var(--color-gold-deep)] hover:text-[var(--color-heading)]"
              : "bg-gradient-to-b from-[var(--color-gold-light)] to-[var(--color-gold-deep)] text-[var(--color-heading)] hover:bg-[var(--color-bronze)] hover:text-[var(--color-white)]"
          }`}
        >
          {item.buttonText}
          <Icon name="LuArrowRight" className="size-5 transition-transform group-hover:translate-x-0.5 lg:size-[1.3rem]" strokeWidth={2.2} />
        </a>

        {/* soft glow along the bottom edge */}
        <span aria-hidden="true" className="absolute inset-x-[20%] bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-light)] to-transparent" />
      </div>
    </li>
  );
};

/** Three package cards on the dark band, the middle one gold and marked as popular */
export const PackagesSection = ({ data }: { data?: PackagesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-[4.5rem] bg-[var(--color-bg-dark)] py-[var(--section-gap)] lg:scroll-mt-[5.5rem] lg:pb-[4.8rem] lg:pt-[4rem]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-[8.4rem]">
        <div data-reveal className="text-center">
          <div className="flex items-center justify-center gap-4 lg:gap-[2.1rem]">
            <span aria-hidden="true" className="h-px w-10 shrink-0 bg-[var(--color-gold-soft)] sm:w-16 lg:mt-[1.6rem] lg:h-[0.1rem] lg:w-[5.7rem]" />
            <div>
              <p className="font-label text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-soft)] lg:text-[1.3rem] lg:tracking-[0.3em]">{data.label}</p>
              <h2 className="mt-1 font-heading text-[2.125rem] font-semibold leading-tight text-[var(--color-white)] sm:text-[2.5rem] lg:mt-0 lg:text-[2.5rem]">{data.title}</h2>
            </div>
            <span aria-hidden="true" className="h-px w-10 shrink-0 bg-[var(--color-gold-soft)] sm:w-16 lg:mt-[1.6rem] lg:h-[0.1rem] lg:w-[5.7rem]" />
          </div>
          <p className="mt-2 text-base text-[var(--color-white-85)] lg:mt-0 lg:text-[0.97rem]">{data.description}</p>
          <MustacheDivider className="mt-1 text-[var(--color-gold-soft)] lg:-mt-[0.2rem]" lineClassName="w-20 lg:w-[7.5rem]" mustacheClassName="h-3.5 w-9 lg:h-[0.95rem] lg:w-[2.6rem]" />
        </div>

        <ul className="mx-auto mt-10 grid max-w-md gap-8 lg:max-w-none lg:grid-cols-3 lg:mt-[2.1rem] lg:gap-[1.3rem]">
          {data.items.map((item, index) => (
            <PackageCard key={item.id} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
