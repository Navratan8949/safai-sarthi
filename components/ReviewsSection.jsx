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
} from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function ReviewsSection() {
  const trustFeatures = [
    { icon: MapPin, title: "Instant Coverage Check" },
    { icon: FileText, title: "Itemized Bill Builder" },
    { icon: CalendarCheck, title: "No Late Reschedules" },
    { icon: Clock, title: "Real-time ETA Tracking" },
  ];

  const results = [
    {
      id: "villa",
      title: "Complete Home Sanitization & Deep Clean",
      description:
        "Full villa deep scrub, machine floor buffing & eco-sanitization completed in 4 hours",
      location: "Vaishali Nagar, Jaipur",
      scope: "Full Villa Deep Clean",
      image: "/images/before-after-clean-house.png",
    },
    {
      id: "bathroom",
      title: "Jaipur Groundwater Salt Removal",
      description:
        "Acid-free rotary brush treatment preserving grout & restoring mirror-like tile shine",
      location: "Mansarovar, Jaipur",
      scope: "Glass & Tile Descale",
      image: "/images/before-after-clean-bathroom.png",
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
              <Wrench className="h-3.5 w-3.5" />
              Evidence of Quality
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Real Transformation in Jaipur Homes
            </h3>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-medium leading-relaxed lg:text-right">
            Authentic before-and-after snapshots shot by our field supervisors
            upon job sign-off across Jaipur localities.
          </p>
        </div>

        {/* Before / After Transformation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {results.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md shadow-slate-900/5 transition-all duration-300 hover:shadow-xl hover:border-sky-300 flex flex-col"
            >
              {/* Before/After Split Image with Location Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Floating Location Overlay Badge */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg border border-white/15">
                  <MapPin className="h-3.5 w-3.5 text-sky-400 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>

                {/* Verified Job Badge */}
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                  <span>Verified Job</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Location & Scope Metadata Tag */}
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-600 mb-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-50 px-2.5 py-1 text-sky-700 font-bold border border-sky-100">
                      <MapPin className="h-3.5 w-3.5 text-sky-500 flex-shrink-0" />
                      <span>{item.location}</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-medium">
                      {item.scope}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-full text-sky-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-6 w-6 text-sky-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
