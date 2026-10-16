'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MessageCircle, Copy, Check, ArrowRight, ArrowLeft, AlertCircle, ShieldCheck, Navigation, Loader2, MapPin } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency, calculateItemTotal, calculateAdvanceAmount, calculateRemainingBalance } from '@/utils/pricing';
import { validateName, validateMobile, validateRequired, validatePincode } from '@/utils/validation';
import { serviceablePincodes } from '@/data/pincodes';
import { generateBookingWhatsAppMessage, generateWhatsAppUrl } from '@/utils/whatsapp';
import { generateBookingReference } from '@/utils/booking';
import { business } from '@/config/business';

const timeSlots = [
  '8:00 AM – 10:00 AM',
  '10:00 AM – 12:00 PM',
  '12:00 PM – 2:00 PM',
  '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM',
  '6:00 PM – 8:00 PM',
];

export default function CheckoutPage() {
  const router = useRouter();
  const {
    cartItems,
    subtotal,
    additionalCharges,
    total,
    advanceAmount: cartAdvanceAmount,
    remainingBalance: cartRemainingBalance,
    pincode: cartPincode,
    userLocation,
    detectLocation,
    isDetectingLocation,
    mounted,
  } = useCart();

  const advanceAmount = cartAdvanceAmount ?? calculateAdvanceAmount(total);
  const remainingBalance = cartRemainingBalance ?? calculateRemainingBalance(total, advanceAmount);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    house: '',
    street: '',
    area: userLocation?.area || '',
    landmark: '',
    pincode: cartPincode || userLocation?.pincode || '',
    mapsUrl: userLocation?.mapsUrl || '',
    floor: '',
    instructions: '',
    date: '',
    time: '',
    consent: false,
  });

  const [locationStatus, setLocationStatus] = useState(
    userLocation?.area ? `Detected Location: ${userLocation.area}, Jaipur (${userLocation.pincode})` : ''
  );
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!mounted) {
    return <div className="py-16 lg:py-24"><div className="container-max"><div className="shimmer-bg rounded-2xl h-96" /></div></div>;
  }

  if (cartItems.length === 0 && !confirmation) {
    return (
      <div className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold text-navy">Your cart is empty</h1>
            <p className="mt-2 text-sm text-ink-light">Add some services before checking out.</p>
            <Link href="/services" className="mt-6 btn-primary">Explore Services</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const e = {};
    const nameCheck = validateName(formData.name);
    if (!nameCheck.valid) e.name = nameCheck.message;

    const mobileCheck = validateMobile(formData.mobile);
    if (!mobileCheck.valid) e.mobile = mobileCheck.message;

    const houseCheck = validateRequired(formData.house, 'House / Flat');
    if (!houseCheck.valid) e.house = houseCheck.message;

    const streetCheck = validateRequired(formData.street, 'Building / Street');
    if (!streetCheck.valid) e.street = streetCheck.message;

    const areaCheck = validateRequired(formData.area, 'Area / Locality');
    if (!areaCheck.valid) e.area = areaCheck.message;

    const pincodeCheck = validatePincode(formData.pincode);
    if (!pincodeCheck.valid) {
      e.pincode = pincodeCheck.message;
    } else if (!serviceablePincodes.includes(formData.pincode)) {
      e.pincode = 'This pincode is not serviceable for residential cleaning.';
    }

    const dateCheck = validateRequired(formData.date, 'Preferred date');
    if (!dateCheck.valid) e.date = dateCheck.message;

    if (!formData.time) e.time = 'Please select a preferred time window.';
    if (!formData.consent) e.consent = 'Please agree to the Privacy Policy to proceed.';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAutoDetectAddress = async () => {
    const loc = await detectLocation();
    if (loc.success) {
      const areaName = loc.area || loc.closestLocality || '';
      setFormData((prev) => ({
        ...prev,
        area: areaName,
        pincode: loc.pincode || prev.pincode,
        mapsUrl: loc.mapsUrl || '',
      }));
      setErrors((prev) => ({ ...prev, area: null, pincode: null }));
      setLocationStatus(`GPS Detected: ${areaName}, Jaipur (${loc.pincode})`);
    } else {
      setLocationStatus(loc.error || 'Unable to detect location. Please type manually.');
    }
  };

  const handleSubmit = () => {
    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const reference = generateBookingReference();
    const message = generateBookingWhatsAppMessage({
      reference,
      customer: { name: formData.name, mobile: formData.mobile },
      address: {
        house: formData.house,
        street: formData.street,
        area: formData.area,
        landmark: formData.landmark,
        pincode: formData.pincode,
        mapsUrl: formData.mapsUrl,
      },
      items: cartItems,
      subtotal,
      additionalCharges,
      total,
      advanceAmount,
      remainingBalance,
      preference: { date: formData.date, time: formData.time },
      notes: formData.instructions,
    });

    setConfirmation({ reference, message, total, advanceAmount, remainingBalance });
  };

  const handleOpenWhatsApp = () => {
    const url = generateWhatsAppUrl(business.whatsappNumber, confirmation.message);
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(confirmation.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (confirmation) {
    return (
      <div className="py-8 lg:py-12">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="card-base p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 mx-auto mb-5">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-navy">Your Booking Request Is Ready</h1>
              <p className="mt-3 text-sm text-ink-light leading-relaxed">
                We&apos;ve prepared your booking details. WhatsApp will open with your complete request.
                Please review the message and press Send to submit it.
              </p>

              <div className="mt-6 rounded-2xl bg-sky-50/70 border border-sky-200 p-5 text-left space-y-3">
                <div className="flex justify-between items-center pb-2.5 border-b border-sky-200">
                  <span className="text-xs font-bold text-ink-light uppercase tracking-wide">Booking Reference</span>
                  <span className="text-sm font-bold text-sky-600">{confirmation.reference}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-ink-light">Estimated Total</span>
                  <span className="text-base font-bold text-navy">{formatCurrency(confirmation.total)}</span>
                </div>
                <div className="flex justify-between items-center rounded-xl bg-emerald-100/80 px-3.5 py-2.5 border border-emerald-300">
                  <div>
                    <span className="text-xs font-bold text-emerald-950 block">Advance Booking Amount</span>
                    <span className="text-[11px] text-emerald-800">Payable via QR code sent on WhatsApp</span>
                  </div>
                  <span className="text-lg font-black text-emerald-800">{formatCurrency(confirmation.advanceAmount)}</span>
                </div>
                <div className="flex justify-between items-center px-1">
                  <div>
                    <span className="text-xs font-medium text-ink-light block">Remaining Balance</span>
                    <span className="text-[11px] text-ink-light">Pay directly after service completion</span>
                  </div>
                  <span className="text-sm font-bold text-navy">{formatCurrency(confirmation.remainingBalance)}</span>
                </div>
                {formData.instructions && (
                  <div className="pt-2.5 border-t border-sky-200 text-xs">
                    <span className="text-[11px] font-bold text-ink-light block uppercase tracking-wide">Additional Instructions</span>
                    <p className="text-xs text-navy mt-1 bg-white/80 p-2.5 rounded-lg border border-sky-200/60 font-medium whitespace-pre-wrap">{formData.instructions}</p>
                  </div>
                )}
              </div>

              {/* Policy alert on confirmation */}
              <div className="mt-4 rounded-xl bg-amber-50 border-2 border-amber-300/90 p-4 text-left space-y-1.5">
                <div className="font-bold text-amber-950 flex items-center gap-1.5 text-xs">
                  <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <span>Important Cancellation & Rescheduling Notice:</span>
                </div>
                <p className="text-xs font-bold text-amber-950">
                  Booking amount is non refundable if you cancel anything.
                </p>
                <p className="text-amber-800 leading-relaxed text-[11px]">
                  • <strong>Cancellation:</strong> Cancellation me amount refund nahi hoga.<br />
                  • <strong>Date Change:</strong> Aap apni date change / reschedule karwa sakte ho without losing your booking deposit.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <button onClick={handleOpenWhatsApp} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#1DA851] hover:shadow-lg active:scale-[0.98]">
                  <MessageCircle className="h-5 w-5" />
                  Open WhatsApp
                </button>
                <button onClick={handleCopy} className="w-full btn-secondary">
                  {copied ? <><Check className="h-4 w-4 text-green-600" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy Booking Summary</>}
                </button>
              </div>

              <div className="mt-6 text-left">
                <details>
                  <summary className="text-sm font-semibold text-sky-500 cursor-pointer hover:text-sky-600">
                    View full booking message
                  </summary>
                  <pre className="mt-3 rounded-xl bg-navy-600 text-white text-xs p-4 whitespace-pre-wrap overflow-x-auto font-mono">
                    {confirmation.message}
                  </pre>
                </details>
              </div>

              <p className="mt-6 text-xs text-ink-light">
                Unable to open WhatsApp? Copy the summary above and send it to us manually.
              </p>

              <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-500 hover:text-sky-600">
                <ArrowLeft className="h-4 w-4" /> Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const inputErr = (field) => errors[field] ? 'border-red-400 bg-red-50' : '';

  return (
    <div className="py-8 lg:py-12">
      <div className="container-max">
        <Link href="/cart" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-sky-600 mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Cart
        </Link>
        <h1 className="text-3xl font-bold text-navy mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card-base p-6">
              <h2 className="text-lg font-bold text-navy mb-4">Customer Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`input-base ${inputErr('name')}`}
                    data-error={!!errors.name}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Mobile Number *</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={formData.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value)}
                    className={`input-base ${inputErr('mobile')}`}
                    data-error={!!errors.mobile}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                  />
                  {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                </div>
              </div>
            </div>

            <div className="card-base p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-lg font-bold text-navy">Service Address</h2>
                  <p className="text-xs text-ink-light">Where do our cleaning professionals need to arrive?</p>
                </div>
                <button
                  type="button"
                  onClick={handleAutoDetectAddress}
                  disabled={isDetectingLocation}
                  className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3.5 py-1.5 text-xs font-bold text-sky-700 transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-98 disabled:opacity-60"
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

              {locationStatus && (
                <div className="mb-4 rounded-xl bg-sky-50/80 border border-sky-200/80 p-3 text-xs font-semibold text-sky-800 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sky-600 flex-shrink-0" />
                  <span>{locationStatus}</span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">House / Flat *</label>
                  <input
                    type="text"
                    value={formData.house}
                    onChange={(e) => handleChange('house', e.target.value)}
                    className={`input-base ${inputErr('house')}`}
                    data-error={!!errors.house}
                    placeholder="House / Flat number"
                  />
                  {errors.house && <p className="mt-1 text-xs text-red-500">{errors.house}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Building / Street *</label>
                  <input
                    type="text"
                    value={formData.street}
                    onChange={(e) => handleChange('street', e.target.value)}
                    className={`input-base ${inputErr('street')}`}
                    data-error={!!errors.street}
                    placeholder="Building / Street name"
                  />
                  {errors.street && <p className="mt-1 text-xs text-red-500">{errors.street}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Area / Locality *</label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => handleChange('area', e.target.value)}
                    className={`input-base ${inputErr('area')}`}
                    data-error={!!errors.area}
                    placeholder="Area / Locality"
                  />
                  {errors.area && <p className="mt-1 text-xs text-red-500">{errors.area}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Pincode *</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={6}
                    value={formData.pincode}
                    onChange={(e) => handleChange('pincode', e.target.value.replace(/\D/g, ''))}
                    className={`input-base ${inputErr('pincode')}`}
                    data-error={!!errors.pincode}
                    placeholder="6-digit pincode"
                  />
                  {errors.pincode && <p className="mt-1 text-xs text-red-500">{errors.pincode}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Landmark (Optional)</label>
                  <input
                    type="text"
                    value={formData.landmark}
                    onChange={(e) => handleChange('landmark', e.target.value)}
                    className="input-base"
                    placeholder="Nearby landmark"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Floor (Optional)</label>
                  <input
                    type="text"
                    value={formData.floor}
                    onChange={(e) => handleChange('floor', e.target.value)}
                    className="input-base"
                    placeholder="Floor number"
                  />
                </div>
              </div>
            </div>

            <div className="card-base p-6">
              <h2 className="text-lg font-bold text-navy mb-4">Booking Preference</h2>
              <p className="text-xs text-ink-light mb-4">
                Your preferred slot will be confirmed by the SafaiSaarthi team.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Preferred Date *</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className={`input-base ${inputErr('date')}`}
                    data-error={!!errors.date}
                  />
                  {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Preferred Time Window *</label>
                  <select
                    value={formData.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className={`input-base ${inputErr('time')}`}
                    data-error={!!errors.time}
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time}</p>}
                </div>
              </div>
            </div>

            <div className="card-base p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-navy">Additional Instructions (Optional)</h2>
                <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">Sent on WhatsApp</span>
              </div>
              <p className="text-xs text-ink-light mb-3">
                Add specific directions, parking or lift details, pets at home, delicate surfaces, or custom requests for the cleaning squad.
              </p>
              <textarea
                value={formData.instructions}
                onChange={(e) => handleChange('instructions', e.target.value)}
                className="input-base min-h-[105px] resize-y"
                placeholder="Example: Flat 402, 4th Floor (lift available). Please focus especially on kitchen chimney & balcony rails. Dog at home will be kept in room."
              />
            </div>

            <div className="card-base p-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleChange('consent', e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-border text-sky-500 focus:ring-sky-200"
                />
                <span className="text-sm text-ink leading-relaxed">
                  I agree to the <Link href="/privacy-policy" className="text-sky-500 font-semibold hover:underline">Privacy Policy</Link>, <Link href="/terms" className="text-sky-500 font-semibold hover:underline">Terms of Service</Link>, and <Link href="/cancellation-policy" className="text-sky-500 font-semibold hover:underline">Cancellation Policy</Link>, and understand that my booking details will be shared with SafaiSaarthi via WhatsApp.
                </span>
              </label>
              {errors.consent && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.consent}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card-base p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-bold text-navy mb-4">Order Summary</h2>

              <div className="space-y-3 max-h-48 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-navy truncate">{item.name}</p>
                      {item.selectedVariant && (
                        <p className="text-[11px] font-bold text-sky-700">{item.selectedVariant.name}</p>
                      )}
                      <p className="text-xs text-ink-light">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-navy ml-2">{formatCurrency(calculateItemTotal(item))}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-light">Subtotal</span>
                  <span className="font-semibold text-navy">{formatCurrency(subtotal)}</span>
                </div>
                {additionalCharges > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-light">Additional Charges</span>
                    <span className="font-semibold text-navy">{formatCurrency(additionalCharges)}</span>
                  </div>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-bold text-navy">Estimated Total</span>
                  <span className="text-2xl font-bold text-navy">{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Advance Booking Amount and Remaining Balance Breakdown */}
              <div className="mt-4 rounded-xl bg-gradient-to-br from-sky-50/90 to-emerald-50/80 border border-sky-200 p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-navy block">Advance Booking Amount</span>
                    <span className="text-[11px] text-sky-700 font-medium">Payable via QR code to confirm slot</span>
                  </div>
                  <span className="text-base font-black text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-300 shadow-2xs">
                    {formatCurrency(advanceAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-sky-200/60 text-xs">
                  <div>
                    <span className="font-medium text-ink-light block">Remaining Balance</span>
                    <span className="text-[11px] text-ink-light">Pay after service completion</span>
                  </div>
                  <span className="font-bold text-navy text-sm">
                    {formatCurrency(remainingBalance)}
                  </span>
                </div>
              </div>

              {/* Policy Notice directly below checkout payment */}
              <div className="mt-3 rounded-xl bg-amber-50 border-2 border-amber-300/90 p-3 text-left space-y-1">
                <p className="font-bold text-amber-950 flex items-center gap-1.5 text-xs">
                  <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <span>Important Policy:</span>
                </p>
                <p className="text-xs font-bold text-amber-950">
                  Booking amount is non refundable if you cancel anything.
                </p>
                <p className="text-amber-900 text-[11px] leading-relaxed">
                  Cancellation me amount refund nahi hoga. Aap apni booking date change / reschedule karwa sakte ho.
                </p>
              </div>

              <button onClick={handleSubmit} className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#1DA851] hover:shadow-lg active:scale-[0.98]">
                <MessageCircle className="h-5 w-5" />
                Continue on WhatsApp
              </button>

              {/* Payment Flow Explanation */}
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 text-left text-xs space-y-2">
                <p className="font-bold text-navy flex items-center gap-1.5 text-xs">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  How Payment Works:
                </p>
                <ol className="text-ink-light space-y-1.5 pl-4 list-decimal text-[11px] leading-relaxed">
                  <li><strong>Submit Request:</strong> Your order details and additional instructions will be shared on WhatsApp.</li>
                  <li><strong>Pay Advance via QR:</strong> Our executive will send a payment QR code for the {formatCurrency(advanceAmount)} advance booking amount.</li>
                  <li><strong>Visit & Work:</strong> Once the advance is received, our cleaning team visits your premises on the scheduled date & completes the work.</li>
                  <li><strong>Pay Remaining Balance:</strong> Verify the cleaning work and pay the remaining balance of {formatCurrency(remainingBalance)} directly on-site.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
