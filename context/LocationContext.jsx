'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { detectBrowserLocation } from '@/utils/location';
import { loadUserLocation, saveUserLocation } from '@/utils/cart';

const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [userLocation, setUserLocationState] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState('prompt'); // 'prompt' | 'granted' | 'denied'
  const [errorMsg, setErrorMsg] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Request location from browser (calls navigator.geolocation)
  const requestLocation = useCallback(async () => {
    setIsDetecting(true);
    setErrorMsg(null);
    try {
      const res = await detectBrowserLocation();
      if (res.success) {
        setUserLocationState(res);
        saveUserLocation(res);
        setPermissionStatus('granted');
        setShowPromptModal(false);
        return res;
      } else {
        if (res.code === 1) {
          // User clicked "Don't Allow" / denied
          setPermissionStatus('denied');
        }
        setErrorMsg(res.error);
        return res;
      }
    } finally {
      setIsDetecting(false);
    }
  }, []);

  const setUserLocation = useCallback((loc) => {
    setUserLocationState(loc);
    saveUserLocation(loc);
    setShowPromptModal(false);
  }, []);

  const dismissPrompt = useCallback(() => {
    setShowPromptModal(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('safaisarthi_location_dismissed', 'true');
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    const saved = loadUserLocation();
    if (saved) {
      setUserLocationState(saved);
      setPermissionStatus('granted');
      return;
    }

    // Auto-request location on website arrival
    if (typeof window !== 'undefined' && navigator.geolocation) {
      // 1. Directly invoke browser permission prompt
      requestLocation();

      // 2. Also show polite modal if not already dismissed in this session
      const dismissed = sessionStorage.getItem('safaisarthi_location_dismissed');
      if (!dismissed) {
        setShowPromptModal(true);
      }
    }
  }, [requestLocation]);

  const value = {
    userLocation,
    isDetecting,
    showPromptModal,
    permissionStatus,
    errorMsg,
    mounted,
    requestLocation,
    detectLocation: requestLocation,
    setUserLocation,
    dismissPrompt,
    setShowPromptModal,
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
