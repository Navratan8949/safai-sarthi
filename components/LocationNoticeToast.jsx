'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, X, MapPin, ArrowRight, Navigation } from 'lucide-react';
import { useLocation } from '@/context/LocationContext';

export function LocationNoticeToast() {
  const { locationNotice, clearLocationNotice, setShowPromptModal, requestLocation } = useLocation();

  useEffect(() => {
    if (locationNotice) {
      const timer = setTimeout(() => {
        clearLocationNotice();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [locationNotice, clearLocationNotice]);

  if (!locationNotice) return null;

  const isError = Boolean(locationNotice.error);
  const isAvailable = Boolean(locationNotice.isServiceable && !isError);

  return (
    <div className="fixed top-16 sm:top-20 right-3 sm:right-6 z-50 max-w-sm sm:max-w-md w-full animate-slide-down">
      <div
        className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md border transition-all ${
          isAvailable
            ? 'bg-white/95 border-emerald-300 shadow-emerald-500/10'
            : isError
            ? 'bg-white/95 border-sky-300 shadow-sky-500/10'
            : 'bg-white/95 border-amber-300 shadow-amber-500/10'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={clearLocationNotice}
          type="button"
          aria-label="Close notification"
          className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-start gap-3.5 pr-6">
          {/* Status Icon */}
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0 ${
              isAvailable
                ? 'bg-emerald-100 text-emerald-600'
                : isError
                ? 'bg-sky-100 text-sky-600'
                : 'bg-amber-100 text-amber-600'
            }`}
          >
            {isAvailable ? (
              <CheckCircle2 className="h-5 w-5 stroke-[2.5]" />
            ) : isError ? (
              <Navigation className="h-5 w-5 stroke-[2.5]" />
            ) : (
              <AlertCircle className="h-5 w-5 stroke-[2.5]" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                  isAvailable
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : isError
                    ? 'bg-sky-50 text-sky-700 border border-sky-200'
                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}
              >
                <MapPin className="h-3 w-3" />
                {isAvailable
                  ? 'Service Available'
                  : isError
                  ? 'Location Check'
                  : 'Outside Service Area'}
              </span>
            </div>

            <h4 className="mt-1 text-sm font-black text-slate-900 leading-snug">
              {isAvailable
                ? `Available in ${locationNotice.area}, Jaipur!`
                : isError
                ? `Choose Your Jaipur Area`
                : `Currently Serving Core Jaipur Only`}
            </h4>

            <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
              {locationNotice.message}
            </p>

            {/* Quick Action Button */}
            <div className="mt-3 flex items-center gap-2">
              {isAvailable ? (
                <Link
                  href="/services"
                  onClick={clearLocationNotice}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 shadow-xs transition-all active:scale-95"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ) : isError ? (
                <button
                  type="button"
                  onClick={() => {
                    clearLocationNotice();
                    setShowPromptModal(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3 py-1.5 shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  <span>Select Area</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              ) : (
                <Link
                  href="/corporate-cleaning"
                  onClick={clearLocationNotice}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-1.5 shadow-xs transition-all active:scale-95"
                >
                  <span>Corporate Inquiry</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              )}
              <button
                onClick={clearLocationNotice}
                type="button"
                className="text-xs text-slate-500 hover:text-slate-800 font-semibold px-2 py-1 cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
