import { SectionHeading } from '@/components/SectionHeading';

export const metadata = { title: 'Privacy Policy | SafaiSaarthi' };

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max max-w-3xl">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" />
        <div className="mt-8 prose prose-sm max-w-none text-ink-light space-y-4">
          <p>This Privacy Policy describes how SafaiSaarthi collects, uses, and shares information when you use our website and services.</p>
          <h3 className="text-navy font-bold text-base">Information We Collect</h3>
          <p>When you submit a booking request or enquiry through our website, we collect the information you provide, including your name, mobile number, address, pincode, and booking preferences. This information is sent to us via WhatsApp for booking coordination.</p>
          <h3 className="text-navy font-bold text-base">How We Use Information</h3>
          <p>We use the information you provide to process your booking request, coordinate service delivery, and communicate with you about your booking.</p>
          <h3 className="text-navy font-bold text-base">Data Storage</h3>
          <p>Your cart information is stored locally in your browser using localStorage. We do not store your personal booking details on our servers. Booking information exists only for the current booking flow and is sent via WhatsApp.</p>
          <h3 className="text-navy font-bold text-base">No Payment Information</h3>
          <p>We do not collect or process any payment information through this website. Payment terms are discussed and finalized via WhatsApp.</p>
          <h3 className="text-navy font-bold text-base">Contact</h3>
          <p>If you have questions about this Privacy Policy, please contact us through WhatsApp or the contact details on our Contact page.</p>
        </div>
      </div>
    </div>
  );
}
