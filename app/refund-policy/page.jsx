import { SectionHeading } from '@/components/SectionHeading';
import Link from 'next/link';
import { AlertCircle, CalendarCheck, ShieldCheck } from 'lucide-react';

export const metadata = { title: 'Refund Policy | SafaiSaarthi' };

export default function RefundPolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max max-w-3xl">
        <SectionHeading eyebrow="Legal" title="Refund Policy" />

        <div className="mt-8 space-y-6">
          {/* Highlight Notice */}
          <div className="rounded-2xl bg-amber-50 border-2 border-amber-300/80 p-5 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
              <span>Important Booking, Cancellation & Refund Notice</span>
            </div>
            <p className="text-sm font-bold text-amber-950">
              Booking amount is non refundable if you cancel anything.
            </p>
            <p className="text-xs text-amber-900 leading-relaxed">
              Cancellation me amount refund nahi hoga. Aap apni booking date change / reschedule karva sakte ho free of cost via WhatsApp.
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-ink-light space-y-5">
            <h3 className="text-navy font-bold text-base">1. Cancellation & Advance Booking Policy</h3>
            <p>
              To confirm your cleaning slot and allocate verified professionals, tools, and eco-safe cleaning supplies, an advance booking amount is required:
            </p>

            <div className="not-prose overflow-x-auto rounded-xl border border-border my-3">
              <table className="w-full text-left text-xs text-navy">
                <thead className="bg-slate-50 border-b border-border text-ink-light font-bold">
                  <tr>
                    <th className="p-3">Order Total Slab</th>
                    <th className="p-3">Advance Booking Amount</th>
                    <th className="p-3">Refund Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Orders under ₹300</td>
                    <td className="p-3 font-bold text-emerald-700">₹99</td>
                    <td className="p-3 font-semibold text-amber-700">Non-Refundable</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Orders below ₹500 (₹300 – ₹499)</td>
                    <td className="p-3 font-bold text-emerald-700">₹149</td>
                    <td className="p-3 font-semibold text-amber-700">Non-Refundable</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Orders between ₹500 – ₹1,500</td>
                    <td className="p-3 font-bold text-emerald-700">₹349</td>
                    <td className="p-3 font-semibold text-amber-700">Non-Refundable</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Orders above ₹1,500</td>
                    <td className="p-3 font-bold text-emerald-700">₹499</td>
                    <td className="p-3 font-semibold text-amber-700">Non-Refundable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Cancellation me amount refund nahi hoga:</strong> In the event of a cancellation by the customer, the advance booking amount is 100% non-refundable. No cash refund, bank transfer, or UPI reversal will be processed upon cancellation.
            </p>

            <h3 className="text-navy font-bold text-base flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-emerald-600" />
              2. Date Change & Rescheduling Policy (Aap Date Change Karva Sakte Ho)
            </h3>
            <p>
              Cancellation par refund nahi hoga, lekin <strong>aap date change / reschedule karva sakte ho</strong> without losing your booking amount:
            </p>
            <ul className="list-disc pl-5 text-xs space-y-1.5">
              <li>Notify our team via WhatsApp at least 4 hours before your scheduled appointment slot.</li>
              <li>Select any new convenient date and time window within 30 days.</li>
              <li>Your full advance deposit will be shifted to your new date with zero rescheduling fees.</li>
            </ul>

            <h3 className="text-navy font-bold text-base flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sky-600" />
              3. Payment & Service Execution Workflow
            </h3>
            <p>
              SafaiSaarthi operates on a customer-friendly, verified service model:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-ink-light">
              <li><strong>Checkout Request:</strong> You configure your services, address, and additional instructions on our website.</li>
              <li><strong>QR Code for Advance:</strong> Our support executive sends an official UPI payment QR code via WhatsApp for the advance booking amount.</li>
              <li><strong>Visit & Work:</strong> Once the advance is received, our cleaning crew visits your location on the scheduled date & time and performs the cleaning work.</li>
              <li><strong>Remaining Balance on Completion:</strong> You inspect the work quality and pay the remaining balance directly on-site after service is completed.</li>
            </ol>

            <h3 className="text-navy font-bold text-base">4. Quality Issues & Service Rework</h3>
            <p>
              Customer satisfaction is our highest priority. If any included area within your service scope was left uncleaned or not done up to standard, please notify us within 24 hours with photos/videos. We will send our team for a complimentary re-cleaning of that specific area at no additional charge.
            </p>

            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-ink-light">
              <span>Need to reschedule your booking?</span>
              <Link href="/contact" className="text-sky-600 font-bold hover:underline">Contact Support via WhatsApp</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
