'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Check,
  X,
  Plus,
  Minus,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Info,
  AlertCircle,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { getServiceBySlug, getRelatedServices } from '@/data/services';
import { formatCurrency } from '@/utils/pricing';
import { useCart } from '@/context/CartContext';

function getVariantInclusions(service, variant) {
  if (variant?.included && variant.included.length > 0) {
    return variant.included;
  }

  // Full House Deep Cleaning
  if (service?.slug === 'full-house-deep-cleaning' || service?.id === 'full-house-deep-cleaning') {
    const tier = variant?.tier?.toLowerCase() || '';
    if (tier.includes('express')) {
      return [
        `Rapid express deep clean (~${variant.duration}) covering ${variant.sqft || 'entire flat'}`,
        'All bedrooms, living room & dining hall complete dusting, cobweb removal & vacuuming',
        'Full bathroom descaling, WC stain removal, washbasin & chrome fixture polishing',
        'Kitchen exterior cabinets, slab countertop, sink & wall tiles degreasing',
        'Ceiling fan blades, light fixtures & switchboard wipe-down',
        'Window glass panes, slider tracks vacuuming & balcony floor wash',
        'Dust-proofing & dry/wet mopping across all floors',
      ];
    }
    if (tier.includes('elite')) {
      return [
        `Intensive deep cleaning (~${variant.duration}) covering ${variant.sqft || 'entire flat'}`,
        'Mechanized single-disc rotary machine scrubbing on marble, vitrified tile or granite floors',
        'Everything in Express tier plus deep chemical stain treatment',
        'Intensive bathroom descaling with specialized chemical solutions & hard-water scale removal',
        'Kitchen grease breakdown: exterior cabinets, backsplash tiles, countertop & exhaust points',
        'Window channels, mesh sliders, glass panes & balcony pressure wash',
        'Detailed cleaning of doors, frames, baseboards, switchboards & ceiling fans',
      ];
    }
    if (tier.includes('exclusive')) {
      return [
        `Exhaustive 360° deep detailing (~${variant.duration}) for ${variant.sqft || 'entire flat'}`,
        'High-temperature steam sanitization for bathrooms, taps & high-touch surfaces',
        'Mechanized single-disc rotary floor scrubbing & high-gloss buffing',
        'Deep fabric dry vacuuming of sofas, mattresses, chairs & upholstery',
        'Complete bathroom descaling, mirror polish, floor grout cleaning & disinfection',
        'Deep kitchen degreasing, chimney exterior, countertop & sink sanitization',
        'Windows, tracks, glass panes, grills & balcony complete wash',
        'Eco-friendly premium finishing & whole-home odor neutralizer',
        'Supervisor inspection & quality check before final handover',
      ];
    }
  }

  // Vacant Home Deep Cleaning
  if (service?.slug === 'vacant-home-deep-cleaning') {
    const isFurnished = variant?.name?.toLowerCase().includes('furnished');
    return [
      `Move-in / handover vacant flat deep cleaning (~${variant.duration}) for ${variant.sqft || 'empty flat'}`,
      'Deep wiping inside & outside of all empty wardrobes, lofts, cupboards & drawers',
      'Single-disc rotary machine floor scrubbing across marble, granite & vitrified tiles',
      'Intensive bathroom chemical descaling, WC sanitization & chrome polish',
      'Complete kitchen degreasing, empty trolleys, cabinet shelves & sink scrub',
      'Window slider channels, mosquito mesh, glass panes & balcony floor pressure wash',
      'Spiderweb clearance, ceiling fans, light fixtures, switchboards & door frames dusting',
      isFurnished
        ? 'Furnished furniture dusting, upholstery vacuuming & dust-proofing'
        : 'End-to-end unfurnished vacant flat handover readiness',
    ];
  }

  // Bungalow / Villa Deep Cleaning
  if (service?.slug === 'villa-bungalow-deep-cleaning') {
    return [
      `Comprehensive multi-floor villa deep clean (~${variant.duration}) for ${variant.sqft || 'large villa'}`,
      'Industrial single-disc rotary machine scrubbing on all floor areas (marble, tile, granite, wooden)',
      'All bedrooms, living halls, dining areas, balconies & staircases deep cleaned',
      'All washrooms & powder rooms chemical descaling, grout scrub & fixture polishing',
      'Modular kitchen degreasing, exterior cabinets, slab, sink & utility area wash',
      'High-reach architectural glass cleaning, window sliders & spiderweb removal',
      'Balcony, verandah & porch floor pressure wash',
      'Dedicated large squad with industrial wet/dry vacuum scrubbers',
    ];
  }

  // Kitchen Deep Cleaning
  if (service?.slug === 'kitchen-deep-cleaning') {
    const name = variant?.name?.toLowerCase() || '';
    if (name.includes('chimney')) {
      return [
        'Complete kitchen chimney filter degreasing & exterior canopy cleaning',
        'Countertop slab, stainless steel sink & tile backsplash grease breakdown',
        'Exterior cabinet surfaces, handles, trolleys & shelf wipe-down',
        'Kitchen floor scrubbing, drain cleaning & oil stain removal',
        'Window panes, exhaust fan & switchboards detailed cleaning',
      ];
    }
    return [
      'Countertop slab, stainless steel sink & tile backsplash degreasing',
      'Exterior cabinet surfaces, trolleys & handles grease breakdown',
      'Floor scrubbing and oil stain removal',
      'Switchboards, exhaust fan & window pane wipe-down',
    ];
  }

  // Bathroom Deep Cleaning
  if (service?.slug === 'bathroom-deep-cleaning') {
    const isMachine = variant?.name?.toLowerCase().includes('machine') || variant?.tier?.toLowerCase().includes('machine');
    return [
      isMachine
        ? 'Mechanized single-disc machine scrubbing for floor tiles & grout'
        : 'Intensive manual scrubbing with professional Taski descaling chemicals',
      'Hard-water scale removal from wall tiles, shower glass, taps & faucets',
      'WC toilet pot interior/exterior descaling, sanitization & stain removal',
      'Washbasin, vanity mirror & chrome fittings streak-free polish',
      'Drain cover clearance, exhaust dusting & odor elimination',
    ];
  }

  // Sofa / Carpet Cleaning
  if (service?.slug?.includes('sofa') || service?.slug?.includes('carpet')) {
    return [
      `Industrial shampoo extraction for ${variant?.name || 'upholstery'}`,
      'Deep dry vacuuming to remove embedded dust mites, allergens, crumbs & pet hair',
      'Specialized foam shampoo injection & fabric brush agitation',
      'High-suction wet extraction to extract dirty water, stains & spills',
      'Fabric refreshing, deodorization & quick-dry treatment',
    ];
  }

  // Mini Services
  if (service?.slug === 'mini-services') {
    return [
      `${variant?.name} performed by certified squad (~${variant?.duration || '20–30 min'})`,
      `${variant?.specs || 'Targeted deep cleaning & degreasing'}`,
      'Food-safe, non-hazardous & eco-friendly cleaning agents used',
      'Detailed wipe-down, carbon/grime removal & chrome buffing',
      'Surrounding surface protection and clean finish',
    ];
  }

  // Default to service included
  if (service?.included && service.included.length > 0) {
    return service.included;
  }

  return [
    `Professional cleaning service by verified experts (~${variant?.duration || 'standard duration'})`,
    'All relevant surfaces dusted, scrubbed and sanitized',
    'Eco-friendly, certified safe cleaning chemicals',
    'Industrial tools & microfiber equipment used',
  ];
}

