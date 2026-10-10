'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import { SectionHeading } from './SectionHeading';

export function FAQSection({ limit = 6, showAll = false }) {
  const [openIndex, setOpenIndex] = useState(null);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, limit);

  return (
    <section className="py-16 lg:py-24 bg-sky-50">
      <div className="container-max">
        <SectionHeading
          center
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about booking with SafaiSaarthi."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {visibleFaqs.map((faq, i) => (
            <div key={i} className="card-base overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-bold text-navy">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-sky-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-ink-light leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
