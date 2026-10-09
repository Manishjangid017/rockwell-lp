import React, { useState, useRef, useEffect } from 'react';
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
import { motion, useInView, type Variants } from 'framer-motion';
import { CurriculumLogos } from './CurriculumLogos.tsx';
import heroCampusImage from '../assets/images/rockwell_school_hero.jpg';
import type { ThankYouData } from './ThankYouPage.tsx';
import { BROCHURE_PDF_URL, FEE_STRUCTURE_PDF_URL, triggerPdfDownload } from '../App.tsx';
import cbseLocalLogo from '../assets/images/cbse_logo.jpg';
import heroVideo from '../assets/ROCKWELL_2.0.mp4';
interface HeroProps {
  onApplyClick: () => void;
  onBrochureClick: () => void;
  onFeeStructureClick?: () => void;
  onFormSubmit?: (data: ThankYouData) => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onBrochureClick, onFeeStructureClick, onFormSubmit }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [classApplying, setClassApplying] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requestedDoc, setRequestedDoc] = useState<'brochure' | 'fee_structure' | 'general'>('general');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const CRM_API_URL = 'https://crm.mediagarh.com/CRM/api/leads/create';
  const CRM_API_KEY = 'b62d20f5cd5e82d3ee1cfe7fc85cccbbe43db37e36830923557c912602afe023';
  // SCROLL TO FORM
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-admission-form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
  // BROCHURE CLICK
  const handleBrochureClick = () => {
    setRequestedDoc('brochure');
    scrollToForm();
    onBrochureClick?.();
  };

  // FEE STRUCTURE CLICK
  const handleFeeStructureClick = () => {
    setRequestedDoc('fee_structure');
    scrollToForm();
    onFeeStructureClick?.();
  };
  // FORM SUBMIT
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    if (
      !studentName.trim() ||
      !parentName.trim() ||
      // !relationship ||
      !classApplying ||
      !phone.trim() ||
      !email.trim()
    ) {
      setErrorMessage('Please fill all required fields.');
      return;
    }
    setLoading(true);
    try {
      // Get UTM parameters from current URL
      const currentUrl = new URL(window.location.href);
      const utmSource = currentUrl.searchParams.get('utm_source') || '';
      const utmMedium = currentUrl.searchParams.get('utm_medium') || '';
      const utmCampaign = currentUrl.searchParams.get('utm_campaign') || '';
      // Split student name into first_name / last_name
      const nameParts = studentName.trim().split(/\s+/);
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      // CRM PAYLOAD
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
      // SEND DATA TO CRM
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
      if (requestedDoc === 'fee_structure') {
        triggerPdfDownload(FEE_STRUCTURE_PDF_URL, 'Rockwell_Fee_Structure_2026-27.pdf');
      } else if (requestedDoc === 'brochure') {
        triggerPdfDownload(BROCHURE_PDF_URL, 'Rockwell_School_Brochure.pdf');
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
          curriculum: '',
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
  useEffect(() => {
    const handleExternalFormOpen = (event: Event) => {
      const customEvent = event as CustomEvent<{
        document?: 'brochure' | 'fee_structure' | 'general';
      }>;

      const documentType = customEvent.detail?.document || 'general';

      if (documentType === 'brochure' || documentType === 'fee_structure' || documentType === 'general') {
        setRequestedDoc(documentType);
      }

      scrollToForm();
    };

    window.addEventListener('open-admission-form', handleExternalFormOpen);

    return () => {
      window.removeEventListener('open-admission-form', handleExternalFormOpen);
    };
  }, []);
  // =========================================================
  // RETURN
  // =========================================================
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-20 sm:pt-28 pb-8 sm:pb-12 px-[20px] sm:px-6 w-full max-w-none overflow-hidden"
    >
      {/* Framed Cinematic Hero Container with Video Playing in the Background */}
      <div className="relative w-full max-w-none rounded-[24px] sm:rounded-[36px] overflow-hidden border border-slate-300/80 shadow-2xl min-h-[660px] lg:min-h-[720px] flex items-center px-[20px] py-7 sm:p-10 lg:p-12 xl:p-14 bg-stone-100">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <video src={heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />

          {/* User Overlay Gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(270deg, rgba(228, 217, 209, 0.00) 0%, rgba(230, 218, 210, 0.30) 50%, #E6DAD2 100%)',
            }}
          />
        </div>

        {/* Foreground Content: Left Content & Right Admissions Form */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* LEFT COLUMN: School Content & Branding */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-full max-w-none lg:col-span-7 xl:col-span-7 text-left"
          >
            {/* School Brand Identity — Text Wordmark */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
              <div className="flex flex-col gap-0.5 select-none">
                {/* Top rule */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-[3px] rounded-full bg-[#EF7D2D]" />
                  <span className="w-3 h-[3px] rounded-full bg-[#2F5D9F]" />
                </div>

                {/* Primary school name */}
                <p className="text-[14px] sm:text-[16px] font-extrabold uppercase tracking-[0.22em] text-[#EF7D2D] leading-none mb-1">
                  Rockwell{' '}
                  <span className="font-black uppercase tracking-tight leading-[1.0] text-[#162740]">
                    International School{' '}
                  </span>
                </p>
                {/* Location line */}
                <div className="flex items-center gap-1.5 mt-1.5">
                  <svg className="w-3 h-3 text-[#EF7D2D] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4a5568]">
                    Shamshabad, Hyderabad
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Admissions Open Live Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ea6a24]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#162740]">
                  Admissions Open 2027–28
                </span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-[54px] font-black tracking-tight text-[#162740] uppercase leading-[1.08] mb-6 sm:mb-7 drop-shadow-xs"
            >
              NURTURING EVERY
              <br />
              CHILD’S POTENTIAL
            </motion.h1>

            {/* Action Buttons: Apply Now & Download Brochure */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 sm:mb-9">
              <button
                type="button"
                onClick={onApplyClick}
                className="bg-[#ea6a24] hover:bg-[#dc5e19] active:scale-95 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-orange-500/30 inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleBrochureClick}
                className="bg-white/95 hover:bg-white active:scale-95 border border-slate-200 text-[#162740] px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#ea6a24]" />
                <span>Download Brochure</span>
              </button>
            </motion.div>

            {/* Accredited Global Pathways Strip */}
            <motion.div variants={itemVariants}>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-extrabold mb-3">
                ACCREDITED GLOBAL PATHWAYS
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                {/* CBSE Card */}
                <div
                  className="w-28 sm:w-36 h-14 sm:h-18 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center p-2 transition-transform hover:scale-[1.02]"
                  title="CBSE Affiliated"
                >
                  <img
                    src={cbseLocalLogo}
                    alt="rockwell international schools"
                    className="max-h-10 sm:max-h-14 w-auto object-contain"
                  />
                </div>

                {/* Cambridge Card */}
                <div
                  className="w-52 sm:w-68 h-16 sm:h-20 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center p-1 sm:p-1.5 transition-transform hover:scale-[1.02] overflow-hidden"
                  title="Cambridge Assessment International Education"
                >
                  <img
                    src="https://getvectorlogo.com/wp-content/uploads/2019/04/cambridge-assessment-international-education-vector-logo.png"
                    alt="rockwell shamshabad"
                    className="h-full w-full max-h-14 sm:max-h-16 object-contain scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Floating Admissions Enquiry Card */}
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
              className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100/90 relative overflow-hidden max-w-[460px] m-auto"
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
                        2027–28
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

                  <div className="grid grid-cols-1 gap-3">
                    {/* Relationship */}

                    {/* <div>
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
                    </div> */}

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
    </section>
  );
};
