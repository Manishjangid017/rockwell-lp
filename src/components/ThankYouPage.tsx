import React, { useEffect } from "react";
import {
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Calendar,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./Logo.tsx";
import {
  triggerPdfDownload,
  BROCHURE_PDF_URL,
  FEE_STRUCTURE_PDF_URL,
} from "../App.tsx";

export interface ThankYouData {
  parentName: string;
  studentName?: string;
  phone: string;
  email?: string;
  grade: string;
  curriculum: string;
  requestedDoc?: "brochure" | "fee_structure" | "general";
}

interface ThankYouPageProps {
  data: ThankYouData;
  onBack: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

function animProps(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  } as const;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ data, onBack }) => {
  const { parentName, studentName, phone, email, grade, curriculum } = data;
  const requestedDoc = data.requestedDoc || "general";
  const nextSteps = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Admissions Call",
      description:
        "Our counsellor will call you within 2 business hours to walk you through the process.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Campus Tour",
      description:
        "We'll schedule a personalised campus tour at your convenience — weekdays or Saturday mornings.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Application Review",
      description:
        "Submit your documents and we'll guide you through every step of the admission process.",
    },
  ];
  const getPdfDetails = () => {
    if (requestedDoc === "fee_structure") {
      return {
        url: FEE_STRUCTURE_PDF_URL,
        name: "Rockwell_Fee_Structure_2026-27.pdf",
        label: "Fee Structure PDF",
      };
    }
    return {
      url: BROCHURE_PDF_URL,
      name: "Rockwell_School_Brochure.pdf",
      label: "School Brochure PDF",
    };
  };

  useEffect(() => {
    if (requestedDoc === "general") return; // Apply Now wale flow ke liye direct exit

    const pdfDetails = getPdfDetails();
    const downloadKey = `pdf_downloaded_${requestedDoc}`;
    const hasDownloaded = sessionStorage.getItem(downloadKey);

    if (!hasDownloaded) {
      sessionStorage.setItem(downloadKey, "true");
      triggerPdfDownload(pdfDetails.url, pdfDetails.name);
    }
  }, [requestedDoc]);
  return (
    <div className="min-h-screen bg-[#fafafc] flex flex-col">
      {/* ── Minimal Header ── */}
      <header className="w-full bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Logo variant="color" className="h-12 w-auto" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2F5D9F] hidden sm:block">
            Admissions 2027–28
          </span>
        </div>
      </header>

      {/* ── Page Body ── */}
      <main className="flex-grow flex items-start justify-center px-4 sm:px-6 py-12 lg:py-16">
        <div className="w-full max-w-2xl space-y-6">
          {/* ── Confirmation Card ── */}
          <motion.div
            {...animProps(0)}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
          >
            {/* Top accent strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#2F5D9F] via-[#EF7D2D] to-[#2F5D9F]" />

            <div className="px-6 sm:px-10 py-10 text-center">
              {/* Success icon */}
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-9 h-9 text-emerald-600 stroke-[2]" />
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-4">
                Enquiry Received
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#292727] tracking-tight mb-3">
                Thank You, {parentName}!
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                Your admissions enquiry
                {studentName && (
                  <>
                    {" "}
                    for{" "}
                    <span className="font-semibold text-[#292727]">
                      {studentName}
                    </span>
                  </>
                )}{" "}
                for{" "}
                <span className="font-semibold text-[#2F5D9F]">{grade}</span>
                {curriculum && <> ({curriculum})</>} has been successfully
                submitted. We will reach you at{" "}
                <span className="font-semibold text-[#EF7D2D]">{phone}</span>.
              </p>

              {/* Summary pill strip */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full">
                  <Phone className="w-3.5 h-3.5 text-[#2F5D9F]" />
                  {phone}
                </span>
                {email && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full">
                    <Mail className="w-3.5 h-3.5 text-[#EF7D2D]" />
                    {email}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#2F5D9F]/10 text-[#2F5D9F] px-3.5 py-1.5 rounded-full">
                  {grade} · {curriculum || "Curriculum TBD"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Campus Info + CTA ── */}
          <motion.div
            {...animProps(0.3)}
            className="bg-[#0e203c] rounded-2xl px-6 sm:px-10 py-8 text-white"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#FFA85C] mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#FFA85C]" />
              Rockwell International School Shamshabad
              <span className="w-5 h-px bg-[#FFA85C]" />
            </h2>

            <div className="space-y-3 text-xs text-slate-300 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EF7D2D] shrink-0 mt-0.5" />
                <span>
                  D.No 15-14, KSR X Road, Kolan Estates, Near Milestone
                  Kandakatla, Satamrai, Shamshabad, Hyderabad – 501218
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EF7D2D] shrink-0" />
                <div className="flex gap-2 font-mono">
                  <a
                    href="tel:+919000079992"
                    className="hover:text-white transition-colors"
                  >
                    +91 9000079992
                  </a>
                  <span>·</span>
                  <a
                    href="tel:+919000079993"
                    className="hover:text-white transition-colors"
                  >
                    +91 9000079993
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#EF7D2D] shrink-0" />
                <span>Office: Mon–Fri 9am–5pm · Sat 9am–1pm</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919000079992"
                className="flex-1 bg-[#EF7D2D] hover:bg-[#df6e1f] text-white py-3 rounded-xl text-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button
                type="button"
                onClick={onBack}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Back to Website
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* ── Footer note ── */}
          <motion.p
            {...animProps(0.4)}
            className="text-center text-xs text-slate-400 pb-4"
          >
            © {new Date().getFullYear()} Rockwell International School
            Shamshabad · Admissions Office
          </motion.p>
        </div>
      </main>
    </div>
  );
};
