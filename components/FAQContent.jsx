'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import { SectionHeading } from '@/components/SectionHeading';

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState(null);
  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <div className="mt-12 max-w-3xl mx-auto">
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-sky-500 mb-3">{category}</h3>
          <div className="space-y-3">
            {faqs.filter((f) => f.category === category).map((faq) => {
              const idx = faqs.indexOf(faq);
              return (
                <div key={idx} className="card-base overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-sm font-bold text-navy">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-sky-500 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-5 pb-5 text-sm text-ink-light leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
