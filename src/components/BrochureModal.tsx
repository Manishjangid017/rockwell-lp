import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, BookOpen, ShieldCheck } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  title = 'Download RISS Brochure',
  subtitle = 'Get comprehensive details about academic programs, campus amenities, transport zones, and admissions 2026–27.',
}) => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone) return;
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#292727] mb-2">
              Brochure Ready for Download
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Thank you, {parentName}. A digital copy of the <strong>Rockwell International School Brochure (2026–27)</strong> has been sent to {email || 'your mobile'}.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Brochure download initiated: Rockwell_Shamshabad_Prospectus_2026.pdf');
                }}
                className="w-full bg-[#EF7D2D] hover:bg-[#df6e1f] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save PDF File Directly</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2F5D9F] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#292727]">{title}</h3>
                <span className="text-xs text-[#EF7D2D] font-semibold">RISS Official Prospectus</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              {subtitle}
            </p>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. S Ram Chandran"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D9F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number (for WhatsApp copy) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 90000 00000"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D9F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D9F]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#2F5D9F] hover:bg-[#254b82] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-colors"
                >
                  <Download className="w-4 h-4 text-[#FFA85C]" />
                  <span>Download RISS Brochure Now</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>We respect your privacy. No spam.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
