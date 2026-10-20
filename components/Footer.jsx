import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Building2,
} from "lucide-react";
import { Logo } from "./Logo";
import { business } from "@/config/business";
import { services } from "@/data/services";

export function Footer() {
  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Work Gallery", href: "/#gallery" },
    { label: "Real Results & Reviews", href: "/reviews" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  const businessLinks = [
    { label: "Corporate Cleaning", href: "/corporate-cleaning" },
    { label: "Request a Quote", href: "/corporate-enquiry" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cancellation Policy", href: "/cancellation-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];

  const popularAreas = [
    "Vaishali Nagar",
    "Mansarovar",
    "Malviya Nagar",
    "Patrakar Colony",
    "Civil Lines",
    "Jagatpura",
    "C-Scheme",
    "Raja Park",
    "Vidhyadhar Nagar",
    "Tonk Road",
  ];

  const topServices = services.slice(0, 6);

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.06)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.06)_0%,_transparent_70%)] pointer-events-none" />

      {/* Top Value Proposition Strip */}
      {/* <div className="border-b border-slate-800/70 bg-slate-900/60 backdrop-blur-sm">
        <div className="container-max py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2.5 text-slate-300">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 flex-shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold text-white text-[13px]">100% In-House Staff</p>
                <p className="text-[11px] text-slate-400">Police & ID verified</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold text-white text-[13px]">Zero Hidden Fees</p>
                <p className="text-[11px] text-slate-400">Upfront transparent bills</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 flex-shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold text-white text-[13px]">Eco Safe Cleaners</p>
                <p className="text-[11px] text-slate-400">Kid & pet friendly</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 flex-shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold text-white text-[13px]">On-Time or Discount</p>
                <p className="text-[11px] text-slate-400">Live ETA tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container-max py-12 lg:py-16">
        {/* Responsive Grid: Mobile = 2 columns, Desktop = 12 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Info & Contacts (Mobile: spans full 2 columns, Desktop: 4 columns) */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Logo dark className="mb-2" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Jaipur&apos;s trusted on-demand home &amp; corporate cleaning
              partner. Equipped with heavy-duty rotary machines, non-acidic
              descaling agents, and expert squad.
            </p>

            {/* Quick Contact Chips */}
            <div className="space-y-2.5 pt-2">
              <a
                href={`tel:${business.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all flex-shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="font-bold tracking-wide">
                  {business.phone}
                </span>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all flex-shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span>{business.email}</span>
              </a>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800/80 text-sky-400 flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span>Jaipur, Rajasthan • {business.hours}</span>
              </div>
            </div>

            {/* Direct Support & WhatsApp Booking Action */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=Hi%20SafaiSaarthi,%20I%20want%20to%20book%20a%20cleaning%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-xs font-bold shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${business.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/80 px-3.5 py-2 text-xs font-bold transition-all"
              >
                <Phone className="h-3.5 w-3.5 text-sky-400" />
                <span>Direct Call</span>
              </a>
            </div>

            {/* Devraj Facility Management (DRFM) Parent Company Badge */}
            <div className="pt-3">
              <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 p-3.5 border border-purple-500/40 shadow-lg shadow-purple-950/20 flex items-center gap-3.5 group hover:border-purple-400/60 transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl overflow-hidden bg-black border border-purple-400/60 shadow-inner flex items-center justify-center p-1">
                  <Image
                    src="/images/6.jpeg"
                    alt="DRFM - DEVRAJ FACILITY MANAGEMENT"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-black tracking-widest text-purple-400">
                    <Sparkles className="h-3 w-3 text-purple-400" />
                    <span>A Venture of</span>
                  </div>
                  <h5 className="text-sm sm:text-base font-black text-white tracking-wide leading-tight mt-0.5">
                    DEVRAJ FACILITY MANAGEMENT
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-tight mt-0.5 font-medium">
                    Complete Facility, Corporate &amp; Domestic Cleaning Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 1 (Mobile: Col 1 of 2, Desktop: 2 cols): Services */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-1.5">
              <span>Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sky-400 hover:text-sky-300 font-bold inline-flex items-center gap-1 transition-colors"
                >
                  All Services <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 (Mobile: Col 2 of 2, Desktop: 2 cols): Company */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Mobile: Col 1 of 2, Desktop: 2 cols): Business & Policies */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-4">
              Business
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {businessLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (Mobile: Col 2 of 2, Desktop: 2 cols): Service Areas in Jaipur */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-1.5">
              <span>Top Areas</span>
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-slate-400">
              {popularAreas.map((area) => (
                <span
                  key={area}
                  className="hover:text-white transition-colors cursor-default"
                >
                  • {area}
                </span>
              ))}
              <span className="text-[11px] text-sky-400 font-semibold pt-1">
                + 25 more Jaipur areas
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-1.5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-md overflow-hidden bg-black border border-purple-500/50 inline-flex items-center justify-center shrink-0">
                <Image
                  src="/images/6.jpeg"
                  alt="DRFM"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </span>
              <span>
                &copy; {new Date().getFullYear()} SafaiSaarthi. A Venture of{" "}
                <strong className="text-white font-extrabold">DEVRAJ FACILITY MANAGEMENT</strong>. All rights reserved.
              </span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              Designed by{" "}
              <a
                href="https://www.codepecharcha.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
              >
                Code Pe Charcha
              </a>
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-center sm:text-right">
            <MapPin className="h-3.5 w-3.5 text-sky-400" />
            <span>Serving Jaipur &amp; suburbs, Rajasthan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
