import { Building2, TrendingUp, Zap, Shield, Users, Link as LinkIcon, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Enterprise() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Enterprise &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Partner Programs
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Scale your insurance operations with enterprise-grade quoting technology designed for agencies, carriers, fleets, and large organizations.
          </p>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Agencies & Brokers */}
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-400/20">
              <Users className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">For Agencies & Brokers</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Accelerate your quoting process and serve more clients with automated data retrieval and instant quote generation. Reduce time-to-quote from hours to seconds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Generate multiple quotes simultaneously for comparison shopping</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Seamless integration with agency management systems</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>White-label options for branded client experiences</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-user access with role-based permissions</span>
                </li>
              </ul>
            </div>

            {/* Insurance Carriers */}
            <div className="p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-400/20">
              <Shield className="w-12 h-12 text-purple-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">For Insurance Carriers</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Scale your underwriting operations with AI-powered risk assessment and automated verification. Reduce manual review cycles while maintaining accuracy and compliance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Automated risk scoring and rating algorithms</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Real-time data validation and fraud detection</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Customizable underwriting rules and guidelines</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>API access for carrier system integration</span>
                </li>
              </ul>
            </div>

            {/* Fleet Management */}
            <div className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-2xl border border-pink-400/20">
              <TrendingUp className="w-12 h-12 text-pink-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">For Fleet Operators</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Manage insurance for entire fleets with bulk quoting capabilities, real-time policy updates, and centralized fleet management tools.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Bulk quote generation for multiple vehicles</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Real-time fleet risk monitoring and alerts</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Automated certificate of insurance generation</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dashboard analytics and reporting</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Clients */}
            <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-2xl border border-cyan-400/20">
              <Building2 className="w-12 h-12 text-cyan-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">For Enterprise Clients</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Deploy insurance quoting capabilities at scale with dedicated infrastructure, custom integrations, and premium support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated cloud infrastructure and SLA guarantees</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Custom API development and integration support</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Priority support with dedicated account management</span>
                </li>
                <li className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics and business intelligence tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Onboarding */}
      <section className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Seamless Integration</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Get up and running quickly with flexible integration options and dedicated onboarding support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <LinkIcon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">RESTful API</h3>
              <p className="text-slate-300 leading-relaxed">
                Modern REST API with comprehensive documentation, SDKs, and code samples for rapid integration into your existing systems.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Webhooks & Events</h3>
              <p className="text-slate-300 leading-relaxed">
                Real-time notifications and event streaming keep your systems in sync with quote status updates and policy changes.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <Users className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Guided Onboarding</h3>
              <p className="text-slate-300 leading-relaxed">
                Dedicated implementation team guides you through setup, testing, and launch with hands-on support every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Reliability */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Enterprise-Grade Reliability</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Built on robust infrastructure with high availability and performance guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-slate-300">Uptime SLA</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-2">&lt;2s</div>
              <div className="text-sm text-slate-300">Average Response Time</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm text-slate-300">System Monitoring</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-cyan-400 mb-2">SOC 2</div>
              <div className="text-sm text-slate-300">Compliance Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Partner with Quotesurance?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Reduce Operational Costs
              </h3>
              <p className="text-slate-300">
                Automate manual processes and eliminate redundant data entry, reducing labor costs by up to 70%.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Improve Customer Experience
              </h3>
              <p className="text-slate-300">
                Deliver quotes in seconds instead of hours, improving customer satisfaction and conversion rates.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Scale Without Limits
              </h3>
              <p className="text-slate-300">
                Handle increasing quote volumes without adding staff or infrastructure with our cloud-native platform.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Maintain Compliance
              </h3>
              <p className="text-slate-300">
                Built-in compliance controls and audit trails ensure regulatory requirements are always met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Connect with our partnership team to discuss how Quotesurance can accelerate your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@quotesurance.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Partnership Team</span>
            </a>
            <Link
              to="/demo"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span>Try Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
