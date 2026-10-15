'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, AlertCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/pricing';
import { calculateItemTotal } from '@/utils/pricing';
import { minimumOrderValue } from '@/config/business';

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
    additionalCharges,
    total,
    remainingForMin,
    meetsMinimum,
    mounted,
  } = useCart();

  if (!mounted) {
    return (
      <div className="py-16 lg:py-24">
        <div className="container-max">
          <div className="shimmer-bg rounded-2xl h-96" />
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="py-16 lg:py-24">
        <div className="container-max">
          <div className="max-w-md mx-auto text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-100 mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-sky-500" />
            </div>
            <h1 className="text-2xl font-bold text-navy">Your cart is empty</h1>
            <p className="mt-2 text-sm text-ink-light">Explore our cleaning services to get started.</p>
            <Link href="/services" className="mt-6 btn-primary">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="container-max">
        <h1 className="text-3xl font-bold text-navy mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="card-base p-4 flex gap-4">
                <div className="relative h-20 w-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <Link href={`/services/${item.slug}`}>
                        <h3 className="text-sm font-bold text-navy hover:text-sky-500 transition-colors truncate">{item.name}</h3>
                      </Link>
                      {item.selectedVariant && (
                        <div className="mt-1">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                            {item.selectedVariant.name}
                            {item.selectedVariant.specs ? ` • ${item.selectedVariant.specs}` : ''}
                          </span>
                        </div>
                      )}
                      <p className="text-xs text-ink-light mt-0.5">{item.category}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-light hover:text-red-500 hover:bg-red-50 transition-colors flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.selectedAddOns.map((a) => (
                        <span key={a.id} className="badge-base bg-sky-50 text-sky-600 text-xs">
                          +{a.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-sky-50 transition-colors"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-navy">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-sky-50 transition-colors"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-ink-light">{formatCurrency(item.price)} each</p>
                      <p className="text-base font-bold text-navy">{formatCurrency(calculateItemTotal(item))}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-sky-600">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Continue Shopping
            </Link>
          </div>

          <div className="lg:col-span-1">
            <div className="card-base p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-bold text-navy mb-4">Order Summary</h2>

              <div className="space-y-2">
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

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-bold text-navy">Estimated Total</span>
                  <span className="text-2xl font-bold text-navy">{formatCurrency(total)}</span>
                </div>
              </div>

              {!meetsMinimum && (
                <div className="mt-4 rounded-xl bg-orange-50 border border-orange-200 p-3 flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-orange-800">
                    Add <span className="font-bold">{formatCurrency(remainingForMin)}</span> more to reach the {formatCurrency(minimumOrderValue)} minimum order.
                  </p>
                </div>
              )}

              <Link
                href={meetsMinimum ? '/checkout' : '#'}
                className={`mt-6 w-full ${meetsMinimum ? 'btn-primary' : 'btn-primary opacity-50 pointer-events-none'}`}
              >
                Continue to Details
                <ArrowRight className="h-4 w-4" />
              </Link>

              {!meetsMinimum && (
                <p className="mt-2 text-xs text-ink-light text-center">
                  Minimum order value is {formatCurrency(minimumOrderValue)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
