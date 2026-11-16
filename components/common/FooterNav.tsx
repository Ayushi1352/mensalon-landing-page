"use client";

import type { LinkItem } from "@/types/templates.types";
import { sectionId, useActiveSection } from "@/components/ui/useActiveSection";

/** The header links again, split by thin gold bars; the section on screen is gold and underlined */
export const FooterNav = ({ links, label }: { links: LinkItem[]; label: string }) => {
  const active = useActiveSection(links.map((link) => link.url));

  return (
    <nav aria-label={label} className="font-accent">
      <ul className="flex flex-wrap items-center justify-center gap-y-3">
        {links.map((link, index) => {
          const current = sectionId(link.url) === active;
          return (
            <li
              key={link.id}
              className={`flex items-center ${index > 0 ? "before:mx-4 before:h-5 before:w-0.5 before:bg-[var(--color-gold-soft)] lg:before:mx-[1.9rem] lg:before:h-[1.7rem] lg:before:w-[0.1rem]" : ""}`}
            >
              <a
                href={link.url}
                aria-current={current ? "location" : undefined}
                className={`relative text-base font-semibold transition-colors after:absolute after:inset-x-[-0.2rem] after:-bottom-1.5 after:h-[0.1875rem] after:rounded-full after:bg-current after:transition-transform lg:text-[1.3rem] lg:after:-bottom-[0.4rem] ${
                  current ? "text-[var(--color-gold-soft)] after:scale-x-100" : "text-[var(--color-white)] after:scale-x-0 hover:text-[var(--color-gold-soft)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
