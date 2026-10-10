import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found | SafaiSaarthi' };
  return {
    title: `${service.name} in Jaipur | SafaiSaarthi`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return <ServiceDetailContent slug={slug} />;
}
