import React, { useRef } from 'react';
import { MapPin, Phone, Clock, Calendar, ExternalLink, Navigation } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export const LocationTransport: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px 0px' });

  return (
    <section ref={sectionRef} id="location-contact" className="py-20 lg:py-28 bg-[#fafafc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2F5D9F] mb-3">
            <span className="w-6 h-px bg-[#EF7D2D]" />
            <span>Visit Us & Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292727] tracking-tight mb-4">
            Location & Contact
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Conveniently situated in Shamshabad with seamless access to South Hyderabad, Gachibowli, Financial District, and Airport Road via designated transport zones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Working Hours & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2F5D9F] mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EF7D2D]" />
                <span>CONTACT US</span>
              </h3>

              <div className="mb-6">
                <div className="text-lg font-bold text-[#292727] mb-1">
                  Rockwell International School
                </div>
                <div className="text-xs text-[#2F5D9F] font-semibold mb-2">
                  Shamshabad Campus · Hyderabad
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  D.No 15-14, KSR X Road, Kolan Estates, Near Milestone Kandakatla, Satamrai, Shamshabad, Hyderabad, Telangana - 501218
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Admissions & Enquiry
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href="tel:+919000079992"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2F5D9F] hover:text-[#1d3d6b] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#EF7D2D]" />
                    <span>+91 9000079992</span>
                  </a>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <a
                    href="tel:+919000079993"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2F5D9F] hover:text-[#1d3d6b] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#EF7D2D]" />
                    <span>+91 9000079993</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours & School Timings */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2F5D9F] mb-5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#EF7D2D]" />
                <span>WORKING HOURS</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Office Hours */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#2F5D9F]" />
                    <span>Office Hours</span>
                  </div>
                  <div className="space-y-1 text-xs text-slate-600 font-medium">
                    <div className="flex justify-between">
                      <span>Mon–Fri:</span>
                      <span className="font-semibold text-slate-900">09:00 am – 5:00 pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sat:</span>
                      <span className="font-semibold text-slate-900">09:00 am – 1:00 pm</span>
                    </div>
                  </div>
                </div>

                {/* School Timings */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#2F5D9F]" />
                    <span>School Timings</span>
                  </div>
                  <div className="space-y-1 text-xs text-slate-600 font-medium">
                    <div className="flex justify-between">
                      <span>Mon–Sat:</span>
                      <span className="font-semibold text-slate-900">08:30 am – 3:30 pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs flex flex-col"
          >
            <div className="p-4 px-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F5D9F]">LOCATION</span>
                <div className="text-sm font-bold text-[#292727]">
                  Rockwell International School - Shamshabad
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Rockwell+International+School+Shamshabad+Hyderabad"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-50 text-[#2F5D9F] hover:bg-blue-100 text-xs font-bold transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Map */}
            <div className="relative flex-1 min-h-[360px] bg-slate-100">
              <iframe
                title="Rockwell International School Shamshabad Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15239.380482025345!2d78.39868779836968!3d17.27438499214777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb984fa578c2d%3A0xe5a3637e1b52a514!2sShamshabad%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Transport Zones Quick Reference */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#EF7D2D]" />
                <span className="font-semibold text-slate-800">Direct Transport Service:</span>
                <span>Zones 1, 2, 3, and 4 Covered</span>
              </div>
              <span className="text-[11px] text-slate-400">Near Milestone Kandakatla, Satamrai</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

