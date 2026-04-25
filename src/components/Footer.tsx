import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-glacier py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <AppLogo text="Balance" iconName="SparklesIcon" size={24} className="text-charcoal" />
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-mist">
          <a href="#faq" className="hover:text-charcoal transition-colors">The Science</a>
          <a href="#program" className="hover:text-charcoal transition-colors">The Program</a>
          <a href="#lead-form" className="hover:text-charcoal transition-colors">Get Started</a>
          <a href="#" className="hover:text-charcoal transition-colors">Privacy</a>
          <a href="#" className="hover:text-charcoal transition-colors">Terms</a>
        </div>
        <p className="text-xs text-mist/60">© 2026 Balance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;