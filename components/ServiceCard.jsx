"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Check,
  Star,
  FileText,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";
import { formatCurrency } from "@/utils/pricing";
import { useCart } from "@/context/CartContext";

export function ServiceCard({ service }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const [showMoreIncludes, setShowMoreIncludes] = useState(false);

  const baseVariant =
    service.variants && service.variants.length > 0
      ? service.variants[0]
      : null;
  const originalPrice =
    service.originalPrice ||
    (baseVariant
      ? baseVariant.originalPrice
      : Math.round((service.price * 1.3) / 50) * 50 - 1);
  const discountPercent =
    service.discountPercent ||
    Math.round(((originalPrice - service.price) / originalPrice) * 100);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (baseVariant) {
      addToCart(
        {
          ...service,
          ...baseVariant,
          id: `${service.id}-${baseVariant.id}`,
          price: baseVariant.price,
          originalPrice: baseVariant.originalPrice,
          selectedVariant: baseVariant,
        },
        1,
        [],
      );
    } else {
      addToCart(service, 1, []);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  // Truncate description text
  const fullDesc = service.description || service.shortDescription || "";
  const shouldTruncateDesc = fullDesc.length > 110;
  const displayDesc =
    !showMoreDesc && shouldTruncateDesc
      ? `${fullDesc.slice(0, 110)}...`
      : fullDesc;

  // Truncate includes list
  const includedItems = service.included || [];
  const hasMoreIncludes = includedItems.length > 2;
  const displayIncludes = showMoreIncludes
    ? includedItems
    : includedItems.slice(0, 2);

  return (
    <div className="group rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md">
      {/* Top Section: Left Image + Right Details */}
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        {/* Left Thumbnail Image */}
        <Link
          href={`/services/${service.slug}`}
          className="relative w-full sm:w-48 h-44 sm:h-44 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 block"
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {service.category && (
            <div className="absolute top-2 left-2">
              <span className="rounded-md bg-slate-900/90 px-2 py-0.5 text-[10px] font-black text-white shadow-xs">
                {service.category}
              </span>
            </div>
          )}
        </Link>

        {/* Right Info Section */}
        <div className="flex-1 min-w-0 w-full flex flex-col">
          {/* Title & Starts At Price Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <Link href={`/services/${service.slug}`}>
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors tracking-tight line-clamp-1">
                  {service.name}
                </h3>
              </Link>

              {/* Rating & Area Sq Ft Row */}
              <div className="mt-1 flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 text-xs font-black text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-slate-800">4.9</span>
                </span>
                {service.areaBadge && (
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200/80 text-[10px] font-black text-amber-900">
                    <span>📐</span>
                    <span>{service.areaBadge}</span>
                  </span>
                )}
                <span className="text-slate-400 text-xs">•</span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="h-3 w-3 text-sky-500" />
                  {service.duration}
                </span>
              </div>
            </div>

            {/* Starts At Price Display */}
            <div className="text-right flex-shrink-0">
              <span className="text-xs text-slate-400 font-medium block">
                Starts At
              </span>
              <div className="flex items-baseline justify-end gap-1.5">
                {originalPrice > service.price && (
                  <span className="text-xs text-slate-400 line-through font-semibold hidden sm:inline">
                    {formatCurrency(originalPrice)}
                  </span>
                )}
                <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  {formatCurrency(service.price)}
                </span>
              </div>
              {discountPercent > 0 && (
                <span className="inline-block rounded bg-emerald-50 text-emerald-700 text-[10px] font-black px-1.5 py-0.5">
                  {discountPercent}% OFF
                </span>
              )}
            </div>
          </div>

          {/* Short Description with "See more" toggle */}
          <div className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
            <p className="inline">{displayDesc}</p>
            {shouldTruncateDesc && (
              <button
                type="button"
                onClick={() => setShowMoreDesc(!showMoreDesc)}
                className="ml-1 text-sky-600 hover:text-sky-700 font-bold underline cursor-pointer text-xs"
              >
                {showMoreDesc ? "See less" : "See more"}
              </button>
            )}
          </div>

          {/* Includes Section with Green Checkmark */}
          {includedItems.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 stroke-[2.5]" />
                <span>Includes:</span>
              </div>
              <ul className="mt-1 space-y-0.5 text-xs text-slate-600 font-medium">
                {displayIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-slate-400">•</span>
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
              {hasMoreIncludes && (
                <button
                  type="button"
                  onClick={() => setShowMoreIncludes(!showMoreIncludes)}
                  className="mt-1 text-sky-600 hover:text-sky-700 font-bold text-xs cursor-pointer underline"
                >
                  {showMoreIncludes ? "See less" : "See more"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Actions Bar (Side-by-side buttons exactly as requested) */}
      <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
        <Link
          href={`/services/${service.slug}`}
          className="flex items-center justify-center gap-2 rounded-xl border border-sky-200/90 bg-sky-50/50 hover:bg-sky-100 text-sky-700 py-2.5 px-4 text-xs sm:text-sm font-bold transition-all shadow-2xs active:scale-98"
        >
          <FileText className="h-4 w-4 text-sky-600" />
          <span>View details</span>
        </Link>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-98 ${
            isAdded
              ? "bg-emerald-600 text-white shadow-emerald-600/30"
              : "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/25"
          }`}
        >
          {isAdded ? (
            <>
              <Check className="h-4 w-4 stroke-[3]" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
