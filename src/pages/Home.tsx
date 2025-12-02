import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Zap, Brain, Shield, TrendingUp, CheckCircle, ArrowRight, Construction, Sparkles, Lock, Rocket } from 'lucide-react';
import { emailLeadsService } from '../lib/supabase';
import SectionDivider from '../components/SectionDivider';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await emailLeadsService.createLead({
        email,
        source: 'Quotesurance Landing Page',
        campaign: 'Coming Soon Waitlist'
      });

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setEmail('');
      } else {
        setSubmitError(result.error || 'Failed to save email. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-slow animate-delay-1000"></div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-blue-400/20 rounded-3xl rotate-45 animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-purple-400/20 rounded-2xl rotate-12 animate-float-delayed"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Launch Badge */}
          <div className="mb-8 animate-scale-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-400/40 rounded-full backdrop-blur-xl relative overflow-hidden group hover:border-amber-400/60 transition-all duration-300 animate-gradient">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <Rocket className="w-5 h-5 text-amber-400 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-amber-300 relative z-10 tracking-wide">Next-Gen Platform Launching Soon</span>
              <Sparkles className="w-5 h-5 text-amber-400 relative z-10 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1.1] tracking-tighter animate-slide-up">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-3 drop-shadow-2xl">
              Instant Auto
            </span>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-3 drop-shadow-2xl">
              Insurance Quotes
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient relative">
              Powered by Real-Time AI
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl -z-10"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-500">
            Get accurate, automated insurance quotes in seconds. Our AI-driven platform retrieves real-time data to deliver instant coverage options tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12 animate-slide-up animate-delay-1000">
            <Link
              to="/demo"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 flex items-center space-x-3 overflow-hidden animate-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <span className="relative z-10">Try Interactive Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
            </Link>
            <Link
              to="/how-it-works"
              className="group px-10 py-5 glass glass-hover border-2 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3"
            >
              <span>Learn How It Works</span>
              <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-base text-slate-300 animate-slide-up animate-delay-1500">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-5 py-3 rounded-full border border-green-500/20">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="font-semibold">Real-time data retrieval</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-5 py-3 rounded-full border border-blue-500/20">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Automated verification</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-5 py-3 rounded-full border border-purple-500/20">
              <CheckCircle className="w-6 h-6 text-purple-400" />
              <span className="font-semibold">Instant quote generation</span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" />

      {/* Key Benefits */}
      <section className="px-6 py-24 bg-gradient-to-b from-slate-900/50 to-transparent relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm font-bold text-blue-300 tracking-wide">
                POWERFUL FEATURES
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Why Quotesurance?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Experience the future of insurance quoting with speed, accuracy, and intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal group relative p-10 glass rounded-3xl border-2 hover:border-blue-400/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/50">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Lightning Fast</h3>
                <p className="text-slate-300 leading-relaxed">
                  Generate comprehensive insurance quotes in seconds, not hours. Our real-time data engine eliminates traditional delays and paperwork.
                </p>
              </div>
            </div>

            <div className="reveal group relative p-10 glass rounded-3xl border-2 hover:border-purple-400/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-delay-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/50">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI-Powered Intelligence</h3>
                <p className="text-slate-300 leading-relaxed">
                  Advanced AI algorithms analyze risk profiles and match you with optimal coverage options automatically, ensuring accuracy and relevance.
                </p>
              </div>
            </div>

            <div className="reveal group relative p-10 glass rounded-3xl border-2 hover:border-pink-400/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 animate-delay-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-pink-500/50">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Fully Compliant</h3>
                <p className="text-slate-300 leading-relaxed">
                  Built with DPPA, GLBA, and regulatory compliance at the core. Your data is protected with enterprise-grade encryption and audit controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal" flip />

      {/* Use Cases */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Built for Everyone
            </h2>
            <p className="text-xl text-slate-300">Powerful solutions for agencies, brokers, and carriers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal group relative p-10 glass rounded-3xl border-2 hover:border-blue-400/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">For Agencies & Brokers</h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  Accelerate your quote process and serve more clients with automated data retrieval and instant quote generation. Integrate seamlessly with your existing workflow.
                </p>
                <Link to="/enterprise" className="inline-flex items-center space-x-3 text-blue-400 hover:text-blue-300 font-bold text-lg group/link">
                  <span>Learn more about Enterprise</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="reveal group relative p-10 glass rounded-3xl border-2 hover:border-purple-400/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-delay-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">For Insurance Carriers</h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  Scale your underwriting with AI-powered risk assessment and automated verification. Reduce manual review time while maintaining accuracy and compliance.
                </p>
                <Link to="/enterprise" className="inline-flex items-center space-x-3 text-purple-400 hover:text-purple-300 font-bold text-lg group/link">
                  <span>Explore Partner Programs</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* Backing & Partnership */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full text-sm font-bold text-amber-300 tracking-wide">
                TRUSTED PARTNERS
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Backed by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300">
              Built with the expertise and support of established insurance professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal group relative p-10 glass rounded-3xl border-2 hover:border-blue-400/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:w-56 group-hover:h-56 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Alpha Insurance Solutions</h3>
                    <p className="text-sm font-semibold text-blue-400 tracking-wide">PRIMARY INSURANCE PARTNER</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  Quotesurance is proud to be backed by Alpha Insurance Solutions, a reputable insurance agency with deep industry expertise and a commitment to innovation in insurance technology.
                </p>
                <a
                  href="https://alphainsol.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 text-blue-400 hover:text-blue-300 font-bold text-lg group/link"
                >
                  <span>Visit Alpha Insurance Solutions</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            <div className="reveal group relative p-10 glass rounded-3xl border-2 hover:border-purple-400/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-delay-500">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:w-56 group-hover:h-56 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Mosora Consulting</h3>
                    <p className="text-sm font-semibold text-purple-400 tracking-wide">DEVELOPMENT PARTNER</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  Our technology platform is developed in partnership with Mosora Consulting, bringing cutting-edge AI and software engineering expertise to create a world-class insurance technology solution.
                </p>
                <a
                  href="https://mosora.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 text-purple-400 hover:text-purple-300 font-bold text-lg group/link"
                >
                  <span>Learn about Mosora</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" flip />

      {/* CTA Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        {/* Dramatic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-gradient"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="reveal mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-400/40 rounded-full backdrop-blur-xl mb-6">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-bold text-blue-300 tracking-wide">JOIN THE WAITLIST</span>
              <Lock className="w-5 h-5 text-blue-400" />
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter reveal">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-2">
              Ready to Experience
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              the Future?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto reveal">
            Be among the first to experience our revolutionary insurance quoting platform when we launch.
          </p>

          <div className="max-w-2xl mx-auto reveal">
            <form onSubmit={handleSubmit} className="glass p-3 rounded-2xl border-2 border-white/20 hover:border-white/30 transition-all duration-300 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-14 pr-5 py-5 bg-slate-800/50 border-2 border-slate-700/50 rounded-xl text-white text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 rounded-xl font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap overflow-hidden animate-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? 'Joining...' : 'Get Early Access'}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </div>
            </form>

            {isSubmitted && (
              <div className="mt-6 p-6 glass rounded-2xl border-2 border-green-400/50 bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-scale-in shadow-xl shadow-green-500/20">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <p className="text-green-300 font-bold text-lg">
                    Success! We'll notify you when we launch.
                  </p>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mt-6 p-6 glass rounded-2xl border-2 border-red-400/50 bg-gradient-to-r from-red-500/20 to-orange-500/20 animate-scale-in shadow-xl shadow-red-500/20">
                <p className="text-red-300 font-semibold text-lg">{submitError}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
