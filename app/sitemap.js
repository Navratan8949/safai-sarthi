import { services } from '@/data/services';

export default function sitemap() {
  const base = 'https://safaisaarthi.com';
  const staticPages = [
    '',
    '/services',
    '/corporate-cleaning',
    '/corporate-enquiry',
    '/about',
    '/reviews',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/cancellation-policy',
    '/refund-policy',
  ];

  const staticUrls = staticPages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }));

  const serviceUrls = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticUrls, ...serviceUrls];
}
