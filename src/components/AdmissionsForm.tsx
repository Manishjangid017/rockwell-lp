import React, { useState, useRef } from 'react';
import { Send, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import type { ThankYouData } from './ThankYouPage.tsx';

interface AdmissionsFormProps {
  initialCurriculum?: string;
  isCompact?: boolean;
  onFormSubmit?: (data: ThankYouData) => void;
}

export const AdmissionsForm: React.FC<AdmissionsFormProps> = ({
  initialCurriculum = '',
  isCompact = false,
  onFormSubmit,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px 0px' });

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phoneNumber: '',
    email: '',
    grade: '',
    curriculum: initialCurriculum || '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7'];

  const curricula = ['CBSE', 'Cambridge', 'IB Diploma'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.parentName.trim() || !formData.studentName.trim()) {
      setErrorMsg('Please enter both parent and student names.');
      return;
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!formData.grade) {
      setErrorMsg('Please select the grade for admission.');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onFormSubmit) {
        onFormSubmit({
          parentName: formData.parentName,
          studentName: formData.studentName,
          phone: formData.phoneNumber,
          email: formData.email || undefined,
          grade: formData.grade,
          curriculum: formData.curriculum,
        });
      }
    }, 600);
  };

  return (
    <section ref={sectionRef} id="admissions" className="py-20 lg:py-28 bg-[#fafafc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2F5D9F] mb-3">
              <span className="w-6 h-px bg-[#EF7D2D]" />
              <span>Admissions</span>
              <span className="w-6 h-px bg-[#EF7D2D]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292727] tracking-tight mb-3">
              Admissions
            </h2>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Step — Enquiry form</p>
            <p className="text-sm text-slate-600 mt-2">
              Admissions are currently open for Grade 1 to Grade 7 for Academic Year 2026–27.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-[#292727] mb-2">Enquiry Submitted Successfully</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-[#292727]">{formData.parentName}</span>. Our admissions
                  counsellor will contact you shortly on{' '}
                  <span className="font-semibold text-[#2F5D9F]">{formData.phoneNumber}</span>.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1 mb-8">
                  <div>
                    <strong className="text-slate-700">Student:</strong> {formData.studentName}
                  </div>
                  <div>
                    <strong className="text-slate-700">Grade:</strong> {formData.grade}
                  </div>
                  <div>
                    <strong className="text-slate-700">Curriculum:</strong>{' '}
                    {formData.curriculum || 'To be discussed with counsellor'}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      parentName: '',
                      studentName: '',
                      phoneNumber: '',
                      email: '',
                      grade: '',
                      curriculum: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Parent Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                      Parent Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. S Ram Chandran"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-[#292727] focus:outline-none focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                      Student Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Aarav Chandran"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-[#292727] focus:outline-none focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+91 90000 00000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-[#292727] focus:outline-none focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-[#292727] focus:outline-none focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Grade */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                      Grade Applying For <span className="text-rose-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-[#292727] bg-white focus:outline-none focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent transition-all"
                    >
                      <option value="">Select Grade (Grade 1 – 7)</option>
                      {grades.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Curriculum */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                      Curriculum Preference
                    </label>
                    <select
                      value={formData.curriculum}
                      onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-[#292727] bg-white focus:outline-none focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent transition-all"
                    >
                      <option value="">Select Curriculum (CBSE / Cambridge / IB)</option>
                      {curricula.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                    Message / Queries
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your child or any specific questions regarding admissions, transport, or curriculum..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-[#292727] focus:outline-none focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#EF7D2D] hover:bg-[#df6e1f] text-white py-4 px-6 rounded-lg text-base font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust marker footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Information kept strictly confidential</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2F5D9F]" />
                    <span>Admissions Office: +91 90000 79992</span>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
