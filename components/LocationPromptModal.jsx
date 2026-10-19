'use client';

import { useState } from 'react';
import { MapPin, Navigation, X, Check, Loader2, ShieldCheck, AlertCircle } from 'lucide-react';
import { useLocation } from '@/context/LocationContext';
import { jaipurLocalities } from '@/utils/location';

export function LocationPromptModal() {
  const {
    showPromptModal,
    dismissPrompt,
    requestLocation,
    isDetecting,
    userLocation,
    permissionStatus,
    errorMsg,
    setUserLocation,
  } = useLocation();

  if (!showPromptModal || userLocation) {
    return null;
  }

  const handleSelectArea = (loc) => {
    setUserLocation({
      success: true,
      coords: { lat: loc.lat, lng: loc.lng },
      area: loc.name,
      pincode: loc.pincode,
      closestLocality: loc.name,
      isJaipur: true,
      mapsUrl: `https://maps.google.com/?q=${loc.lat},${loc.lng}`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-sky-100 animate-slide-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={dismissPrompt}
          type="button"
          aria-label="Close location prompt"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Icon & Title */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-sky-600 text-white shadow-md shadow-sky-500/25 flex-shrink-0">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-sky-700 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
              Location Check
            </span>
            <h2 id="location-modal-title" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Enable Location Service
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Allow location to verify instant squad availability, calculate accurate ETA, and ensure verified cleaners reach your doorstep in Jaipur.
            </p>
          </div>
        </div>

        {/* Error / Denied notice */}
        {errorMsg && (
          <div className="mt-4 rounded-2xl bg-amber-50 p-3.5 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Location access blocked or unavailable</p>
              <p className="mt-0.5 text-amber-700">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Main Enable Button */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => requestLocation()}
            disabled={isDetecting}
            type="button"
            className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
          >
            {isDetecting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Requesting Location...</span>
              </>
            ) : (
              <>
                <Navigation className="h-4 w-4 fill-white/20" />
                <span>Enable Device Location</span>
              </>
            )}
          </button>

          <button
            onClick={dismissPrompt}
            type="button"
            className="w-full inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Enter Locality / Pincode Manually
          </button>
        </div>

        {/* Locality Quick Pick */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-xs font-bold text-slate-400 mb-2">Or select your Jaipur locality:</p>
          <div className="flex flex-wrap gap-1.5">
            {jaipurLocalities.slice(0, 8).map((loc) => (
              <button
                key={loc.name}
                type="button"
                onClick={() => handleSelectArea(loc)}
                className="rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 border border-slate-200/60 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors cursor-pointer"
              >
                {loc.name}
              </button>
            ))}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
          <span>Used strictly for service coverage check. No background tracking.</span>
        </div>
      </div>
    </div>
  );
}
