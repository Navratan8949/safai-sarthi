import { SectionHeading } from '@/components/SectionHeading';

export const metadata = { title: 'Cancellation Policy | SafaiSaarthi' };

export default function CancellationPolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max max-w-3xl">
        <SectionHeading eyebrow="Legal" title="Cancellation & Rescheduling Policy" />
        <div className="mt-8 prose prose-sm max-w-none text-ink-light space-y-4">
          <h3 className="text-navy font-bold text-base">Cancellation</h3>
          <p>Since bookings are confirmed via WhatsApp by our team, cancellation requests should be communicated through the same WhatsApp conversation. Please inform our team as early as possible.</p>
          <h3 className="text-navy font-bold text-base">Rescheduling</h3>
          <p>Rescheduling requests can be made through WhatsApp. We will do our best to accommodate your new preferred date and time, subject to availability.</p>
          <h3 className="text-navy font-bold text-base">No-Show</h3>
          <p>If you are not available at the confirmed time and have not informed us in advance, our team may need to reschedule the service.</p>
        </div>
      </div>
    </div>
  );
}
