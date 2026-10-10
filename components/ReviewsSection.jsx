import Image from "next/image";
import {
  CheckCircle2,
  Wrench,
  ShieldCheck,
  FileText,
  CalendarCheck,
  Clock,
  MapPin,
} from "lucide-react";

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
      description: "Full villa deep scrub, machine floor buffing & eco-sanitization completed in 4 hours",
      location: "Vaishali Nagar, Jaipur",
      scope: "Full Villa Deep Clean",
      image: "/images/before-after-clean-house.png",
    },
    {
      id: "bathroom",
      title: "Jaipur Groundwater Salt Removal",
      description: "Acid-free rotary brush treatment preserving grout & restoring mirror-like tile shine",
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
                  isCoverage ? "hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-sm cursor-pointer" : ""
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

        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
              <Wrench className="h-3.5 w-3.5" />
              Evidence of Quality
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Real Results in Jaipur Homes
            </h2>
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
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white shadow-lg border border-white/15">
                  <MapPin className="h-3.5 w-3.5 text-sky-400 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>

                {/* Verified Job Badge */}
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-600/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-white shadow-lg">
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
                    <span className="text-slate-500 font-medium">{item.scope}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
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
