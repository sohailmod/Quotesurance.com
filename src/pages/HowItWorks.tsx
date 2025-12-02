import { ArrowRight, Database, CheckCircle, FileCheck, Sparkles, Zap, Brain, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SectionDivider from '../components/SectionDivider';

export default function HowItWorks() {
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-slow animate-delay-1000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-scale-in">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm font-bold text-blue-300 tracking-wide">
              THE PROCESS
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter animate-slide-up">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-3">
              How Quotesurance
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Works
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-500">
            A simple, streamlined process that delivers instant, accurate insurance quotes in seconds.
          </p>
        </div>
      </section>

      <SectionDivider variant="curve" />

      {/* Process Steps */}
      <section className="px-6 py-24 bg-gradient-to-b from-slate-900/50 to-transparent relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="reveal group relative">
              <div className="flex flex-col md:flex-row gap-8 items-start glass p-10 rounded-3xl border-2 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex-shrink-0 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-4xl font-black text-white">1</span>
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">Fast Data Retrieval</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Provide basic information and our platform instantly retrieves relevant data from secure, authorized sources. Our system validates and cross-references information in real-time to ensure accuracy.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/30 rounded-full text-blue-300 font-semibold text-sm">
                      Real-time data access
                    </span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/30 rounded-full text-blue-300 font-semibold text-sm">
                      Secure connections
                    </span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/30 rounded-full text-blue-300 font-semibold text-sm">
                      Instant validation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Connector */}
            <div className="flex justify-center reveal">
              <div className="w-1 h-16 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
            </div>

            {/* Step 2 */}
            <div className="reveal group relative animate-delay-500">
              <div className="flex flex-col md:flex-row gap-8 items-start glass p-10 rounded-3xl border-2 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex-shrink-0 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-4xl font-black text-white">2</span>
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">Automated Verification</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Our AI-powered verification engine processes the retrieved data, validates eligibility, and assesses risk factors automatically. No manual review delays or paperwork required.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 rounded-full text-purple-300 font-semibold text-sm">
                      AI-driven analysis
                    </span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 rounded-full text-purple-300 font-semibold text-sm">
                      Risk assessment
                    </span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 rounded-full text-purple-300 font-semibold text-sm">
                      Compliance checks
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Connector */}
            <div className="flex justify-center reveal">
              <div className="w-1 h-16 bg-gradient-to-b from-purple-400 via-pink-400 to-rose-400 rounded-full"></div>
            </div>

            {/* Step 3 */}
            <div className="reveal group relative animate-delay-1000">
              <div className="flex flex-col md:flex-row gap-8 items-start glass p-10 rounded-3xl border-2 hover:border-pink-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex-shrink-0 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl flex items-center justify-center shadow-lg shadow-pink-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-4xl font-black text-white">3</span>
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-pink-400" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">Coverage Selection</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Review multiple coverage options tailored to your profile. Compare plans, limits, and pricing side-by-side with transparent breakdowns. Choose the coverage that fits your needs and budget.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border-2 border-pink-400/30 rounded-full text-pink-300 font-semibold text-sm">
                      Personalized options
                    </span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border-2 border-pink-400/30 rounded-full text-pink-300 font-semibold text-sm">
                      Transparent pricing
                    </span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border-2 border-pink-400/30 rounded-full text-pink-300 font-semibold text-sm">
                      Side-by-side comparison
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Connector */}
            <div className="flex justify-center reveal">
              <div className="w-1 h-16 bg-gradient-to-b from-pink-400 via-cyan-400 to-cyan-500 rounded-full"></div>
            </div>

            {/* Step 4 */}
            <div className="reveal group relative animate-delay-1500">
              <div className="flex flex-col md:flex-row gap-8 items-start glass p-10 rounded-3xl border-2 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex-shrink-0 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-4xl font-black text-white">4</span>
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">Instant Quote Output</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Receive your final quote instantly with detailed policy information, premium breakdown, and next steps. Download, share, or proceed to bind coverage immediately.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/30 rounded-full text-cyan-300 font-semibold text-sm">
                      Detailed breakdown
                    </span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/30 rounded-full text-cyan-300 font-semibold text-sm">
                      Instant delivery
                    </span>
                    <span className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/30 rounded-full text-cyan-300 font-semibold text-sm">
                      Ready to bind
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal" flip />

      {/* Benefits Summary */}
      <section className="px-6 py-24 bg-gradient-to-b from-slate-900/50 to-transparent relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-sm font-bold text-green-300 tracking-wide">
                KEY ADVANTAGES
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              The Quotesurance Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal group p-8 glass rounded-3xl border-2 hover:border-green-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Seconds, Not Hours</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Traditional quoting takes hours or days. We deliver accurate quotes in seconds.
              </p>
            </div>

            <div className="reveal group p-8 glass rounded-3xl border-2 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 animate-delay-500">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">No Manual Entry</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Eliminate repetitive data entry. Our system retrieves and validates information automatically.
              </p>
            </div>

            <div className="reveal group p-8 glass rounded-3xl border-2 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 animate-delay-1000">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Always Compliant</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Built-in compliance controls ensure every quote meets regulatory requirements.
              </p>
            </div>

            <div className="reveal group p-8 glass rounded-3xl border-2 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 animate-delay-1500">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Transparent Process</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                See exactly how your quote is calculated with clear breakdowns and explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* CTA */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="reveal mb-8">
            <Rocket className="w-16 h-16 mx-auto text-blue-400 mb-6 animate-float" />
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-2">
                See It in
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Action
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the speed and simplicity of Quotesurance with our interactive demo.
            </p>
          </div>

          <Link
            to="/demo"
            className="group relative inline-flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 overflow-hidden animate-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="relative z-10">Try Interactive Demo</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
