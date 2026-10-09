import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CMSPageHeader } from './CMSPageHeader.tsx';

const Section: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({
  number,
  title,
  children,
}) => (
  <section className="mb-10">
    <h2 className="text-lg font-bold text-[#2F5D9F] mb-3">
      {number}. {title}
    </h2>
    <div className="text-sm text-neutral-700 leading-relaxed space-y-3">{children}</div>
  </section>
);

export const TermsAndConditions: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-[#292727] font-sans">
      <CMSPageHeader />

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#EF7D2D] to-[#c45e18] pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-sm text-orange-100">Rockwell International School, Shamshabad</p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-10 text-sm text-neutral-700 leading-relaxed">
          Welcome to the website of Rockwell International School, Shamshabad ("Rockwell," "we," "our," or "us"). These
          Terms and Conditions govern your access to and use of our website, including its content, enquiry forms,
          admission-related information, and other online services.
          <br />
          <br />
          By accessing or using this website, you agree to comply with these Terms and Conditions. If you do not agree
          with any part of these terms, please discontinue using the website.
        </div>

        <Section number="1" title="About Our Website">
          <p>
            The website is intended to provide information about Rockwell International School, Shamshabad, including
            its educational programmes, curriculum, facilities, campus, activities, admissions, and contact details.
          </p>
          <p>
            The information provided is for general informational purposes and is subject to change without prior
            notice.
          </p>
        </Section>

        <Section number="2" title="Eligibility and Website Use">
          <p>By using this website, you confirm that:</p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>You will use the website only for lawful purposes.</li>
            <li>Any information you submit will be accurate and, to the best of your knowledge, complete.</li>
            <li>You will not use the website in a manner that disrupts its operation or affects other users.</li>
            <li>You will not attempt unauthorized access to the website, its servers, forms, or related systems.</li>
            <li>
              You will not submit misleading information, malicious code, spam, or content intended to compromise the
              website's security.
            </li>
          </ul>
          <p>
            Parents and legal guardians submitting information on behalf of a child must have the appropriate authority
            to do so.
          </p>
        </Section>

        <Section number="3" title="Admissions and Enquiry Information">
          <p>
            Information about admissions, classes, curriculum, eligibility, facilities, and school activities is
            provided to help parents and guardians make informed enquiries.
          </p>
          <p>
            Submitting an enquiry form, requesting a callback, or contacting the school does not guarantee admission or
            confirm a place for a student.
          </p>
          <p>
            Admission is subject to the school's applicable eligibility requirements, availability of seats, submission
            of required documents, verification of information, and completion of the prescribed admission process.
          </p>
          <p>
            The school reserves the right to review applications in accordance with its admission policies and
            applicable law.
          </p>
        </Section>

        <Section number="4" title="Accuracy of Information">
          <p>
            We make reasonable efforts to ensure that the information published on our website is accurate and current.
            However, we do not guarantee that all content will always be complete, error-free, or up to date.
          </p>
          <p>
            Details concerning curriculum, facilities, academic programmes, school activities, schedules, eligibility
            criteria, and admission procedures may be revised as required.
          </p>
          <p>
            For confirmation of specific information, parents and guardians are encouraged to contact the school
            directly before making decisions based on website content.
          </p>
        </Section>

        <Section number="5" title="Enquiry Forms and Communication">
          <p>
            When you submit an enquiry or admission form, you agree to provide accurate contact information and other
            requested details.
          </p>
          <p>
            By submitting your details, you authorize Rockwell International School and its authorized representatives
            to contact you regarding your enquiry, admission procedures, campus visits, and related requests through
            telephone calls, SMS, email, or WhatsApp, as applicable and permitted by law.
          </p>
          <p>
            Where separate consent is required for promotional communications, such consent will be obtained as
            applicable. You may request to stop receiving promotional communications, subject to necessary
            administrative and service-related communications.
          </p>
          <p>Your personal information will be handled in accordance with our Privacy Policy.</p>
        </Section>

        <Section number="6" title="Intellectual Property Rights">
          <p>
            Unless otherwise stated, the content available on this website, including text, photographs, videos,
            graphics, logos, designs, documents, and other materials, is owned by or used with permission by Rockwell
            International School or the respective rights holders.
          </p>
          <p>You may access and view website content for personal, non-commercial, informational purposes.</p>
          <p>Without prior written permission from the relevant rights holder, you may not:</p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>Copy, reproduce, republish, or distribute website content for commercial purposes.</li>
            <li>Modify or create derivative works from protected content.</li>
            <li>
              Use the school's name, logo, branding, photographs, or other protected materials in a misleading manner.
            </li>
            <li>Present website content as your own or imply an official association that does not exist.</li>
          </ul>
          <p>All applicable intellectual property rights are reserved.</p>
        </Section>

        <Section number="7" title="Student Photographs and Videos">
          <p>
            Photographs, videos, and other media displayed on the website may feature school events, campus activities,
            educational programmes, or members of the school community.
          </p>
          <p>
            The use, publication, and processing of identifiable student images and videos will be subject to applicable
            law, relevant permissions, and the school's policies.
          </p>
          <p>
            Visitors may not download, reproduce, distribute, or use student photographs, videos, or personal
            information for unauthorized purposes.
          </p>
        </Section>

        <Section number="8" title="Third-Party Links and Services">
          <p>
            Our website may contain links to external websites, educational resources, social media platforms, or
            third-party services for convenience and information.
          </p>
          <p>
            These external services are operated independently and may have their own terms, privacy policies, and
            practices.
          </p>
          <p>
            Rockwell International School does not control all third-party websites and is not responsible for their
            content, availability, security, or privacy practices. Accessing external links is at your own discretion.
          </p>
        </Section>

        <Section number="9" title="Website Availability and Security">
          <p>
            We aim to keep our website accessible and functional. However, uninterrupted access cannot be guaranteed.
          </p>
          <p>
            The website may occasionally be unavailable due to maintenance, technical issues, updates, hosting
            interruptions, or circumstances beyond our reasonable control.
          </p>
          <p>
            You must not attempt to damage, disable, overload, interfere with, or gain unauthorized access to the
            website or its associated systems.
          </p>
        </Section>

        <Section number="10" title="Limitation of Liability">
          <p>
            To the extent permitted by applicable law, Rockwell International School shall not be liable for losses
            arising from temporary website unavailability, technical errors, reliance on information that has
            subsequently changed, or the use of third-party websites linked from our website.
          </p>
          <p>
            Nothing in these Terms and Conditions excludes or limits any liability that cannot lawfully be excluded or
            limited under applicable law.
          </p>
          <p>These terms do not affect any rights or remedies available to users under applicable legislation.</p>
        </Section>

        <Section number="11" title="Indemnity">
          <p>
            To the extent permitted by applicable law, users are responsible for losses, claims, or damages directly
            arising from their unlawful use of the website, deliberate misuse of its systems, or infringement of
            third-party rights.
          </p>
          <p>Nothing in this section imposes liability beyond what is permitted under applicable law.</p>
        </Section>

        <Section number="12" title="Privacy and Personal Information">
          <p>
            Your use of this website is also subject to our Privacy Policy, which explains how personal information may
            be collected, used, stored, and shared.
          </p>
          <p>Please review the Privacy Policy before submitting personal information through any website form.</p>
          <p>
            <Link to="/privacy-policy" className="text-[#2F5D9F] hover:underline font-medium">
              Privacy Policy – Rockwell International School, Shamshabad
            </Link>
          </p>
        </Section>

        <Section number="13" title="Changes to These Terms">
          <p>
            Rockwell International School may revise these Terms and Conditions from time to time to reflect changes in
            website functionality, school operations, or applicable legal requirements.
          </p>
          <p>
            Updated terms will be published on this page with a revised effective date. Your continued use of the
            website after updated terms are published constitutes acceptance of those changes to the extent permitted by
            law.
          </p>
          <p>We encourage visitors to review this page periodically.</p>
        </Section>

        <Section number="14" title="Governing Law and Jurisdiction">
          <p>These Terms and Conditions shall be governed by the laws of India.</p>
          <p>
            Any disputes arising from the use of this website shall be subject to the jurisdiction of the competent
            courts in accordance with applicable law.
          </p>
        </Section>

        <Section number="15" title="Contact Information">
          <p>If you have questions about these Terms and Conditions, please contact us:</p>
          <div className="mt-4 bg-neutral-50 border border-neutral-200 rounded-xl p-5 space-y-2">
            <p className="font-bold text-neutral-800 text-base">Rockwell International School, Shamshabad</p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:info@rockwellshamshabad.com" className="text-[#2F5D9F] hover:underline">
                info@rockwellshamshabad.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+919000079992" className="text-[#2F5D9F] hover:underline">
                9000079992
              </a>
              {' / '}
              <a href="tel:+919000079993" className="text-[#2F5D9F] hover:underline">
                9000079993
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> Satamrai, near Hyderabad International Airport,
              Shamshabad, Hyderabad, Telangana, India.
            </p>
          </div>
        </Section>

        <Section number="16" title="Acceptance of Terms">
          <p>
            By accessing or using this website, you acknowledge that you have read and understood these Terms and
            Conditions and agree to comply with them, subject to applicable law.
          </p>
        </Section>

        {/* Bottom nav */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>© {new Date().getFullYear()} Rockwell International School Shamshabad. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-[#2F5D9F] hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-neutral-800 transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
