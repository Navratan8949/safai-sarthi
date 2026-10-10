import { SectionHeading } from '@/components/SectionHeading';
import { FAQContent } from '@/components/FAQContent';

export const metadata = {
  title: 'FAQ | SafaiSaarthi',
  description: 'Frequently asked questions about booking, services, pricing, coupons, service areas, and more.',
};

export default function FAQPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max">
        <SectionHeading center eyebrow="FAQ" title="Frequently Asked Questions" description="Everything you need to know about booking with SafaiSaarthi." />
        <FAQContent />
      </div>
    </div>
  );
}
