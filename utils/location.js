// Browser Geolocation & Jaipur Locality Detection Service

export const jaipurLocalities = [
  { name: 'Vaishali Nagar', pincode: '302021', lat: 26.9048, lng: 75.7447 },
  { name: 'Mansarovar', pincode: '302020', lat: 26.8530, lng: 75.7656 },
  { name: 'Malviya Nagar', pincode: '302017', lat: 26.8549, lng: 75.8243 },
  { name: 'C-Scheme', pincode: '302001', lat: 26.9124, lng: 75.8016 },
  { name: 'Raja Park', pincode: '302004', lat: 26.8967, lng: 75.8276 },
  { name: 'Jagatpura', pincode: '302017', lat: 26.8289, lng: 75.8556 },
  { name: 'Civil Lines / Sodala', pincode: '302019', lat: 26.9015, lng: 75.7758 },
  { name: 'Bani Park', pincode: '302016', lat: 26.9328, lng: 75.7925 },
  { name: 'Tonk Road / Bapu Nagar', pincode: '302015', lat: 26.8785, lng: 75.8075 },
  { name: 'Vidhyadhar Nagar', pincode: '302039', lat: 26.9638, lng: 75.7766 },
  { name: 'Durgapura', pincode: '302018', lat: 26.8522, lng: 75.7922 },
  { name: 'Gopalpura Bypass', pincode: '302018', lat: 26.8640, lng: 75.7890 },
  { name: 'Pratap Nagar', pincode: '302033', lat: 26.8042, lng: 75.8193 },
  { name: 'Sanganer', pincode: '302029', lat: 26.8217, lng: 75.7709 },
  { name: 'Sitapura', pincode: '302022', lat: 26.7820, lng: 75.8450 },
  { name: 'Jhotwara', pincode: '302012', lat: 26.9537, lng: 75.7420 },
  { name: 'Ajmer Road', pincode: '302019', lat: 26.8920, lng: 75.7450 },
  { name: 'Shyam Nagar', pincode: '302019', lat: 26.8942, lng: 75.7635 },
];

// Calculate distance between two GPS coordinates using Haversine formula (km)
export function getCoordinatesDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Find closest Jaipur locality based on GPS coordinates
export function findClosestJaipurLocality(lat, lng) {
  let closest = jaipurLocalities[0];
  let minDistance = Infinity;

  for (const locality of jaipurLocalities) {
    const dist = getCoordinatesDistanceKm(lat, lng, locality.lat, locality.lng);
    if (dist < minDistance) {
      minDistance = dist;
      closest = locality;
    }
  }

  return {
    ...closest,
    distanceKm: Math.round(minDistance * 10) / 10,
    isJaipurNearby: minDistance <= 35, // within 35 km of Jaipur center
  };
}

// Request browser geolocation and resolve nearest area
export async function detectBrowserLocation() {
  if (typeof window === 'undefined' || !navigator.geolocation) {
    return {
      success: false,
      error: 'Geolocation is not supported by your browser.',
    };
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const closest = findClosestJaipurLocality(latitude, longitude);

        let reverseAddress = null;
        let detectedPincode = closest.pincode;
        let detectedAreaName = closest.name;

        // Try free reverse geocoding via OpenStreetMap with short timeout
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2500);

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            {
              signal: controller.signal,
              headers: { 'Accept-Language': 'en' },
            }
          );
          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            reverseAddress = data.display_name;
            const addr = data.address || {};
            if (addr.postcode && /^\d{6}$/.test(addr.postcode)) {
              detectedPincode = addr.postcode;
            }
            if (addr.suburb || addr.neighbourhood || addr.residential) {
              detectedAreaName = addr.suburb || addr.neighbourhood || addr.residential;
            }
          }
        } catch {
          // Fallback to local coordinate matching which always works
        }

        resolve({
          success: true,
          coords: { lat: latitude, lng: longitude },
          area: detectedAreaName,
          pincode: detectedPincode,
          closestLocality: closest.name,
          distanceKm: closest.distanceKm,
          isJaipur: closest.isJaipurNearby,
          fullAddress: reverseAddress,
          mapsUrl: `https://maps.google.com/?q=${latitude},${longitude}`,
        });
      },
      (error) => {
        let errorMsg = 'Failed to detect location.';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMsg = 'Location permission denied. Please enable location in your browser settings or choose your area manually.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMsg = 'Location information is unavailable. Please check your GPS.';
            break;
          case error.TIMEOUT:
            errorMsg = 'Location request timed out. Please try again.';
            break;
        }
        resolve({
          success: false,
          error: errorMsg,
          code: error.code,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  });
}
