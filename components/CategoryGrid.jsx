"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="py-10 lg:py-14">
      <div className="container-max">
        {/* Top Badge: Your Space, Our Expertise (Theme aligned Sky & Emerald) */}
        <div className="flex justify-center mb-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 shadow-2xs">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-600 text-white shadow-2xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-2.5 h-2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="text-xs font-extrabold tracking-tight text-navy">
              Your Space, Our Expertise
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-black text-navy text-center tracking-tight">
          Choose your category
        </h2>
        <p className="text-xs sm:text-sm text-ink-light text-center mt-1 max-w-md mx-auto">
          Explore our professional cleaning services tailored for your home and
          office in Jaipur.
        </p>

        {/* Compact 8 Categories Grid with Theme Colors & High Hover Zoom */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 max-w-4xl mx-auto mt-7 sm:mt-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/services?category=${encodeURIComponent(cat.shortName || cat.name)}`}
              className="group flex flex-col items-center text-center focus:outline-none"
            >
              {/* Card Container with SafaiSaarthi Theme Background (Static, no card hover) */}
              <div className="w-full aspect-[1.12/1] rounded-2xl bg-gradient-to-b from-[#F5FAFF] to-[#EAF6FF]/80 border border-[#DFEAF2] p-2 sm:p-2.5 flex items-center justify-center shadow-2xs">
                {/* 3D Transparent Image with prominent hover scale */}
                <div className="relative w-28 h-28 sm:w-28 sm:h-28 md:w-36 md:h-36 flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 150px, 200px"
                    className="object-contain select-none transition-transform duration-300 ease-out transform-gpu will-change-transform group-hover:scale-125 origin-center"
                  />
                </div>
              </div>

              {/* Title below card */}
              <h3 className="mt-2.5 font-bold text-navy text-xs sm:text-xs md:text-sm leading-tight tracking-tight group-hover:text-sky-600 transition-colors px-1">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
