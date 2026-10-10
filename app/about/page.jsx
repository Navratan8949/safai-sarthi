import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { Home, Building, MapPin, Sparkles, ShieldCheck, Check } from 'lucide-react';

export const metadata = {
  title: 'About SafaiSaarthi | Professional Cleaning in Jaipur',
  description: 'Learn about SafaiSaarthi, your trusted cleaning partner in Jaipur. Professional cleaning services for homes and businesses.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-sky-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight text-balance">
              Your trusted cleaning partner in Jaipur
            </h1>
            <p className="mt-5 text-base sm:text-lg text-ink-light leading-relaxed">
              SafaiSaarthi provides professional cleaning services for homes and businesses across selected areas of Jaipur. We believe in transparent pricing, clear service scope, and a simple booking experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="Our Approach" title="Cleaning made simple and transparent" />
              <p className="mt-4 text-base text-ink-light leading-relaxed">
                We built SafaiSaarthi to make professional cleaning accessible and straightforward. No hidden charges, no unclear scope — just clear service details, transparent pricing, and an easy WhatsApp booking process.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Transparent pricing with no hidden charges',
                  'Clear service scope on every service page',
                  'Easy booking through WhatsApp',
                  'Professional trained cleaning team',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-100 flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-sky-600" />
                    </div>
                    <span className="text-sm text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-base p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 mb-4">
                  <Home className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-base font-bold text-navy">Residential Cleaning</h3>
                <p className="mt-2 text-sm text-ink-light leading-relaxed">Deep cleaning for kitchens, bathrooms, bedrooms, sofas, carpets, and full homes.</p>
              </div>
              <div className="card-base p-6 mt-0 sm:mt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-600 mb-4">
                  <Building className="h-6 w-6 text-sky-400" />
                </div>
                <h3 className="text-base font-bold text-navy">Commercial Cleaning</h3>
                <p className="mt-2 text-sm text-ink-light leading-relaxed">Custom cleaning solutions for offices, hotels, restaurants, and retail spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-sky-50">
        <div className="container-max">
          <SectionHeading center eyebrow="Service Area" title="Serving selected areas of Jaipur" description="We currently serve selected pincodes in Jaipur. Check your pincode on our homepage to see if we serve your area." />
          <div className="mt-8 max-w-md mx-auto">
            <div className="card-base p-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 flex-shrink-0">
                <MapPin className="h-6 w-6 text-sky-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy">Jaipur, Rajasthan</p>
                <p className="text-xs text-ink-light">Selected pincodes — check availability on homepage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
