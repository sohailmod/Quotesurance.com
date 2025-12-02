import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: December 2, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="leading-relaxed">
              Quotesurance is committed to protecting your privacy and securing your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our insurance quoting platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect information necessary to provide accurate insurance quotes and comply with regulatory requirements, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Vehicle and driver information for insurance quoting</li>
              <li>Usage data and analytics to improve our services</li>
              <li>Information obtained from authorized third-party data sources</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Generating accurate insurance quotes and policy recommendations</li>
              <li>Verifying information and assessing insurance eligibility</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Improving our platform and services</li>
              <li>Communicating with you about quotes, policies, and updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures including end-to-end encryption, role-based access controls, comprehensive audit logging, and continuous security monitoring to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Regulatory Compliance</h2>
            <p className="leading-relaxed">
              Our data practices comply with applicable federal and state regulations including the Driver's Privacy Protection Act (DPPA), Gramm-Leach-Bliley Act (GLBA), and state insurance privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Opt-out of certain data uses and marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at{' '}
              <a href="mailto:info@quotesurance.com" className="text-blue-400 hover:text-blue-300">
                info@quotesurance.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
