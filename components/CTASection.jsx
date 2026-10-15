import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, MessageCircle, Star } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 px-6 py-14 lg:px-16 lg:py-20 border border-sky-400/20 shadow-2xl shadow-sky-950/20">
          {/* Ambient light glows */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.2)_0%,_transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.2)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative text-center max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Brand Trust Pill */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 border border-white/20 mb-6 shadow-sm">
              <div className="relative h-6 w-20 flex-shrink-0 bg-white/95 rounded-lg px-1.5 py-0.5 shadow-2xs">
                <Image
                  src="/images/safaisaarthi-jaipur-logo.png"
                  alt="SafaiSaarthi Jaipur"
                  fill
                  sizes="80px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-xs font-bold text-sky-200">
                Express Squad Jaipur
              </span>
              <span className="flex items-center gap-0.5 text-amber-400 font-extrabold text-xs">
                <Star className="h-3 w-3 fill-amber-400" /> 4.9/5
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight text-balance">
              Apne Ghar Ko Do Ek Nayi Chamak!
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-lg">
              Book professional, verified deep cleaning in under 60 seconds with live WhatsApp confirmation across Jaipur.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link 
                href="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-400 to-sky-500 px-8 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-sky-400/30 transition-all hover:bg-sky-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a Cleaning Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a 
                href="https://wa.me/?text=Hi%20SafaiSaarthi,%20I%20want%20to%20book%20a%20cleaning%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-emerald-400/40 bg-emerald-500/20 px-7 py-4 text-sm font-bold text-emerald-200 backdrop-blur transition-all hover:bg-emerald-500/30 hover:border-emerald-400 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400 fill-emerald-400/20" />
                <span>WhatsApp Booking (Instant)</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
