import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#292727] font-sans">
      <CMSPageHeader />

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#2F5D9F] to-[#1e3f74] pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FFA85C] mb-2">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-sm text-blue-200">Effective Date: 9 October 2026</p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10 text-sm text-neutral-700 leading-relaxed">
          At Rockwell International School, Shamshabad ("Rockwell," "we," "our," or "us"), accessible through our
          website, we respect the privacy of our visitors, parents, guardians, students, and prospective families. This
          Privacy Policy explains what personal information we collect, how we use it, how it may be shared, and the
          measures we take to protect it.
          <br />
          <br />
          By visiting our website or submitting your information through our enquiry, admission, or contact forms, you
          acknowledge that you have read this Privacy Policy.
          <br />
          <br />
          If you have any questions or require further information about this policy, please contact us using the
          details provided at the end of this page.
        </div>

        <Section number="1" title="Information We Collect">
          <p>
            When you visit our website, enquire about admissions, or interact with our services, we may collect the
            following information:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>
              <span className="font-semibold text-neutral-800">Parent or Guardian Information:</span> Name, mobile
              number, email address, and relationship with the student.
            </li>
            <li>
              <span className="font-semibold text-neutral-800">Student Information:</span> Student's name, date of birth
              or age, grade or class of interest, and other details necessary to respond to admission enquiries.
            </li>
            <li>
              <span className="font-semibold text-neutral-800">Enquiry Information:</span> Messages, questions,
              preferences, and other information you voluntarily provide through our website forms, telephone calls,
              email, or other communication channels.
            </li>
            <li>
              <span className="font-semibold text-neutral-800">Technical Information:</span> IP address, browser type,
              device information, pages visited, referral sources, and website usage data collected through server logs,
              cookies, or analytics tools, where applicable.
            </li>
            <li>
              <span className="font-semibold text-neutral-800">Communication Preferences:</span> Information about your
              preferences for receiving admission updates, school announcements, or other communications from us.
            </li>
          </ul>
          <p>We aim to collect only the information reasonably necessary for the purposes described in this policy.</p>
        </Section>

        <Section number="2" title="How We Collect Information">
          <p>We may collect personal information when you:</p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>Submit an admission enquiry or request a campus visit.</li>
            <li>Complete an online registration or admission form.</li>
            <li>Contact the school by phone, email, or through the website.</li>
            <li>Request information about our curriculum, facilities, or academic programmes.</li>
            <li>Subscribe to school updates or voluntarily participate in surveys.</li>
            <li>Browse or interact with our website.</li>
          </ul>
          <p>Certain technical information may also be collected automatically when you visit our website.</p>
        </Section>

        <Section number="3" title="How We Use Your Information">
          <p>The information we collect may be used for the following purposes:</p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>To respond to admission enquiries and requests for information.</li>
            <li>To contact parents or guardians regarding admissions, campus visits, and application procedures.</li>
            <li>
              To provide information about our curriculum, educational programmes, facilities, and school activities.
            </li>
            <li>To process and manage admission applications and related administrative requirements.</li>
            <li>To improve our website, communication, and enquiry-handling processes.</li>
            <li>To understand website performance and visitor engagement.</li>
            <li>
              To send relevant school updates, announcements, or promotional communications where permitted by
              applicable law.
            </li>
            <li>To maintain website security, prevent misuse, and comply with applicable legal obligations.</li>
          </ul>
          <p>
            We do not intend to use personal information for purposes unrelated to the reason it was collected without
            an appropriate legal basis.
          </p>
        </Section>

        <Section number="4" title="Admission Enquiries and Communication">
          <p>
            When you submit an enquiry form, you authorize Rockwell International School, Shamshabad, and its authorized
            representatives to contact you using the details provided to respond to your request.
          </p>
          <p>
            Communication may take place through telephone calls, SMS, email, or messaging services such as WhatsApp,
            where applicable.
          </p>
          <p>
            If you receive promotional communications from us, you may request to stop receiving them. Essential
            communications relating to an ongoing admission application or other requested service may still be sent
            where necessary.
          </p>
        </Section>

        <Section number="5" title="Cookies and Similar Technologies">
          <p>
            Our website may use cookies and similar technologies to improve functionality, understand visitor behaviour,
            measure website performance, and support relevant advertising, where such tools are implemented.
          </p>
          <p>
            Cookies are small text files stored on your device by a website. They may help us remember preferences and
            understand how visitors interact with our pages.
          </p>
          <p>
            You can manage or disable cookies through your browser settings. Please note that disabling certain cookies
            may affect some website features.
          </p>
          <p>
            Where required, we will obtain consent for the use of cookies or similar technologies in accordance with
            applicable law.
          </p>
        </Section>

        <Section number="6" title="Log Files and Website Analytics">
          <p>
            Our website hosting provider and analytics services may collect technical information through server logs
            and similar technologies. This information may include IP addresses, browser details, internet service
            provider information, date and time of visits, referring pages, and interactions with website content.
          </p>
          <p>
            We may use this information to analyse website traffic, identify technical issues, improve user experience,
            and maintain the security and performance of our website.
          </p>
          <p>
            Technical information is handled according to the applicable terms and privacy practices of the relevant
            service providers.
          </p>
        </Section>

        <Section number="7" title="Advertising and Third-Party Services">
          <p>
            We may use third-party services to support website analytics, advertising, enquiry management, or
            communication. Depending on the services implemented, these may include platforms such as Google or Meta.
          </p>
          <p>
            These services may use cookies, pixels, or similar technologies to measure campaign performance, understand
            interactions, or display relevant advertisements, subject to applicable consent requirements and platform
            policies.
          </p>
          <p>
            Third-party service providers may process information in accordance with their own privacy policies.
            Rockwell does not control the independent privacy practices of external websites or services.
          </p>
          <p>
            We encourage visitors to review the privacy policies and settings of any third-party platforms they use.
          </p>
        </Section>

        <Section number="8" title="Sharing of Personal Information">
          <p>We do not sell personal information to third parties.</p>
          <p>
            We may share personal information with authorized parties when reasonably necessary for the purposes
            described in this policy, including:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>
              <span className="font-semibold text-neutral-800">Authorized School Personnel:</span> Staff responsible for
              admissions, administration, and responding to enquiries.
            </li>
            <li>
              <span className="font-semibold text-neutral-800">Service Providers:</span> Website hosting, technical
              support, communication, analytics, and enquiry-management providers.
            </li>
            <li>
              <span className="font-semibold text-neutral-800">Advertising and Analytics Partners:</span> Where
              applicable and subject to relevant privacy requirements, for measuring campaigns and understanding website
              performance.
            </li>
            <li>
              <span className="font-semibold text-neutral-800">Legal or Regulatory Authorities:</span> Where disclosure
              is required by law, regulation, a valid legal process, or a lawful request from an authorized authority.
            </li>
          </ul>
          <p>
            We take reasonable steps to ensure that third parties handling information on our behalf are subject to
            appropriate confidentiality and security obligations.
          </p>
        </Section>

        <Section number="9" title="Children's Privacy">
          <p>
            As an educational institution serving children, we recognize the importance of protecting student
            information.
          </p>
          <p>
            We encourage parents and legal guardians to provide student information through authorized channels and to
            ensure that any information submitted is accurate and appropriate.
          </p>
          <p>
            Where personal information relating to a child is collected, we will handle it in accordance with applicable
            Indian law, including requirements concerning parental or guardian consent where applicable.
          </p>
          <p>
            We do not knowingly collect children's personal information for purposes unrelated to legitimate school
            enquiries, admissions, educational administration, or other disclosed purposes.
          </p>
          <p>
            If you believe that personal information relating to a child has been submitted improperly, please contact
            us so that we can review the matter and take appropriate action.
          </p>
        </Section>

        <Section number="10" title="Data Security">
          <p>
            We take reasonable technical and organizational measures to protect personal information against
            unauthorized access, disclosure, alteration, loss, or misuse.
          </p>
          <p>
            However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.
            While we work to protect the information entrusted to us, we cannot guarantee absolute security.
          </p>
        </Section>

        <Section number="11" title="Data Retention">
          <p>
            We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it
            was collected, respond to enquiries, manage admission processes, meet applicable legal requirements, and
            resolve disputes.
          </p>
          <p>
            The retention period may vary depending on the type of information, the nature of the enquiry, and
            applicable legal or administrative obligations. When information is no longer required, we will take
            appropriate steps to delete it or otherwise dispose of it securely, subject to applicable law.
          </p>
        </Section>

        <Section number="12" title="Your Privacy Rights">
          <p>Subject to applicable law, you may have the right to:</p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>Request information about the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of personal information where legally permissible.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Raise concerns about how your personal information is being handled.</li>
            <li>
              Request assistance regarding the personal information of a child for whom you are the parent or legal
              guardian.
            </li>
          </ul>
          <p>
            To exercise an applicable right, please contact us using the details below. We may need to verify your
            identity or authority before responding.
          </p>
        </Section>

        <Section number="13" title="External Links">
          <p>
            Our website may contain links to third-party websites, platforms, or services. These websites operate
            independently and may have their own privacy policies and practices.
          </p>
          <p>
            We are not responsible for the content, security, or privacy practices of external websites. We recommend
            reviewing their privacy policies before sharing personal information.
          </p>
        </Section>

        <Section number="14" title="Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our services, website
            functionality, data-handling practices, or applicable laws.
          </p>
          <p>
            Any revised policy will be published on this page with an updated effective date. We encourage visitors and
            parents to review this page periodically.
          </p>
        </Section>

        <Section number="15" title="Contact Us">
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or the handling of personal
            information, please contact:
          </p>
          <div className="mt-4 bg-neutral-50 border border-neutral-200 rounded-xl p-5 space-y-2">
            <p className="font-bold text-neutral-800 text-base">Rockwell International School, Shamshabad</p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:admission@rockwellshamshabad.com" className="text-[#2F5D9F] hover:underline">
                admission@rockwellshamshabad.com
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
          <p className="mt-3">We will review privacy-related requests and respond in accordance with applicable law.</p>
        </Section>

        <Section number="16" title="Consent">
          <p>
            By using our website, you acknowledge this Privacy Policy. Where consent is required for a specific type of
            data processing, we will seek that consent through an appropriate mechanism.
          </p>
          <p>
            This Privacy Policy should be read alongside any applicable website terms, admission forms, and notices
            provided when personal information is collected.
          </p>
        </Section>

        {/* Back to top / home */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>© {new Date().getFullYear()} Rockwell International School Shamshabad. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/terms-and-conditions')} className="text-[#2F5D9F] hover:underline">
              Terms &amp; Conditions
            </button>
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