function getVariantExclusions(service) {
  if (service?.excluded && service.excluded.length > 0) {
    return service.excluded;
  }
  return [
    'Inside occupied personal wardrobes & locked drawers',
    'Appliance interiors (fridge/oven available as optional add-on)',
    'Paint removal, wall putty repair or civil structural repairs',
  ];
}

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

  const [modalVariant, setModalVariant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

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
                        onClick={() => {
                          setSelectedVariant(v);
                          setModalVariant(v);
                          setIsModalOpen(true);
                        }}
                        className={`group flex flex-col text-left p-3 rounded-xl border transition-all cursor-pointer ${
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
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-0.5">
                              <Clock className="h-3 w-3 text-sky-500" />
                              {v.duration}
                            </span>
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold text-sky-700 bg-sky-100/70 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                              <Info className="h-2.5 w-2.5" />
                              <span>Includes</span>
                            </span>
                          </div>
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

      {/* ======================================================== */}
      {/* VARIANT INCLUSIONS POPUP MODAL */}
      {/* ======================================================== */}
      {isModalOpen && modalVariant && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full sm:max-w-xl max-h-[88vh] flex flex-col bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-5 sm:p-6 bg-gradient-to-r from-sky-50 via-sky-100/50 to-white border-b border-slate-100">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-200 shadow-2xs transition-all"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-1.5 pr-8">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-100/80 px-2.5 py-0.5 rounded-full">
                  {service.name}
                </span>
                {modalVariant.tier && (
                  <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200/60">
                    {modalVariant.tier}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight pr-8">
                {modalVariant.name}
              </h3>

              {/* Price & Meta Badges */}
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-slate-900">
                    {formatCurrency(modalVariant.price)}
                  </span>
                  {modalVariant.originalPrice && modalVariant.originalPrice > modalVariant.price && (
                    <span className="text-xs text-slate-400 line-through font-semibold">
                      {formatCurrency(modalVariant.originalPrice)}
                    </span>
                  )}
                  {modalVariant.discount ? (
                    <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-black px-1.5 py-0.5">
                      {modalVariant.discount}% OFF
                    </span>
                  ) : null}
                </div>

                <div className="flex items-center gap-1.5 ml-auto flex-wrap">
                  {modalVariant.sqft && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-xs font-black text-amber-900">
                      <span>📐</span>
                      <span>{modalVariant.sqft}</span>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
                    <Clock className="h-3.5 w-3.5 text-sky-500" />
                    <span>{modalVariant.duration}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              {/* What's Included */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    What&apos;s Included in {modalVariant.name}
                  </h4>
                </div>

                <ul className="space-y-2.5">
                  {getVariantInclusions(service, modalVariant).map((inc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-2.5 rounded-xl border border-slate-100"
                    >
                      <Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="font-medium">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <X className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    What&apos;s Not Included
                  </h4>
                </div>

                <ul className="grid grid-cols-1 gap-1.5">
                  {getVariantExclusions(service).map((exc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-600">
                <span className="flex items-center gap-1 text-emerald-700">
                  <ShieldCheck className="h-3.5 w-3.5" /> 100% In-House Verified
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-sky-700">
                  <Sparkles className="h-3.5 w-3.5" /> Safe Eco-Friendly Chemicals
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600">Zero Hidden Charges</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedVariant(modalVariant);
                  setIsModalOpen(false);
                }}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-bold text-sm transition-all"
              >
                Select Package
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedVariant(modalVariant);
                  addToCart(
                    {
                      ...service,
                      ...modalVariant,
                      id: `${service.id}-${modalVariant.id}`,
                      price: modalVariant.price,
                      originalPrice: modalVariant.originalPrice,
                      selectedVariant: modalVariant,
                    },
                    quantity,
                    selectedAddOns
                  );
                  setIsModalOpen(false);
                  setIsAdded(true);
                  setTimeout(() => setIsAdded(false), 2000);
                }}
                className="flex-[1.4] py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-sm shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart ({formatCurrency(modalVariant.price)})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
