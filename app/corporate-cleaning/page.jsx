import Link from 'next/link';
import Image from 'next/image';
import { Building, Hotel, Utensils, Store, Shirt, Home, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';

export const metadata = {
  title: 'Corporate Cleaning Services in Jaipur | SafaiSaarthi',
  description: 'Professional cleaning solutions for offices, hotels, restaurants, retail stores, showrooms, and societies in Jaipur. Request a custom quote.',
};

export default function CorporateCleaningPage() {
  const propertyTypes = [
    { icon: Hotel, name: 'Hotels', desc: 'Guest rooms, lobbies, and common areas' },
    { icon: Utensils, name: 'Restaurants', desc: 'Dining areas, kitchens, and washrooms' },
    { icon: Building, name: 'Offices', desc: 'Workstations, meeting rooms, and pantries' },
    { icon: Store, name: 'Retail Stores', desc: 'Display areas, floors, and storage' },
    { icon: Shirt, name: 'Showrooms', desc: 'Premium cleaning for customer spaces' },
    { icon: Home, name: 'Societies', desc: 'Common areas, corridors, and amenities' },
  ];

  const services = [
    'One-Time Deep Cleaning',
    'Recurring Cleaning',
    'Post-Construction Cleaning',
    'Kitchen Cleaning',
    'Upholstery Cleaning',
    'Floor Care & Polishing',
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-navy-600 py-16 lg:py-24">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="container-max relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 mb-5">
              <Building className="h-3.5 w-3.5" />
              Corporate Cleaning
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight text-balance">
              Professional Cleaning Solutions For Your Business
            </h1>
            <p className="mt-5 text-base sm:text-lg text-navy-200 leading-relaxed">
              Tell us about your property and cleaning requirements. We&apos;ll help you find the right cleaning solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/corporate-enquiry" className="btn-primary">
                Request a Custom Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                <div key={pt.name} className="card-base card-hover p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 mb-4">
                    <Icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{pt.name}</h3>
                  <p className="mt-2 text-sm text-ink-light leading-relaxed">{pt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-sky-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lift">
              <Image
                src="/images/corporate-cleaning.jpg"
                alt="Modern office interior cleaning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Approach"
                title="Custom cleaning plans for your business"
                description="Every business has unique cleaning needs. We work with you to understand your space, schedule, and requirements."
              />
              <div className="mt-6 space-y-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-100 flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-sky-600" />
                    </div>
                    <span className="text-sm text-ink">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-ink-light">
                <ShieldCheck className="h-4 w-4 text-sky-500" />
                Custom pricing based on your specific requirements
              </div>
              <Link href="/corporate-enquiry" className="mt-8 btn-primary">
                Request a Custom Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
