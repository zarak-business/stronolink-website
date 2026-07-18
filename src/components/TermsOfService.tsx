import { Navbar } from './Navbar';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-3xl md:text-4xl font-medium text-center mb-16">Terms of Service</h1>

        <div className="flex flex-col gap-10">
          {/* Section 1 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">1. Introduction</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Welcome to Stronolink. These Terms of Service ("Terms") govern your access to and use of our website, systems, and services. By accessing or using Stronolink, you agree to comply with these Terms. If you do not agree, you must discontinue use immediately.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">2. Services Provided</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Stronolink provides AI automation solutions, lead generation systems, outreach automation, and consulting related to AI system deployment and process optimization. All services are provided on an "as available" basis, and we reserve the right to modify, pause, or discontinue any service at any time.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">3. Eligibility</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              By using our services, you represent that you are at least 18 years old (or the age of majority in your jurisdiction) and have the legal capacity to enter into these Terms.
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">4. Changes to Terms</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              We may update these Terms from time to time. When we do, we will post the updated Terms on this page with a revised "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">5. Account Registration and Use</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              If you create an account or provide personal information through our site (such as booking a call), you agree to:
            </p>
            <ul className="list-disc pl-6 text-white/90 text-sm md:text-base leading-relaxed flex flex-col gap-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain and update your information as needed</li>
              <li>Accept responsibility for all activity under your account or email</li>
            </ul>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              You are responsible for ensuring your information remains secure.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">6. Privacy Policy</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Our Privacy Policy, which describes how we handle personal data, is available on our website and forms part of these Terms. By using our services, you consent to such data practices.
            </p>
          </div>

          {/* Section 7 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">7. Payment and Billing</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              If you purchase services through Stronolink, you agree to pay all applicable fees as described at the time of purchase. Payments are non-refundable except where required by law or as explicitly stated in a written agreement.
            </p>
          </div>

          {/* Section 8 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">8. User Conduct</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-white/90 text-sm md:text-base leading-relaxed flex flex-col gap-2">
              <li>Use our services for unlawful or harmful purposes</li>
              <li>Interfere with the proper operation of our systems</li>
              <li>Attempt to access data or systems you are not authorized to access</li>
            </ul>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Violation of these rules may result in suspension or termination of your access.
            </p>
          </div>

          {/* Section 9 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">9. Intellectual Property</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              All software, systems, designs, text, graphics, and other content on Stronolink are protected under intellectual property law. You may not copy, reproduce, or distribute our materials without prior written consent.
            </p>
          </div>

          {/* Section 10 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">10. Third-Party Services</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Our services may integrate with or link to third-party tools, websites, or APIs. Stronolink is not responsible for third-party services, their availability, or their data practices.
            </p>
          </div>

          {/* Section 11 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">11. Termination</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              We may suspend or terminate your access to Stronolink at any time, with or without notice, if you violate these Terms or engage in conduct we deem harmful.
            </p>
          </div>

          {/* Section 12 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">12. Disclaimers</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Our services are provided "as is" and "as available," without warranties of any kind, express or implied. We make no guarantee that our systems will generate specific results, leads, or revenue.
            </p>
          </div>

          {/* Section 13 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">13. Limitation of Liability</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              To the maximum extent permitted by law, Stronolink and its owners, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, lost data, or business interruptions — resulting from your use of our services.
            </p>
          </div>

          {/* Section 14 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">14. Governing Law</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              These Terms shall be governed by and construed under the laws of the Commonwealth of Pennsylvania, without regard to conflict-of-law principles.
            </p>
          </div>

          {/* Section 15 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">15. Dispute Resolution</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Any dispute arising under these Terms will first be attempted to be resolved informally. If not resolved, disputes will be subject to binding arbitration in Philadelphia, PA, except where prohibited by law.
            </p>
          </div>

          {/* Section 16 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">16. Changes to Services</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              We reserve the right to update, modify, or discontinue our services, systems, or website at any time, with or without notice.
            </p>
          </div>

          {/* Section 17 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">17. Contact Us</h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              For questions about these Terms, contact us at:
            </p>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              <a href="mailto:zarak@stronolink.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">zarak@stronolink.com</a>
            </p>
          </div>

          <div className="mt-12 flex justify-center pb-12 border-t border-white/10 pt-10">
            <a 
              href="/"
              className="text-white/70 hover:text-white transition-colors duration-200 underline text-sm"
            >
              Return to Homepage
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
