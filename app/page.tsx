import rawData from "@/data/templates.json";
import type { MensSalonTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySection } from "@/components/sections/WhySection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const templateData: MensSalonTemplateData = rawData;
const sectionData = templateData.categories.MensSalon.sections;
const commonData = templateData.common;

/*
  One landing page, sections in the order of the design. Each section's id (templates.json) matches the
  header links ("#about" → id="about"); every "Book" button leads to the contact form.
*/
export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.MensSalonHero1} />
      <AboutSection data={sectionData.About?.variants?.MensSalonAbout1} />
      <ServicesSection data={sectionData.Services?.variants?.MensSalonServices1} />
      <WhySection data={sectionData.Why?.variants?.MensSalonWhy1} />
      <PackagesSection data={sectionData.Packages?.variants?.MensSalonPackages1} />
      <GallerySection data={sectionData.Gallery?.variants?.MensSalonGallery1} />
      <TestimonialsSection data={sectionData.Testimonials?.variants?.MensSalonTestimonials1} />
      <ContactSection
        data={sectionData.Contact?.variants?.MensSalonContact1}
        form={sectionData.ContactForm?.variants?.MensSalonContactForm1}
        company={commonData.company}
      />
    </main>
  );
}
