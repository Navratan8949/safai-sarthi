"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "", dark = false, hideText = false }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      {/* Transparent 3D Mascot Icon */}
      <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 transition-transform duration-300">
        <Image
          src="/images/logo.png"
          alt="SafaiSaarthi Logo"
          fill
          sizes="60px"
          className="object-contain drop-shadow-sm"
          priority
        />
      </div>

      {!hideText && (
        <div className="flex flex-col leading-none">
          <span
            className={`text-xl sm:text-2xl font-black tracking-tight ${dark ? "text-white" : "text-navy"}`}
          >
            Safai<span className="text-sky-500">Saarthi</span>
          </span>
          <span
            className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${dark ? "text-sky-300" : "text-sky-600"}`}
          >
            Jaipur
          </span>
        </div>
      )}
    </Link>
  );
}
