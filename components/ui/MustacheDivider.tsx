type Props = {
  /** colour of the mustache and lines */
  className?: string;
  /** length of each line */
  lineClassName?: string;
  /** size of the mustache */
  mustacheClassName?: string;
};

/** Thin line – curled mustache – thin line, the ornament under the centred section titles */
export const MustacheDivider = ({ className = "", lineClassName = "w-20 lg:w-[9.75rem]", mustacheClassName = "h-5 w-12 lg:h-[1.5rem] lg:w-[4.25rem]" }: Props) => (
  <div aria-hidden="true" className={`flex items-center justify-center gap-3 lg:gap-[1.1rem] ${className}`}>
    <span className={`h-px bg-current opacity-70 ${lineClassName}`} />
    <svg viewBox="0 0 100 34" fill="currentColor" className={mustacheClassName}>
      <path d="M50 11.5C45.5 4 36 1.5 27 5.5 20 8.6 15.5 15 9.5 16.2 6 16.9 3 15.6 1 12.5c-.8 6.5 3 13.2 10.5 16.5 9.5 4.2 21 2.4 29.5-3.4 3.6-2.5 6.4-5.3 9-8.3 2.6 3 5.4 5.8 9 8.3 8.5 5.8 20 7.6 29.5 3.4C96 25.7 99.8 19 99 12.5c-2 3.1-5 4.4-8.5 3.7C84.5 15 80 8.6 73 5.5 64 1.5 54.5 4 50 11.5Z" />
    </svg>
    <span className={`h-px bg-current opacity-70 ${lineClassName}`} />
  </div>
);
