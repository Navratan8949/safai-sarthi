"use client";

import Image from "next/image";
import { ShieldCheck, Sparkles, Wrench, Check, Award, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  const cards = [
    {
      badge: "100% In-House Squad",
      title: "Police-Verified & Uniformed Staff",
      desc: "Zero random daily-wage workers. Every cleaner is biometric verified, background-checked, and trained in 50-point standard SOPs.",
      image: "/images/cleaner-cutout.jpg",
      icon: ShieldCheck,
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200/80",
      iconColor: "text-sky-500",
      hoverBorder: "hover:border-sky-300",
      titleHover: "group-hover:text-sky-600",
      footerText: "Hospitality-Grade Trained Staff",
      footerColor: "text-sky-600",
      points: [
        "Police & Biometric ID Background Checked",
        "50-Point Standard Checklist Training",
        "Supervised On-Site Quality Sign-off",
      ],
    },
    {
      badge: "German & Rotary Tech",
      title: "Heavy-Duty Machine Scrubbing",
      desc: "We don’t rely on regular mops. Single-disc rotary floor scrubbers, vacuum fabric extractors, and descaling rotary buffers.",
      image: "/images/3d-machine-scrubber.jpg",
      icon: Wrench,
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      iconColor: "text-indigo-500",
      hoverBorder: "hover:border-indigo-300",
      titleHover: "group-hover:text-indigo-600",
      footerText: "Industrial Grade Surface Restoration",
      footerColor: "text-indigo-600",
      points: [
        "Single-Disc Rotary Floor Buffing",
        "Deep Fabric Injection-Extraction",
        "Acid-Free Tile & Glass Descaling",
      ],
    },
    {
      badge: "Eco & Pet Safe",
      title: "100% Non-Acidic Green Chemistry",
      desc: "Hospital-grade Taski/Diversey eco-cleaning agents. Dissolves stubborn Jaipur groundwater salt without eroding tile glaze or emitting toxic fumes.",
      image: "/images/3d-eco-chemicals.jpg",
      icon: Sparkles,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      iconColor: "text-emerald-500",
      hoverBorder: "hover:border-emerald-300",
      titleHover: "group-hover:text-emerald-600",
      footerText: "Child & Pet Safe Certification",
      footerColor: "text-emerald-600",
      points: [
        "Zero Harmful Hydrochloric Acid",
        "Child & Pet Friendly Formulations",
        "Protects Marble Grout & Tile Shine",
      ],
    },
    {
      badge: "Zero Hidden Fees",
      title: "Upfront Itemized Bill & Guarantee",
      desc: "Fixed digital pricing before any work starts. Zero surprise fees. If any promised checklist item is missed, we re-clean it free within 24 hours.",
      image: "/images/3d-guarantee-bill.jpg",
      icon: Zap,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
      iconColor: "text-amber-500",
      hoverBorder: "hover:border-amber-300",
      titleHover: "group-hover:text-amber-600",
      footerText: "24-Hour Free Re-Clean Promise",
      footerColor: "text-amber-600",
      points: [
        "Instant Itemized Digital Bill",
        "Zero Convenience or Hidden Surcharges",
        "100% Free Re-Clean Guarantee",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 border-t border-slate-200/70 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(186,230,253,0.25)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container-max relative">
        <SectionHeading
          center
          eyebrow="The SafaiSaarthi Edge"
          title="Why 15,000+ Jaipur homes trust us."
          description="We do not just clean spaces — we deliver absolute peace of mind, hygienic safety, and a shine you can feel."
        />

        {/* 4 Cards Grid with 3D Visual in every card */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {cards.map((card) => {
            const BadgeIcon = card.icon;
            return (
              <div
                key={card.title}
                className={`group relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-md shadow-slate-900/5 hover:shadow-2xl ${card.hoverBorder} transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  {/* Left Content */}
                  <div className="flex-1 space-y-3 z-10">
                    <div
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold border uppercase tracking-wide ${card.badgeColor}`}
                    >
                      <BadgeIcon className={`h-3.5 w-3.5 ${card.iconColor}`} />
                      <span>{card.badge}</span>
                    </div>

                    <h3
                      className={`text-xl sm:text-2xl font-black text-slate-900 tracking-tight transition-colors ${card.titleHover}`}
                    >
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {card.desc}
                    </p>

                    {/* Points checklist */}
                    <div className="pt-2 space-y-2">
                      {card.points.map((pt, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs font-bold text-slate-700"
                        >
                          <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right 3D Visual Asset */}
                  <div className="relative w-36 sm:w-44 h-56 sm:h-60 flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="180px"
                      className="object-contain object-bottom transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className={card.footerColor}>{card.footerText}</span>
                  <Award className="h-4 w-4 text-amber-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
