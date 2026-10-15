'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Check, X, Plus, Minus, ShoppingCart, ArrowRight, ShieldCheck, Info, AlertCircle } from 'lucide-react';
import { getServiceBySlug, getRelatedServices } from '@/data/services';
import { formatCurrency } from '@/utils/pricing';
import { useCart } from '@/context/CartContext';

export function ServiceDetailContent({ slug }) {
  const service = getServiceBySlug(slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const hasVariants = service?.variants && service.variants.length > 0;
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? service.variants[0] : null
  );

  if (!service) return null;

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prev) =>
      prev.find((a) => a.id === addOn.id)
        ? prev.filter((a) => a.id !== addOn.id)
        : [...prev, addOn]
    );
  };

  const activePrice = selectedVariant ? selectedVariant.price : service.price;
  const activeOriginalPrice = selectedVariant
    ? selectedVariant.originalPrice
    : service.originalPrice || Math.round((service.price * 1.3) / 50) * 50 - 1;
  const activeDiscount = selectedVariant
    ? selectedVariant.discount
    : service.discountPercent || Math.round(((activeOriginalPrice - activePrice) / activeOriginalPrice) * 100);
  const activeDuration = selectedVariant ? selectedVariant.duration : service.duration;

  const addOnTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const totalPrice = (activePrice + addOnTotal) * quantity;

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(
        {
          ...service,
          ...selectedVariant,
          id: `${service.id}-${selectedVariant.id}`,
          price: selectedVariant.price,
          originalPrice: selectedVariant.originalPrice,
          selectedVariant,
        },
        quantity,
        selectedAddOns
      );
    } else {
      addToCart(service, quantity, selectedAddOns);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const related = getRelatedServices(slug, 3);

  return (
    <div className="py-8 lg:py-12">
      <div className="container-max">
        <nav className="flex items-center gap-2 text-xs text-ink-light mb-6">
          <Link href="/" className="hover:text-sky-500">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-sky-500">Services</Link>
          <span>/</span>
          <span className="text-navy font-semibold">{service.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
              <Image
                src={service.image}
                alt={service.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-base bg-sky-100 text-sky-700 font-bold">{service.category}</span>
              {selectedVariant && (
                <span className="badge-base bg-emerald-100 text-emerald-800 font-bold">
                  {selectedVariant.name}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-navy leading-tight">{service.name}</h1>
            <p className="mt-3 text-base text-ink-light leading-relaxed">{service.description}</p>

            {/* Dynamic Price Display */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400 line-through font-semibold">
                    {formatCurrency(activeOriginalPrice)}
                  </span>
                  <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-black text-emerald-700 uppercase tracking-tight">
                    {activeDiscount}% OFF
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">
                    {formatCurrency(activePrice)}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ unit</span>
                </div>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <Clock className="h-4 w-4 text-sky-500" />
                <span>{activeDuration}</span>
              </div>
            </div>

            {/* Variant / Package Selector */}
            {hasVariants && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold text-navy uppercase tracking-wider">
                    Select Package / Variant
                  </h3>
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                    {service.variants.length} Options Available
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-1">
                  {service.variants.map((v) => {
                    const isSelected = selectedVariant?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`flex flex-col text-left p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 shadow-sm'
                            : 'border-slate-200/90 hover:border-sky-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-xs font-bold leading-snug line-clamp-1 ${
                            isSelected ? 'text-sky-950 font-black' : 'text-slate-900'
                          }`}>
                            {v.name}
                          </span>
                          {v.discount ? (
                            <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-black px-1.5 py-0.5 shrink-0">
                              {v.discount}% OFF
                            </span>
                          ) : null}
                        </div>
                        {/* Area / Sq Ft & Tier Tags */}
                        <div className="flex items-center gap-1 mt-1 flex-wrap">
                          {v.sqft && (
                            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-[10px] font-black text-amber-900">
                              <span>📐</span>
                              <span>{v.sqft}</span>
                            </span>
                          )}
                          {v.tier && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-700">
                              {v.tier}
                            </span>
                          )}
                        </div>
                        {v.specs && (
                          <span className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-1">
                            {v.specs}
                          </span>
                        )}
                        <div className="mt-2 flex items-baseline justify-between pt-1 border-t border-slate-200/60">
                          <div className="flex items-center gap-1.5">
                            {v.originalPrice && v.originalPrice > v.price ? (
                              <span className="text-[11px] text-slate-400 line-through">
                                {formatCurrency(v.originalPrice)}
                              </span>
                            ) : null}
                            <span className="text-xs font-black text-slate-900">
                              {formatCurrency(v.price)}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-0.5">
                            <Clock className="h-3 w-3 text-sky-500" />
                            {v.duration}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {service.addOns && service.addOns.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">Optional Add-ons</h3>
                <div className="space-y-2">
                  {service.addOns.map((addOn) => {
                    const selected = selectedAddOns.find((a) => a.id === addOn.id);
                    return (
                      <button
                        key={addOn.id}
                        type="button"
                        onClick={() => toggleAddOn(addOn)}
                        className={`w-full flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                          selected
                            ? 'border-sky-400 bg-sky-50'
                            : 'border-border hover:border-sky-300'
                        }`}
                      >
                        <span className="flex items-center gap-2 text-sm text-ink">
                          <span className={`flex h-5 w-5 items-center justify-center rounded border ${
                            selected ? 'bg-sky-500 border-sky-500' : 'border-border'
                          }`}>
                            {selected && <Check className="h-3 w-3 text-white" />}
                          </span>
                          {addOn.name}
                        </span>
                        <span className="text-sm font-bold text-navy">+{formatCurrency(addOn.price)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:bg-sky-50 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-lg font-bold text-navy">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:bg-sky-50 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1">
                <p className="text-xs text-ink-light">Total Price</p>
                <p className="text-xl font-bold text-navy">{formatCurrency(totalPrice)}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`mt-6 btn-primary w-full transition-all ${
                isAdded ? 'bg-emerald-600 border-emerald-600' : ''
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="h-5 w-5 stroke-[2.5]" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart &mdash; {formatCurrency(totalPrice)}
                </>
              )}
            </button>

            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-ink-light">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-500" />
              Final availability confirmed by SafaiSaarthi team
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* OFFICIAL CLIENT RATE CARD & AREA (SQ FT) TABLE */}
        {/* ======================================================== */}
        {hasVariants && (
          <div className="mt-14 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Official Rate Card & Area (Sq Ft) Chart
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Verified transparent pricing directly matching the official rate sheet.
                </p>
              </div>
              {service.clientNote && (
                <div className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                  <span>📝</span>
                  <span>{service.clientNote}</span>
                </div>
              )}
            </div>

            <div className="mt-6 overflow-x-auto -mx-6 sm:mx-0">
              <table className="w-full min-w-[620px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500 bg-slate-50/70">
                    <th className="py-3 px-4">Package / BHK Option</th>
                    <th className="py-3 px-4">Covered Area (Sq Ft)</th>
                    <th className="py-3 px-4">Duration</th>
                    <th className="py-3 px-4">MRP / Base</th>
                    <th className="py-3 px-4">Discount</th>
                    <th className="py-3 px-4">Rate (Final)</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {service.variants.map((v) => {
                    const isSelected = selectedVariant?.id === v.id;
                    return (
                      <tr
                        key={v.id}
                        className={`transition-colors ${
                          isSelected ? 'bg-sky-50/60 font-semibold' : 'hover:bg-slate-50/50'
                        }`}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            {isSelected && (
                              <span className="h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                            )}
                            <span className="font-bold text-slate-900">{v.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200/70 text-[11px] font-black text-amber-900">
                            {v.sqft || '—'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-500">
                          {v.duration}
                        </td>
                        <td className="py-3 px-4 text-slate-400">
                          {v.originalPrice && v.originalPrice > v.price ? (
                            <span className="line-through">{formatCurrency(v.originalPrice)}</span>
                          ) : (
                            formatCurrency(v.price)
                          )}
                        </td>
                        <td className="py-3 px-4">
                          {v.discount ? (
                            <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-black">
                              {v.discount}% OFF
                            </span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-sm sm:text-base font-black text-slate-900">
                            {formatCurrency(v.price)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => setSelectedVariant(v)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              isSelected
                                ? 'bg-sky-500 text-white shadow-xs'
                                : 'bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700'
                            }`}
                          >
                            {isSelected ? 'Selected ✓' : 'Select'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-base p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-wide">What&apos;s Included</h3>
            </div>
            <ul className="space-y-2">
              {service.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                <X className="h-4 w-4 text-orange-600" />
              </div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-wide">Not Included</h3>
            </div>
            <ul className="space-y-2">
              {service.excluded.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink-light">
                  <X className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                <Plus className="h-4 w-4 text-sky-600" />
              </div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-wide">Optional Add-ons</h3>
            </div>
            {service.addOns.length > 0 ? (
              <ul className="space-y-2">
                {service.addOns.map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-2 text-sm text-ink">
                    <span>{item.name}</span>
                    <span className="font-semibold text-navy">+{formatCurrency(item.price)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-ink-light">No add-ons available for this service.</p>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-base p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                <Info className="h-4 w-4 text-sky-600" />
              </div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-wide">Best For</h3>
            </div>
            <p className="text-sm text-ink-light leading-relaxed">{service.bestFor}</p>

            <div className="mt-5 flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                <Check className="h-4 w-4 text-sky-600" />
              </div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-wide">Preparation</h3>
            </div>
            <ul className="space-y-2">
              {service.preparation.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink">
                  <Check className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                <AlertCircle className="h-4 w-4 text-orange-600" />
              </div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-wide">Good To Know</h3>
            </div>
            <ul className="space-y-2">
              {service.limitations.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink-light">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>

            {service.faq.length > 0 && (
              <>
                <div className="mt-5 flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                    <Info className="h-4 w-4 text-sky-600" />
                  </div>
                  <h3 className="text-sm font-bold text-navy uppercase tracking-wide">FAQ</h3>
                </div>
                <div className="space-y-3">
                  {service.faq.map((item, i) => (
                    <div key={i}>
                      <p className="text-sm font-semibold text-navy">{item.q}</p>
                      <p className="text-sm text-ink-light mt-1">{item.a}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy mb-6">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} href={`/services/${rel.slug}`} className="card-base card-hover group flex items-center gap-4 p-4">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={rel.image} alt={rel.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-navy group-hover:text-sky-500 transition-colors truncate">{rel.name}</h3>
                    <p className="text-xs text-ink-light mt-0.5">From {formatCurrency(rel.price)}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-sky-500 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border p-3 shadow-lift">
          <button onClick={handleAddToCart} className="btn-primary w-full">
            <ShoppingCart className="h-5 w-5" />
            Add to Cart &mdash; {formatCurrency(totalPrice)}
          </button>
        </div>
      </div>
    </div>
  );
}
