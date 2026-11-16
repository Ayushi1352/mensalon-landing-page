import type { IconType } from "react-icons";
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
import { GiBeard } from "react-icons/gi";
import {
  LuArmchair,
  LuArrowRight,
  LuCalendarCheck,
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
  LuTrophy,
  LuUser,
  LuUsers,
  LuX,
} from "react-icons/lu";
import { PiFlowerLotus } from "react-icons/pi";
import { TbMoodNeutral } from "react-icons/tb";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
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
  GiBeard,
  LuArmchair,
  LuArrowRight,
  LuCalendarCheck,
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
  LuTrophy,
  LuUser,
  LuUsers,
  LuX,
  PiFlowerLotus,
  TbMoodNeutral,
};

type Props = {
  name: string;
  className?: string;
  // Line thickness of the outline icons (Lu, Tb); the filled icons (Fa, Gi, Pi) keep their own shape.
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.8 }: Props) => {
  const Component = icons[name] ?? LuScissors;
  const outline = name.startsWith("Lu") || name.startsWith("Tb");
  return <Component className={className} strokeWidth={outline ? strokeWidth : undefined} aria-hidden="true" />;
};
