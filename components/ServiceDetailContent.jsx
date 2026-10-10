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

  if (!service) return null;

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prev) =>
      prev.find((a) => a.id === addOn.id)
        ? prev.filter((a) => a.id !== addOn.id)
        : [...prev, addOn]
    );
  };

  const addOnTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const totalPrice = (service.price + addOnTotal) * quantity;

  const handleAddToCart = () => {
    addToCart(service, quantity, selectedAddOns);
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
            <span className="badge-base bg-sky-100 text-sky-600 mb-3">{service.category}</span>
            <h1 className="text-3xl font-bold text-navy leading-tight">{service.name}</h1>
            <p className="mt-3 text-base text-ink-light leading-relaxed">{service.description}</p>

            <div className="mt-5 flex items-center gap-4">
              <div>
                <span className="text-xs text-ink-light">Starting from</span>
                <p className="text-2xl font-bold text-navy">{formatCurrency(service.price)}</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex items-center gap-1.5 text-sm text-ink-light">
                <Clock className="h-4 w-4 text-sky-500" />
                {service.duration}
              </div>
            </div>

            {service.addOns.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-navy mb-3">Optional Add-ons</h3>
                <div className="space-y-2">
                  {service.addOns.map((addOn) => {
                    const selected = selectedAddOns.find((a) => a.id === addOn.id);
                    return (
                      <button
                        key={addOn.id}
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
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:bg-sky-50 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-lg font-bold text-navy">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:bg-sky-50 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1">
                <p className="text-xs text-ink-light">Estimated total</p>
                <p className="text-xl font-bold text-navy">{formatCurrency(totalPrice)}</p>
              </div>
            </div>

            <button onClick={handleAddToCart} className="mt-6 btn-primary w-full">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart &mdash; {formatCurrency(totalPrice)}
            </button>

            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-ink-light">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-500" />
              Final availability confirmed by SafaiSaarthi team
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
