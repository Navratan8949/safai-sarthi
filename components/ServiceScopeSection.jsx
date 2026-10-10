"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  Plus,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/data/services";

export function ServiceScopeSection() {
  // Pick top 4 representative services for quick tab switching
  const featuredServices = services.slice(0, 4);
  const [activeSlug, setActiveSlug] = useState(featuredServices[0].slug);

  const activeService =
    featuredServices.find((s) => s.slug === activeSlug) || featuredServices[0];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/50 via-white to-slate-50/50 border-t border-slate-200/70">
      <div className="container-max">
        <SectionHeading
          center
          eyebrow="Transparent Service Scope"
          title="Know exactly what you are getting"
          description="Every service clearly lists what is included, what is not, and optional add-ons. No surprises, no hidden fees."
        />

        {/* Interactive Service Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {featuredServices.map((service) => {
            const isActive = service.slug === activeSlug;
            return (
              <button
                key={service.slug}
                onClick={() => setActiveSlug(service.slug)}
                type="button"
                className={`rounded-2xl p-2 px-3 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/15 scale-102"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/80 shadow-2xs"
                }`}
              >
                {service.name}
              </button>
            );
          })}
        </div>

        {/* Main Service Scope Card */}
        <div className="mt-8 max-w-5xl mx-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-hidden transition-all duration-300">
          {/* Top Service Meta Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-navy-600 p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-sky-500/20 border border-sky-400/30 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-sky-300">
                  {activeService.category}
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1 font-semibold">
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                  {activeService.duration}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {activeService.name}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-xl font-medium">
                {activeService.shortDescription}
              </p>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0">
              <span className="text-xs text-slate-300 font-semibold">
                Starts from
              </span>
              <span className="text-2xl font-black text-white">
                ₹{activeService.price}
              </span>
              <Link
                href={`/services/${activeService.slug}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 px-4 py-2 text-xs font-bold text-white transition-all hover:shadow-md cursor-pointer"
              >
                <span>Book This</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* 3-Pillar Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Column 1: 100% Included */}
            <div className="p-6 sm:p-7 bg-emerald-50/20">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 shadow-2xs">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                      What&apos;s Included
                    </h4>
                    <p className="text-[11px] text-emerald-700 font-bold">
                      100% in base price
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {activeService.included.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: What We Don't Do (Excluded) */}
            <div className="p-6 sm:p-7 bg-amber-50/20">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600 shadow-2xs">
                    <X className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                      Not Included
                    </h4>
                    <p className="text-[11px] text-rose-600 font-bold">
                      Scope boundaries
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {activeService.excluded.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 font-medium"
                  >
                    <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-100 text-rose-600 flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Optional Add-ons */}
            <div className="p-6 sm:p-7 bg-sky-50/20">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600 shadow-2xs">
                    <Plus className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                      Add-on Upgrades
                    </h4>
                    <p className="text-[11px] text-sky-600 font-bold">
                      Customize your job
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {activeService.addOns && activeService.addOns.length > 0 ? (
                  activeService.addOns.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-white border border-slate-100 text-xs sm:text-sm text-slate-800 shadow-2xs"
                    >
                      <span className="flex items-start gap-2 font-medium">
                        <Plus className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>{item.name}</span>
                      </span>
                      <span className="font-extrabold text-slate-900 bg-sky-50 px-2 py-0.5 rounded-md text-xs flex-shrink-0">
                        +₹{item.price}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-xs text-slate-400 italic">
                    No add-ons needed for this service.
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Reassurance Footer Strip */}
          <div className="border-t border-slate-100 px-6 sm:px-8 py-4 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
              <span className="font-semibold text-slate-700">
                100% Satisfaction Re-Clean Guarantee: If any included item is
                missed, we re-clean it free within 24 hours.
              </span>
            </div>

            <Link
              href="/services"
              className="text-sky-600 hover:text-sky-700 font-bold flex items-center gap-1 flex-shrink-0"
            >
              <span>Explore All Checklist Details</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
