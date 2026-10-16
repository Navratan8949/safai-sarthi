import { SectionHeading } from '@/components/SectionHeading';
import Link from 'next/link';
import { AlertCircle, CalendarCheck, Clock, ShieldCheck } from 'lucide-react';

export const metadata = { title: 'Cancellation & Rescheduling Policy | SafaiSaarthi' };

export default function CancellationPolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-max max-w-3xl">
        <SectionHeading eyebrow="Legal" title="Cancellation & Rescheduling Policy" />

        <div className="mt-8 space-y-6">
          {/* Highlight Policy Box */}
          <div className="rounded-2xl bg-amber-50 border-2 border-amber-300/80 p-5 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
              <span>Important Cancellation & Rescheduling Notice</span>
            </div>
            <p className="text-sm font-bold text-amber-950">
              Booking amount is non refundable if you cancel anything.
            </p>
            <p className="text-xs text-amber-900 leading-relaxed">
              • <strong>Cancellation:</strong> Cancellation me amount refund nahi hoga under any circumstance.<br />
              • <strong>Date Change / Rescheduling:</strong> Cancellation par amount refund nahi hoga, lekin <strong>aap apni booking date aur time change (reschedule) karva sakte ho</strong> free of charge via WhatsApp.
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-ink-light space-y-5">
            <h3 className="text-navy font-bold text-base">1. Cancellation Policy</h3>
            <p>
              When a booking request is submitted, an advance booking deposit (₹99, ₹149, ₹349, or ₹499 depending on order total) is paid via QR code to confirm your time slot. This enables our operations squad to allocate certified cleaning professionals, heavy-duty machines (e.g. wet extraction machines, single disc scrubbers), and specialized eco-safe solutions for your address.
            </p>
            <p>
              <strong>Booking amount is non refundable if you cancel anything:</strong> If you decide to cancel your booking for any reason, the advance booking amount is <strong>100% non-refundable</strong>. Cancellation me amount refund nahi hoga. No cash refund, UPI reversal, or bank transfer will be processed for cancellations.
            </p>

            <h3 className="text-navy font-bold text-base flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-emerald-600" />
              2. Rescheduling & Date Change Policy (Recommended)
            </h3>
            <p>
              We understand plans can change unexpectedly. Rather than cancelling and losing your advance payment, <strong>SafaiSaarthi allows flexible date & slot changes</strong>:
            </p>
            <ul className="list-disc pl-5 text-xs space-y-1.5">
              <li><strong>Zero Rescheduling Fee:</strong> You can change your service date to any future date within 30 days without any penalty.</li>
              <li><strong>Advance Transferred:</strong> 100% of your advance booking amount is safely applied to the new appointment.</li>
              <li><strong>Notice Window:</strong> Please inform our team on WhatsApp at least <strong>4 hours before</strong> your scheduled time window so we can reassign our cleaners efficiently.</li>
            </ul>

            <h3 className="text-navy font-bold text-base flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sky-600" />
              3. Advance Booking Amount Slabs & Payment Flow
            </h3>
            <p>
              SafaiSaarthi follows a transparent, slab-based advance booking fee structure:
            </p>
            <div className="not-prose overflow-x-auto rounded-xl border border-border my-3">
              <table className="w-full text-left text-xs text-navy">
                <thead className="bg-slate-50 border-b border-border text-ink-light font-bold">
                  <tr>
                    <th className="p-3">Order Total Slab</th>
                    <th className="p-3">Advance Booking Amount</th>
                    <th className="p-3">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Orders under ₹300</td>
                    <td className="p-3 font-bold text-emerald-700">₹99 (Pay via QR)</td>
                    <td className="p-3 text-ink-light">Pay on-site post cleaning</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Orders below ₹500 (₹300 – ₹499)</td>
                    <td className="p-3 font-bold text-emerald-700">₹149 (Pay via QR)</td>
                    <td className="p-3 text-ink-light">Pay on-site post cleaning</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Orders between ₹500 – ₹1,500</td>
                    <td className="p-3 font-bold text-emerald-700">₹349 (Pay via QR)</td>
                    <td className="p-3 text-ink-light">Pay on-site post cleaning</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Orders above ₹1,500</td>
                    <td className="p-3 font-bold text-emerald-700">₹499 (Pay via QR)</td>
                    <td className="p-3 text-ink-light">Pay on-site post cleaning</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs">
              <strong>How it works:</strong> You submit your details and additional instructions on checkout → Our support executive sends a QR code on WhatsApp → You pay the advance amount → Cleaning crew arrives on scheduled date → You inspect the work and pay the remaining balance on-site.
            </p>

            <h3 className="text-navy font-bold text-base flex items-center gap-2">
              <Clock className="h-4 w-4 text-navy" />
              4. Customer No-Show & Property Access
            </h3>
            <p>
              If our cleaning professionals arrive at your verified address at the confirmed time window, and are unable to access the property or reach you on call after waiting for 30 minutes, the visit will be recorded as a No-Show. The advance deposit will be utilized for partner travel and logistics, and a fresh booking will need to be initiated.
            </p>

            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-ink-light">
              <span>Need to change your service date?</span>
              <Link href="/contact" className="text-sky-600 font-bold hover:underline">Message us on WhatsApp</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
