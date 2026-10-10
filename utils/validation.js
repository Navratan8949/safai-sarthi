export function validatePincode(pincode) {
  if (!pincode) return { valid: false, message: 'Please enter a 6-digit pincode.' };
  if (!/^\d{6}$/.test(pincode)) {
    return { valid: false, message: 'Pincode must be exactly 6 digits.' };
  }
  return { valid: true, message: '' };
}

export function validateMobile(mobile) {
  if (!mobile) return { valid: false, message: 'Mobile number is required.' };
  const cleaned = mobile.replace(/\D/g, '');
  if (!/^[6-9]\d{9}$/.test(cleaned)) {
    return {
      valid: false,
      message: 'Please enter a valid 10-digit Indian mobile number.',
    };
  }
  return { valid: true, message: '', value: cleaned };
}

export function validateEmail(email) {
  if (!email) return { valid: false, message: 'Email is required.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, message: 'Please enter a valid email address.' };
  }
  return { valid: true, message: '' };
}

export function validateName(name) {
  if (!name || name.trim().length < 2) {
    return { valid: false, message: 'Please enter your full name.' };
  }
  return { valid: true, message: '' };
}

export function validateRequired(value, fieldName) {
  if (!value || value.trim().length === 0) {
    return { valid: false, message: `${fieldName} is required.` };
  }
  return { valid: true, message: '' };
}
