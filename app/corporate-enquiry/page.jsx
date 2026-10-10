'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Copy, Check, ArrowLeft, AlertCircle } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { validateName, validateMobile, validateEmail, validateRequired } from '@/utils/validation';
import { generateCorporateWhatsAppMessage, generateWhatsAppUrl } from '@/utils/whatsapp';
import { generateCorporateReference } from '@/utils/booking';
import { business } from '@/config/business';

const propertyTypes = ['Hotel', 'Restaurant', 'Office', 'Retail', 'Showroom', 'Society', 'Other'];
const serviceTypes = ['One-Time Deep Cleaning', 'Recurring Cleaning', 'Post-Construction Cleaning', 'Kitchen Cleaning', 'Upholstery Cleaning', 'Other'];
const frequencies = ['One-Time', 'Daily', 'Weekly', 'Monthly', 'Custom'];

export default function CorporateEnquiryPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    mobile: '',
    email: '',
    propertyType: '',
    address: '',
    area: '',
    pincode: '',
    approxArea: '',
    floorsRooms: '',
    serviceType: '',
    frequency: '',
    startDate: '',
    siteVisit: false,
    additionalReqs: '',
  });

  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const e = {};
    const nameCheck = validateRequired(formData.companyName, 'Company / Property name');
    if (!nameCheck.valid) e.companyName = nameCheck.message;

    const personCheck = validateName(formData.contactPerson);
    if (!personCheck.valid) e.contactPerson = personCheck.message;

    const mobileCheck = validateMobile(formData.mobile);
    if (!mobileCheck.valid) e.mobile = mobileCheck.message;

    const emailCheck = validateEmail(formData.email);
    if (!emailCheck.valid) e.email = emailCheck.message;

    if (!formData.propertyType) e.propertyType = 'Please select a property type.';
    const addrCheck = validateRequired(formData.address, 'Address');
    if (!addrCheck.valid) e.address = addrCheck.message;
    const areaCheck = validateRequired(formData.area, 'Area / Locality');
    if (!areaCheck.valid) e.area = areaCheck.message;
    const pinCheck = validateRequired(formData.pincode, 'Pincode');
    if (!pinCheck.valid) e.pincode = pinCheck.message;

    if (!formData.serviceType) e.serviceType = 'Please select a service type.';
    if (!formData.frequency) e.frequency = 'Please select a frequency.';
    const dateCheck = validateRequired(formData.startDate, 'Preferred start date');
    if (!dateCheck.valid) e.startDate = dateCheck.message;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const reference = generateCorporateReference();
    const message = generateCorporateWhatsAppMessage({
      reference,
      details: {
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        mobile: formData.mobile,
        email: formData.email,
        propertyType: formData.propertyType,
        address: formData.address,
        area: formData.area,
        pincode: formData.pincode,
        approxArea: formData.approxArea,
        floorsRooms: formData.floorsRooms,
      },
      requirements: {
        serviceType: formData.serviceType,
        frequency: formData.frequency,
        startDate: formData.startDate,
        siteVisit: formData.siteVisit,
        additionalReqs: formData.additionalReqs,
      },
    });

    setConfirmation({ reference, message });
  };

  const handleOpenWhatsApp = () => {
    const url = generateWhatsAppUrl(business.whatsappNumber, confirmation.message);
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(confirmation.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (confirmation) {
    return (
      <div className="py-8 lg:py-12">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="card-base p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 mx-auto mb-5">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-navy">Your Enquiry Is Ready</h1>
              <p className="mt-3 text-sm text-ink-light leading-relaxed">
                Your corporate enquiry details have been prepared for WhatsApp. Please review and press Send.
              </p>

              <div className="mt-6 rounded-xl bg-sky-50 border border-sky-200 p-4">
                <span className="text-xs font-bold text-ink-light uppercase tracking-wide">Enquiry Reference</span>
                <p className="text-lg font-bold text-sky-600 mt-1">{confirmation.reference}</p>
              </div>

              <div className="mt-6 space-y-3">
                <button onClick={handleOpenWhatsApp} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#1DA851] hover:shadow-lg active:scale-[0.98]">
                  <MessageCircle className="h-5 w-5" />
                  Open WhatsApp
                </button>
                <button onClick={handleCopy} className="w-full btn-secondary">
                  {copied ? <><Check className="h-4 w-4 text-green-600" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy Enquiry</>}
                </button>
              </div>

              <div className="mt-6 text-left">
                <details>
                  <summary className="text-sm font-semibold text-sky-500 cursor-pointer hover:text-sky-600">
                    View full enquiry message
                  </summary>
                  <pre className="mt-3 rounded-xl bg-navy-600 text-white text-xs p-4 whitespace-pre-wrap overflow-x-auto font-mono">
                    {confirmation.message}
                  </pre>
                </details>
              </div>

              <Link href="/corporate-cleaning" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-500 hover:text-sky-600">
                <ArrowLeft className="h-4 w-4" /> Back to Corporate Cleaning
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const inputErr = (field) => errors[field] ? 'border-red-400 bg-red-50' : '';

  return (
    <div className="py-8 lg:py-12">
      <div className="container-max">
        <Link href="/corporate-cleaning" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-sky-600 mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Corporate Cleaning
        </Link>
        <SectionHeading
          eyebrow="Corporate Enquiry"
          title="Request a Custom Quote"
          description="Tell us about your property and cleaning requirements. We'll get back to you with a tailored solution."
        />

        <div className="mt-8 max-w-3xl mx-auto space-y-6">
          <div className="card-base p-6">
            <h2 className="text-lg font-bold text-navy mb-4">Property Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Company / Property Name *</label>
                <input type="text" value={formData.companyName} onChange={(e) => handleChange('companyName', e.target.value)} className={`input-base ${inputErr('companyName')}`} data-error={!!errors.companyName} placeholder="Company or property name" />
                {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Contact Person *</label>
                <input type="text" value={formData.contactPerson} onChange={(e) => handleChange('contactPerson', e.target.value)} className={`input-base ${inputErr('contactPerson')}`} data-error={!!errors.contactPerson} placeholder="Contact person name" />
                {errors.contactPerson && <p className="mt-1 text-xs text-red-500">{errors.contactPerson}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Mobile *</label>
                <input type="tel" inputMode="numeric" maxLength={10} value={formData.mobile} onChange={(e) => handleChange('mobile', e.target.value)} className={`input-base ${inputErr('mobile')}`} data-error={!!errors.mobile} placeholder="10-digit mobile number" />
                {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={`input-base ${inputErr('email')}`} data-error={!!errors.email} placeholder="Email address" />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Property Type *</label>
                <select value={formData.propertyType} onChange={(e) => handleChange('propertyType', e.target.value)} className={`input-base ${inputErr('propertyType')}`} data-error={!!errors.propertyType}>
                  <option value="">Select property type</option>
                  {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.propertyType && <p className="mt-1 text-xs text-red-500">{errors.propertyType}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Pincode *</label>
                <input type="tel" inputMode="numeric" maxLength={6} value={formData.pincode} onChange={(e) => handleChange('pincode', e.target.value.replace(/\D/g, ''))} className={`input-base ${inputErr('pincode')}`} data-error={!!errors.pincode} placeholder="6-digit pincode" />
                {errors.pincode && <p className="mt-1 text-xs text-red-500">{errors.pincode}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-navy mb-1.5 block">Full Address *</label>
                <input type="text" value={formData.address} onChange={(e) => handleChange('address', e.target.value)} className={`input-base ${inputErr('address')}`} data-error={!!errors.address} placeholder="Full property address" />
                {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Area / Locality *</label>
                <input type="text" value={formData.area} onChange={(e) => handleChange('area', e.target.value)} className={`input-base ${inputErr('area')}`} data-error={!!errors.area} placeholder="Area / Locality" />
                {errors.area && <p className="mt-1 text-xs text-red-500">{errors.area}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Approximate Area (Optional)</label>
                <input type="text" value={formData.approxArea} onChange={(e) => handleChange('approxArea', e.target.value)} className="input-base" placeholder="e.g. 2000 sq ft" />
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Floors / Rooms (Optional)</label>
                <input type="text" value={formData.floorsRooms} onChange={(e) => handleChange('floorsRooms', e.target.value)} className="input-base" placeholder="e.g. 3 floors, 15 rooms" />
              </div>
            </div>
          </div>

          <div className="card-base p-6">
            <h2 className="text-lg font-bold text-navy mb-4">Service Requirements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Service Type *</label>
                <select value={formData.serviceType} onChange={(e) => handleChange('serviceType', e.target.value)} className={`input-base ${inputErr('serviceType')}`} data-error={!!errors.serviceType}>
                  <option value="">Select service type</option>
                  {serviceTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.serviceType && <p className="mt-1 text-xs text-red-500">{errors.serviceType}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Frequency *</label>
                <select value={formData.frequency} onChange={(e) => handleChange('frequency', e.target.value)} className={`input-base ${inputErr('frequency')}`} data-error={!!errors.frequency}>
                  <option value="">Select frequency</option>
                  {frequencies.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.frequency && <p className="mt-1 text-xs text-red-500">{errors.frequency}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Preferred Start Date *</label>
                <input type="date" min={new Date().toISOString().split('T')[0]} value={formData.startDate} onChange={(e) => handleChange('startDate', e.target.value)} className={`input-base ${inputErr('startDate')}`} data-error={!!errors.startDate} />
                {errors.startDate && <p className="mt-1 text-xs text-red-500">{errors.startDate}</p>}
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-3 cursor-pointer pb-3">
                  <input type="checkbox" checked={formData.siteVisit} onChange={(e) => handleChange('siteVisit', e.target.checked)} className="h-5 w-5 rounded border-border text-sky-500 focus:ring-sky-200" />
                  <span className="text-sm text-ink">Request a site visit</span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-semibold text-navy mb-1.5 block">Additional Requirements (Optional)</label>
              <textarea value={formData.additionalReqs} onChange={(e) => handleChange('additionalReqs', e.target.value)} className="input-base min-h-[80px] resize-y" placeholder="Any specific requirements or details about your cleaning needs" />
            </div>
          </div>

          <button onClick={handleSubmit} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#1DA851] hover:shadow-lg active:scale-[0.98]">
            <MessageCircle className="h-5 w-5" />
            Send Enquiry via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
