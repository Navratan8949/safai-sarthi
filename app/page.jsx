import { Hero } from "@/components/Hero";
import { PincodeChecker } from "@/components/PincodeChecker";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceScopeSection } from "@/components/ServiceScopeSection";
import { ResidentialCorporate } from "@/components/ResidentialCorporate";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "SafaiSaarthi | Professional Cleaning Services in Jaipur",
  description:
    "Professional cleaning services for homes and businesses across selected areas of Jaipur. Transparent pricing, clear scope, easy WhatsApp booking.",
};

export default function Home() {
  const popular = services.slice(0, 6);

  return (
    <>
      <Hero />

      <section
        id="coverage-checker"
        className="py-8 lg:py-12 -mt-8 lg:-mt-12 relative z-10 scroll-mt-24"
      >
        <div className="container-max">
          <PincodeChecker />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-max">
          <SectionHeading
            center
            eyebrow="Service Categories"
            title="Browse by category"
            description="Find the right cleaning service for your space."
          />
        </div>
        <div className="mt-10">
          <CategoryGrid />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/60 via-sky-50/40 to-slate-50/60 border-t border-slate-200/60 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-sky-200/25 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="container-max relative">
          <SectionHeading
            center
            eyebrow="Popular Services"
            title="Popular Cleaning Services"
            description="Our most requested cleaning services for homes in Jaipur."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {popular.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-sm px-7 py-3.5 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 transition-all active:scale-95"
            >
              <span>Explore All 8+ Cleaning Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <ServiceScopeSection />
      <ResidentialCorporate />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
