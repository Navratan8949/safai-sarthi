'use client';

import Link from 'next/link';
import { X, Home, Sparkles, Building, Info, Phone, ShoppingCart, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function MobileMenu({ open, onClose }) {
  const links = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About', href: '/about', icon: Info },
    { label: 'Services', href: '/services', icon: Sparkles },
    { label: 'Corporate Cleaning', href: '/corporate-cleaning', icon: Building },
    { label: 'How It Works', href: '/#how-it-works', icon: MapPin },
    { label: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={onClose} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl animate-fade-in flex flex-col">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo />
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-navy hover:bg-sky-50"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-1">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-sky-50 hover:text-sky-500"
                    >
                      <Icon className="h-5 w-5 text-sky-500" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-border p-4 space-y-3">
              <Link href="/cart" onClick={onClose} className="btn-secondary w-full">
                <ShoppingCart className="h-4 w-4" />
                View Cart
              </Link>
              <Link href="/services" onClick={onClose} className="btn-primary w-full">
                Book a Cleaning
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
