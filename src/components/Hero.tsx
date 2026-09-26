import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  Download,
  User,
  Phone,
  Mail,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { CurriculumLogos } from './CurriculumLogos.tsx';
import heroCampusImage from '../assets/images/rockwell_school_hero.jpg';
import type { ThankYouData } from './ThankYouPage.tsx';

interface HeroProps {
  onApplyClick: () => void;
  onBrochureClick: () => void;
  onFormSubmit?: (data: ThankYouData) => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onBrochureClick, onFormSubmit }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  // =========================================================
  // FORM STATE
  // =========================================================

  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [classApplying, setClassApplying] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // =========================================================
  // CRM API
  // =========================================================

  const CRM_API_URL = 'https://crm.mediagarh.com/CRM/api/leads/create';

  /*
   * Add this to your .env file:
   *
   * VITE_CRM_API_KEY=YOUR_API_KEY
   *
   * IMPORTANT:
   * VITE_ variables are available in the browser.
   * Therefore the API key is technically visible to users.
   *
   * For a production website, a backend/proxy is safer.
   */
  const CRM_API_KEY = 'b62d20f5cd5e82d3ee1cfe7fc85cccbbe43db37e36830923557c912602afe023';

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage('');

    // Required field validation
    if (
      !studentName.trim() ||
      !parentName.trim() ||
      !relationship ||
      !classApplying ||
      !phone.trim() ||
      !email.trim()
    ) {
      setErrorMessage('Please fill all required fields.');
      return;
    }

    setLoading(true);

    try {
      // -------------------------------------------------------
      // Get UTM parameters from current URL
      // -------------------------------------------------------

      const currentUrl = new URL(window.location.href);

      const utmSource = currentUrl.searchParams.get('utm_source') || '';

      const utmMedium = currentUrl.searchParams.get('utm_medium') || '';

      const utmCampaign = currentUrl.searchParams.get('utm_campaign') || '';

      // -------------------------------------------------------
      // Split student name into first_name / last_name
      // -------------------------------------------------------

      const nameParts = studentName.trim().split(/\s+/);

      const firstName = nameParts[0] || '';

      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      // -------------------------------------------------------
      // CRM PAYLOAD
      // -------------------------------------------------------

      const payload = {
        form_id: 42,

        first_name: firstName,
        last_name: lastName,

        email: email.trim(),
        phone: phone.trim(),

        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,

        landing_url: window.location.href,
        referrer_url: document.referrer || '',

        custom_fields: {
          field_field_1790418941075: {
            label: "Student's Name",
            type: 'text',
            value: studentName.trim(),
            map_to: 'student_full_name',
          },

          field_field_1790419079756: {
            label: "Parent's Name",
            type: 'text',
            value: parentName.trim(),
            map_to: 'parents_name',
          },

          field_field_1790419099222: {
            label: 'Relationship With Student',
            type: 'select',
            value: relationship,
            map_to: 'relationship_to_the_student',
          },

          field_field_1790419220157: {
            label: 'Class Applying For',
            type: 'select',
            value: classApplying,
            map_to: 'class',
          },

          field_field_1790419325944: {
            label: 'Phone Number',
            type: 'phone',
            value: phone.trim(),
            map_to: 'phone_number',
          },

          field_field_1790419364239: {
            label: 'Email Address',
            type: 'email',
            value: email.trim(),
            map_to: 'email',
          },
        },
      };

      // -------------------------------------------------------
      // SEND DATA TO CRM
      // -------------------------------------------------------

      const response = await fetch(CRM_API_URL, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': CRM_API_KEY,
        },

        body: JSON.stringify(payload),
      });

      // Try to read JSON response
      let result: any = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      // -------------------------------------------------------
      // CRM ERROR
      // -------------------------------------------------------

      if (!response.ok) {
        console.error('CRM API Error:', result);

        throw new Error(result?.message || 'Unable to submit your enquiry. Please try again.');
      }

      // -------------------------------------------------------
      // SUCCESS
      // -------------------------------------------------------

      console.log('CRM Lead Created Successfully:', result);

      // Notify parent — this triggers ThankYouPage render in App.tsx
      if (onFormSubmit) {
        onFormSubmit({
          parentName,
          studentName,
          phone,
          email: email || undefined,
          grade: classApplying,
          curriculum: relationship,
        });
      } else {
        // Fallback: show inline success state if no callback provided
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Admission Enquiry Error:', error);

      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');

      setLoading(false);
    }
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-24 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        <img
          src={heroCampusImage}
          alt="Rockwell International School Shamshabad 8.5 Acres Modern Campus"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0c182c]/95 via-[#0e203c]/90 to-[#0c182c]/85" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1d3b6a]/40 via-transparent to-[#08111e]/85" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* =================================================
              LEFT COLUMN
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7 text-left text-white"
          >
            {/* Main Headline */}

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] mb-7 drop-shadow-sm">
              NURTURING EVERY
              <br />
              CHILD’S POTENTIAL
            </h1>

            {/* Action Buttons */}

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onApplyClick}
                className="bg-[#ea6a24] hover:bg-[#dc5e19] text-white px-7 py-3.5 rounded-xl text-base font-bold transition-all duration-200 shadow-lg hover:shadow-orange-500/25 active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBrochureClick}
                className="bg-[#24354c]/85 hover:bg-[#2d405b] border border-slate-400/40 text-white px-6 py-3.5 rounded-xl text-base font-medium backdrop-blur-md transition-all duration-200 active:scale-[0.98] inline-flex items-center gap-2.5 cursor-pointer shadow-sm hover:border-slate-300/60"
              >
                <Download className="w-4 h-4 text-[#ea6a24]" />
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Divider */}

            <div className="w-full max-w-xl border-t border-white/20 mb-6" />

            {/* Curriculum */}

            <div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-4">
                ACCREDITED GLOBAL PATHWAYS
              </div>

              <CurriculumLogos variant="dark" align="left" />
            </div>
          </motion.div>

          {/* =================================================
              RIGHT COLUMN - FORM
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 w-full"
          >
            <div
              id="hero-admission-form"
              className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100/90 relative overflow-hidden"
            >
              {/* Top Accent */}

              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2F5D9F] via-[#EF7D2D] to-[#2F5D9F]" />

              {/* =================================================
                  SUCCESS STATE
              ================================================== */}

              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3.5 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                    Enquiry Received
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-3 mb-2">
                    Thank You, {parentName}!
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Your admission enquiry has been received. Our admissions counselor will contact you shortly.
                  </p>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-left text-xs text-slate-600 mb-6 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#2F5D9F] shrink-0" />

                      <span>Response time: Under 2 business hours</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#EF7D2D] shrink-0" />

                      <span>KSR X Road, Satamrai, Shamshabad Campus</span>
                    </div>
                  </div>

                  <a
                    href="tel:+919121261208"
                    className="w-full py-2.5 rounded-xl bg-[#2F5D9F] hover:bg-[#254b82] text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Admissions Desk Now</span>
                  </a>
                </div>
              ) : (
                /* =================================================
                   FORM
                ================================================== */

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Form Header */}

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        Admissions Enquiry
                      </h3>

                      <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-[#EF7D2D] px-2.5 py-0.5 rounded-full">
                        2026–27
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">
                      Book a personalized campus tour or speak with our academic counselors.
                    </p>
                  </div>

                  {/* =================================================
                      STUDENT NAME
                  ================================================== */}

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Student Name <span className="text-rose-500">*</span>
                    </label>

                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />

                      <input
                        type="text"
                        name="studentName"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#2F5D9F] focus:ring-3 focus:ring-[#2F5D9F]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      PARENT NAME
                  ================================================== */}

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Parent's Name <span className="text-rose-500">*</span>
                    </label>

                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />

                      <input
                        type="text"
                        name="parentName"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#2F5D9F] focus:ring-3 focus:ring-[#2F5D9F]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      RELATIONSHIP + CLASS
                  ================================================== */}

                  <div className="grid grid-cols-2 gap-3">
                    {/* Relationship */}

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Relationship <span className="text-rose-500">*</span>
                      </label>

                      <div className="relative">
                        <select
                          name="relationship"
                          required
                          value={relationship}
                          onChange={(e) => setRelationship(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#2F5D9F] focus:ring-3 focus:ring-[#2F5D9F]/10 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select</option>

                          <option value="Mother">Mother</option>

                          <option value="Father">Father</option>

                          <option value="Guardian">Guardian</option>
                        </select>

                        <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Class Applying */}

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Class Applying For <span className="text-rose-500">*</span>
                      </label>

                      <div className="relative">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />

                        <select
                          name="classApplying"
                          required
                          value={classApplying}
                          onChange={(e) => setClassApplying(e.target.value)}
                          className="w-full pl-8 pr-6 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#2F5D9F] focus:ring-3 focus:ring-[#2F5D9F]/10 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select Class</option>

                          <option value="LKG">LKG</option>

                          <option value="UKG">UKG</option>

                          <option value="Grade 1">Grade 1</option>

                          <option value="Grade II">Grade II</option>

                          <option value="Grade III">Grade III</option>

                          <option value="Grade IV">Grade IV</option>

                          <option value="Grade V">Grade V</option>

                          <option value="Grade VI">Grade VI</option>
                        </select>

                        <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      PHONE
                  ================================================== */}

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>

                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />

                      <input
                        type="tel"
                        name="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#2F5D9F] focus:ring-3 focus:ring-[#2F5D9F]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      EMAIL
                  ================================================== */}

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>

                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />

                      <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="parent@example.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#2F5D9F] focus:ring-3 focus:ring-[#2F5D9F]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      ERROR MESSAGE
                  ================================================== */}

                  {errorMessage && (
                    <div className="rounded-xl bg-rose-50 border border-rose-200 px-3.5 py-2.5 text-xs text-rose-600">
                      {errorMessage}
                    </div>
                  )}

                  {/* =================================================
                      SUBMIT BUTTON
                  ================================================== */}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#EF7D2D] hover:bg-[#df6e1f] text-white py-3 px-5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-orange-500/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Submitting Enquiry...
                        </span>
                      ) : (
                        <>
                          <span>Book Campus Tour & Enquiry</span>

                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* =================================================
                      TRUST BADGES
                  ================================================== */}

                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />

                      <span>Zero application fee</span>
                    </div>

                    <span>•</span>

                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2F5D9F]" />

                      <span>Instant callback</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
