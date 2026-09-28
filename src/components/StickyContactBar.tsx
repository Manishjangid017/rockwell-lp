import React from "react";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function StickyContactBar({ onApplyClick }: any) {
  return (
    <>
      {/* --- FLOATING RIGHT BOTTOM CONTACT BUTTONS (Call & WhatsApp) --- */}
      <div className="fixed bottom-10 md:bottom-20 right-4 sm:right-6 z-50 flex flex-col gap-3">
        {/* Call Button */}
        <a
          href="tel:+919000079992"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2F5D9F] text-white shadow-lg hover:bg-[#1e3b68] active:scale-95 transition-all"
          title="Call Admissions"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919000079992"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 active:scale-95 transition-all"
          title="WhatsApp Admissions"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
