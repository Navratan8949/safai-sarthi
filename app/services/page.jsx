import { Suspense } from 'react';
import { ServiceGrid } from '@/components/ServiceGrid';

export const metadata = {
  title: 'Cleaning Services in Jaipur | SafaiSaarthi',
  description: 'Explore professional cleaning services for your home in Jaipur. Kitchen, bathroom, sofa, carpet, full house deep cleaning and more.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max">
        <Suspense fallback={<div className="text-center text-ink-light">Loading services...</div>}>
          <ServiceGrid />
        </Suspense>
      </div>
    </div>
  );
}
