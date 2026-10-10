'use client';

import Link from 'next/link';
import {
  MapPin,
  Sparkles,
  CalendarCheck,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Check Locality',
      subtitle: 'Instant Pincode Check',
      desc: 'Enter your 6-digit Jaipur pincode or tap "Auto-Detect" to check immediate squad availability.',
      icon: MapPin,
      gradient: 'from-sky-500 to-sky-600',
      iconBg: 'bg-sky-50 text-sky-600',
      badgeColor: 'text-sky-600',
      highlight: '30+ Jaipur Localities',
    },
    {
      step: '02',
      title: 'Pick Your Service',
      subtitle: 'Custom Cleaning Scope',
      desc: 'Choose deep home cleaning, sofa shampooing, bathroom descale, or kitchen scrub with clear prices.',
      icon: Sparkles,
      gradient: 'from-indigo-500 to-indigo-600',
      iconBg: 'bg-indigo-50 text-indigo-600',
      badgeColor: 'text-indigo-600',
      highlight: 'Zero Hidden Charges',
    },
    {
      step: '03',
      title: 'Choose Date & Slot',
      subtitle: 'Flexible Scheduling',
      desc: 'Pick your preferred 2-hour arrival window — same-day express service or advance scheduled slots.',
      icon: CalendarCheck,
      gradient: 'from-amber-500 to-amber-600',
      iconBg: 'bg-amber-50 text-amber-600',
      badgeColor: 'text-amber-600',
      highlight: 'Same-Day Slots Available',
    },
    {
      step: '04',
      title: 'WhatsApp Confirmation',
      subtitle: 'Confirmed in 60s',
      desc: 'Review itemized summary and receive instant confirmation on WhatsApp with your dedicated supervisor.',
      icon: MessageCircle,
      gradient: 'from-emerald-500 to-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-600',
      badgeColor: 'text-emerald-600',
      highlight: 'Verified Staff Assigned',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 scroll-mt-20 bg-slate-50/60 border-t border-slate-200/70">
      <div className="container-max">
        <SectionHeading
          center
          eyebrow="Easy 4-Step Process"
          title="Booking your cleaning in 60 seconds"
          description="Zero hassle, zero paperwork. Quick, transparent, and confirmed on your phone."
        />

        {/* 4 Cards Grid - Clean, spacious, NO overlapping text */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between rounded-3xl bg-white p-7 border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Step Number Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl font-black text-sm text-white bg-gradient-to-tr ${step.gradient} shadow-md shadow-slate-900/10`}>
                      {step.step}
                    </span>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${step.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider ${step.badgeColor} block mb-1`}>
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Highlight Feature Pill */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button at bottom */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore All Cleaning Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
