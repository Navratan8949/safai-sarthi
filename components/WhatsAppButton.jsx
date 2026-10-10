"use client";

import { MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import { generateWhatsAppUrl } from "@/utils/whatsapp";

export function WhatsAppButton({
  message,
  className = "",
  label = "Chat on WhatsApp",
}) {
  const url = generateWhatsAppUrl(
    business.whatsappNumber,
    message ||
      `Hello ${business.name}! I have a question about your cleaning services.`,
  );
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#1DA851] hover:shadow-lg active:scale-[0.98] ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </a>
  );
}

export function FloatingWhatsApp() {
  const url = generateWhatsAppUrl(
    business.whatsappNumber,
    `Hello ${business.name}! I need information about cleaning services in Jaipur.`,
  );
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-2xl active:scale-95 border-2 border-white/60"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-10 w-10 fill-white text-[#25D366]" />
    </a>
  );
}
