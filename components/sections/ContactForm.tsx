"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types/templates.types";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";

/** Outlined fields with an icon on the left */
const base =
  "w-full appearance-none rounded-lg border-[1.5px] border-[var(--color-border-field)] bg-[var(--color-bg-main)] pl-12 pr-4 text-base text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-text)] focus:border-[var(--color-brown)] lg:rounded-[0.5rem] lg:border-[0.07rem] lg:pl-[3.5rem] lg:text-[1.03rem]";
const field = `${base} h-[3.25rem] lg:h-[3rem]`;
const iconClass = "pointer-events-none absolute left-4 size-5 text-[var(--color-heading)] lg:left-[1.15rem] lg:size-[1.25rem]";

const Field = ({ icon, className = "", children }: { icon: string; className?: string; children: React.ReactNode }) => (
  <div className={`relative flex items-center ${className}`}>
    {children}
    <Icon name={icon} className={`${iconClass} top-1/2 -translate-y-1/2`} />
  </div>
);

/** Optional service list; it shows its placeholder until a service is picked */
const ServiceSelect = ({ icon, placeholder, options }: { icon: string; placeholder: string; options: string[] }) => {
  const [value, setValue] = useState("");

  return (
    <Field icon={icon} className="sm:col-span-2">
      <select name="service" value={value} onChange={(event) => setValue(event.target.value)} aria-label={placeholder} className={`${field} cursor-pointer pr-12`}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Icon name="LuChevronDown" className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[var(--color-heading)] lg:right-[1.15rem] lg:size-[1.3rem]" strokeWidth={2} />
    </Field>
  );
};

/** Contact form with a dummy submit: sending state, then a thank-you message in place of the button */
export const ContactForm = ({ data }: { data?: ContactFormData }) => {
  const submit = useDummySubmit();
  if (!data) return null;
  const { fields } = data;

  // remounting the form (via key) after each send clears every field, including the controlled select
  return (
    <form
      key={submit.round}
      onSubmit={submit.onSubmit}
      onInput={submit.onInput}
      aria-busy={submit.sending}
      className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-[2.2rem] lg:gap-x-[1.2rem] lg:gap-y-[1.25rem]"
    >
      <Field icon={fields.name.icon}>
        <input name="name" required placeholder={fields.name.placeholder} aria-label={fields.name.placeholder} autoComplete="name" className={field} />
      </Field>
      <Field icon={fields.phone.icon}>
        <input name="phone" type="tel" required placeholder={fields.phone.placeholder} aria-label={fields.phone.placeholder} autoComplete="tel" className={field} />
      </Field>
      <Field icon={fields.email.icon} className="sm:col-span-2">
        <input name="email" type="email" required placeholder={fields.email.placeholder} aria-label={fields.email.placeholder} autoComplete="email" className={field} />
      </Field>
      <ServiceSelect icon={fields.service.icon} placeholder={fields.service.placeholder} options={data.serviceOptions} />
      <div className="relative sm:col-span-2">
        <textarea
          name="message"
          required
          rows={4}
          placeholder={fields.message.placeholder}
          aria-label={fields.message.placeholder}
          className={`${base} block h-36 resize-none pt-3.5 lg:h-[8rem] lg:pt-[1.05rem]`}
        />
        <Icon name={fields.message.icon} className={`${iconClass} top-3.5 lg:top-[1.05rem]`} />
      </div>

      {/* the thank-you message takes the place of the button, inside the form, so it never covers the fields */}
      {submit.showMessage ? (
        <FormSuccess
          name={submit.name}
          title={data.successTitle}
          message={data.success}
          leaving={submit.status === "leaving"}
          visibleFor={submit.visibleFor}
          onClose={submit.dismiss}
          closeLabel={data.closeLabel}
          className="sm:col-span-2 lg:mt-[0.4rem]"
        />
      ) : (
        <button
          type="submit"
          disabled={submit.sending}
          className="group mx-auto mt-2 flex h-14 w-full max-w-xs items-center justify-center gap-3 rounded-lg bg-[var(--color-brown-button)] text-lg font-semibold text-[var(--color-white)] shadow-[0_0.75rem_1.5rem_-0.75rem_var(--color-shadow-bronze)] transition-colors hover:bg-[var(--color-gold-deep)] hover:text-[var(--color-heading)] disabled:cursor-wait disabled:opacity-80 sm:col-span-2 lg:mt-[0.4rem] lg:h-[3.3rem] lg:w-[19rem] lg:max-w-none lg:rounded-[0.5rem] lg:text-[1.3rem]"
        >
          {submit.sending ? (
            <>
              <Spinner className="size-5" />
              {data.sending}
            </>
          ) : (
            <>
              {data.button}
              <Icon name="LuArrowRight" className="size-5 transition-transform group-hover:translate-x-0.5 lg:size-[1.5rem]" strokeWidth={2.2} />
            </>
          )}
        </button>
      )}
    </form>
  );
};
