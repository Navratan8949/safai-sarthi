import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Customer Reviews & Results | SafaiSaarthi Jaipur",
  description:
    "Read genuine reviews and see before-and-after cleaning transformations from homeowners across Jaipur.",
};

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-sky-50/70 via-white to-slate-50/40 py-12 lg:py-16 border-b border-slate-200/60">
        <div className="container-max text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/80 px-3.5 py-1 text-xs font-bold text-sky-800 mb-3">
            Jaipur Homeowner Experiences
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Customer Reviews & Proof of Quality
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Unfiltered feedback from homes across Jaipur and real before-after
            transformations verified by our field supervisors.
          </p>
        </div>
      </div>

      <ReviewsSection />

      <CTASection />
    </>
  );
}
