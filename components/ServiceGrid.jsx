'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ServiceCard } from '@/components/ServiceCard';
import { SectionHeading } from '@/components/SectionHeading';
import { services, getServicesByCategory } from '@/data/services';

const filterCategories = ['All', 'Kitchen', 'Bathroom', 'Bedroom', 'Sofa & Upholstery', 'Full House', 'Carpet', 'Balcony', 'Mattress'];

export function ServiceGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeFilter, setActiveFilter] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    setActiveFilter(cat);
  }, [searchParams]);

  const filtered = getServicesByCategory(activeFilter);

  return (
    <>
      <SectionHeading
        center
        eyebrow="Our Services"
        title="Explore Our Cleaning Services"
        description="Choose the right cleaning service for your space."
      />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              activeFilter === cat
                ? 'bg-sky-500 text-white shadow-soft'
                : 'bg-white border border-border text-ink hover:border-sky-300 hover:bg-sky-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg font-semibold text-navy">No services available in this category.</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-4 btn-secondary"
            >
              View All Services
            </button>
          </div>
        )}
      </div>
    </>
  );
}
