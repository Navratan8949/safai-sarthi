import { formatCurrency } from './pricing';

export function generateBookingWhatsAppMessage(data) {
  const {
    reference,
    customer,
    address,
    items,
    subtotal,
    coupon,
    discount,
    additionalCharges,
    total,
    preference,
    notes,
  } = data;

  let message = `Hello SafaiSaarthi!\n\n`;
  message += `I would like to request a cleaning booking.\n\n`;
  message += `BOOKING REFERENCE:\n${reference}\n\n`;

  message += `CUSTOMER DETAILS\n\n`;
  message += `Name: ${customer.name}\n`;
  message += `Mobile: ${customer.mobile}\n\n`;

  message += `SERVICE ADDRESS\n\n`;
  message += `House/Flat: ${address.house}\n`;
  message += `Building/Street: ${address.street}\n`;
  message += `Area/Locality: ${address.area}\n`;
  message += `Landmark: ${address.landmark || 'N/A'}\n`;
  message += `Pincode: ${address.pincode}\n`;
  message += `City: Jaipur\n`;
  if (address.mapsUrl) {
    message += `📍 Live Location / Map: ${address.mapsUrl}\n`;
  }
  message += `\n`;

  message += `SELECTED SERVICES\n\n`;
  items.forEach((item, i) => {
    const addOnNames = (item.selectedAddOns || [])
      .map((a) => a.name)
      .join(', ') || 'None';
    const lineTotal = formatCurrency(
      (item.price + (item.selectedAddOns || []).reduce((s, a) => s + a.price, 0)) * item.quantity
    );
    message += `${i + 1}. ${item.name}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Add-ons: ${addOnNames}\n`;
    message += `   Price: ${lineTotal}\n\n`;
  });

  message += `ORDER SUMMARY\n\n`;
  message += `Subtotal: ${formatCurrency(subtotal)}\n`;
  message += `Coupon: ${coupon ? coupon.code : 'None'}\n`;
  message += `Discount: ${formatCurrency(discount)}\n`;
  message += `Additional Charges: ${formatCurrency(additionalCharges)}\n`;
  message += `Estimated Total: ${formatCurrency(total)}\n\n`;

  message += `BOOKING PREFERENCE\n\n`;
  message += `Preferred Date: ${preference.date}\n`;
  message += `Preferred Time: ${preference.time}\n\n`;

  if (notes) {
    message += `ADDITIONAL INSTRUCTIONS:\n${notes}\n\n`;
  }

  message += `Please confirm service availability and final booking details.\n\n`;
  message += `Thank you!`;

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
