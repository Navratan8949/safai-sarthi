"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Star,
  Zap,
  MessageCircle,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/60 via-sky-50/40 to-white pt-6 pb-12 lg:pt-12 lg:pb-20">
      {/* Performance-optimized Ambient Mesh */}
      <div className="absolute top-0 right-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(125,211,252,0.3)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute top-40 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(186,230,253,0.3)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Compelling Copy & High-Trust CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Live City Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-sky-700 shadow-sm ring-1 ring-sky-200/70 backdrop-blur-md animate-fade-in">
              <span className="flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>JAIPUR&apos;S #1 EXPRESS CLEANING SQUAD</span>
              <span className="text-slate-300">•</span>
              <span className="text-amber-500 flex items-center gap-1 font-extrabold">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> 4.9
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight animate-fade-up">
              Ghar Ki Chamak.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600">
                Saarthi Ka Bharosa.
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Deep home cleaning, sofa shampooing &amp; sanitization done by
              100% background-verified experts.
              <span className="text-slate-900 font-semibold">
                {" "}
                Safe, non-toxic products &amp; transparent upfront pricing
              </span>{" "}
              across Jaipur.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a Cleaning</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="https://wa.me/?text=Hi%20SafaiSaarthi,%20I%20want%20to%20book%20a%20cleaning%20service%20in%20Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/80 px-6 py-3.5 text-sm font-bold text-emerald-800 transition-all duration-300 hover:bg-emerald-100 hover:border-emerald-500 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-600/20" />
                <span>WhatsApp Booking (60s)</span>
              </a>
            </div>

            {/* Quick Guarantees Pill Badges */}
            <div
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs font-semibold text-slate-600 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/60 shadow-2xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>100% In-House Verified Staff</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="h-4 w-4 text-sky-500" />
                <span>Zero Hidden Charges</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/60 shadow-2xs">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>Eco-Friendly Chemicals</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Mascot Showcase matching reference design */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[460px]">
              {/* Outer Ambient Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-sky-400/25 via-cyan-300/20 to-amber-200/20 blur-2xl pointer-events-none" />

              {/* Main 3D Mascot Character Stage */}
              <div className="relative overflow-hidden aspect-square flex items-center justify-center">
                <Image
                  src="/images/hero-clearn.png"
                  alt="SafaiSaarthi 3D Professional Cleaner Squad Leader with Industrial Equipment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain object-bottom transition-transform duration-700 hover:scale-105"
                />

                {/* Bottom Live Dispatch Banner */}
                {/* <div className="absolute bottom-3 inset-x-3.5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-lg border border-slate-100 flex items-center justify-between gap-2 z-20">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600 font-bold text-sm shadow-xs">
                      ⚡
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 leading-tight">
                        Jaipur Express Squad
                      </p>
                      <p className="text-[11px] text-sky-600 font-bold leading-tight">
                        Arrival at doorstep in 60 mins
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black text-emerald-700 border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE
                  </span>
                </div> */}
              </div>

              {/* Floating Badge 1 (Top-Left): Trusted by 15,000+ Jaipur Homes (Reference Style) */}
              <div className="absolute top-12 -left-2 rounded-full bg-white px-4 py-2 shadow-xl border border-sky-100 hidden sm:flex items-center gap-2.5 z-30 animate-float">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-500 flex-shrink-0">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-xs font-black text-slate-800 whitespace-nowrap">
                  Trusted
                </span>
              </div>

              {/* Floating Badge 2 (Center-Right): 100% In-House Verified Teams (Reference Style) */}
              <div
                className="absolute top-1/2 -right-16 rounded-full bg-white px-4 py-2 shadow-xl border border-sky-100 hidden sm:flex items-center gap-2.5 z-30 animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span className="text-xs font-black text-slate-800 whitespace-nowrap">
                  Verified In-House Teams
                </span>
              </div>

              {/* Floating Badge 3 (Bottom-Left): Safe & Eco-Friendly Products (Reference Style) */}
              <div
                className="absolute bottom-16 -left-5 rounded-full bg-white px-4 py-2 shadow-xl border border-sky-100 hidden sm:flex items-center gap-2.5 z-30 animate-float"
                style={{ animationDelay: "2.4s" }}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-sky-600 flex-shrink-0">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-xs font-black text-slate-800 whitespace-nowrap">
                  Safe & Eco-Friendly Products
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Enterprise Stats Strip under Hero */}
        {/* <div className="mt-14 lg:mt-18 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-slate-200/70 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 flex-shrink-0">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  15,000+
                </p>
                <p className="text-xs font-semibold text-slate-500">
                  Homes Cleaned in Jaipur
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-slate-200/70 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 flex-shrink-0">
                <Star className="h-6 w-6 fill-amber-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  4.9 / 5.0
                </p>
                <p className="text-xs font-semibold text-slate-500">
                  Google Customer Rating
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-slate-200/70 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  100%
                </p>
                <p className="text-xs font-semibold text-slate-500">
                  Verified In-House Team
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-slate-200/70 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 flex-shrink-0">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  60 Mins
                </p>
                <p className="text-xs font-semibold text-slate-500">
                  Rapid Arrival Slot Option
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
