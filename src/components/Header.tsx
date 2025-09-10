import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg tracking-tight">D</span>
            </div>
            <span className="ml-3 text-xl font-black text-gray-900 tracking-tight">DenSwap</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="/demand-report" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    Demand Analysis
                  </a>
                  <a href="/feasibility-study" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    Feasibility Study
                  </a>
                  <div className="relative">
                    <a href="/analytics-map" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors flex items-center justify-between">
                      <span>Map Analytics</span>
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                        Coming Soon
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Use Cases
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="/reits-investment-funds" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    REITs & Investment Funds
                  </a>
                  <a href="/coworking-operators" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    Coworking Operators
                  </a>
                  <a href="/franchisee-case-studies" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    Franchisee Case Studies
                  </a>
                </div>
              </div>
            </div>
            <a href="/blog" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Blog
            </a>
            <a href="/case-studies" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Case Studies
            </a>
            <a href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/sample-report" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Download a Sample Report
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  <a href="/demand-report" className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                    Demand Analysis
                  </a>
                  <a href="/feasibility-study" className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                    Feasibility Study
                  </a>
                  <a href="/analytics-map" className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                    <div className="flex items-center justify-between">
                      <span>Map Analytics</span>
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <a href="/blog" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">
                Blog
              </a>
              <a href="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">
                Case Studies
              </a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">
                About
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">
                Contact
              </a>
              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Use Cases</div>
                <div className="pl-4 space-y-2">
                  <a href="/reits-investment-funds" className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                    REITs & Investment Funds
                  </a>
                  <a href="/coworking-operators" className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                    Coworking Operators
                  </a>
                  <a href="/franchisee-case-studies" className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors">
                    Franchisee Case Studies
                  </a>
                </div>
              </div>
              <a href="/sample-report" className="block mx-3 mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-3 rounded-lg font-semibold text-center">
                Download a Sample Report
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};