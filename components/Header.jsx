"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  Menu,
  MapPin,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { useCart } from "@/context/CartContext";
import { navLinks, business } from "@/config/business";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, userLocation, detectLocation, isDetectingLocation } =
    useCart();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Utility & Trust Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-white/10 relative z-50">
        <div className="container-max flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => detectLocation()}
              disabled={isDetectingLocation}
              type="button"
              title="Click to detect your current location in Jaipur"
              className={`flex items-center gap-1.5 font-semibold transition-colors cursor-pointer group ${
                userLocation?.isServiceable
                  ? "text-emerald-400 hover:text-emerald-300"
                  : userLocation && !userLocation.isServiceable
                    ? "text-amber-400 hover:text-amber-300"
                    : "text-sky-400 hover:text-sky-300"
              }`}
            >
              <MapPin className="h-3.5 w-3.5 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>
                {isDetectingLocation
                  ? "Detecting GPS..."
                  : userLocation?.area
                    ? `${userLocation.area} ${userLocation.isServiceable ? "• Available ✓" : "• Outside Jaipur Area"}`
                    : "Jaipur, Rajasthan • Tap to Check Area"}
              </span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified In-House Staff</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
              <span>Transparent Pricing • No Hidden Charges</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
            <a
              href={`tel:${business.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-sky-300 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-sky-400" />
              <span>{business.phone}</span>
            </a>
            <span className="hidden lg:inline text-slate-400 font-medium">
              • {business.hours}
            </span>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=Hi%20SafaiSaarthi,%20I%20want%20to%20book%20a%20cleaning%20service`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300 font-bold hover:bg-emerald-500/30 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp Booking</span>
            </a>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 hover:text-sky-300 transition-colors px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20"
              title="Super Admin Operations Portal"
            >
              <ShieldCheck className="h-3 w-3 text-sky-400" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-sky-900/5 border-b border-sky-100 py-2"
            : "bg-white border-b border-slate-100 py-2.5 lg:py-3"
        }`}
      >
        <div className="container-max flex items-center justify-between gap-4">
          {/* Logo with enlarged 3D Mascot */}
          <Logo />

          {/* Nav Links in floating pill container */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/90 p-1.5 rounded-full border border-slate-200/70 shadow-xs">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" &&
                  pathname.startsWith(link.href.split("?")[0]));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-sky-500 text-white shadow-sm shadow-sky-500/30"
                      : "text-slate-600 hover:text-sky-600 hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <Link
              href="/cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-700 transition-all hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200"
              aria-label="View cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-sky-500 px-1 text-[11px] font-extrabold text-white shadow-sm shadow-sky-500/40">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Book Now Button with Luxury Shine & Shimmer */}
            <Link
              href="/services"
              className="btn-shine hidden sm:inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-sky-500/30 ring-1 ring-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/50 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {/* <Sparkles className="h-4 w-4 text-amber-300 animate-pulse drop-shadow-sm flex-shrink-0" /> */}
              <span className="tracking-tight">Book a Cleaning</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-600 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
