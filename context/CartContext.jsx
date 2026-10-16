'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { loadCart, saveCart, loadPincode, savePincode } from '@/utils/cart';
import { calculateSubtotal, calculateCouponDiscount, calculateFinalTotal, calculateAdditionalCharges, calculateAdvanceAmount, calculateRemainingBalance } from '@/utils/pricing';
import { coupons } from '@/data/coupons';
import { minimumOrderValue } from '@/config/business';
import { useLocation } from '@/context/LocationContext';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { userLocation, isDetecting: isDetectingLocation, requestLocation: detectLocation, setUserLocation } = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState(null);
  const [pincode, setPincodeState] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCartItems(loadCart());
    setPincodeState(loadPincode());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (userLocation?.pincode) {
      setPincodeState(userLocation.pincode);
    }
  }, [userLocation]);

  useEffect(() => {
    if (mounted) saveCart(cartItems);
  }, [cartItems, mounted]);

  useEffect(() => {
    if (mounted) savePincode(pincode);
  }, [pincode, mounted]);

  const addToCart = useCallback((service, quantity = 1, selectedAddOns = []) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === service.id);
      if (existing) {
        return prev.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + quantity, selectedAddOns }
            : item
        );
      }
      return [...prev, { ...service, quantity, selectedAddOns }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const increaseQuantity = useCallback((id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decreaseQuantity = useCallback((id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  }, []);

  const updateAddOns = useCallback((id, selectedAddOns) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selectedAddOns } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setCoupon(null);
  }, []);

  const applyCoupon = useCallback((code) => {
    const found = coupons.find(
      (c) => c.code.toUpperCase() === code.toUpperCase() && c.active
    );
    if (!found) return { success: false, message: 'This coupon isn\'t valid for this order.' };

    const now = new Date();
    const expiry = new Date(found.expiryDate);
    if (now > expiry) return { success: false, message: 'This coupon has expired.' };

    const start = new Date(found.startDate);
    if (now < start) return { success: false, message: 'This coupon isn\'t valid yet.' };

    const subtotal = calculateSubtotal(cartItems);
    if (subtotal < (found.minimumSpend || 0)) {
      return {
        success: false,
        message: `Your order does not meet the minimum spend of ₹${found.minimumSpend} for this coupon.`,
      };
    }

    if (found.eligibleServices && found.eligibleServices.length > 0) {
      const hasEligible = cartItems.some((item) =>
        found.eligibleServices.includes(item.id)
      );
      if (!hasEligible) {
        return { success: false, message: 'This coupon does not apply to the selected services.' };
      }
    }

    setCoupon(found);
    return { success: true, message: 'Coupon applied successfully.' };
  }, [cartItems]);

  const removeCoupon = useCallback(() => {
    setCoupon(null);
  }, []);

  const setPincode = useCallback((code) => {
    setPincodeState(code);
  }, []);

  const subtotal = calculateSubtotal(cartItems);
  const discount = calculateCouponDiscount(subtotal, coupon);
  const additionalCharges = calculateAdditionalCharges();
  const total = calculateFinalTotal(cartItems, coupon);
  const advanceAmount = calculateAdvanceAmount(total);
  const remainingBalance = calculateRemainingBalance(total, advanceAmount);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const remainingForMin = Math.max(0, minimumOrderValue - subtotal);
  const meetsMinimum = subtotal >= minimumOrderValue;

  const value = {
    cartItems,
    coupon,
    pincode,
    userLocation,
    isDetectingLocation,
    mounted,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateAddOns,
    clearCart,
    applyCoupon,
    removeCoupon,
    setPincode,
    setUserLocation,
    detectLocation,
    subtotal,
    discount,
    additionalCharges,
    total,
    advanceAmount,
    remainingBalance,
    itemCount,
    remainingForMin,
    meetsMinimum,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
