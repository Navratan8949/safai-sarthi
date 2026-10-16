import { MessageCircle, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { business } from '@/config/business';
import { SectionHeading } from '@/components/SectionHeading';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Contact | SafaiSaarthi',
  description: 'Get in touch with SafaiSaarthi for professional cleaning services in Jaipur.',
};

export default function ContactPage() {
  const contactItems = [
    { icon: MessageCircle, label: 'WhatsApp', value: business.phone, action: true },
    { icon: Phone, label: 'Phone', value: business.phone },
    { icon: Mail, label: 'Email', value: business.email === 'REPLACE_WITH_OFFICIAL_EMAIL' ? 'Coming soon' : business.email },
    { icon: Clock, label: 'Business Hours', value: business.hours },
    { icon: MapPin, label: 'Service Area', value: business.serviceArea },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container-max">
        <SectionHeading center eyebrow="Contact Us" title="Get in touch" description="Have a question or need help? We're here to assist you." />

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="card-base p-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 flex-shrink-0">
                    <Icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ink-light uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-bold text-navy truncate">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-base p-8 text-center bg-sky-50">
            <h3 className="text-lg font-bold text-navy">Ready to book a cleaning?</h3>
            <p className="mt-2 text-sm text-ink-light">Browse our services and send a booking request through WhatsApp.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton label="Chat on WhatsApp" />
              <a href="/services" className="btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
