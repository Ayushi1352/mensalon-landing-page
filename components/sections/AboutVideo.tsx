"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

/** A YouTube link (watch, youtu.be, shorts or embed) as its embed address; any other link is played as a video file */
const youTubeEmbed = (url: string) => {
  const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)?.[1];
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
};

type Props = {
  url: string;
  playLabel: string;
  closeLabel: string;
};

/**
 * Gold play button in the middle of the About photo, opening the video in a full-screen viewer.
 * Shown only when templates.json has a video link (About.videoUrl).
 */
export const AboutVideo = ({ url, playLabel, closeLabel }: Props) => {
  const dialog = useRef<HTMLDialogElement>(null);
  // the player is only mounted while the viewer is open, so closing it stops the video
  const [open, setOpen] = useState(false);
  if (!url) return null;
  const embed = youTubeEmbed(url);

  return (
    <>
      <button
        type="button"
        aria-label={playLabel}
        onClick={() => {
          setOpen(true);
          dialog.current?.showModal();
        }}
        // same place and size as the play button in the design (centre of the photo, about 1/7 of its width)
        className="group absolute left-1/2 top-[46.8%] grid aspect-square w-[13.7%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[0.1875rem] border-[var(--color-white)] bg-gradient-to-b from-[var(--color-amber-light)] to-[var(--color-bronze)] text-[var(--color-white)] shadow-[0_0.5rem_1.5rem_-0.5rem_var(--color-shadow-photo)] transition-transform duration-300 hover:scale-110 lg:border-[0.2rem]"
      >
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[var(--color-white)] opacity-0 group-hover:animate-ping group-hover:opacity-20" />
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-[8%] w-[42%]">
          <path d="M6 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 6 3.5Z" />
        </svg>
      </button>

      <dialog
        ref={dialog}
        aria-label={playLabel}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-5xl overflow-visible bg-transparent p-0 backdrop:bg-[var(--color-black-85)] open:transition-[opacity,transform] open:duration-500 open:starting:translate-y-5 open:starting:opacity-0"
      >
        <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--color-bg-black)]">
          {open &&
            (embed ? (
              <iframe src={embed} title={playLabel} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen className="absolute inset-0 size-full" />
            ) : (
              <video src={url} controls autoPlay playsInline className="absolute inset-0 size-full" />
            ))}
        </div>
        <button
          type="button"
          aria-label={closeLabel}
          onClick={() => dialog.current?.close()}
          className="absolute -top-14 right-0 grid size-11 place-items-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] backdrop-blur transition-colors hover:bg-[var(--color-bronze)]"
        >
          <Icon name="LuX" className="size-5" />
        </button>
      </dialog>
    </>
  );
};
