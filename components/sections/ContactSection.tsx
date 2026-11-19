import Image from "next/image";
import type { CompanyData, ContactData, ContactFormData } from "@/types/templates.types";
import { ContactForm } from "@/components/sections/ContactForm";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/** Title, text and contact details on the left; on desktop a barber chair stands behind the message card on the right */
type Props = {
  data?: ContactData;
  form?: ContactFormData;
  company: CompanyData;
  /** choices of the form's service list (built in app/page.tsx from the Services and Packages sections) */
  serviceOptions: string[];
};

export const ContactSection = ({ data, form, company, serviceOptions }: Props) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-[4.5rem] bg-[var(--color-bg-main)] py-[var(--section-gap)] lg:scroll-mt-[5.5rem] lg:pb-[3.5rem] lg:pt-[4.1rem]">
      <div className="relative mx-auto grid max-w-[90rem] gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_39.4rem] lg:gap-0 lg:pl-[3.65rem] lg:pr-[3rem]">
        {/* desktop: chair photo in the design's 395×820 slot between the text and the form; any photo is cropped to fit */}
        <div className="absolute left-[29.05rem] top-[2.25rem] hidden aspect-[395/820] w-[18.5rem] lg:block">
          <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="19vw" className="object-cover object-bottom" />
        </div>

        <div data-reveal className="relative">
          <Eyebrow
            label={data.label}
            className="text-sm tracking-[0.3em] text-[var(--color-brown)] lg:text-[1.5rem] lg:tracking-[0.33em]"
            lineClassName="w-12 lg:w-[6.55rem]"
          />
          <h2 className="mt-3 font-heading text-[2.5rem] font-semibold leading-[1.08] text-[var(--color-heading)] sm:text-[3.25rem] lg:mt-[0.9rem] lg:text-[3.94rem] lg:leading-[1.14]">
            <span className="block">{data.titleTop}</span>
            <span className="block text-[var(--color-brown)]">{data.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-xl font-label text-base font-medium leading-relaxed text-[var(--color-text)] lg:mt-[2.35rem] lg:max-w-[33rem] lg:text-[1.07rem] lg:leading-[1.6rem]">{data.description}</p>

          <ul className="mt-6 grid gap-5 sm:grid-cols-3 lg:mt-[1.9rem] lg:grid-cols-1 lg:gap-[1.25rem]">
            {company.contactItems.map((item) => {
              const external = item.url.startsWith("http");
              return (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex w-fit items-start gap-4 font-accent lg:gap-[1.2rem]"
                  >
                    <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-[var(--color-peach)] text-[var(--color-brown)] transition-colors group-hover:bg-[var(--color-brown)] group-hover:text-[var(--color-white)] lg:size-[3.5rem] lg:rounded-[0.75rem]">
                      <Icon name={item.icon} className="size-6 lg:size-[1.6rem]" />
                    </span>
                    <span className="pt-0.5 lg:pt-0">
                      <span className="block text-lg font-semibold text-[var(--color-brown)] lg:text-[1.3rem]">{item.title}</span>
                      <span className="block text-base leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-brown)] lg:mt-[0.1rem] lg:text-[1.22rem] lg:leading-[1.45rem]">
                        {item.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          data-reveal
          className="relative z-10 rounded-3xl lg:mt-[0.25rem] border-2 border-[var(--color-brown-border)] bg-[var(--color-bg-main)] px-5 pb-8 pt-7 shadow-[0_1.5rem_3.5rem_-1.5rem_var(--color-shadow-card)] sm:px-8 lg:rounded-[1.9rem] lg:border-[0.1rem] lg:pb-[2.1rem] lg:pl-[2.1rem] lg:pr-[1.65rem] lg:pt-[1.75rem]"
        >
          <div className="flex items-center justify-center gap-4 text-[var(--color-brown)] lg:gap-[1.9rem]">
            <span aria-hidden="true" className="h-0.5 w-16 bg-gradient-to-r from-transparent to-current lg:h-[0.1rem] lg:w-[6rem]" />
            <Icon name={data.formIcon} className="size-10 lg:size-[2.9rem]" strokeWidth={1.8} />
            <span aria-hidden="true" className="h-0.5 w-16 bg-gradient-to-l from-transparent to-current lg:h-[0.1rem] lg:w-[6rem]" />
          </div>
          <h3 className="mt-1 text-center font-heading text-3xl font-bold text-[var(--color-heading)] sm:text-4xl lg:mt-[0.3rem] lg:text-[2.5rem]">{data.formTitle}</h3>
          <ContactForm data={form} serviceOptions={serviceOptions} />
        </div>
      </div>
    </section>
  );
};
