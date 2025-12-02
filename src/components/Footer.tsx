import { Shield, Zap, Twitter, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-1.5 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 text-white" />
                <Zap className="w-2.5 h-2.5 text-yellow-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quotesurance
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Next-generation insurance quoting powered by real-time data and AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Interactive Demo
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Compliance</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/compliance" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Compliance & Security
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:info@quotesurance.com" className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Partner Inquiry
                </a>
              </li>
              <li>
                <a href="mailto:info@quotesurance.com" className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  General Contact
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© 2025 Quotesurance. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <a
              href="https://alphainsol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Backed by Alpha Insurance Solutions
            </a>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Development Partner:</span>
            <a
              href="https://mosora.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              <span>Mosora Consulting</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
