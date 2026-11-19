export interface ThemeFonts {
  primary: string;
  heading: string;
  label: string;
  condensed: string;
  accent: string;
  footer: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
  lang: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ContactItem {
  id: string;
  icon: string;
  /** icon in the header's top bar, when it differs from `icon` */
  topBarIcon?: string;
  title: string;
  lines: string[];
  url: string;
}

export interface CompanyData {
  name: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  contactItems: ContactItem[];
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface FooterData {
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  socialTitle: string;
  socialLinks: SocialLink[];
  copyrightText: string;
}

export interface HeaderData {
  logoUrl: string;
  homeLabel: string;
  followLabel: string;
  socialLinks: SocialLink[];
  navLinks: LinkItem[];
  buttonText: string;
  buttonIcon: string;
  buttonUrl: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface IconCard {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface HeroData {
  id: string;
  label: string;
  titleTop: string;
  titleBottom: string;
  titleAccent: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface AboutData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  paragraphs: string[];
  features: IconCard[];
  image: string;
  imageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  videoUrl: string;
  videoPlayLabel: string;
  videoCloseLabel: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  image: string;
  imageAlt: string;
}

export interface ServicesData {
  id: string;
  label: string;
  title: string;
  items: ServiceItem[];
}

export interface StatItem {
  id: string;
  icon: string;
  /** number the counter runs up to */
  value: number;
  /** shown right after the number, e.g. "K+" or "%" */
  suffix?: string;
  label: string;
}

export interface WhyData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  stats: StatItem[];
  image: string;
  imageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
}

export interface PackageItem {
  id: string;
  icon: string;
  title: string;
  price: string;
  features: { id: string; text: string }[];
  buttonText: string;
  buttonUrl: string;
  featured: boolean;
  badge: string;
}

export interface PackagesData {
  id: string;
  label: string;
  title: string;
  description: string;
  items: PackageItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export interface GalleryData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  items: GalleryItem[];
  viewerLabel: string;
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  quote: string;
  image: string;
}

export interface TestimonialsData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  rating: number;
  ratingLabel: string;
  showLabel: string;
  startIndex: number;
  items: TestimonialItem[];
}

export interface ContactData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  image: string;
  imageAlt: string;
  formTitle: string;
  formIcon: string;
}

export interface FormField {
  placeholder: string;
  icon: string;
}

export interface ContactFormData {
  fields: {
    name: FormField;
    phone: FormField;
    email: FormField;
    service: FormField;
    message: FormField;
  };
  /** how a package appears in the service list; the services and packages themselves come from their sections */
  packageOption: string;
  button: string;
  sending: string;
  successTitle: string;
  success: string;
  closeLabel: string;
}

interface Variants<T> {
  variants: Record<string, T>;
}

export interface TemplateComponent {
  key: string;
  component: string;
}

export interface MensSalonTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    company: CompanyData;
    Footer: FooterData;
  };
  categories: {
    MensSalon: {
      sections: {
        Header?: Variants<HeaderData>;
        Hero?: Variants<HeroData>;
        About?: Variants<AboutData>;
        Services?: Variants<ServicesData>;
        Why?: Variants<WhyData>;
        Packages?: Variants<PackagesData>;
        Gallery?: Variants<GalleryData>;
        Testimonials?: Variants<TestimonialsData>;
        Contact?: Variants<ContactData>;
        ContactForm?: Variants<ContactFormData>;
      };
      templateComponents: {
        [template: string]: {
          shared: Record<string, string>;
          pages: Record<string, { components: TemplateComponent[] }>;
        };
      };
    };
  };
}
