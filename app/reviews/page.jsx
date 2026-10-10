import { Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata = {
  title: 'Reviews | SafaiSaarthi',
  description: 'Read customer reviews and see cleaning results from SafaiSaarthi.',
};

export default function ReviewsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max">
        <SectionHeading center eyebrow="Customer Stories" title="Reviews & Results" description="Real experiences from our customers across Jaipur." />

        <div className="mt-12 max-w-lg mx-auto text-center">
          <div className="card-base p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 mx-auto mb-5">
              <Sparkles className="h-8 w-8 text-sky-500" />
            </div>
            <h3 className="text-lg font-bold text-navy">Customer stories are coming soon.</h3>
            <p className="mt-2 text-sm text-ink-light leading-relaxed">
              We are collecting reviews from our customers. Check back soon to read about their experiences with SafaiSaarthi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
