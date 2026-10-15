import Link from 'next/link';
import Image from 'next/image';
import { Home, Building2, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export function ResidentialCorporate() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(224,242,254,0.4)_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="container-max relative">
        <SectionHeading
          center
          eyebrow="Specialized Cleaning Solutions"
          title="Cleaning crafted for every space"
          description="Whether it is your cozy family home or a high-footfall business facility, we deploy trained squads and customized industrial equipment."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Residential Deep Cleaning */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-md shadow-slate-900/5 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between">
            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide bg-sky-50 text-sky-700 border border-sky-200/80">
                  <Home className="h-3.5 w-3.5 text-sky-500" />
                  <span>Home & Apartment Care</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                    Residential Cleaning
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Comprehensive deep cleaning for Jaipur apartments, independent villas, and bungalows. From tough bathroom hard-water scale to kitchen oil chimneys.
                  </p>
                </div>

                {/* Key feature points */}
                <div className="pt-1 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>Kitchen, Bathroom & Full House Deep Care</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>Sofa, Carpet & Mattress Fabric Extraction</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span>Transparent fixed pricing starting ₹399</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-sky-500/20 hover:bg-sky-600 hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Explore Home Services</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Visual Asset */}
              <div className="relative w-44 sm:w-52 h-44 sm:h-52 flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/images/3d-residential-home.jpg"
                  alt="3D Residential Home Villa"
                  fill
                  sizes="210px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bottom trust footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5 text-sky-600">
                <ShieldCheck className="h-4 w-4" /> 100% In-House Verified Cleaners
              </span>
              <span className="text-slate-400">Jaipur Express Delivery</span>
            </div>
          </div>

          {/* Card 2: Corporate & Facility Cleaning */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-md shadow-slate-900/5 hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between">
            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                  <Building2 className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Enterprise & B2B Hygiene</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    Corporate & Commercial
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Heavy-duty facility sanitization for IT offices, retail showrooms, boutique hotels, restaurants, clinics, and residential societies.
                  </p>
                </div>

                {/* Key feature points */}
                <div className="pt-1 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <span>Custom AMC Contracts & Flexible Night Shifts</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <span>Rotary Floor Scrubbing & High-Reach Glazing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <span>GST Invoicing with Dedicated Account Manager</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/corporate-cleaning"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-slate-900/20 hover:bg-slate-800 hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Visual Asset */}
              <div className="relative w-44 sm:w-52 h-44 sm:h-52 flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/images/3d-corporate-tower.jpg"
                  alt="3D Corporate Office Tower"
                  fill
                  sizes="210px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bottom trust footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5 text-indigo-600">
                <Sparkles className="h-4 w-4" /> Free Site Audit & Sample Patch
              </span>
              <span className="text-slate-400">B2B GST Invoicing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
