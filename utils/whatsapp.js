import { formatCurrency, calculateAdvanceAmount, calculateRemainingBalance } from './pricing';

export function generateBookingWhatsAppMessage(data) {
  const {
    reference,
    customer,
    address,
    items,
    subtotal,
    additionalCharges,
    total,
    advanceAmount: customAdvance,
    remainingBalance: customRemaining,
    preference,
    notes,
  } = data;

  const advanceAmount = customAdvance !== undefined ? customAdvance : calculateAdvanceAmount(total);
  const remainingBalance = customRemaining !== undefined ? customRemaining : calculateRemainingBalance(total, advanceAmount);

  let message = `Hello SafaiSaarthi!\n\n`;
  message += `I would like to request a cleaning booking.\n\n`;
  message += `BOOKING REFERENCE: ${reference}\n\n`;

  message += `CUSTOMER DETAILS\n`;
  message += `• Name: ${customer.name}\n`;
  message += `• Mobile: ${customer.mobile}\n\n`;

  message += `SERVICE ADDRESS\n`;
  message += `• House/Flat: ${address.house}\n`;
  message += `• Building/Street: ${address.street}\n`;
  message += `• Area/Locality: ${address.area}\n`;
  message += `• Landmark: ${address.landmark || 'N/A'}\n`;
  message += `• Pincode: ${address.pincode}\n`;
  message += `• City: Jaipur\n`;
  if (address.mapsUrl) {
    message += `• 📍 Location: ${address.mapsUrl}\n`;
  }
  message += `\n`;

  message += `SELECTED SERVICES\n`;
  items.forEach((item, i) => {
    const addOnNames = (item.selectedAddOns || [])
      .map((a) => a.name)
      .join(', ') || 'None';
    const lineTotal = formatCurrency(
      (item.price + (item.selectedAddOns || []).reduce((s, a) => s + a.price, 0)) * item.quantity
    );
    const variantInfo = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
    message += `${i + 1}. ${item.name}${variantInfo}\n`;
    if (item.selectedVariant?.specs) {
      message += `   Option/Size: ${item.selectedVariant.specs}\n`;
    }
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Add-ons: ${addOnNames}\n`;
    message += `   Price: ${lineTotal}\n\n`;
  });

  message += `ORDER & PAYMENT BREAKDOWN\n`;
  message += `• Subtotal: ${formatCurrency(subtotal)}\n`;
  if (additionalCharges > 0) {
    message += `• Additional Charges: ${formatCurrency(additionalCharges)}\n`;
  }
  message += `• Estimated Total: ${formatCurrency(total)}\n`;
  message += `• ADVANCE BOOKING AMOUNT: ${formatCurrency(advanceAmount)} (Payable via QR code)\n`;
  message += `• REMAINING BALANCE: ${formatCurrency(remainingBalance)} (Payable on-site after service completion)\n\n`;

  message += `BOOKING PREFERENCE\n`;
  message += `• Preferred Date: ${preference.date}\n`;
  message += `• Preferred Time: ${preference.time}\n\n`;

  if (notes && notes.trim()) {
    message += `ADDITIONAL INSTRUCTIONS\n`;
    message += `${notes.trim()}\n\n`;
  }

  message += `PAYMENT & SERVICE WORKFLOW:\n`;
  message += `1. Advance Booking Amount: ${formatCurrency(advanceAmount)}\n`;
  message += `   👉 Please send the payment QR code to pay the advance booking amount.\n`;
  message += `2. Service Visit & Work:\n`;
  message += `   👉 Once advance is received, our cleaning team visits your premises on the scheduled date & time to complete the work.\n`;
  message += `3. Remaining Balance: ${formatCurrency(remainingBalance)}\n`;
  message += `   👉 Remaining balance will be collected on-site after the cleaning work is completed.\n\n`;

  message += `IMPORTANT TERMS & CANCELLATION POLICY:\n`;
  message += `⚠️ Booking amount is non-refundable if you cancel anything.\n`;
  message += `🔄 Cancellation me amount refund nahi hoga, aap date change / reschedule karwa sakte ho.\n\n`;

  message += `Please send the payment QR code to proceed. Thank you!`;

  return message;
}

export function generateCorporateWhatsAppMessage(data) {
  const { reference, details, requirements } = data;

  let message = `Hello SafaiSaarthi!\n\n`;
  message += `I would like to request a corporate cleaning quote.\n\n`;
  message += `ENQUIRY REFERENCE:\n${reference}\n\n`;

  message += `PROPERTY DETAILS\n\n`;
  message += `Company/Property: ${details.companyName}\n`;
  message += `Contact Person: ${details.contactPerson}\n`;
  message += `Mobile: ${details.mobile}\n`;
  message += `Email: ${details.email}\n`;
  message += `Property Type: ${details.propertyType}\n`;
  message += `Address: ${details.address}\n`;
  message += `Area: ${details.area}\n`;
  message += `Pincode: ${details.pincode}\n`;
  message += `Approximate Area: ${details.approxArea || 'N/A'}\n`;
  message += `Floors/Rooms: ${details.floorsRooms || 'N/A'}\n\n`;

  message += `SERVICE REQUIREMENTS\n\n`;
  message += `Service: ${requirements.serviceType}\n`;
  message += `Frequency: ${requirements.frequency}\n`;
  message += `Preferred Start Date: ${requirements.startDate}\n`;
  message += `Site Visit: ${requirements.siteVisit ? 'Yes' : 'No'}\n`;
  if (requirements.additionalReqs) {
    message += `Additional Requirements: ${requirements.additionalReqs}\n`;
  }
  message += `\nPlease contact me regarding the cleaning requirements and quotation.\n\n`;
  message += `Thank you!`;

  return message;
}

export function generateWhatsAppUrl(number, message) {
  const cleaned = (number || '').replace(/\D/g, '');
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}
