"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CompanyData, HeaderData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { sectionId, useActiveSection } from "@/components/ui/useActiveSection";

/** Gold "Book Appointment" button (a lighter gold on hover) */
const ctaClass =
  "inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-b from-[var(--color-gold-light)] to-[var(--color-gold-deep)] font-semibold text-[var(--color-heading)] shadow-[0_0.5rem_1.5rem_-0.75rem_var(--color-shadow-gold)] transition-[filter] hover:brightness-110 lg:gap-[0.75rem] lg:rounded-[0.47rem]";

export const Header = ({ data, company }: { data?: HeaderData; company: CompanyData }) => {
  const active = useActiveSection(data?.navLinks.map((link) => link.url) ?? []);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!data) return null;

  /** The logo scrolls back to the top and drops any "#section" from the address bar, without reloading the page */
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    window.scrollTo({ top: 0 });
    if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search);
  };

  return (
    <>
      {/* gold strip with the contact details and social links; it scrolls away, only the menu bar below stays */}
      <div className="hidden bg-gradient-to-r font-accent from-[var(--color-gold-soft)] via-[var(--color-gold-light)] to-[var(--color-gold-soft)] text-[var(--color-heading)] md:block">
        <div className="flex h-11 items-center px-6 text-sm lg:h-[3.3rem] lg:pl-[3.65rem] lg:pr-[3.15rem] lg:text-[1.03rem]">
          <ul className="flex min-w-0 items-center">
            {data.topBarItems.map((item, index) => {
              const external = item.url.startsWith("http");
              return (
                <li
                  key={item.id}
                  // the street address needs the room of a desktop screen, so tablets start with the phone number
                  className={`flex items-center ${index === 0 ? "max-lg:hidden" : ""} ${
                    index > 0 ? "before:mx-5 before:h-6 before:w-px before:bg-[var(--color-heading-30)] lg:before:mx-[1.75rem] lg:before:h-[1.4rem]" : ""
                  } ${index === 1 ? "max-lg:before:hidden" : ""}`}
                >
                  <a
                    href={item.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-70 lg:gap-[0.75rem]"
                  >
                    <Icon name={item.icon} className="size-4 shrink-0 lg:size-[1.15rem]" strokeWidth={2} />
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto flex items-center gap-3 before:mr-2 before:h-6 before:w-px before:bg-[var(--color-heading-30)] lg:gap-[0.85rem] lg:before:mr-[0.4rem] lg:before:h-[1.4rem]">
            <span className="whitespace-nowrap font-medium">{data.followLabel}</span>
            {data.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid size-7 place-items-center rounded-full bg-[var(--color-bg-nav)] text-[var(--color-white)] transition-colors hover:bg-[var(--color-bronze)] lg:size-[1.8rem]"
              >
                <Icon name={social.icon} className="size-3.5 lg:size-[0.95rem]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 font-accent bg-[var(--color-bg-nav)] shadow-[0_0.75rem_2rem_-1.25rem_var(--color-shadow-header)]">
        <div className="flex h-[4.5rem] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[5.5rem] lg:pl-[3.3rem] lg:pr-[1.65rem]">
          <Link href={data.logoUrl} onClick={goHome} aria-label={data.homeLabel} className="shrink-0">
            <Image src={company.logo} alt={company.logoAlt} width={company.logoWidth} height={company.logoHeight} preload sizes="(min-width: 1024px) 22vw, 220px" className="h-auto w-44 sm:w-52 lg:w-[20.15rem]" />
          </Link>

          <div className="flex items-center gap-3 lg:gap-[2rem]">
            <nav aria-label={data.mainNavLabel} className="hidden items-center gap-[2.15rem] lg:flex">
              {data.navLinks.map((link) => {
                const current = sectionId(link.url) === active;
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    aria-current={current ? "location" : undefined}
                    className={`relative py-[0.4rem] text-[1.17rem] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-[0.3rem] after:h-[0.15rem] after:rounded-full after:bg-current after:transition-transform ${
                      current
                        ? "text-[var(--color-gold-soft)] after:scale-x-100"
                        : "text-[var(--color-white)] after:scale-x-0 hover:text-[var(--color-gold-soft)]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <a href={data.buttonUrl} className={`${ctaClass} h-11 px-4 text-sm max-sm:hidden lg:h-[3rem] lg:px-[1.3rem] lg:text-[1.125rem]`}>
              <Icon name={data.buttonIcon} className="size-5 lg:size-[1.3rem]" strokeWidth={2} />
              {data.buttonText}
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? data.closeMenuLabel : data.openMenuLabel}
              className="grid size-11 place-items-center rounded-lg border border-[var(--color-white-20)] text-[var(--color-white)] transition-colors hover:border-[var(--color-gold-soft)] hover:text-[var(--color-gold-soft)] lg:hidden"
            >
              <Icon name={open ? "LuX" : "LuMenu"} className="size-6" />
            </button>
          </div>
        </div>

        {/* phones and tablets: the page behind the open menu is dimmed, a tap on it closes the menu */}
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[4.5rem] -z-10 bg-[var(--color-black-60)] transition-opacity duration-500 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        />
        <nav
          id="mobile-menu"
          aria-label={data.mobileNavLabel}
          // when open it is a panel only as tall as its links, and scrolls if they do not fit on the screen
          className={`absolute inset-x-0 top-full grid max-h-[calc(100dvh-4.5rem)] overflow-hidden border-t border-[var(--color-white-10)] bg-[var(--color-bg-nav)] transition-[grid-template-rows,opacity] duration-500 lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-y-auto">
            <ul className="flex flex-col px-4 py-3 sm:px-6">
              {data.navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-[var(--color-white-10)] py-3.5 text-lg font-medium transition-colors hover:text-[var(--color-gold-soft)] ${
                      sectionId(link.url) === active ? "text-[var(--color-gold-soft)]" : "text-[var(--color-white)]"
                    }`}
                  >
                    {link.label}
                    <Icon name="LuChevronRight" className="size-4 text-[var(--color-gold-soft)]" strokeWidth={2.2} />
                  </a>
                </li>
              ))}
              <li className="pb-2 pt-5 sm:hidden">
                <a href={data.buttonUrl} onClick={() => setOpen(false)} className={`${ctaClass} h-12 w-full text-base`}>
                  <Icon name={data.buttonIcon} className="size-5" strokeWidth={2} />
                  {data.buttonText}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
