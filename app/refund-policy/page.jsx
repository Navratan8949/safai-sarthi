import { SectionHeading } from '@/components/SectionHeading';

export const metadata = { title: 'Refund Policy | SafaiSaarthi' };

export default function RefundPolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max max-w-3xl">
        <SectionHeading eyebrow="Legal" title="Refund Policy" />
        <div className="mt-8 prose prose-sm max-w-none text-ink-light space-y-4">
          <p>Since SafaiSaarthi does not process online payments through this website, refund terms are discussed and finalized directly with our team via WhatsApp.</p>
          <h3 className="text-navy font-bold text-base">Service-Related Concerns</h3>
          <p>If you are not satisfied with the cleaning service, please contact us through WhatsApp. We will review your concerns and work with you to find a resolution.</p>
          <h3 className="text-navy font-bold text-base">Pre-Service Cancellation</h3>
          <p>If a booking is cancelled before the service is delivered, any payment arrangements made directly with our team will be handled according to the terms discussed during booking confirmation.</p>
        </div>
      </div>
    </div>
  );
}
