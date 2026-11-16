import type { IconBaseProps, IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaQuoteRight,
  FaStar,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  LuArrowRight,
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuCircleCheck,
  LuCrown,
  LuDroplet,
  LuGem,
  LuHeart,
  LuLeaf,
  LuMail,
  LuMenu,
  LuMessageCircleMore,
  LuPhone,
  LuPlus,
  LuScissors,
  LuUser,
  LuX,
} from "react-icons/lu";
import { PiFlowerLotus, PiOfficeChair, PiUsersThree } from "react-icons/pi";
import { TbCalendarStats } from "react-icons/tb";

// Icons drawn for this design (react-icons has no close match): same props as the library icons.
const outline = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Scissors standing upright, handles at the bottom */
const ScissorsUp: IconType = ({ style, ...props }: IconBaseProps) => (
  <LuScissors {...props} style={{ ...style, transform: "rotate(-90deg)" }} />
);

/** Head with a full beard and mustache (filled) */
const BeardFace: IconType = ({ className, strokeWidth = 1.8 }: IconBaseProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M5 11V9a7 7 0 0 1 14 0v2" {...outline} strokeWidth={strokeWidth} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.5 10.5c.6 1.4 1.6 2.2 2.6 2.4l.4-1.7c.3-.9 1.2-1.2 2-.9l2.5.9 2.5-.9c.8-.3 1.7 0 2 .9l.4 1.7c1-.2 2-1 2.6-2.4.4 5.3-2.6 10.5-7.5 10.5S4.1 15.8 4.5 10.5ZM12 15.2c-1.1-.9-2.4-1.1-3.4-.6.5 1.4 1.8 2.2 3.4 2.2s2.9-.8 3.4-2.2c-1-.5-2.3-.3-3.4.6Z"
    />
  </svg>
);

/** Outline of a man's face: hairline, ears, eyes, nose and mouth */
const ManFace: IconType = ({ className, strokeWidth = 1.6 }: IconBaseProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...outline} strokeWidth={strokeWidth}>
    <path d="M12 3c-3.6 0-6 2.6-6 6.5V12c0 4.3 2.7 9 6 9s6-4.7 6-9V9.5C18 5.6 15.6 3 12 3Z" />
    <path d="M6 11.2c-1.1-.2-1.8.5-1.6 1.6.2 1.1.9 1.8 1.9 1.8M18 11.2c1.1-.2 1.8.5 1.6 1.6-.2 1.1-.9 1.8-1.9 1.8" />
    <path d="M6 9.5c2.6-.2 4.6-1.4 6-3.5 1.4 2.1 3.4 3.3 6 3.5" />
    <path d="M12 12.6v2.5h-.9M10.3 17.3c1.1.6 2.3.6 3.4 0" />
    <circle cx="9.5" cy="12" r=".6" fill="currentColor" />
    <circle cx="14.5" cy="12" r=".6" fill="currentColor" />
  </svg>
);

/** Trophy cup with a star on it */
const TrophyStar: IconType = ({ className, strokeWidth = 1.6 }: IconBaseProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...outline} strokeWidth={strokeWidth}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    <path d="m12 4.6.85 1.75 1.9.27-1.38 1.34.33 1.9L12 8.96l-1.7.9.33-1.9-1.38-1.34 1.9-.27Z" />
  </svg>
);

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  BeardFace,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaQuoteRight,
  FaStar,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  LuArrowRight,
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuCircleCheck,
  LuCrown,
  LuDroplet,
  LuGem,
  LuHeart,
  LuLeaf,
  LuMail,
  LuMenu,
  LuMessageCircleMore,
  LuPhone,
  LuPlus,
  LuUser,
  LuX,
  ManFace,
  PiFlowerLotus,
  PiOfficeChair,
  PiUsersThree,
  ScissorsUp,
  TbCalendarStats,
  TrophyStar,
};

type Props = {
  name: string;
  className?: string;
  // Line thickness of the outline icons (Lu, Tb and the drawn ones); the filled icons (Fa, Pi) keep their own shape.
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.8 }: Props) => {
  const Component = icons[name] ?? ScissorsUp;
  const filled = name.startsWith("Fa") || name.startsWith("Pi");
  return <Component className={className} strokeWidth={filled ? undefined : strokeWidth} aria-hidden="true" />;
};
