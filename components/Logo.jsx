"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "", dark = false, size = "default" }) {
  const sizeClasses = {
    sm: "h-11 sm:h-12 aspect-[3/1]",
    default: "h-14 sm:h-15 lg:h-16 aspect-[3/1]",
    lg: "h-16 sm:h-18 lg:h-20 aspect-[3/1]",
  }[size] || "h-14 sm:h-15 lg:h-16 aspect-[3/1]";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-all ${
        dark
          ? "bg-white/95 hover:bg-white px-3.5 py-2 rounded-2xl shadow-sm border border-white/20"
          : "hover:opacity-95"
      } ${className}`}
      aria-label="SafaiSaarthi Jaipur Home"
    >
      <div className={`relative ${sizeClasses} flex-shrink-0`}>
        <Image
          src="/images/safaisaarthi-jaipur-logo.png"
          alt="SafaiSaarthi Jaipur"
          fill
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
