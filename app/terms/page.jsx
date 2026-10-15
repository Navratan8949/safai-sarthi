import { SectionHeading } from '@/components/SectionHeading';

export const metadata = { title: 'Terms | SafaiSaarthi' };

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max max-w-3xl">
        <SectionHeading eyebrow="Legal" title="Terms of Service" />
        <div className="mt-8 prose prose-sm max-w-none text-ink-light space-y-4">
          <p>By using the SafaiSaarthi website, you agree to these terms and conditions.</p>
          <h3 className="text-navy font-bold text-base">Service Requests</h3>
          <p>Submitting a booking request through this website does not constitute a confirmed booking. All bookings are confirmed by the SafaiSaarthi team via WhatsApp. Your preferred date and time are preferences and not guaranteed until confirmed.</p>
          <h3 className="text-navy font-bold text-base">Pricing</h3>
          <p>Prices shown on this website are starting prices for standard services. Final pricing may vary based on the size of your space, condition, and selected add-ons. The estimated total at checkout is a request, not a final invoice.</p>
          <h3 className="text-navy font-bold text-base">Minimum Order</h3>
          <p>Residential bookings have a minimum order value of ₹399.</p>
          <h3 className="text-navy font-bold text-base">No Online Payment</h3>
          <p>This website does not process payments. Payment terms are discussed and finalized via WhatsApp when your booking is confirmed.</p>
          <h3 className="text-navy font-bold text-base">Service Availability</h3>
          <p>We serve selected pincodes in Jaipur. Service availability is confirmed by our team when your booking is confirmed.</p>
        </div>
      </div>
    </div>
  );
}
