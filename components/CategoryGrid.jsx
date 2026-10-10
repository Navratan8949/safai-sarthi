"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

const iconMap = {
  Utensils: "Utensils",
  ShowerHead: "ShowerHead",
  BedDouble: "BedDouble",
  Sofa: "Sofa",
  Home: "Home",
  Sparkles: "Sparkles",
  Sun: "Sun",
};

export function CategoryGrid() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-max">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={
                cat.id === "other"
                  ? "/services"
                  : `/services?category=${encodeURIComponent(cat.name)}`
              }
              className="group relative overflow-hidden rounded-2xl border border-sky-100/60 bg-white shadow-md shadow-sky-900/5 h-48 sm:h-60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 hover:border-sky-300"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Luxury dark glass gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:via-slate-950/30" />

              {/* Top pill badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                  Service
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-base sm:text-xl font-black text-white tracking-tight drop-shadow-sm group-hover:text-sky-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-1 font-medium">
                  {cat.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:text-white transition-colors">
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
