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

// Request browser geolocation with resilient two-stage strategy (fast network first, then high accuracy fallback)
export async function detectBrowserLocation() {
  if (typeof window === 'undefined' || !navigator.geolocation) {
    return {
      success: false,
      error: 'Geolocation is not supported by your browser.',
    };
  }

  // Two-stage position fetcher to prevent timeouts on mobile indoors
  const getPosition = () => {
    return new Promise((resolve, reject) => {
      // Step 1: Fast network / cellular / Wi-Fi triangulation (returns in < 500ms, works indoors)
      navigator.geolocation.getCurrentPosition(
        resolve,
        (err) => {
          // If permission was denied by user, fail immediately without re-prompting
          if (err && err.code === err.PERMISSION_DENIED) {
            reject(err);
            return;
          }
          // Step 2: Fallback to high accuracy with generous 15s timeout
          navigator.geolocation.getCurrentPosition(
            resolve,
            reject,
            {
              enableHighAccuracy: true,
              timeout: 15000,
              maximumAge: 300000, // Accept cached position up to 5 mins
            }
          );
        },
        {
          enableHighAccuracy: false,
          timeout: 8000,
          maximumAge: 300000, // Accept cached position up to 5 mins
        }
      );
    });
  };

  try {
    const position = await getPosition();
    const { latitude, longitude } = position.coords;
    const closest = findClosestJaipurLocality(latitude, longitude);

    let detectedPincode = closest.pincode;
    let detectedAreaName = closest.name;
    let reverseAddress = null;

    // Optional quick reverse geocoding via OpenStreetMap with strict 1.8s timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1800);

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
      // Local coordinate matching already provides instant Jaipur area & pincode!
    }

    return {
      success: true,
      coords: { lat: latitude, lng: longitude },
      area: detectedAreaName,
      pincode: detectedPincode,
      closestLocality: closest.name,
      distanceKm: closest.distanceKm,
      isJaipur: closest.isJaipurNearby,
      fullAddress: reverseAddress,
      mapsUrl: `https://maps.google.com/?q=${latitude},${longitude}`,
    };
  } catch (error) {
    let errorMsg = 'Failed to detect location.';
    switch (error?.code) {
      case 1:
        errorMsg = 'Location permission was denied. Please pick your area below.';
        break;
      case 2:
        errorMsg = 'Location unavailable. Please select your area below.';
        break;
      case 3:
        errorMsg = 'Location request took too long. Please pick your area below.';
        break;
      default:
        errorMsg = error?.message || 'Could not fetch your location.';
    }
    return {
      success: false,
      error: errorMsg,
      code: error?.code || 0,
    };
  }
}
