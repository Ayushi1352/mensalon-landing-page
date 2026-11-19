"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { TestimonialItem, TestimonialsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

const AUTOPLAY_MS = 6000;

const Card = ({ item, rating, ratingLabel, className = "" }: { item: TestimonialItem; rating: number; ratingLabel: string; className?: string }) => (
  <blockquote
    className={`relative flex h-full flex-col rounded-[1.75rem] border-2 border-[var(--color-gold)] bg-gradient-to-b from-[var(--color-bg-card-dark)] to-[var(--color-bg-darker)] px-6 pt-5 shadow-[0_0_2rem_-1rem_var(--color-gold-50)] lg:rounded-[1.9rem] lg:border-[0.1rem] lg:px-[2.1rem] lg:pt-[0.95rem] ${className}`}
  >
    {/* gold quote tab hanging over the top edge */}
    <span className="absolute -top-2 right-6 grid h-12 w-11 place-items-center rounded-b-xl rounded-t-md bg-gradient-to-b from-[var(--color-gold-light)] to-[var(--color-gold)] text-[var(--color-heading)] lg:-top-[0.47rem] lg:right-[1.65rem] lg:h-[2.85rem] lg:w-[2.9rem] lg:rounded-b-[0.9rem] lg:rounded-t-[0.35rem]">
      <Icon name="FaQuoteRight" className="size-5 lg:size-[1.3rem]" />
    </span>

    <footer className="flex items-center gap-4 lg:gap-[1.6rem]">
      <span className="relative size-24 shrink-0 overflow-hidden rounded-full ring-[0.1875rem] ring-[var(--color-gold)] lg:size-[8.45rem] lg:ring-[0.15rem]">
        <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 9rem, 6rem" className="object-cover" />
      </span>
      <span className="-mt-3 lg:-mt-[0.85rem]">
        <cite className="block font-heading text-xl font-bold not-italic text-[var(--color-white)] lg:text-[1.7rem]">{item.name}</cite>
        <span role="img" aria-label={ratingLabel} className="mt-1.5 flex gap-1 text-[var(--color-gold)] lg:mt-[0.95rem] lg:gap-[0.3rem]">
          {Array.from({ length: rating }, (_, n) => (
            <Icon key={n} name="FaStar" className="size-5 lg:size-[1.45rem]" />
          ))}
        </span>
      </span>
    </footer>

    <p className="mt-5 flex-1 pl-0 font-accent text-base leading-relaxed tracking-[0.02em] text-[var(--color-white-90)] sm:pl-4 lg:mt-[1.05rem] lg:pl-[1.2rem] lg:pr-0 lg:text-[1.42rem] lg:leading-[1.8rem] lg:tracking-[0.03em]">
      {item.quote}
    </p>
    <span aria-hidden="true" className="mx-[8%] mb-6 mt-5 h-[0.1875rem] rounded-full bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent lg:mb-[1.6rem] lg:mt-[1rem] lg:h-[0.19rem]" />
  </blockquote>
);

/**
 * Each dot features one review in the middle. Desktop shows it between its neighbours (three cards),
 * phones and tablets show only the featured card. Moves on by itself and waits while the visitor hovers it.
 */
export const TestimonialSlider = ({ data }: { data: TestimonialsData }) => {
  const { items } = data;
  const [index, setIndex] = useState(Math.min(data.startIndex, items.length - 1));
  const [paused, setPaused] = useState(false);
  const at = (offset: number) => items[(index + offset + items.length) % items.length];
  const ratingLabel = fill(data.ratingLabel, { rating: data.rating });

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % items.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, items.length]);

  const fade = "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-5 starting:opacity-0";

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto grid max-w-[37rem] gap-[1.5rem] lg:max-w-none lg:grid-cols-3" aria-live="polite">
        {[-1, 0, 1].map((offset) => {
          const item = at(offset);
          return (
            // keyed by review, so a card that changes fades in
            <div key={`${offset}-${item.id}`} className={`pt-2 lg:pt-[0.47rem] ${offset === 0 ? "" : "max-lg:hidden"} ${fade}`}>
              <Card item={item} rating={data.rating} ratingLabel={ratingLabel} />
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center gap-3 lg:mt-[2.4rem] lg:gap-[0.95rem]">
        {items.map((item, n) => (
          <button
            key={item.id}
            type="button"
            aria-label={fill(data.showLabel, { name: item.name })}
            aria-current={n === index}
            onClick={() => setIndex(n)}
            className={`size-4 rounded-full border-2 transition-colors lg:size-[1.1rem] lg:border-[0.1rem] ${
              n === index ? "border-[var(--color-gold)] bg-[var(--color-gold)]" : "border-[var(--color-white-80)] hover:border-[var(--color-gold)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
