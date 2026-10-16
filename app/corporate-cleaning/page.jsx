import Link from "next/link";
import Image from "next/image";
import {
  Building,
  Hotel,
  Utensils,
  Store,
  Shirt,
  Home,
  ArrowRight,
  Check,
  ShieldCheck,
  Clock,
  FileText,
  Star,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { business } from "@/config/business";

export const metadata = {
  title: "Corporate Cleaning Services in Jaipur | SafaiSaarthi",
  description:
    "Professional cleaning solutions for offices, hotels, restaurants, retail stores, showrooms, and societies in Jaipur. Request a custom quote.",
};

export default function CorporateCleaningPage() {
  const propertyTypes = [
    {
      icon: Hotel,
      name: "Hotels",
      highlight: "Turnkey Turnover",
      desc: "Guest rooms, lobbies, dining halls, and common areas deep cleaned to hospitality standards.",
      highlights: ["Lobby & room sanitization", "Washroom descaling & polish"],
    },
    {
      icon: Utensils,
      name: "Restaurants",
      highlight: "Kitchen Degreasing",
      desc: "Dining areas, commercial kitchens, exhaust chimneys, and washrooms sanitized for FSSAI hygiene.",
      highlights: ["Heavy chimney & floor degreasing", "Food-safe non-toxic agents"],
    },
    {
      icon: Building,
      name: "Offices",
      highlight: "Workstations & Cabins",
      desc: "Workstations, meeting rooms, pantries, and carpets cleaned with zero disruption to employees.",
      highlights: ["Off-hours & weekend slots", "Carpet & ergonomic chair wash"],
    },
    {
      icon: Store,
      name: "Retail Stores",
      highlight: "Floors & Facades",
      desc: "Display areas, glass facades, vitrified floors, and storage rooms prepped for customers.",
      highlights: ["Streak-free glass glazing", "Vitrified floor buffing"],
    },
    {
      icon: Shirt,
      name: "Showrooms",
      highlight: "High-Gloss Finish",
      desc: "Premium cleaning for jewelry, apparel, and automobile showrooms demanding mirror finishes.",
      highlights: ["High-reach architectural dusting", "High-gloss tile & marble shine"],
    },
    {
      icon: Home,
      name: "Societies",
      highlight: "Common Areas & AMC",
      desc: "Common corridors, basements, clubhouses, stairwells, and amenities maintained consistently.",
      highlights: ["Pressure jetting for basements", "Scheduled weekly / monthly AMC"],
    },
  ];

  const services = [
    "One-Time Deep Cleaning",
    "Recurring Cleaning",
    "Post-Construction Cleaning",
    "Kitchen Cleaning",
    "Upholstery Cleaning",
    "Floor Care & Polishing",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-600 py-16 lg:py-24 text-white">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Copy & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 mb-5 border border-white/10 backdrop-blur-sm">
                <Building className="h-3.5 w-3.5 text-sky-400" />
                <span>Corporate &amp; Facility Cleaning</span>
                <span className="text-white/20">•</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Jaipur
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                Professional Cleaning Solutions For Your Business
              </h1>

              <p className="mt-5 text-base sm:text-lg text-navy-200 leading-relaxed max-w-xl">
                Tell us about your property and cleaning requirements. From offices to hotels, we deliver reliable, high-standard commercial cleaning and flexible AMC contracts.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link href="/corporate-enquiry" className="btn-primary">
                  <span>Request a Custom Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust Badges Strip */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-medium text-navy-200">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                  <span>100% In-House Verified Staff</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>Off-Hours &amp; Night Shifts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-indigo-400" />
                  <span>GST Billing &amp; AMC Plans</span>
                </div>
              </div>
            </div>

            {/* Right Column: Balanced Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/other-cleaning.jpg"
                    alt="Professional commercial cleaning equipment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-navy shadow-sm flex items-center gap-1 border border-white">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9/5 Corporate Rating</span>
                  </div>

                  {/* Bottom Text Strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-300">Industrial Equipment &amp; Care</div>
                    <div className="text-sm font-semibold text-white/90">Rotary Scrubbers &amp; Taski Solutions</div>
                  </div>
                </div>

                {/* Quick Info Grid below image */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-white">
                  <div className="rounded-xl bg-white/5 p-2 border border-white/5">
                    <div className="text-xs font-bold text-sky-300">Free</div>
                    <div className="text-[10px] text-navy-200">Site Audit</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-2 border border-white/5">
                    <div className="text-xs font-bold text-emerald-400">Night</div>
                    <div className="text-[10px] text-navy-200">Shifts Available</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-2 border border-white/5">
                    <div className="text-xs font-bold text-white">100%</div>
                    <div className="text-[10px] text-navy-200">GST Invoiced</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 lg:py-24">
        <div className="container-max">
          <SectionHeading
            center
            eyebrow="Who We Serve"
            title="Cleaning solutions for every business"
            description="From offices to hotels, we provide professional cleaning tailored to your industry."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyTypes.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.name} className="card-base card-hover p-6 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                        {pt.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy group-hover:text-sky-600 transition-colors">
                      {pt.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-light leading-relaxed">
                      {pt.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border space-y-1.5">
                      {pt.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-ink">
                          <Check className="h-3.5 w-3.5 text-sky-500 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3">
                    <Link
                      href={`/corporate-enquiry?propertyType=${encodeURIComponent(pt.name)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 group-hover:text-sky-700 transition-colors"
                    >
                      <span>Request Quote for {pt.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 lg:py-24 bg-sky-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lift">
              <Image
                src="/images/corporate-office-clean.jpg"
                alt="Spotless modern corporate office interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 backdrop-blur-md px-3.5 py-2 text-xs font-bold text-navy shadow-sm border border-white">
                <span className="text-sky-600 font-extrabold">50-Point Standard Checklist</span> • Supervised Execution
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Approach"
                title="Custom cleaning plans for your business"
                description="Every business has unique cleaning needs. We work with you to understand your space, schedule, and requirements."
              />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-border shadow-2xs">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-100 flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-sky-600" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-ink">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-ink-light">
                <ShieldCheck className="h-4 w-4 text-sky-500" />
                Custom pricing based on your specific requirements &amp; property area
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/corporate-enquiry" className="btn-primary">
                  Request a Custom Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${business.whatsappNumber}?text=Hi%20SafaiSaarthi,%20I%20want%20to%20enquire%20about%20corporate%20cleaning%20services%20in%20Jaipur.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site CTA Section */}
      <CTASection />
    </>
  );
}
