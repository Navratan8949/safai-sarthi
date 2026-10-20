import { GallerySection } from "@/components/GallerySection";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Work Gallery & Heavy Machinery | SafaiSaarthi Jaipur",
  description:
    "Explore real on-site photos of our deep cleaning projects, heavy rotary scrubbing machinery, society campuses, and commercial institutes in Jaipur by Devraj Facility Management.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="pt-6">
        <GallerySection />
      </div>
      <CTASection />
    </>
  );
}
