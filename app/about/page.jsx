import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ShieldCheck, 
  Check, 
  CheckCircle2, 
  Users, 
  Award, 
  ArrowRight, 
  Home, 
  Building2, 
  MapPin, 
  Star,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { business } from '@/config/business';

export const metadata = {
  title: 'About SafaiSaarthi | Professional Cleaning in Jaipur',
  description: 'Learn about SafaiSaarthi, Jaipur’s trusted cleaning partner. Verified in-house squads, hospital-grade eco chemicals, and transparent upfront pricing for homes and businesses.',
};

export default function AboutPage() {
  const stats = [
    { value: '1,200+', label: 'Homes & Spaces Cleaned', desc: 'Across Jaipur' },
    { value: '4.9 ★', label: 'Customer Rating', desc: 'Verified reviews' },
    { value: '100%', label: 'In-House Verified Staff', desc: 'Zero unvetted labor' },
    { value: '₹399', label: 'Transparent Starting Price', desc: 'No hidden charges' },
  ];

  const values = [
    {
      icon: ShieldCheck,
      iconColor: 'bg-sky-100 text-sky-600',
      title: 'Upfront Transparent Pricing',
      desc: 'No last-minute bargaining or surprise add-on charges. Every service has clear inclusions, exclusions, and fixed transparent rates starting at ₹399.',
    },
    {
      icon: Users,
      iconColor: 'bg-indigo-100 text-indigo-600',
      title: '100% In-House Verified Squad',
      desc: 'Never random daily-wage workers. Every cleaner is biometric and police background-checked, uniformed, and trained on 50-point standard checklists.',
    },
    {
      icon: Sparkles,
      iconColor: 'bg-emerald-100 text-emerald-600',
      title: 'Non-Acidic Green Chemistry',
      desc: 'We strictly use hospital-grade Taski / Diversey eco-cleaning formulations that break down tough groundwater scale without eroding tile glaze or emitting toxic fumes.',
    },
    {
      icon: Award,
      iconColor: 'bg-amber-100 text-amber-600',
      title: 'Supervised Quality Guarantee',
      desc: 'We inspect against a 50-point standard checklist before final sign-off. If any agreed area is not cleaned to satisfaction, we offer a free re-touch within 24 hours.',
    },
  ];

  const serviceAreas = [
    'Mansarovar',
    'Patrakar Colony',
    'Malviya Nagar',
    'Civil Lines',
    'Vaishali Nagar',
    'C-Scheme',
    'Jagatpura',
    'Raja Park',
    'Tonk Road',
    'Pratap Nagar',
    'Sitapura',
    'Bani Park',
    'Chitrakoot',
    'Sodala',
    'Ajmer Road',
  ];

  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/50 to-white py-16 lg:py-24 border-b border-slate-200/60">
        {/* Subtle Ambient Light Glows */}
        <div className="absolute top-0 right-10 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />

        <div className="container-max relative">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            {/* Live City Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-sky-700 shadow-sm ring-1 ring-sky-200/80 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>JAIPUR&apos;S TRUSTED EXPRESS CLEANING PARTNER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight text-balance">
              Pristine Spaces.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600">
                Complete Trust.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              We started SafaiSaarthi to replace unreliable local contractors and harsh acid cleaners with hospital-grade hygiene, German machine scrubbing, and 100% upfront transparent pricing across Jaipur.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Link href="/services" className="btn-primary">
                <span>Explore Cleaning Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/corporate-cleaning" className="btn-secondary">
                <span>Corporate &amp; Facility Care</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((st, i) => (
              <div 
                key={i} 
                className="card-base p-5 text-center bg-white/90 backdrop-blur border border-slate-200/80 shadow-soft"
              >
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{st.value}</div>
                <div className="text-xs sm:text-sm font-bold text-sky-700 mt-1">{st.label}</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">{st.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== OUR MISSION & STORY ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Mission Copy */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Our Mission"
                title="The Cleaning Standard Jaipur Truly Deserves"
                description="For years, finding reliable cleaning in Jaipur meant bargaining with unverified workers, worrying about property safety, or dealing with corrosive hydrochloric acids that permanently damage marble and grout."
              />

              <div className="space-y-4 text-sm text-slate-600 font-medium leading-relaxed">
                <p>
                  SafaiSaarthi was built to set a new benchmark. We brought professional hospitality protocols directly to everyday homes, apartments, villas, and businesses.
                </p>
                <p>
                  From tough groundwater salt deposits in Vaishali Nagar to oily kitchen chimneys in Mansarovar, our trained squads use scientific descaling chemistry and industrial machinery — delivering spotless results while keeping your family, pets, and surfaces completely safe.
                </p>
              </div>

              {/* Key Commitments Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  'Zero harmful hydrochloric acid — 100% surface-safe eco chemistry',
                  'Police & biometric verified in-house staff with company uniforms',
                  'Single-disc rotary floor scrubbers & vacuum extraction equipment',
                  'Fixed upfront pricing with live WhatsApp booking in under 60 seconds',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-lift border border-slate-200/90 aspect-[4/3] group">
                <Image
                  src="/images/fullhouse-cleaning.jpg"
                  alt="Spotless luxury home interior cleaned by SafaiSaarthi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-sm border border-white flex items-center gap-1.5">
                  <HeartHandshake className="h-4 w-4 text-sky-500" />
                  <span>The SafaiSaarthi Promise</span>
                </div>

                {/* Bottom Trust Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-black uppercase tracking-wider text-sky-300">Cleaned With Care</div>
                  <div className="text-sm font-bold text-white/95 mt-0.5">
                    Safe for Kids • Safe for Pets • Safe for Fine Marble &amp; Granite
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== OUR CORE VALUES ===================== */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/60">
        <div className="container-max">
          <SectionHeading
            center
            eyebrow="Our Core Values"
            title="Why Jaipur Families &amp; Businesses Trust Us"
            description="We hold ourselves to rigorous operational benchmarks so you always know exactly what to expect."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div 
                  key={i} 
                  className="card-base card-hover p-6 sm:p-7 flex flex-col justify-between group bg-white border border-slate-200/80"
                >
                  <div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${val.iconColor} mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors tracking-tight">
                      {val.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== RESIDENTIAL & COMMERCIAL DUAL SCOPE ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-max">
          <SectionHeading
            center
            eyebrow="Comprehensive Capabilities"
            title="Specialized Solutions For Every Property"
            description="Whether it's your private residence or a high-footfall business facility, we deploy specialized equipment and trained squads."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Residential */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-soft hover:shadow-lift hover:border-sky-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Home className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/80">
                    Homes &amp; Villas
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                  Residential Deep Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed font-medium">
                  Comprehensive care for kitchens, bathrooms, sofas, carpets, balconies, mattresses, and full houses across Jaipur apartments, independent villas, and bungalows.
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>Kitchen oil degreasing &amp; bathroom hard-water descaling</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>Sofa, carpet &amp; upholstery shampooing with moisture extraction</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>Fixed upfront rates starting ₹399 with live WhatsApp booking</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <span>Explore Residential Services</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: Commercial */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-soft hover:shadow-lift hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/80">
                    B2B &amp; Corporate AMC
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Commercial Facility Care
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed font-medium">
                  Heavy-duty sanitization and maintenance for corporate IT offices, boutique hotels, restaurants, retail showrooms, and residential societies with zero operational downtime.
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <span>Single-disc rotary floor buffing &amp; glass facade glazing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <span>Off-hours, night shifts &amp; Sunday full-day slots</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <span>100% GST tax invoices with input tax credit (ITC) eligibility</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  href="/corporate-cleaning"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <span>Explore Corporate Solutions</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== SERVICE AREA SECTION ===================== */}
      <section className="py-20 lg:py-24 bg-sky-50/70 border-t border-slate-200/60">
        <div className="container-max">
          <SectionHeading
            center
            eyebrow="Service Coverage"
            title="Serving Homes &amp; Businesses Across Jaipur"
            description="Our squads operate across all primary residential and commercial corridors in Jaipur with quick turnaround times."
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="card-base p-7 sm:p-9 bg-white border border-sky-100 shadow-soft">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Jaipur Express Operations</h3>
                    <p className="text-xs text-slate-500">Operating 7 days a week: 8:00 AM – 8:00 PM</p>
                  </div>
                </div>
                <Link 
                  href="/#coverage-checker"
                  className="btn-primary text-xs py-2.5 px-4"
                >
                  <span>Check Your Pincode</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Area Badges Grid */}
              <div className="pt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Popular Service Zones</div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-xl bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200/80 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <CTASection />
    </>
  );
}
