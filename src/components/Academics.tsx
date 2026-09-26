import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, X, Sparkles, GraduationCap, Award } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const cbseLogoImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSztkbE260u13eHgUu8ZnAlM2ixlTvDNYYBdNS13tBCFZdEH44M2Hi1yH&s=10';
const cambridgeLogoImg =
  'https://getvectorlogo.com/wp-content/uploads/2019/04/cambridge-assessment-international-education-vector-logo.png';

interface AcademicsProps {
  onApplyForCurriculum: (curriculum: string) => void;
}

export const Academics: React.FC<AcademicsProps> = ({ onApplyForCurriculum }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px 0px' });
  const [selectedCurriculumModal, setSelectedCurriculumModal] = useState<string | null>(null);

  const curricula = [
    {
      id: 'CBSE',
      logoLabel: 'CBSE',
      pillTag: 'National Curriculum',
      title: 'CBSE – Central Board of Secondary Education',
      heading: 'CBSE',
      theme: {
        topBg: 'bg-[#e7f5f2]',
        pillBg: 'bg-white text-emerald-800 border border-emerald-100/80',
        linkColor: 'text-[#0d9488] hover:text-[#0f766e]',
        logoColor: 'text-[#044e45]',
        accentDot: 'bg-[#0d9488]',
      },
      image: cbseLogoImg,
      alt: 'Rockwell International School CBSE Curriculum',
      description:
        'The Central Board of Secondary Education (CBSE) is a widely recognised Indian curriculum combining strong academic foundations with a structured approach. It supports conceptual understanding, application-based learning, and holistic development.',
      idealFor:
        'Students looking for a structured curriculum with a strong focus on academic fundamentals, conceptual clarity, and consistent learning.',
      features: [
        'Strong foundation in core academic subjects',
        'Concept-based and application-oriented learning',
        'Structured and progressive learning approach',
      ],
      grades: 'Grade 1 to Grade 7 (Admissions Open 2027–28)',
      recognition: 'Pan-India & Global Equivalency',
      pedagogy: 'Concept-Based, Progressive & Structured',
    },
    {
      id: 'Cambridge',
      logoLabel: 'Cambridge',
      pillTag: 'International Education',
      title: 'Cambridge – Global Inquiry & Analytical Learning',
      heading: 'CAMBRIDGE',
      theme: {
        topBg: 'bg-[#edf1fe]',
        pillBg: 'bg-white text-indigo-900 border border-indigo-100/80',
        linkColor: 'text-[#4f46e5] hover:text-[#4338ca]',
        logoColor: 'text-[#292e7c]',
        accentDot: 'bg-[#4f46e5]',
      },
      image: cambridgeLogoImg,
      alt: 'Rockwell International School Cambridge International Education',
      description:
        'Cambridge International education develops independent, curious, and confident learners. It encourages students to understand concepts deeply, think critically, and connect classroom learning with the world around them.',
      idealFor:
        'Students who enjoy exploration, independent learning, critical thinking, and a globally oriented approach to education.',
      features: [
        'Inquiry-based and concept-driven learning',
        'Critical thinking and problem-solving',
        'Independent and globally minded learning',
      ],
      grades: 'Primary & Lower Secondary Pathways',
      recognition: '160+ Countries Worldwide',
      pedagogy: 'Inquiry-Based & Analytical',
    },
  ];

  const activeCurriculum = curricula.find((c) => c.id === selectedCurriculumModal);

  return (
    <section ref={sectionRef} id="academics" className="py-20 lg:py-28 bg-[#fbfbfe] border-t border-slate-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/20 text-[#0d9488] text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]" />
            <span>Academic Pathways</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#292727] tracking-tight mb-4 leading-snug">
            Choose the Right Curriculum <br className="hidden sm:inline" />
            for Your Child
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Every child learns differently. At Rockwell International School, our curriculum options are designed to
            support different learning styles, aspirations, and future pathways—helping students build strong
            foundations while developing the skills to thrive in a changing world.
          </p>
        </motion.div>

        {/* Full-width 2 Showcase Style Cards (CBSE & Cambridge) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {curricula.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.65,
                delay: 0.15 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white rounded-[26px] overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Half: Pastel Tinted Backdrop with Logo, Visual Asset & Pill */}
              <div
                className={`relative ${item.theme.topBg} p-6 sm:p-8 lg:p-9 flex flex-col justify-between overflow-hidden min-h-[280px] sm:min-h-[300px]`}
              >
                {/* Logo and Brand Mark */}
                <div className="flex items-center justify-between z-10 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-900/80" />
                    <span className={`text-xl sm:text-2xl font-black tracking-tight ${item.theme.logoColor}`}>
                      {item.logoLabel}
                    </span>
                  </div>
                </div>

                {/* Official Accreditation Emblem & Logo Container */}
                <div className="my-auto py-3 flex justify-center items-center">
                  <div className="relative w-full max-w-md h-[145px] sm:h-[165px] md:h-[180px] rounded-2xl overflow-hidden shadow-sm border border-white/90 bg-white p-5 sm:p-6 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Overlapping Pill Tag */}
                <div className="relative z-10 pt-2">
                  <span
                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold shadow-xs ${item.theme.pillBg}`}
                  >
                    {item.pillTag}
                  </span>
                </div>
              </div>

              {/* Bottom Half: Crisp Clean White Container with Content & Link */}
              <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#292727] tracking-tight mb-3 group-hover:text-[#2F5D9F] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>

                  {/* Bullet points summary */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#EF7D2D] shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onApplyForCurriculum(item.heading)}
                    className="w-full text-center text-sm sm:text-base font-bold text-white bg-[#2F5D9F] hover:bg-[#254b82] py-3 px-6 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Curriculum Detailed Modal Dialog */}
      <AnimatePresence>
        {selectedCurriculumModal && activeCurriculum && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCurriculumModal(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${activeCurriculum.theme.pillBg}`}>
                  {activeCurriculum.pillTag}
                </span>
                <span className="text-xs font-bold text-[#EF7D2D]">Rockwell International School</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#292727] tracking-tight mb-4">
                {activeCurriculum.heading} Curriculum Pathway
              </h3>

              {/* Quick Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="p-3 bg-white rounded-xl shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2F5D9F]" />
                    <span>Grades</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800">{activeCurriculum.grades}</div>
                </div>

                <div className="p-3 bg-white rounded-xl shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#EF7D2D]" />
                    <span>Pedagogy</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800">{activeCurriculum.pedagogy}</div>
                </div>

                <div className="p-3 bg-white rounded-xl shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Recognition</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800">{activeCurriculum.recognition}</div>
                </div>
              </div>

              {/* Detailed Explanation */}
              <div className="space-y-4 text-slate-700 text-sm leading-relaxed mb-6">
                <div>
                  <h4 className="font-bold text-[#292727] text-base mb-1">Curriculum Overview</h4>
                  <p className="text-slate-600">{activeCurriculum.description}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                  <h4 className="font-bold text-[#2F5D9F] text-sm mb-1">Ideal For</h4>
                  <p className="text-slate-700 text-xs sm:text-sm">{activeCurriculum.idealFor}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#292727] text-sm mb-2">Key Learning Features</h4>
                  <ul className="space-y-2">
                    {activeCurriculum.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#EF7D2D] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCurriculumModal(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const heading = activeCurriculum.heading;
                    setSelectedCurriculumModal(null);
                    onApplyForCurriculum(heading);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#EF7D2D] hover:bg-[#df6e1f] text-white text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enquire for {activeCurriculum.heading} Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
