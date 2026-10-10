'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { detectBrowserLocation } from '@/utils/location';
import { loadUserLocation, saveUserLocation } from '@/utils/cart';
import { serviceablePincodes } from '@/data/pincodes';

const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [userLocation, setUserLocationState] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState('prompt'); // 'prompt' | 'granted' | 'denied'
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationNotice, setLocationNotice] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Helper to enrich location result with serviceability in Jaipur
  const enrichLocation = useCallback((res) => {
    const isServiceable = Boolean(res.isJaipur && serviceablePincodes.includes(res.pincode));
    const enriched = {
      ...res,
      isServiceable,
      statusLabel: isServiceable ? 'Service Available' : 'Outside Service Area',
    };
    return enriched;
  }, []);

  // Show a notification toast when location is determined
  const triggerAvailabilityNotice = useCallback((loc) => {
    setLocationNotice({
      isServiceable: loc.isServiceable,
      area: loc.area || loc.closestLocality || 'Jaipur',
      pincode: loc.pincode,
      isJaipur: loc.isJaipur,
      message: loc.isServiceable
        ? `Great news! SafaiSaarthi Express Cleaning is available in ${loc.area || loc.closestLocality}, Jaipur (${loc.pincode}). Instant arrival slots are active!`
        : `We detected ${loc.area || 'your location'} (${loc.pincode}), but we are currently serving selected areas of Jaipur only.`,
    });
  }, []);

  // Request location from browser (called on user click)
  const requestLocation = useCallback(async (isUserInitiated = false) => {
    setIsDetecting(true);
    setErrorMsg(null);
    try {
      const rawRes = await detectBrowserLocation();
      if (rawRes.success) {
        const enriched = enrichLocation(rawRes);
        setUserLocationState(enriched);
        saveUserLocation(enriched);
        setPermissionStatus('granted');
        setShowPromptModal(false);

        // Always show instant feedback notice if user initiated or first time
        triggerAvailabilityNotice(enriched);
        return enriched;
      } else {
        if (rawRes.code === 1) {
          setPermissionStatus('denied');
        }
        setErrorMsg(rawRes.error);
        if (isUserInitiated) {
          setLocationNotice({
            isServiceable: false,
            area: 'Unknown',
            error: true,
            message: rawRes.error || 'Could not fetch your location. Please choose your area manually.',
          });
        }
        return rawRes;
      }
    } finally {
      setIsDetecting(false);
    }
  }, [enrichLocation, triggerAvailabilityNotice]);

  const setUserLocation = useCallback((loc) => {
    const enriched = enrichLocation(loc);
    setUserLocationState(enriched);
    saveUserLocation(enriched);
    setShowPromptModal(false);
    triggerAvailabilityNotice(enriched);
  }, [enrichLocation, triggerAvailabilityNotice]);

  const dismissPrompt = useCallback(() => {
    setShowPromptModal(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('safaisarthi_location_dismissed', 'true');
    }
  }, []);

  const clearLocationNotice = useCallback(() => {
    setLocationNotice(null);
  }, []);

  useEffect(() => {
    setMounted(true);
    const saved = loadUserLocation();
    if (saved) {
      const enriched = enrichLocation(saved);
      setUserLocationState(enriched);
      setPermissionStatus('granted');
      return;
    }

    // Only silently check if permission was ALREADY granted in this browser
    // NEVER forcefully prompt on reload unless user initiates by clicking
    if (typeof window !== 'undefined' && navigator.permissions && navigator.geolocation) {
      try {
        navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
          if (permission.state === 'granted') {
            // Silently fetch location only because user already granted permission
            requestLocation(false);
          } else {
            setPermissionStatus(permission.state);
          }
        }).catch(() => {});
      } catch {
        // Fallback
      }
    }
  }, [enrichLocation, requestLocation]);

  const value = {
    userLocation,
    isDetecting,
    showPromptModal,
    permissionStatus,
    errorMsg,
    locationNotice,
    mounted,
    requestLocation: () => requestLocation(true),
    detectLocation: () => requestLocation(true),
    setUserLocation,
    dismissPrompt,
    setShowPromptModal,
    clearLocationNotice,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return ctx;
}
