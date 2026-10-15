import Link from "next/link";
import { formatCurrency } from "@/utils/pricing";
import { services } from "@/data/services";
import {
  FileText,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { business } from "@/config/business";

export const metadata = {
  title: "Official Rate Card & Area (Sq Ft) Chart | SafaiSaarthi Jaipur",
  description:
    "Verified, transparent rate card with exact square footage, BHK tiers, discounts and rates across all residential & commercial cleaning services in Jaipur.",
};

export default function RateCardPage() {
  const pageSections = [
    {
      pageNumber: 1,
      title: "Full House Deep Cleaning (Housekeeping) - Furnished",
      note: "Note: 500–600 Sq Feet base per 1 BHK • Note - Furnished",
      serviceSlug: "full-house-deep-cleaning",
      servicesList: services.filter((s) => s.clientPage === 1),
    },
    {
      pageNumber: 2,
      title: "Vacant Home Deep Cleaning (Empty Flat)",
      note: "1 BHK (600–650 Sq Ft), 2 BHK (800–850 Sq Ft), 3 BHK (1200–1250 Sq Ft), 4 BHK (2000–2050 Sq Ft)",
      serviceSlug: "vacant-home-deep-cleaning",
      servicesList: services.filter((s) => s.clientPage === 2),
    },
    {
      pageNumber: 3,
      title: "Bungalow / Villa Deep Cleaning",
      note: "2,000 to 8,000 Sq Feet Built-up Area",
      serviceSlug: "villa-bungalow-deep-cleaning",
      servicesList: services.filter((s) => s.clientPage === 3),
    },
    {
      pageNumber: 4,
      title: "Customized Cleaning Packages",
      note: "Living Room, Kitchen (With/Without Chimney & Empty Flat), Bathroom Manual/Machine, Bedroom Flats",
      servicesList: services.filter((s) => s.clientPage === 4),
    },
    {
      pageNumber: 5,
      title: "Balcony, Terrace, Sofa, Carpet & Chimney Services",
      note: "Balcony (25/50/150 Sq Ft), Terrace (200/500/1000 Sq Ft), Sofa (3–12 Seater), Carpet (50–200 Sq Ft), Chimney (₹350)",
      servicesList: services.filter((s) => s.clientPage === 5),
    },
    {
      pageNumber: 6,
      title: "Appliances, Mini Services & Dining Combos",
      note: "Fridge (Single/Double/Triple Door), Exhaust Fan (Express/Elite/Exclusive), Ceiling Fans, Dining Chairs & Sofa Combos",
      servicesList: services.filter((s) => s.clientPage === 6),
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="container-max">
        {/* Header Breadcrumb & Intro */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-sky-600">Services</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Official Rate Card</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-navy-900 text-white p-8 sm:p-12 shadow-xl shadow-slate-900/10 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold mb-4">
              <FileText className="h-3.5 w-3.5" />
              <span>Jaipur Cleaning Price Directory 2024–2025</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Official Rate Card &amp; Area (Sq Ft) Chart
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Transparent, itemized pricing matching SafaiSaarthi&apos;s verified service rate sheets. Check covered square feet, BHK packages, discounts, and instant booking rates.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                No Hidden Surcharges
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-sky-400" />
                Exact Area &amp; Sq Ft Calculation
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <Clock className="h-4 w-4 text-amber-400" />
                Dedicated Crew &amp; Machines
              </span>
            </div>
          </div>
        </div>

        {/* 6 Rate Card Sections */}
        <div className="space-y-12">
          {pageSections.map((sec) => (
            <div
              key={sec.pageNumber}
              id={`sheet-${sec.pageNumber}`}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-sky-500 text-white font-black text-xs shadow-xs">
                      #{sec.pageNumber}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {sec.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    {sec.note}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold">
                    Rate Card Sheet {sec.pageNumber}
                  </span>
                </div>
              </div>

              {/* Service Cards / Tables within this sheet */}
              <div className="mt-6 space-y-8">
                {sec.servicesList.map((srv) => (
                  <div key={srv.id} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Link href={`/services/${srv.slug}`}>
                            <h3 className="text-base sm:text-lg font-black text-slate-900 hover:text-sky-600 transition-colors">
                              {srv.name}
                            </h3>
                          </Link>
                          {srv.areaBadge && (
                            <span className="px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-[10px] font-black text-amber-900">
                              📐 {srv.areaBadge}
                            </span>
                          )}
                        </div>
                        {srv.clientNote && (
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">
                            {srv.clientNote}
                          </p>
                        )}
                      </div>

                      <Link
                        href={`/services/${srv.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs self-start sm:self-auto"
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    {/* Table of Variants for this service */}
                    {srv.variants && srv.variants.length > 0 && (
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <table className="w-full min-w-[580px] text-left border-collapse bg-white rounded-xl overflow-hidden border border-slate-200/70">
                          <thead>
                            <tr className="border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500 bg-slate-100/70">
                              <th className="py-2.5 px-3.5">Option / Package</th>
                              <th className="py-2.5 px-3.5">Area / Size</th>
                              <th className="py-2.5 px-3.5">Duration</th>
                              <th className="py-2.5 px-3.5">MRP</th>
                              <th className="py-2.5 px-3.5">Discount</th>
                              <th className="py-2.5 px-3.5">Rate</th>
                              <th className="py-2.5 px-3.5 text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                            {srv.variants.map((v) => (
                              <tr key={v.id} className="hover:bg-sky-50/40 transition-colors">
                                <td className="py-2.5 px-3.5 font-bold text-slate-900">
                                  {v.name}
                                </td>
                                <td className="py-2.5 px-3.5">
                                  <span className="inline-block px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-[11px] font-black text-amber-900">
                                    {v.sqft || '—'}
                                  </span>
                                </td>
                                <td className="py-2.5 px-3.5 text-slate-500">
                                  {v.duration}
                                </td>
                                <td className="py-2.5 px-3.5 text-slate-400">
                                  {v.originalPrice && v.originalPrice > v.price ? (
                                    <span className="line-through">{formatCurrency(v.originalPrice)}</span>
                                  ) : (
                                    formatCurrency(v.price)
                                  )}
                                </td>
                                <td className="py-2.5 px-3.5">
                                  {v.discount ? (
                                    <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black">
                                      {v.discount}% OFF
                                    </span>
                                  ) : (
                                    <span className="text-slate-400">—</span>
                                  )}
                                </td>
                                <td className="py-2.5 px-3.5">
                                  <span className="text-sm font-black text-slate-900">
                                    {formatCurrency(v.price)}
                                  </span>
                                </td>
                                <td className="py-2.5 px-3.5 text-center">
                                  <Link
                                    href={`/services/${srv.slug}`}
                                    className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white transition-colors"
                                  >
                                    Book
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Assistance Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-emerald-600 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-lg shadow-emerald-600/20">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">Need a Custom Commercial or Bungalow Quote?</h3>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1">
              Have a property larger than 8,000 Sq Ft or specific custom requirements? Send us your floor plan or Sq Ft on WhatsApp for instant pricing.
            </p>
          </div>
          <a
            href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent("Hello SafaiSaarthi, I would like to get a custom cleaning quote based on the official rate card.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-5 py-3 rounded-2xl font-bold text-sm shadow-md whitespace-nowrap self-start sm:self-auto"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
