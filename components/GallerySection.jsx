"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Sparkles,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { business } from "@/config/business";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % filteredItems.length);
  }, [activeImageIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [activeImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeImageIndex, showNext, showPrev]);

  const currentItem =
    activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-max">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 text-xs font-extrabold text-emerald-700 shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>LIVE WORK &amp; ON-SITE OPERATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Work Gallery &amp; Heavy Machinery
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Real on-site photographs of our industrial machinery, large-scale
            society campuses, educational institutes, and deep cleaning
            operations executed across Jaipur by{" "}
            <strong className="text-slate-900 font-bold">
              Devraj Facility Management (DRFM)
            </strong>
            .
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/30 scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    item.category === "Certifications"
                      ? "object-contain p-3"
                      : "object-cover"
                  }`}
                />

                {/* Ambient Top Shadow & Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-sky-300 border border-white/10 shadow-xs">
                    {item.tag}
                  </span>

                  <span className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-md">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>

                {/* Bottom Location Overlay */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center gap-1.5 text-[11px] font-bold text-white drop-shadow-sm">
                  <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-sky-600">
                  <span className="group-hover:underline">Click to view full screen</span>
                  <Maximize2 className="h-3 w-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Facility Management Notice Strip */}
        <div className="mt-12 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black border border-purple-500/40 shadow-inner shrink-0 flex items-center justify-center p-1">
              <Image
                src="/images/6.jpeg"
                alt="Devraj Facility Management"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-purple-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Managed by DEVRAJ FACILITY MANAGEMENT</span>
              </div>
              <h4 className="text-lg font-black text-white mt-0.5">
                Have a Commercial Property, Society, or Large Villa?
              </h4>
              <p className="text-xs text-slate-400 max-w-xl mt-1">
                From residential townships to multi-floor coaching institutes,
                we provide customized mechanised cleaning contracts and
                verified staff.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=Hi%20SafaiSaarthi,%20I%20am%20interested%20in%20commercial/society%20cleaning%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fa851] text-white font-bold text-xs px-5 py-3 shadow-lg shadow-[#25D366]/25 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Discuss on WhatsApp</span>
            </a>
            <a
              href="/corporate-enquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-5 py-3 border border-slate-700 transition-all"
            >
              <Building2 className="h-4 w-4 text-sky-400" />
              <span>Request Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-fade-in select-none"
        >
          {/* Top Bar: Title, Index & Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 z-20 bg-black/40">
            <div className="flex items-center gap-3 min-w-0 pr-4">
              <span className="inline-flex items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2.5 py-1 text-xs font-black shrink-0">
                {activeImageIndex + 1} / {filteredItems.length}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-extrabold text-white truncate">
                  {currentItem.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-sky-400 font-semibold">{currentItem.tag}</span>
                  <span>•</span>
                  <span>{currentItem.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:inline text-xs font-semibold text-slate-500 mr-2">
                Use ← → keys to navigate • Esc to close
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                title="Close Lightbox (Esc)"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Showcase Stage with Prev & Next Controls */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
            {/* Previous Button */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 sm:left-6 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/60 hover:bg-sky-500 text-white border border-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 cursor-pointer"
              title="Previous Photo (Left Arrow)"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 sm:right-6 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/60 hover:bg-sky-500 text-white border border-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 cursor-pointer"
              title="Next Photo (Right Arrow)"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Active Image Container */}
            <div className="relative w-full h-full max-h-[70vh] max-w-5xl flex items-center justify-center">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                className="object-contain drop-shadow-2xl transition-all duration-300"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* Bottom Bar: Detailed Caption & WhatsApp Action & Thumbnails */}
          <div className="px-4 sm:px-8 py-4 border-t border-white/10 bg-black/70 backdrop-blur-xl z-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left w-full md:w-auto">
                <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
                  {currentItem.description}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Managed &amp; Verified by DEVRAJ FACILITY MANAGEMENT (Jaipur)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end shrink-0">
                <a
                  href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                    `Hi SafaiSaarthi! I saw your gallery project "${currentItem.title}" (${currentItem.location}) and I want to enquire about similar cleaning services for my property.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fa851] text-white font-bold text-xs px-5 py-2.5 shadow-lg shadow-[#25D366]/30 transition-all active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enquire for this Service</span>
                </a>
              </div>
            </div>

            {/* Thumbnail Filmstrip */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-4xl mx-auto scrollbar-none">
              {filteredItems.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-11 w-16 sm:h-12 sm:w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === activeImageIndex
                      ? "border-sky-400 scale-105 shadow-md shadow-sky-500/50"
                      : "border-white/20 opacity-50 hover:opacity-100"
                  }`}
                  title={item.title}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
