'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Check, X, ArrowRight, Navigation, Loader2 } from 'lucide-react';
import { serviceablePincodes } from '@/data/pincodes';
import { validatePincode } from '@/utils/validation';
import { useCart } from '@/context/CartContext';

export function PincodeChecker() {
  const { setPincode: setCartPincode, detectLocation, userLocation, isDetectingLocation } = useCart();
  const [pincode, setPincode] = useState(userLocation?.pincode || '');
  const [result, setResult] = useState(
    userLocation?.pincode
      ? {
          status: 'success',
          message: `Location active: ${userLocation.area || 'Jaipur'} (${userLocation.pincode}) - Instant slots available!`,
          detectedArea: userLocation.area,
        }
      : null
  );

  const handleCheck = (overridePin) => {
    const pinToCheck = overridePin || pincode;
    const validation = validatePincode(pinToCheck);
    if (!validation.valid) {
      setResult({ status: 'error', message: validation.message });
      return;
    }
    if (serviceablePincodes.includes(pinToCheck)) {
      setCartPincode(pinToCheck);
      setResult({ status: 'success', message: 'Great! We currently serve your area in Jaipur.' });
    } else {
      setResult({
        status: 'unsupported',
        message: "We're currently serving selected areas of Jaipur only. This pincode is not serviceable yet.",
      });
    }
  };

  const handleDetectLocation = async () => {
    setResult(null);
    const loc = await detectLocation();
    if (loc.success) {
      setPincode(loc.pincode);
      if (serviceablePincodes.includes(loc.pincode)) {
        setCartPincode(loc.pincode);
        setResult({
          status: 'success',
          message: `Location Detected: ${loc.area || loc.closestLocality}, Jaipur (${loc.pincode}). Express slots available!`,
          detectedArea: loc.area || loc.closestLocality,
        });
      } else {
        setResult({
          status: 'unsupported',
          message: `Detected ${loc.area || 'your area'} (${loc.pincode}), but we are currently serving core Jaipur pincodes only.`,
        });
      }
    } else {
      setResult({
        status: 'error',
        message: loc.error || 'Could not fetch your location. Please check browser permissions.',
      });
    }
  };

  const popularAreas = [
    { name: 'Malviya Nagar', pin: '302017' },
    { name: 'Vaishali Nagar', pin: '302021' },
    { name: 'Mansarovar', pin: '302020' },
    { name: 'C-Scheme', pin: '302001' },
    { name: 'Raja Park', pin: '302004' },
    { name: 'Jagatpura', pin: '302017' },
  ];

  const handleSelectArea = (pin, areaName) => {
    setPincode(pin);
    if (serviceablePincodes.includes(pin)) {
      setCartPincode(pin);
      setResult({
        status: 'success',
        message: `Great! We serve ${areaName || pin} with instant arrival slots available.`,
        detectedArea: areaName,
      });
    }
  };

  return (
    <div className="rounded-3xl border border-sky-100/80 bg-white/95 p-6 lg:p-8 shadow-xl shadow-sky-900/5 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 shadow-2xs">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Check Instant Availability in Jaipur</h3>
            <p className="text-xs text-slate-500">Auto-detect your area via GPS or enter your 6-digit pincode</p>
          </div>
        </div>

        {/* Location Service Trigger Button */}
        <button
          onClick={handleDetectLocation}
          disabled={isDetectingLocation}
          type="button"
          className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full bg-sky-50 hover:bg-sky-100 border border-sky-200/80 px-3.5 py-1.5 text-xs font-bold text-sky-700 transition-all shadow-xs hover:shadow-sm active:scale-98 disabled:opacity-60 cursor-pointer"
        >
          {isDetectingLocation ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin text-sky-600" />
              <span>Detecting Area...</span>
            </>
          ) : (
            <>
              <Navigation className="h-3.5 w-3.5 text-sky-600 fill-sky-600/20" />
              <span>Use Current Location</span>
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="tel"
            inputMode="numeric"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            placeholder="Enter Jaipur pincode (e.g. 302001)"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-5 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all"
            aria-label="Enter your pincode"
          />
        </div>
        <button 
          onClick={() => handleCheck()} 
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-500/25 transition-all hover:shadow-lg hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
        >
          Check Pincode
        </button>
      </div>

      {/* Quick locality chips */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-1">
        <span className="text-xs font-semibold text-slate-400 mr-1">Popular Areas:</span>
        {popularAreas.map((area) => (
          <button
            key={area.name}
            onClick={() => handleSelectArea(area.pin, area.name)}
            type="button"
            className="rounded-full bg-slate-100/80 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 border border-slate-200/60 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors cursor-pointer"
          >
            {area.name}
          </button>
        ))}
      </div>

      {result && (
        <div className={`mt-5 rounded-2xl p-4 animate-fade-in ${
          result.status === 'success'
            ? 'bg-emerald-50/90 border border-emerald-200 shadow-xs'
            : result.status === 'unsupported'
            ? 'bg-amber-50/90 border border-amber-200 shadow-xs'
            : 'bg-red-50/90 border border-red-200 shadow-xs'
        }`}>
          <div className="flex items-start gap-3">
            {result.status === 'success' ? (
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500 text-white flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4" />
              </div>
            ) : (
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500 text-white flex-shrink-0 mt-0.5">
                <X className="h-4 w-4" />
              </div>
            )}
            <div className="flex-1">
              <p className={`text-sm font-bold ${
                result.status === 'success' ? 'text-emerald-900' : result.status === 'unsupported' ? 'text-amber-900' : 'text-red-900'
              }`}>
                {result.message}
              </p>
              {result.status === 'unsupported' && (
                <div className="mt-3 flex flex-col sm:flex-row gap-3">
                  <Link href="/corporate-cleaning" className="text-xs font-bold text-sky-600 hover:underline inline-flex items-center gap-1">
                    Explore Corporate Services <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link href="/corporate-enquiry" className="text-xs font-bold text-sky-600 hover:underline inline-flex items-center gap-1">
                    Send Custom Request <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
