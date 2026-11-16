import Image from "next/image";
import type { CompanyData, FooterData, LinkItem } from "@/types/templates.types";
import { FooterNav } from "@/components/common/FooterNav";
import { Icon } from "@/components/ui/Icon";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

// Everything centred: logo, text and the header menu (`links`), then the contact details, social links and copyright.
export const Footer = async ({ data, company, links = [] }: { data?: FooterData; company: CompanyData; links?: LinkItem[] }) => {
  if (!data) return null;
  const copyright = data.copyrightText.replace("{year}", String(await currentYear()));

  return (
    <footer className="bg-[var(--color-bg-black)] font-footer text-[var(--color-white)]">
      <div className="mx-auto max-w-[90rem] px-4 pt-14 text-center sm:px-6 lg:px-[8.4rem] lg:pt-[3.9rem]">
        <Image src={company.logo} alt={company.logoAlt} width={company.logoWidth} height={company.logoHeight} sizes="(min-width: 1024px) 34vw, 320px" className="mx-auto h-auto w-72 sm:w-80 lg:w-[30.7rem]" />
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-white-90)] lg:mt-[0.9rem] lg:max-w-[50rem] lg:text-[1.03rem] lg:leading-[1.5rem]">{data.description}</p>

        <div className="mt-7 lg:mt-[1.4rem]">
          <FooterNav links={links} label={data.quickLinksTitle} />
        </div>

        <div className="mt-10 border-t border-[var(--color-gold-dim)] pt-10 lg:mt-[3.5rem] lg:border-t-[0.07rem] lg:pt-[3.75rem]">
          <h2 className="sr-only">{data.contactTitle}</h2>
          <ul className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center md:gap-0">
            {company.contactItems.map((item, index) => {
              const external = item.url.startsWith("http");
              return (
                <li
                  key={item.id}
                  className={`flex ${index > 0 ? "md:border-l-2 md:border-[var(--color-gold-soft)] md:pl-8 lg:border-l-[0.1rem] lg:pl-[3.4rem]" : ""} ${index < company.contactItems.length - 1 ? "md:pr-8 lg:pr-[3.4rem]" : ""}`}
                >
                  <a
                    href={item.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4 text-left lg:gap-[1.4rem]"
                  >
                    <span className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-[var(--color-gold-soft)] text-[var(--color-gold-soft)] transition-colors group-hover:bg-[var(--color-gold-soft)] group-hover:text-[var(--color-heading)] lg:size-[3.3rem] lg:border-[0.1rem]">
                      <Icon name={item.icon} className="size-6 lg:size-[1.5rem]" />
                    </span>
                    <span className="pt-0.5">
                      <span className="block text-lg font-semibold text-[var(--color-gold-soft)] lg:text-[1.27rem]">{item.title}</span>
                      <span className="block text-base leading-snug text-[var(--color-white)] lg:text-[1.17rem] lg:leading-[1.4rem]">
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

        <div className="mt-8 flex items-center justify-center gap-4 lg:mt-[1.5rem] lg:gap-[1.9rem]">
          <span aria-hidden="true" className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--color-white-60)] sm:w-24 lg:w-[12rem]" />
          <ul aria-label={data.socialTitle} className="flex gap-2.5 lg:gap-[1rem]">
            {data.socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full border-2 border-[var(--color-white)] text-[var(--color-white)] transition-colors hover:border-[var(--color-gold-soft)] hover:bg-[var(--color-gold-soft)] hover:text-[var(--color-heading)] lg:size-[2.8rem] lg:border-[0.1rem]"
                >
                  <Icon name={social.icon} className="size-[1.125rem] lg:size-[1.2rem]" />
                </a>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--color-white-60)] sm:w-24 lg:w-[12rem]" />
        </div>
      </div>

      <div className="mt-6 h-0.5 bg-gradient-to-r from-[var(--color-gold-dim)] via-[var(--color-gold-soft)] to-[var(--color-gold-dim)] lg:mt-[1.4rem] lg:h-[0.1rem]" />
      <p className="px-4 pb-6 pt-5 text-center text-sm text-[var(--color-white)] lg:pb-[2.15rem] lg:pt-[2.4rem] lg:text-[1.3rem]">{copyright}</p>
    </footer>
  );
};
