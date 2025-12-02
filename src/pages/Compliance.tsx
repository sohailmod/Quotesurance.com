import { Shield, Lock, FileText, Eye, AlertCircle, CheckCircle, Database, UserCheck } from 'lucide-react';

export default function Compliance() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Compliance &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Security
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Built on a foundation of regulatory compliance, data protection, and enterprise-grade security controls.
          </p>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Regulatory Compliance</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Quotesurance adheres to all applicable federal and state regulations governing insurance technology and data privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">DPPA Compliance</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                We operate in full compliance with the Driver's Privacy Protection Act (DPPA), ensuring that all data access and usage aligns with permissible purposes as defined by federal law.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Permissible purpose verification for all data requests</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Documented authorization and consent workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular compliance audits and reviews</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">GLBA Compliance</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our platform meets all requirements under the Gramm-Leach-Bliley Act (GLBA), protecting the privacy and security of consumer financial information.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure handling of nonpublic personal information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Privacy notices and opt-out procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive information security program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Protection */}
      <section className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Privacy Protection</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Your data is protected at every step with industry-leading privacy controls and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <Eye className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Minimization</h3>
              <p className="text-slate-300">
                We collect only the information necessary to generate accurate quotes and comply with regulatory requirements.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <UserCheck className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Consent Management</h3>
              <p className="text-slate-300">
                Clear, granular consent controls ensure you understand and approve how your information is used.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <Database className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Retention</h3>
              <p className="text-slate-300">
                Strict retention policies ensure data is stored only as long as necessary and securely deleted thereafter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Enterprise-Grade Security</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Multi-layered security architecture protects your data from unauthorized access and breaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-400/20">
              <Lock className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">End-to-End Encryption</h3>
              <p className="text-slate-300 text-sm">
                All data in transit and at rest is encrypted using industry-standard AES-256 encryption.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-400/20">
              <UserCheck className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Role-Based Access Control</h3>
              <p className="text-slate-300 text-sm">
                RBAC ensures users access only the data and functions appropriate to their role.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-xl border border-pink-400/20">
              <FileText className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Audit Logs</h3>
              <p className="text-slate-300 text-sm">
                Every data access and system action is logged for compliance and security monitoring.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl border border-cyan-400/20">
              <AlertCircle className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Threat Detection</h3>
              <p className="text-slate-300 text-sm">
                Real-time monitoring and automated threat detection protect against unauthorized activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State & Regulatory Engagement */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">State & Regulatory Engagement</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We work closely with state departments of insurance and regulatory bodies to ensure compliance across all jurisdictions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Permissible Purpose Documentation</h3>
              <p className="text-slate-300 leading-relaxed">
                Every data request is backed by documented permissible purposes that comply with DPPA and state privacy laws. Our system enforces purpose validation before any data retrieval occurs.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Privacy Controls & Consumer Rights</h3>
              <p className="text-slate-300 leading-relaxed">
                We provide consumers with full transparency into how their data is used, along with mechanisms to access, correct, or request deletion of their information in accordance with applicable privacy laws.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Audit Capabilities</h3>
              <p className="text-slate-300 leading-relaxed">
                Comprehensive audit trails and reporting capabilities enable regulatory review and demonstrate ongoing compliance. We provide full cooperation with state insurance departments and regulatory inquiries.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Regulated Use Cases</h3>
              <p className="text-slate-300 leading-relaxed">
                Our platform is designed exclusively for legitimate insurance underwriting, rating, and quoting activities. All use cases are reviewed for regulatory compliance before deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Posture */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 text-center">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-white">Our Compliance Commitment</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Quotesurance is committed to maintaining the highest standards of regulatory compliance, data security, and consumer privacy protection. We continuously monitor regulatory developments and adapt our platform to meet evolving requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-300">
                Regular Security Audits
              </span>
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg text-purple-300">
                Compliance Training
              </span>
              <span className="px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-lg text-pink-300">
                Third-Party Certifications
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-300">
                Continuous Monitoring
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
