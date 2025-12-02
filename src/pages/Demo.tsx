import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Loader, Sparkles, FileText, Shield, Mail, Lock } from 'lucide-react';
import { demoAccessService } from '../lib/supabase';

type DemoStep = 'access' | 'verify' | 'input' | 'verifying' | 'coverage' | 'quote';

interface CoverageOption {
  id: string;
  name: string;
  description: string;
  price: string;
}

export default function Demo() {
  const [step, setStep] = useState<DemoStep>('access');
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [driverName, setDriverName] = useState('');
  const [selectedCoverage, setSelectedCoverage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);

  useEffect(() => {
    // Check if user already has verified access in session storage
    const storedEmail = sessionStorage.getItem('demo_verified_email');
    if (storedEmail) {
      checkExistingAccess(storedEmail);
    }
  }, []);

  const checkExistingAccess = async (email: string) => {
    const result = await demoAccessService.hasValidAccess(email);
    if (result.success && result.hasAccess) {
      setVerifiedEmail(email);
      setStep('input');
    }
  };

  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setError(null);

    // Check if user already has access
    const accessCheck = await demoAccessService.hasValidAccess(email);
    if (accessCheck.success && accessCheck.hasAccess) {
      sessionStorage.setItem('demo_verified_email', email);
      setVerifiedEmail(email);
      setStep('input');
      setIsSubmitting(false);
      return;
    }

    // Request new access code
    const result = await demoAccessService.requestDemoAccess(email);

    if (result.success) {
      setStep('verify');
    } else {
      setError(result.error || 'Failed to send access code. Please try again.');
    }

    setIsSubmitting(false);
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessCode.trim()) return;

    setIsSubmitting(true);
    setError(null);

    const result = await demoAccessService.verifyAccessCode(email, accessCode);

    if (result.success) {
      sessionStorage.setItem('demo_verified_email', email);
      setVerifiedEmail(email);
      setStep('input');
    } else {
      setError(result.error || 'Invalid or expired code. Please try again.');
    }

    setIsSubmitting(false);
  };

  const coverageOptions: CoverageOption[] = [
    {
      id: 'basic',
      name: 'Essential Coverage',
      description: 'State minimum liability coverage with basic protection',
      price: '$89'
    },
    {
      id: 'standard',
      name: 'Standard Coverage',
      description: 'Comprehensive and collision with $500 deductible',
      price: '$142'
    },
    {
      id: 'premium',
      name: 'Premium Coverage',
      description: 'Full coverage with $250 deductible and rental car reimbursement',
      price: '$198'
    }
  ];

  const handleStartDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleInfo.trim() || !driverName.trim()) return;

    setStep('verifying');
    setTimeout(() => {
      setStep('coverage');
    }, 2500);
  };

  const handleSelectCoverage = (coverageId: string) => {
    setSelectedCoverage(coverageId);
  };

  const handleGenerateQuote = () => {
    setStep('quote');
  };

  const handleRestart = () => {
    setStep('input');
    setVehicleInfo('');
    setDriverName('');
    setSelectedCoverage(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Interactive
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Demo
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
            Experience the speed and simplicity of Quotesurance. See how we generate instant insurance quotes.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300">
            <Lock className="w-4 h-4 mr-2" />
            Secure access required to view demo
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Access Request Step */}
          {step === 'access' && (
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Request Demo Access</h2>
                <p className="text-slate-300">Enter your email to receive a verification code</p>
              </div>

              <form onSubmit={handleRequestAccess} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending Code...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Verification Code</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-400/20 rounded-xl">
                <p className="text-sm text-slate-300 text-center">
                  <strong className="text-blue-300">Secure Access:</strong> A 6-digit code will be sent to your email. The code expires in 15 minutes.
                </p>
              </div>
            </div>
          )}

          {/* Verification Step */}
          {step === 'verify' && (
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Verify Your Email</h2>
                <p className="text-slate-300 mb-2">
                  We've sent a 6-digit code to <strong className="text-white">{email}</strong>
                </p>
                <button
                  onClick={() => setStep('access')}
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  Use a different email
                </button>
              </div>

              <form onSubmit={handleVerifyCode} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="000000"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-center text-2xl tracking-widest placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                    maxLength={6}
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || accessCode.length !== 6}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <span>Verify Code</span>
                      <CheckCircle className="w-5 h-5" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleRequestAccess(new Event('submit') as any)}
                  disabled={isSubmitting}
                  className="w-full text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Didn't receive the code? Resend
                </button>
              </form>

              <div className="mt-8 p-4 bg-amber-500/10 border border-amber-400/20 rounded-xl">
                <p className="text-sm text-slate-300 text-center">
                  <strong className="text-amber-300">Check your spam folder</strong> if you don't see the email. The code expires in 15 minutes.
                </p>
              </div>
            </div>
          )}

          {/* Original Demo Flow - Only shown after verification */}
          {['input', 'verifying', 'coverage', 'quote'].includes(step) && (
            <>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-12">
                <div className={`flex items-center ${step === 'input' ? 'text-blue-400' : 'text-green-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'input' ? 'bg-blue-500' : 'bg-green-500'} font-semibold`}>
                    {step === 'input' ? '1' : <CheckCircle className="w-6 h-6" />}
                  </div>
                  <span className="ml-2 font-semibold hidden sm:inline">Input</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-slate-700">
                  <div className={`h-full transition-all duration-500 ${step !== 'input' ? 'bg-green-500 w-full' : 'bg-blue-500 w-0'}`}></div>
                </div>
                <div className={`flex items-center ${step === 'verifying' ? 'text-blue-400' : step === 'input' ? 'text-slate-500' : 'text-green-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'verifying' ? 'bg-blue-500' : step === 'input' ? 'bg-slate-700' : 'bg-green-500'} font-semibold`}>
                    {step === 'input' ? '2' : step === 'verifying' ? <Loader className="w-6 h-6 animate-spin" /> : <CheckCircle className="w-6 h-6" />}
                  </div>
                  <span className="ml-2 font-semibold hidden sm:inline">Verify</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-slate-700">
                  <div className={`h-full transition-all duration-500 ${step === 'coverage' || step === 'quote' ? 'bg-green-500 w-full' : step === 'verifying' ? 'bg-blue-500 w-1/2' : 'bg-blue-500 w-0'}`}></div>
                </div>
                <div className={`flex items-center ${step === 'coverage' ? 'text-blue-400' : ['input', 'verifying'].includes(step) ? 'text-slate-500' : 'text-green-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'coverage' ? 'bg-blue-500' : ['input', 'verifying'].includes(step) ? 'bg-slate-700' : 'bg-green-500'} font-semibold`}>
                    {['input', 'verifying'].includes(step) ? '3' : step === 'coverage' ? '3' : <CheckCircle className="w-6 h-6" />}
                  </div>
                  <span className="ml-2 font-semibold hidden sm:inline">Coverage</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-slate-700">
                  <div className={`h-full transition-all duration-500 ${step === 'quote' ? 'bg-green-500 w-full' : 'bg-blue-500 w-0'}`}></div>
                </div>
                <div className={`flex items-center ${step === 'quote' ? 'text-green-400' : 'text-slate-500'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'quote' ? 'bg-green-500' : 'bg-slate-700'} font-semibold`}>
                    {step === 'quote' ? <CheckCircle className="w-6 h-6" /> : '4'}
                  </div>
                  <span className="ml-2 font-semibold hidden sm:inline">Quote</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 md:p-12 backdrop-blur-sm">
                {/* Input Step */}
                {step === 'input' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-white mb-3">Get Started</h2>
                      <p className="text-slate-300">Provide basic information to begin your quote</p>
                    </div>

                    <form onSubmit={handleStartDemo} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">
                          Vehicle Information
                        </label>
                        <input
                          type="text"
                          value={vehicleInfo}
                          onChange={(e) => setVehicleInfo(e.target.value)}
                          placeholder="e.g., 2020 Honda Civic"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">
                          Driver Name
                        </label>
                        <input
                          type="text"
                          value={driverName}
                          onChange={(e) => setDriverName(e.target.value)}
                          placeholder="e.g., John Smith"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <span>Start Quote Process</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>

                    <div className="mt-8 p-4 bg-blue-500/10 border border-blue-400/20 rounded-xl">
                      <p className="text-sm text-slate-300 text-center">
                        <strong className="text-blue-300">Demo Mode:</strong> This is a simulated experience. No real data is processed.
                      </p>
                    </div>
                  </div>
                )}

                {/* Verifying Step */}
                {step === 'verifying' && (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-6 animate-pulse">
                      <Loader className="w-10 h-10 text-blue-400 animate-spin" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Verifying Information</h2>
                    <p className="text-lg text-slate-300 mb-8">
                      Our AI is retrieving and validating data from secure sources...
                    </p>
                    <div className="space-y-3 max-w-md mx-auto">
                      <div className="flex items-center space-x-3 text-slate-300">
                        <Loader className="w-5 h-5 text-blue-400 animate-spin" />
                        <span>Retrieving vehicle data</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-300">
                        <Loader className="w-5 h-5 text-blue-400 animate-spin" />
                        <span>Validating driver information</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-300">
                        <Loader className="w-5 h-5 text-blue-400 animate-spin" />
                        <span>Assessing risk profile</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Coverage Selection Step */}
                {step === 'coverage' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">Select Your Coverage</h2>
                      <p className="text-slate-300">Choose the coverage level that fits your needs</p>
                    </div>

                    <div className="space-y-4">
                      {coverageOptions.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => handleSelectCoverage(option.id)}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            selectedCoverage === option.id
                              ? 'border-blue-400 bg-blue-500/20'
                              : 'border-white/10 bg-white/5 hover:border-white/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-white">{option.name}</h3>
                            <div className="text-2xl font-bold text-blue-400">{option.price}<span className="text-sm text-slate-400">/mo</span></div>
                          </div>
                          <p className="text-slate-300">{option.description}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleGenerateQuote}
                      disabled={!selectedCoverage}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      <span>Generate Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Quote Result Step */}
                {step === 'quote' && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4">
                        <FileText className="w-10 h-10 text-green-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">Your Instant Quote</h2>
                      <p className="text-slate-300">Quote generated in under 3 seconds</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/30 p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="text-sm text-slate-400 mb-1">Vehicle</div>
                          <div className="text-lg font-semibold text-white">{vehicleInfo}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-slate-400 mb-1">Driver</div>
                          <div className="text-lg font-semibold text-white">{driverName}</div>
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-6 mb-6">
                        <div className="text-sm text-slate-400 mb-2">Selected Coverage</div>
                        <div className="text-xl font-semibold text-white mb-4">
                          {coverageOptions.find(c => c.id === selectedCoverage)?.name}
                        </div>
                        <div className="text-sm text-slate-300">
                          {coverageOptions.find(c => c.id === selectedCoverage)?.description}
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-sm text-slate-400 mb-1">Monthly Premium</div>
                            <div className="text-4xl font-bold text-white">
                              {coverageOptions.find(c => c.id === selectedCoverage)?.price}
                              <span className="text-lg text-slate-400">/month</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-green-400">
                            <Shield className="w-5 h-5" />
                            <span className="text-sm font-semibold">Fully Compliant</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-sm text-slate-400 mb-1">Policy Start Date</div>
                        <div className="text-white font-semibold">
                          {new Date(Date.now() + 86400000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-sm text-slate-400 mb-1">Quote Valid Until</div>
                        <div className="text-white font-semibold">
                          {new Date(Date.now() + 30 * 86400000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleRestart}
                        className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                      >
                        Start New Quote
                      </button>
                      <button className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                        Bind Coverage
                      </button>
                    </div>

                    <div className="p-4 bg-blue-500/10 border border-blue-400/20 rounded-xl">
                      <p className="text-sm text-slate-300 text-center">
                        <strong className="text-blue-300">Demo Complete!</strong> In production, you would receive detailed policy documents and payment options.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      {step === 'quote' && (
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready for Real Quotes?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Experience this speed and accuracy with actual insurance quotes. Contact us to learn more.
            </p>
            <a
              href="mailto:info@quotesurance.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
