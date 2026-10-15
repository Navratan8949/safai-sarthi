"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services, getServicesByCategory } from "@/data/services";
import { useCart } from "@/context/CartContext";
import { calculateSubtotal, formatCurrency } from "@/utils/pricing";
import { FileText, ArrowRight, Search, Check, X, Sparkles } from "lucide-react";

const categoryOptions = [
  { id: "All", label: "All Services" },
  { id: "Full House", label: "Full House Deep Cleaning" },
  { id: "Kitchen", label: "Kitchen Deep Cleaning" },
  { id: "Bathroom", label: "Bathroom Deep Cleaning" },
  { id: "Bedroom & Living", label: "Customized Cleaning Package" },
  { id: "Sofa & Upholstery", label: "Sofa & Dining Cleaning" },
  { id: "Carpet", label: "Carpet Cleaning Services" },
  { id: "Balcony & Terrace", label: "Balcony & Terrace Cleaning" },
  { id: "Appliances & Mini", label: "Appliances & Mini Services" },
];

export function ServiceGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const { cartItems } = useCart();
  const cartSubtotal = calculateSubtotal(cartItems);

  useEffect(() => {
    const cat = searchParams.get("category") || "All";
    setActiveFilter(cat);
  }, [searchParams]);

  // Filter by category and search query
  const filteredServices = useMemo(() => {
    let result = getServicesByCategory(activeFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          (s.shortDescription &&
            s.shortDescription.toLowerCase().includes(q)) ||
          (s.areaBadge && s.areaBadge.toLowerCase().includes(q)),
      );
    }
    return result;
  }, [activeFilter, searchQuery]);

  return (
    <div>
      {/* Top Banner: Direct link to verified Rate Card */}
      {/* <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-navy-900 text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 flex-shrink-0">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-black tracking-tight">
              Looking for exact Square Footage &amp; Rate Sheet?
            </h2>
            <p className="text-xs text-slate-300">
              Check our complete verified 6-sheet rate card for Jaipur.
            </p>
          </div>
        </div>
        <Link
          href="/rate-card"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-all shadow-sm whitespace-nowrap self-stretch sm:self-auto justify-center"
        >
          <span>View Verified Rate Card</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div> */}

      {/* Main 3-Column / 2-Column Marketplace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ======================================================== */}
        {/* LEFT SIDEBAR: Select a category */}
        {/* ======================================================== */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm">
            <h3 className="text-base font-black text-slate-900 pb-3 border-b border-slate-100">
              Select a category
            </h3>

            <div className="mt-4 space-y-2">
              {categoryOptions.map((cat) => {
                const isSelected = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveFilter(cat.id)}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-sky-50 text-sky-700 border border-sky-300 shadow-2xs"
                        : "text-slate-700 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    {/* Custom Checkbox Style matching screenshot */}
                    <span
                      className={`h-4.5 w-4.5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? "bg-sky-500 border-sky-500 text-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </span>
                    <span className="truncate">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ======================================================== */}
        {/* CENTER COLUMN: Search Bar & Horizontal Service Cards */}
        {/* ======================================================== */}
        <main className="lg:col-span-6 space-y-5">
          {/* Top Search Bar matching screenshot */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search "Sofa Cleaning", "Kitchen", "Full House"...'
              className="w-full rounded-2xl border border-slate-200/90 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Active Filter Pill indicator */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
            <span>
              Showing {filteredServices.length}{" "}
              {filteredServices.length === 1 ? "service" : "services"}
              {activeFilter !== "All" ? ` in "${activeFilter}"` : ""}
            </span>
            {activeFilter !== "All" && (
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="text-sky-600 hover:text-sky-700 underline font-bold"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* Stack of Horizontal Service Cards */}
          {filteredServices.length > 0 ? (
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <Sparkles className="h-8 w-8 text-sky-400 mx-auto mb-3" />
              <p className="text-base font-bold text-slate-900">
                No cleaning services found
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for another keyword or select a different
                category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs"
              >
                View All Services
              </button>
            </div>
          )}
        </main>

        {/* ======================================================== */}
        {/* RIGHT SIDEBAR: Proceed to checkout */}
        {/* ======================================================== */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-4">
          {/* Checkout Widget */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm">
            <Link
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm py-3 px-4 shadow-md shadow-emerald-600/20 transition-all text-center block"
            >
              <span>Proceed to checkout {formatCurrency(cartSubtotal)}/-</span>
            </Link>

            {/* Quick mini-cart preview if items added */}
            {cartItems.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Cart ({cartItems.length} items)</span>
                  <Link href="/cart" className="text-sky-600 hover:underline">
                    View Cart
                  </Link>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-xs py-1"
                    >
                      <div className="min-w-0 flex-1 pr-2">
                        <p className="font-bold text-slate-800 truncate">
                          {item.name}
                        </p>
                        {item.selectedVariant && (
                          <p className="text-[10px] text-sky-600 font-medium truncate">
                            {item.selectedVariant.name}
                          </p>
                        )}
                      </div>
                      <span className="font-bold text-slate-900 shrink-0">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
