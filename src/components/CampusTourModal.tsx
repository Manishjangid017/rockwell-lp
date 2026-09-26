import React from 'react';
import { X, Play, MapPin, Calendar, ExternalLink } from 'lucide-react';
import heroCampusImage from '../assets/images/hero_rockwell_campus_1790319858613.jpg';

interface CampusTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookVisit: () => void;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({
  isOpen,
  onClose,
  onBookVisit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Preview Viewport */}
        <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
          <img
            src={heroCampusImage}
            alt="Rockwell International School Shamshabad Campus Virtual Tour"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Tour Interactive Player overlay */}
          <div className="relative z-10 text-center px-4">
            <div className="w-16 h-16 rounded-full bg-[#EF7D2D] text-white flex items-center justify-center mx-auto mb-4 shadow-xl hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
            <div className="text-white font-bold text-lg sm:text-xl">
              Virtual Tour Preview
            </div>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-md mx-auto">
              Explore the state-of-the-art facilities across our 8.5-acre campus.
            </p>
          </div>

          <div className="absolute bottom-3 left-4 text-xs text-white/80 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FFA85C]" />
            <span>8.5 Acres Shamshabad Campus Walkthrough</span>
          </div>
        </div>

        {/* Content Footer & Booking CTA */}
        <div className="p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#2F5D9F]">
              Experience Rockwell In Person
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Nothing compares to walking our academic blocks and meeting our educators directly.
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookVisit();
            }}
            className="w-full sm:w-auto bg-[#EF7D2D] hover:bg-[#df6e1f] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book In-Person Campus Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
