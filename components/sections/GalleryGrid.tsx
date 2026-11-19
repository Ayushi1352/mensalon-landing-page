"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import type { GalleryData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

const ViewerButton = ({ label, className, onClick, children }: { label: string; className: string; onClick: () => void; children: ReactNode }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className={`absolute grid size-11 place-items-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] backdrop-blur transition-colors hover:bg-[var(--color-bronze)] ${className}`}
  >
    {children}
  </button>
);

/** Grid of gold-framed photos (4 x 2 from tablets up) that opens each photo in a full-screen viewer */
export const GalleryGrid = ({ data }: { data: GalleryData }) => {
  const { items } = data;
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const show = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = (delta: number) => setIndex((i) => (i === null ? i : (i + delta + items.length) % items.length));
  const item = index === null ? null : items[index];

  return (
    <>
      {/* on desktop the outer columns are a little wider, as in the design */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 lg:grid-cols-[337fr_329fr_329fr_337fr] lg:gap-x-[0.94rem] lg:gap-y-[1rem]">
        {items.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => show(i)}
            aria-label={fill(data.openLabel, { title: photo.title })}
            data-reveal
            data-reveal-delay={(i % 4) * 80}
            className="group relative aspect-[445/290] cursor-zoom-in overflow-hidden rounded-xl border-2 border-[var(--color-gold-frame)] bg-[var(--color-bg-dark)] lg:rounded-[1rem] lg:border-[0.1rem]"
          >
            <Image
              quality={90}
              src={photo.image}
              alt=""
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[var(--color-black-80)] via-[var(--color-black-20)] to-transparent p-3 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 lg:p-[1rem]">
              <span className="font-heading text-base font-semibold leading-snug text-[var(--color-white)] max-sm:hidden lg:text-[1.2rem]">{photo.title}</span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--color-bronze)] text-[var(--color-white)] max-sm:ml-auto lg:size-[2.2rem]">
                <Icon name="LuPlus" className="size-[1.125rem]" strokeWidth={2.2} />
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        aria-label={data.viewerLabel}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-auto h-[min(85dvh,56.25rem)] w-[calc(100%-2rem)] max-w-5xl bg-transparent p-0 backdrop:bg-[var(--color-black-85)] open:transition-[opacity,transform] open:duration-500 open:ease-[cubic-bezier(0.22,1,0.36,1)] open:starting:translate-y-5 open:starting:opacity-0"
      >
        {item && index !== null && (
          <figure className="relative flex h-full flex-col">
            <div className="relative flex-1">
              <Image quality={90} src={item.image} alt={item.title} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="pt-4 text-center font-heading text-xl text-[var(--color-white)]">
              {item.title}
              <span className="ml-3 font-sans text-xs text-[var(--color-white-60)]">
                {index + 1} / {items.length}
              </span>
            </figcaption>
            <ViewerButton label={data.closeLabel} className="right-2 top-2" onClick={() => dialog.current?.close()}>
              <Icon name="LuX" className="size-5" />
            </ViewerButton>
            <ViewerButton label={data.previousLabel} className="left-2 top-1/2 -translate-y-1/2" onClick={() => step(-1)}>
              <Icon name="LuChevronLeft" className="size-5" strokeWidth={2.2} />
            </ViewerButton>
            <ViewerButton label={data.nextLabel} className="right-2 top-1/2 -translate-y-1/2" onClick={() => step(1)}>
              <Icon name="LuChevronRight" className="size-5" strokeWidth={2.2} />
            </ViewerButton>
          </figure>
        )}
      </dialog>
    </>
  );
};
