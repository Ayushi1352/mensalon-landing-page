type Props = {
  label: string;
  /** "after": one line after the label (left-aligned headings); "both": a line on each side (centred headings) */
  lines?: "after" | "both";
  /** text colour, size and letter spacing of this section's label */
  className?: string;
  /** length and colour of the lines */
  lineClassName?: string;
};

/** Small spaced-out uppercase label above a section title, with thin lines beside it */
export const Eyebrow = ({ label, lines = "after", className = "", lineClassName = "" }: Props) => {
  const line = <span aria-hidden="true" className={`h-px shrink-0 bg-current lg:h-[0.125rem] ${lineClassName}`} />;

  return (
    <p className={`flex items-center gap-3 font-label font-bold uppercase lg:gap-[1.1rem] ${lines === "both" ? "justify-center" : ""} ${className}`}>
      {lines === "both" && line}
      <span>{label}</span>
      {line}
    </p>
  );
};
