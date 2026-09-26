import React, { useState, useRef } from 'react';
import {
  FlaskConical,
  BookOpen,
  Monitor,
  UtensilsCrossed,
  Users2,
  Trophy,
  Palette,
  Bus,
  ChevronRight,
} from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import scienceLabImg from '../assets/images/facility_science_lab_1790319872003.jpg';
import libraryImg from '../assets/images/facility_library_1790319885511.jpg';
import sportsImg from '../assets/images/facility_sports_ground_1790319897728.jpg';
import campusHeroImg from '../assets/images/hero_rockwell_campus_1790319858613.jpg';

interface CampusFacilitiesProps {
  onOpenVirtualTour?: () => void;
}

export const CampusFacilities: React.FC<CampusFacilitiesProps> = () => {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px 0px' });

  const facilities = [
    {
      id: 'science-labs',
      name: 'Science Labs',
      icon: FlaskConical,
      tag: 'Experiential STEM',
      description:
        'Hands-on science learning with modern equipment that inspires curiosity, experimentation, and innovation.',
      image: scienceLabImg,
      alt: 'Rockwell International School Science Laboratory',
    },
    {
      id: 'library',
      name: 'Library',
      icon: BookOpen,
      tag: 'Knowledge Hub',
      description:
        'A well-stocked learning space that nurtures reading, research, curiosity, and independent learning.',
      image: libraryImg,
      alt: 'Rockwell International School Contemporary Library & Media Center',
    },
    {
      id: 'computer-lab',
      name: 'Computer Lab',
      icon: Monitor,
      tag: 'Digital Literacy',
      description:
        'A technology-enabled space where students develop digital literacy, coding, research, and computational skills.',
      image: scienceLabImg,
      alt: 'Rockwell International School Technology Computer Lab',
    },
    {
      id: 'kitchen-dining',
      name: 'Kitchen & Dining Hall',
      icon: UtensilsCrossed,
      tag: 'Nutrition & Wellness',
      description:
        'A hygienic and comfortable dining space serving nutritious, balanced vegetarian meals for students.',
      image: campusHeroImg,
      alt: 'Rockwell International School Dining Hall & Kitchen',
    },
    {
      id: 'staff-room',
      name: 'Staff Room',
      icon: Users2,
      tag: 'Faculty Community',
      description:
        'A collaborative space that supports teacher planning, professional development, and meaningful collaboration.',
      image: libraryImg,
      alt: 'Rockwell International School Teacher Planning Room',
    },
    {
      id: 'outdoor-infrastructure',
      name: 'Outdoor Infrastructure',
      icon: Trophy,
      tag: '2.6L Sq.ft Sports Complex',
      description:
        'World-class sports facilities and play areas that promote fitness, teamwork, coordination, and sportsmanship.',
      image: sportsImg,
      alt: 'Rockwell International School 2.6L sq.ft Sports Facilities',
    },
    {
      id: 'indoor-infrastructure',
      name: 'Indoor Infrastructure',
      icon: Palette,
      tag: 'Creative & Performing Arts',
      description:
        'Dedicated spaces for music, dance, arts, crafts, indoor sports, and activities that encourage creativity and self-expression.',
      image: campusHeroImg,
      alt: 'Rockwell International School Arts and Music Center',
    },
    {
      id: 'transport',
      name: 'Transport',
      icon: Bus,
      tag: 'GPS & Real-time Tracking',
      description:
        'GPS-enabled buses with trained staff, CCTV, first-aid, and real-time tracking for safe and reliable student transportation.',
      image: sportsImg,
      alt: 'Rockwell International School Safe Transport Fleet',
    },
  ];

  const current = facilities[selectedFacilityIndex];

  return (
    <section ref={sectionRef} id="campus-facilities" className="py-20 lg:py-28 bg-[#fafafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2F5D9F] mb-3">
              <span className="w-6 h-px bg-[#EF7D2D]" />
              <span>Campus & Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292727] tracking-tight mb-4">
              Life at Rockwell
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mt-2 font-normal">
              A thoughtfully designed campus that makes learning engaging and meaningful. Modern facilities support curiosity, creativity, and hands-on learning. Every space is designed to help students learn, grow, and thrive.
            </p>
          </div>
        </motion.div>

        {/* Interactive Facilities Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 8 Facility Selectors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-2"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
              Select a facility to view
            </div>
            {facilities.map((facility, index) => {
              const isSelected = selectedFacilityIndex === index;
              const Icon = facility.icon;
              return (
                <button
                  key={facility.id}
                  onClick={() => setSelectedFacilityIndex(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#2F5D9F]/40 shadow-sm text-[#292727]'
                      : 'bg-transparent border-transparent hover:bg-white/80 hover:border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#2F5D9F] text-white'
                          : 'bg-slate-100 group-hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#292727] tracking-tight">
                        {facility.name}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {facility.tag}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-[#2F5D9F] translate-x-1'
                        : 'text-slate-300 group-hover:text-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Large Editorial Showcase Image & Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={current.image}
                      alt={current.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#2F5D9F] px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-xs">
                      {current.name}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF7D2D] mb-2">
                      <span>Facility Spotlight</span>
                      <span>·</span>
                      <span>Shamshabad Campus</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#292727] mb-3">
                      {current.name}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      {current.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
