'use client';
import React, { useEffect, useState } from 'react';

const PersistentCTABar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const faq = document.getElementById('faq');
      if (faq) {
        const rect = faq.getBoundingClientRect();
        setVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bottom-bar ${visible ? 'visible' : ''}`}
      style={{
        backgroundColor: 'rgba(250,251,252,0.95)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--color-glacier)',
        boxShadow: '0 -4px 24px rgba(28,33,40,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-charcoal">
            Ready to train with your cycle, not against it?
          </p>
          <p className="text-xs text-mist font-light">
            Free cycle plan · No credit card · Built for PCOS
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#lead-form"
            className="px-6 py-3 rounded-2xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-blush"
            style={{ backgroundColor: 'var(--color-blush)' }}
          >
            Build My Cycle Plan
          </a>
          <a
            href="#lead-form"
            className="px-5 py-3 rounded-2xl text-sm font-medium border transition-colors duration-200 hover:border-sage/50 hover:text-charcoal"
            style={{ borderColor: 'var(--color-glacier)', color: 'var(--color-mist)' }}
          >
            Free PDF ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersistentCTABar;