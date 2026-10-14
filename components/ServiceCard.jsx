"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Plus,
  Check,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { formatCurrency } from "@/utils/pricing";
import { useCart } from "@/context/CartContext";

export function ServiceCard({ service }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Compute realistic original strikethrough price and savings badge
  const originalPrice = Math.round((service.price * 1.3) / 50) * 50 - 1;
  const discountPercent = Math.round(
    ((originalPrice - service.price) / originalPrice) * 100,
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(service, 1, []);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/12 hover:border-sky-300">
      {/* Top Image Showcase */}
      <Link
        href={`/services/${service.slug}`}
        className="block relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100"
      >
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Subtle Vignette & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />

        {/* Top-left Category Pill */}
        <div className="absolute top-2 left-2">
          <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-black text-slate-800 shadow-sm border border-white/80">
            {service.category}
          </span>
        </div>

        {/* Top-right Rating Pill */}
        <div className="absolute top-3.5 right-3.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/75 backdrop-blur-md px-2.5 py-1 text-xs font-black text-amber-300 border border-white/20 shadow-sm">
            <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
            <span>4.9</span>
          </span>
        </div>

        {/* Bottom-left Guarantee Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-extrabold text-white shadow-sm border border-emerald-400/30">
            <ShieldCheck className="h-3 w-3" />
            <span>Verified SOP Squad</span>
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-4">
        <Link href={`/services/${service.slug}`}>
          <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 tracking-tight">
            {service.name}
          </h3>
        </Link>

        <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 font-medium">
          {service.shortDescription}
        </p>

        {/* Feature Pills */}
        <div className="mt-2 flex flex-wrap items-center gap-1">
          <div className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/70">
            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
            <span>{service.included?.length || 6} Tasks Included</span>
          </div>
          <div className="inline-flex items-center gap-1 rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700 border border-sky-200/70">
            <Clock className="h-3.5 w-3.5 text-sky-500" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Quick 2-point checklist preview */}
        {service.included && service.included.length > 0 && (
          <div className="mt-2 space-y-1.5 pt-3.5 pb-4 border-t border-slate-100">
            {service.included.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-600 truncate"
              >
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Pricing & Actions Bar */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          {/* Price Column */}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400 line-through font-semibold">
                {formatCurrency(originalPrice)}
              </span>
              <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-700 uppercase tracking-tight">
                {discountPercent}% OFF
              </span>
            </div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                {formatCurrency(service.price)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 px-3 py-2.5 text-xs font-bold text-slate-700 transition-all hover:border-sky-300 hover:bg-sky-50/70 hover:text-sky-600 active:scale-95"
            >
              Details
            </Link>
            <button
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all active:scale-95 shadow-sm ${
                isAdded
                  ? "bg-emerald-600 text-white shadow-emerald-600/30 ring-2 ring-emerald-500/40"
                  : "bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-sky-500/25 hover:from-sky-600 hover:to-sky-700 hover:shadow-md hover:shadow-sky-500/35 hover:-translate-y-0.5"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
                  <span>Book</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
