import { Shield, Zap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 px-6 py-6 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-2 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-white" />
              <Zap className="w-3 h-3 text-yellow-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quotesurance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-slate-300 hover:text-white transition-colors font-medium">
              How It Works
            </Link>
            <Link to="/compliance" className="text-slate-300 hover:text-white transition-colors font-medium">
              Compliance
            </Link>
            <Link to="/enterprise" className="text-slate-300 hover:text-white transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/demo" className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Try Demo
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 space-y-4 border-t border-white/10 pt-4">
            <Link
              to="/how-it-works"
              className="block text-slate-300 hover:text-white transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/compliance"
              className="block text-slate-300 hover:text-white transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compliance
            </Link>
            <Link
              to="/enterprise"
              className="block text-slate-300 hover:text-white transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enterprise
            </Link>
            <Link
              to="/demo"
              className="block px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Demo
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
