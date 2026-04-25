'use client';
import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-snow/90 backdrop-blur-md border-b border-glacier/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <AppLogo
          text="Balance"
          iconName="SparklesIcon"
          size={28}
          className="text-charcoal"
        />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-mist">
          <a href="#faq" className="hover:text-charcoal transition-colors duration-200">The Science</a>
          <a href="#program" className="hover:text-charcoal transition-colors duration-200">The Program</a>
          <a href="#lead-form" className="hover:text-charcoal transition-colors duration-200">Get Started</a>
        </nav>
        <a
          href="#lead-form"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ backgroundColor: 'var(--color-blush)' }}
        >
          Build My Cycle Plan
        </a>
      </div>
    </header>
  );
};

export default Header;