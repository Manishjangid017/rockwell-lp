import React, { useState, useRef } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface FAQProps {
  onFeeStructureClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onFeeStructureClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px 0px' });

  const faqs = [
    {
      q: '01. What is the fee structure?',
      isSpecialFee: true,
      content: 'RISS Fee structure',
    },
    {
      q: '02. What transport routes are available?',
      content: (
        <div className="space-y-3">
          <div>
            <span className="font-bold text-[#2F5D9F] text-xs uppercase tracking-wider block mb-1">Zone 1:</span>
            <p className="text-slate-600 text-sm">
              Shamshabad, Satam Rai, Gagan Pahad, Rallaguda, Rajendra Nagar, Budwel, Attapur, Mehdipatnam, Himayat Sagar, Shad Nagar.
            </p>
          </div>
          <div>
            <span className="font-bold text-[#2F5D9F] text-xs uppercase tracking-wider block mb-1">Zone 2:</span>
            <p className="text-slate-600 text-sm">
              Kottur, Balapur, Tukkuguda, Mamidipally, Pahadishereef, Airport Road, Srisailam Highway.
            </p>
          </div>
          <div>
            <span className="font-bold text-[#2F5D9F] text-xs uppercase tracking-wider block mb-1">Zone 3:</span>
            <p className="text-slate-600 text-sm">
              Begum Bazar, City College, Katedan, Zoo Park, Aramgad, Bahadurpura.
            </p>
          </div>
          <div>
            <span className="font-bold text-[#2F5D9F] text-xs uppercase tracking-wider block mb-1">Zone 4:</span>
            <p className="text-slate-600 text-sm">
              Narsingi, Pebel City, Suncity, Appa Junction.
            </p>
          </div>
        </div>
      ),
    },
    {
      q: '03. What is the difference between CBSE, Cambridge and IB?',
      content: (
        <div className="space-y-2.5 text-sm text-slate-600">
          <p>
            <strong className="text-[#292727]">CBSE:</strong> Focuses on learning the syllabus well and performing well in examinations.
          </p>
          <p>
            <strong className="text-[#292727]">Cambridge:</strong> Focuses on understanding concepts and applying knowledge to real-life situations.
          </p>
          <p>
            <strong className="text-[#292727]">IB:</strong> Focuses on asking questions, investigating and developing a deeper understanding of concepts.
          </p>
        </div>
      ),
    },
    {
      q: '04. What are the school timings?',
      content: (
        <div className="space-y-3 text-sm text-slate-600">
          <div>
            <span className="font-bold text-[#292727] block mb-1">Office Hours:</span>
            <p>Monday–Friday: 09:00 am – 5:00 pm</p>
            <p>Saturday: 09:00 am – 1:00 pm</p>
          </div>
          <div>
            <span className="font-bold text-[#292727] block mb-1">School Timings:</span>
            <p>Monday–Saturday: 08:30 am – 3:30 pm</p>
          </div>
        </div>
      ),
    },
    {
      q: '05. What is the uniform policy?',
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Students must wear the prescribed school uniform on all regular school days. Uniforms should be clean, neat, comfortable and well-fitted. PE/Sports uniform must be worn on designated days. Only school-approved footwear and accessories are permitted.
        </p>
      ),
    },
    {
      q: '06. What is the assessment process?',
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Till Grade 3, students undergo verbal assessment. From Grade 4 onwards, students will have written assessments.
        </p>
      ),
    },
    {
      q: '07. Are mid-year admissions available?',
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Yes, mid-year admissions are available.
        </p>
      ),
    },
    {
      q: '08. Are scholarships available?',
      content: (
        <p className="text-sm text-slate-600 leading-relaxed font-mono">
          N/A
        </p>
      ),
    },
    {
      q: '09. What grades are currently open for admission?',
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Admissions are currently open for Grade 1 to Grade 7.
        </p>
      ),
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2F5D9F] mb-3">
            <span className="w-6 h-px bg-[#EF7D2D]" />
            <span>Frequently Asked Questions</span>
            <span className="w-6 h-px bg-[#EF7D2D]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292727] tracking-tight">
            FAQ
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Answers to common questions regarding admissions, curriculum, timings, and campus logistics.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-base text-[#292727] hover:text-[#2F5D9F] transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="tracking-tight">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-50 text-[#2F5D9F] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 border-t border-slate-100 bg-[#FAFBFD]/60">
                        {faq.isSpecialFee ? (
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
                            <div>
                              <div className="text-sm font-semibold text-[#292727] mb-1">
                                RISS Fee structure
                              </div>
                              <div className="text-xs text-slate-500">
                                Comprehensive schedule detailing tuition fees, sports and lab amenities, transport slabs, and examination levies for Grades 1–7.
                              </div>
                            </div>
                            <button
                              onClick={onFeeStructureClick}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2F5D9F] hover:bg-[#254b82] text-white text-xs font-semibold shrink-0 cursor-pointer shadow-xs transition-colors"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Request Fee Structure</span>
                            </button>
                          </div>
                        ) : (
                          faq.content
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

