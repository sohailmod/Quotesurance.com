import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
          <p className="text-slate-400">Last updated: December 2, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the Quotesurance platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Service Description</h2>
            <p className="leading-relaxed">
              Quotesurance provides an automated insurance quoting platform that retrieves data from authorized sources, performs risk assessment, and generates insurance quotes. Quotes are estimates and do not constitute binding insurance contracts until formally underwritten and issued by a licensed insurance carrier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
            <p className="leading-relaxed mb-4">
              Users of the Quotesurance platform agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Use the platform only for lawful insurance-related purposes</li>
              <li>Comply with all applicable federal and state insurance regulations</li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>Not attempt to circumvent security measures or access unauthorized data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Permissible Use</h2>
            <p className="leading-relaxed">
              Access to data through the Quotesurance platform is authorized only for permissible purposes as defined by the Driver's Privacy Protection Act (DPPA) and other applicable regulations. Users must have a legitimate business need and proper authorization to access and use data obtained through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, software, algorithms, and technology used in the Quotesurance platform are the intellectual property of Quotesurance and its licensors. Users may not reverse engineer, decompile, or attempt to extract proprietary algorithms or methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed">
              Quotesurance provides insurance quotes as estimates based on available data. We do not guarantee quote accuracy or insurance policy issuance. Quotesurance is not liable for decisions made based on quotes or for errors in third-party data sources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Compliance and Auditing</h2>
            <p className="leading-relaxed">
              Users agree to comply with all regulatory requirements and permit Quotesurance to conduct audits to ensure compliance with applicable laws and these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Modifications to Terms</h2>
            <p className="leading-relaxed">
              Quotesurance reserves the right to modify these Terms of Service at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="leading-relaxed">
              Quotesurance may suspend or terminate access to the platform for violations of these Terms of Service or applicable regulations without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="leading-relaxed">
              For questions about these Terms of Service, please contact us at{' '}
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
