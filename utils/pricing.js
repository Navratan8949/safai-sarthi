import { services } from '@/data/services';

export function formatCurrency(amount) {
  const num = Number(amount) || 0;
  return `₹${num.toLocaleString('en-IN')}`;
}

export function calculateItemTotal(item) {
  if (!item) return 0;
  const basePrice = item.price || 0;
  const addOnTotal = (item.selectedAddOns || []).reduce(
    (sum, a) => sum + (a.price || 0),
    0
  );
  const quantity = item.quantity || 1;
  return (basePrice + addOnTotal) * quantity;
}

export function calculateSubtotal(items) {
  if (!items || items.length === 0) return 0;
  return items.reduce((sum, item) => sum + calculateItemTotal(item), 0);
}

export function calculateCouponDiscount(subtotal, coupon) {
  if (!coupon || subtotal <= 0) return 0;
  if (subtotal < (coupon.minimumSpend || 0)) return 0;

  let discount = 0;
  if (coupon.type === 'percentage') {
    discount = (subtotal * coupon.value) / 100;
    if (coupon.maximumDiscount && discount > coupon.maximumDiscount) {
      discount = coupon.maximumDiscount;
    }
  } else if (coupon.type === 'fixed') {
    discount = coupon.value;
  }

  if (discount > subtotal) discount = subtotal;
  return Math.max(0, Math.round(discount));
}

export function calculateAdditionalCharges() {
  return 0;
}

export function calculateFinalTotal(items, coupon) {
  const subtotal = calculateSubtotal(items);
  const discount = calculateCouponDiscount(subtotal, coupon);
  const additional = calculateAdditionalCharges();
  const total = subtotal - discount + additional;
  return Math.max(0, Math.round(total));
}
