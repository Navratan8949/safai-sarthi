export function getCartKey() {
  return 'safaisaarthi_cart';
}

export function getCouponKey() {
  return 'safaisaarthi_coupon';
}

export function getPincodeKey() {
  return 'safaisaarthi_pincode';
}

export function safeGetItem(key) {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function safeSetItem(key, value) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

export function safeRemoveItem(key) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

export function loadCart() {
  const raw = safeGetItem(getCartKey());
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

export function saveCart(items) {
  safeSetItem(getCartKey(), JSON.stringify(items));
}

export function getLocationKey() {
  return 'safaisaarthi_user_location';
}

export function loadPincode() {
  return safeGetItem(getPincodeKey()) || '';
}

export function savePincode(pincode) {
  if (pincode) {
    safeSetItem(getPincodeKey(), pincode);
  } else {
    safeRemoveItem(getPincodeKey());
  }
}

export function loadUserLocation() {
  const raw = safeGetItem(getLocationKey());
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveUserLocation(location) {
  if (location) {
    safeSetItem(getLocationKey(), JSON.stringify(location));
  } else {
    safeRemoveItem(getLocationKey());
  }
}
