"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Wrench,
  ShieldCheck,
  FileText,
  CalendarCheck,
  Clock,
  MapPin,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function ReviewsSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = Math.min(scrollContainerRef.current.clientWidth * 0.8, 480);
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const trustFeatures = [
    { icon: MapPin, title: "Instant Coverage Check" },
    { icon: FileText, title: "Itemized Bill Builder" },
    { icon: CalendarCheck, title: "No Late Reschedules" },
    { icon: Clock, title: "Real-time ETA Tracking" },
  ];

  const results = [
    {
      id: "bathroom-tiles",
      title: "Jaipur Groundwater Salt Removal",
      description:
        "Acid-free rotary brush treatment preserving grout & restoring mirror-like tile shine",
      location: "Mansarovar, Jaipur",
      scope: "Glass & Tile Descale",
      image: "/images/before-after-clean-bathroom.png",
    },
    {
      id: "chimney-degreasing",
      title: "Kitchen Chimney & Blower Degreasing",
      description:
        "Heavy oil sludge, baffle filter & internal motor degreased with food-grade carbon remover",
      location: "Vaishali Nagar, Jaipur",
      scope: "Kitchen Chimney Deep Clean",
      image: "/images/before-after/chimney-cleaning.jpg",
    },
    {
      id: "tap-descaling",
      title: "Wall Mixer Hard-Water Scale Descaling",
      description:
        "Severe groundwater calcium & white salt buildup dissolved without corroding chrome plating",
      location: "Malviya Nagar, Jaipur",
      scope: "Bathroom Fixtures Restored",
      image: "/images/before-after/bathroom-tap-descaling.jpg",
    },
    {
      id: "fridge-freezer",
      title: "Refrigerator Freezer Deep Sanitization",
      description:
        "Complete frost thaw, stubborn food stains & bacterial odor eliminated with deep steam sanitization",
      location: "Raja Park, Jaipur",
      scope: "Appliance Deep Hygiene",
      image: "/images/before-after/fridge-freezer-cleaning.jpg",
    },
    {
      id: "fridge-top",
      title: "Appliance High-Surface Dust & Grease",
      description:
        "Years of accumulated kitchen oil vapor & dust crust dissolved back to original factory finish",
      location: "C-Scheme, Jaipur",
      scope: "Kitchen Appliance Clean",
      image: "/images/before-after/fridge-top-cleaning.jpg",
    },
    {
      id: "tap-salt",
      title: "Bathroom Tap Limescale Restoration",
      description:
        "Dense alkaline salt crust removed from nozzle and body, restoring water pressure & shine",
      location: "Jagatpura, Jaipur",
      scope: "Tap & Spout Descaling",
      image: "/images/before-after/tap-salt-removal.jpg",
    },
    {
      id: "villa-clean",
      title: "Complete Home Sanitization & Deep Clean",
      description:
        "Full villa deep scrub, machine floor buffing & eco-sanitization completed in 4 hours",
      location: "Patrakar Colony, Jaipur",
      scope: "Full Villa Deep Clean",
      image: "/images/before-after-clean-house.png",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-200/70">
      <div className="container-max">
        {/* Top Trust Features Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustFeatures.map((item) => {
            const Icon = item.icon;
            const isCoverage = item.title === "Instant Coverage Check";
            const Comp = isCoverage ? "a" : "div";
            return (
              <Comp
                key={item.title}
                {...(isCoverage ? { href: "#coverage-checker" } : {})}
                className={`flex items-center gap-3 rounded-2xl bg-white p-4.5 border border-slate-200/80 shadow-xs transition-all ${
                  isCoverage
                    ? "hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-sm cursor-pointer"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 flex-shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {item.title}
                </span>
              </Comp>
            );
          })}
        </div>

        {/* --- CUSTOMER TESTIMONIALS SECTION --- */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                Real Customer Experiences
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                What Jaipur Homeowners Say
              </h2>
            </div>
            <div className="flex items-center gap-3 lg:text-right">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 border border-slate-200/80 shadow-xs">
                <span className="flex items-center gap-1 font-extrabold text-slate-900 text-sm">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold text-slate-500">
                  Verified Local Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Testimonials 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Bar: Stars + Service Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-black text-amber-800">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 truncate max-w-[170px]">
                      {item.service}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Bottom Author Card */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-black text-xs flex-shrink-0 shadow-xs">
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {item.name}
                        </h4>
                        <CheckCircle2
                          className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0"
                          title="Verified Booking"
                        />
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium truncate">
                        <MapPin className="h-3 w-3 text-slate-400 flex-shrink-0" />
                        <span>{item.locality}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- BEFORE / AFTER TRANSFORMATION SECTION --- */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
              <Wrench className="h-3.5 w-3.5" />
              Evidence of Quality
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Real Transformation in Jaipur Homes
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl font-medium leading-relaxed">
              Authentic before-and-after snapshots shot by our field supervisors upon job sign-off across Jaipur localities.
            </p>
          </div>

          {/* Desktop & Tablet Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous transformation"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                canScrollLeft
                  ? "border-slate-300 bg-white text-slate-800 shadow-xs hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600 cursor-pointer"
                  : "border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed opacity-60"
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Next transformation"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                canScrollRight
                  ? "border-slate-300 bg-white text-slate-800 shadow-xs hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600 cursor-pointer"
                  : "border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed opacity-60"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {results.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md shadow-slate-900/5 transition-all duration-300 hover:shadow-xl hover:border-sky-300 flex flex-col w-[85vw] sm:w-[440px] lg:w-[480px] flex-shrink-0 snap-start"
            >
              {/* Before/After Split Image with Location Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 480px"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Floating Location Overlay Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-bold text-white shadow-lg border border-white/15 backdrop-blur-xs">
                  <MapPin className="h-3 w-3 text-sky-400 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>

                {/* Verified Job Badge */}
                <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                  <span>Verified Job</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {/* Location & Scope Metadata Tag */}
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-600 mb-1.5">
                    <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-0.5 text-sky-700 font-bold border border-sky-100 text-[11px]">
                      <MapPin className="h-3 w-3 text-sky-500 flex-shrink-0" />
                      <span>{item.location}</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-medium text-[11px] truncate">
                      {item.scope}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-full text-sky-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-5 w-5 text-sky-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll helper strip & status */}
        <div className="flex items-center justify-between mt-3 text-xs text-slate-400 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-500 sm:hidden">
            👈 Swipe horizontally to view all transformations ({results.length})
          </span>
          <span className="hidden sm:inline-block text-slate-500">
            Showing {results.length} verified before &amp; after transformations in Jaipur
          </span>
          <div className="flex items-center gap-1.5 ml-auto">
            {results.map((item, idx) => (
              <span
                key={item.id}
                className="h-1.5 w-1.5 rounded-full bg-slate-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
