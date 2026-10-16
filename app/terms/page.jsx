import { SectionHeading } from '@/components/SectionHeading';
import Link from 'next/link';

export const metadata = { title: 'Terms & Conditions | SafaiSaarthi' };

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max max-w-3xl">
        <SectionHeading eyebrow="Legal" title="Terms & Conditions" />
        <div className="mt-8 prose prose-sm max-w-none text-ink-light space-y-6">
          <p>
            Welcome to SafaiSaarthi. By accessing our website, requesting a service, or communicating with our booking team, you agree to these Terms & Conditions.
          </p>

          <div className="rounded-xl bg-amber-50 border-2 border-amber-300/80 p-4 text-amber-900 text-xs leading-relaxed space-y-1.5 shadow-2xs">
            <p className="font-bold text-sm text-amber-950">⚠️ Important Booking, Cancellation & Rescheduling Policy:</p>
            <p className="font-bold text-amber-950 text-xs">
              • Booking amount is non refundable if you cancel anything.
            </p>
            <p className="text-amber-800">
              • Cancellation me amount refund nahi hoga, lekin aap date change / reschedule karva sakte ho free of charge via WhatsApp.
            </p>
          </div>

          <h3 className="text-navy font-bold text-base">1. Advance Booking Amount Slabs</h3>
          <p>
            To confirm your appointment slot and schedule cleaning professionals, an advance booking deposit is required according to your order total:
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-xs text-navy">
              <thead className="bg-slate-50 border-b border-border text-ink-light font-bold">
                <tr>
                  <th className="p-3">Order Total Slab</th>
                  <th className="p-3">Advance Booking Amount</th>
                  <th className="p-3">Payment Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Orders under ₹300</td>
                  <td className="p-3 font-bold text-emerald-700">₹99</td>
                  <td className="p-3 text-ink-light">UPI / QR Code</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Orders below ₹500 (₹300 – ₹499)</td>
                  <td className="p-3 font-bold text-emerald-700">₹149</td>
                  <td className="p-3 text-ink-light">UPI / QR Code</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Orders between ₹500 – ₹1,500</td>
                  <td className="p-3 font-bold text-emerald-700">₹349</td>
                  <td className="p-3 text-ink-light">UPI / QR Code</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Orders above ₹1,500</td>
                  <td className="p-3 font-bold text-emerald-700">₹499</td>
                  <td className="p-3 text-ink-light">UPI / QR Code</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-navy font-bold text-base">2. Payment & Service Execution Workflow</h3>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs text-ink-light">
            <li><strong>Booking Request:</strong> You configure your cleaning requirements, address, and additional instructions on our website and submit them to WhatsApp.</li>
            <li><strong>QR Code for Advance:</strong> Our customer support representative shares the official SafaiSaarthi payment QR code on WhatsApp for the applicable advance booking amount.</li>
            <li><strong>Slot Confirmation:</strong> Once the advance payment is received, your cleaning appointment and dedicated squad are formally confirmed.</li>
            <li><strong>On-Site Service & Remaining Balance:</strong> Our cleaning team visits your premises on the scheduled date and executes the work. After inspecting the quality of the cleaning, you pay the remaining balance directly on-site.</li>
          </ol>

          <h3 className="text-navy font-bold text-base">3. Non-Refundable Cancellation Policy</h3>
          <p>
            <strong>Booking amount is non refundable if you cancel anything.</strong> Cancellation me amount refund nahi hoga under any circumstances. When a booking is confirmed, equipment, specialized chemicals, and cleaning crew members are reserved exclusively for your slot. Therefore, if you cancel your service, the advance booking amount is 100% non-refundable.
          </p>

          <h3 className="text-navy font-bold text-base">4. Date Change & Rescheduling Policy</h3>
          <p>
            Cancellation me amount refund nahi hoga, lekin <strong>aap date change / reschedule karva sakte ho</strong>. If your schedule changes or an emergency arises, simply message our team on WhatsApp at least 4 hours before the scheduled slot. We will shift your entire advance booking deposit to the new date and time free of cost.
          </p>

          <h3 className="text-navy font-bold text-base">5. Service Availability & Pricing Estimates</h3>
          <p>
            We provide residential and commercial cleaning services across designated pincodes in Jaipur. Pricing shown on the website reflects standard requirements; customized requests, severe staining, or specialized restorative treatments may require updated estimates communicated prior to commencing work.
          </p>

          <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-ink-light">
            <span>Have questions? Chat with our team.</span>
            <Link href="/contact" className="text-sky-600 font-bold hover:underline">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
