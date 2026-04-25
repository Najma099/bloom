'use client';
import React, { useState } from 'react';

const symptoms = [
{ id: 'fatigue', label: 'Fatigue', icon: '🌙' },
{ id: 'weight', label: 'Weight gain', icon: '⚖️' },
{ id: 'acne', label: 'Acne', icon: '✦' },
{ id: 'hair', label: 'Hair loss', icon: '◌' },
{ id: 'mood', label: 'Mood swings', icon: '◎' },
{ id: 'irregular', label: 'Irregular cycles', icon: '∿' }];


const LeadFormSection: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [cycleRegularity, setCycleRegularity] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [pdfEmail, setPdfEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pdfSubmitted, setPdfSubmitted] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  };

  const handleMainSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handlePdfSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPdfSubmitted(true);
  };

  return (
    <section
      id="lead-form"
      className="py-24 px-6 relative"
      style={{ backgroundColor: 'var(--color-surface)' }}>
      
      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(148,168,154,0.05) 0%, transparent 70%)'
        }} />
      

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-sage)' }}>
            
            Your Free Cycle Plan
          </p>
          <h2 className="font-serif font-light text-charcoal text-3xl md:text-4xl max-w-xl mx-auto leading-tight mb-4">
            You've read the science. Now let's build something specific to you.
          </h2>
          <p className="text-sm text-mist font-light max-w-md mx-auto">
            Takes 90 seconds. We'll send your personalized PCOS training roadmap — no generic plans, no upsells.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* MAIN FORM */}
          <div
            className="rounded-3xl p-8 md:p-10 border"
            style={{ backgroundColor: 'var(--color-snow)', borderColor: 'var(--color-glacier)', boxShadow: '0 4px 32px rgba(28,33,40,0.06)' }}>
            
            {!submitted ?
            <form onSubmit={handleMainSubmit}>
                <h3 className="font-serif font-light text-charcoal text-xl mb-6">
                  Build My Cycle Plan
                </h3>

                {/* Cycle regularity */}
                <div className="mb-6">
                  <label className="block text-xs font-medium uppercase tracking-wider text-mist mb-3">
                    How regular is your cycle?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                  { id: 'regular', label: 'Regular (24–35 days)' },
                  { id: 'irregular', label: 'Irregular (varies widely)' },
                  { id: 'absent', label: 'Often absent' },
                  { id: 'unknown', label: 'Not sure / tracking' }].
                  map((opt) =>
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCycleRegularity(opt.id)}
                    className={`text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all duration-200 ${
                    cycleRegularity === opt.id ?
                    'border-sage bg-sage-light text-charcoal' : 'border-glacier bg-snow text-mist hover:border-sage/40'}`
                    }>
                    
                        {opt.label}
                      </button>
                  )}
                  </div>
                </div>

                {/* Top 2 symptoms */}
                <div className="mb-6">
                  <label className="block text-xs font-medium uppercase tracking-wider text-mist mb-1">
                    Your top symptoms
                  </label>
                  <p className="text-xs text-mist/60 font-light mb-3">Select up to 2</p>
                  <div className="grid grid-cols-3 gap-2">
                    {symptoms.map((symptom) =>
                  <button
                    key={symptom.id}
                    type="button"
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`symptom-chip flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border text-xs font-medium transition-all duration-200 ${
                    selectedSymptoms.includes(symptom.id) ? 'selected' : 'border-glacier bg-snow text-mist hover:border-blush/40'}`
                    }>
                    
                        <span className="text-lg leading-none">{symptom.icon}</span>
                        <span>{symptom.label}</span>
                      </button>
                  )}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-xs font-medium uppercase tracking-wider text-mist mb-2">
                    Email address
                  </label>
                  <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="form-input w-full px-4 py-3.5 rounded-xl border border-glacier bg-snow text-sm text-charcoal placeholder:text-mist/40 transition-all" />
                
                </div>

                <button
                type="submit"
                className="w-full py-4 rounded-2xl text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: 'var(--color-blush)', boxShadow: '0 4px 24px rgba(212,160,160,0.3)' }}>
                
                  Build My Cycle Plan →
                </button>

                <p className="text-xs text-mist/50 text-center mt-4 font-light">
                  Free. No credit card. Unsubscribe anytime.
                </p>
              </form> :

            <div className="text-center py-10">
                <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: 'var(--color-sage-light)' }}>
                
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l6 6L22 8" stroke="#94A89A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif font-light text-charcoal text-2xl mb-3">You're in.</h3>
                <p className="text-sm text-mist font-light leading-relaxed">
                  Your personalized cycle plan is heading to your inbox now. Welcome to Balance.
                </p>
              </div>
            }
          </div>

          {/* RIGHT SIDE — PDF secondary path + reassurance */}
          <div className="flex flex-col gap-6">
            {/* Reassurance block */}
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: 'var(--color-snow)', borderColor: 'var(--color-glacier)' }}>
              
              <p
                className="text-xs font-medium uppercase tracking-wider mb-4"
                style={{ color: 'var(--color-sage)' }}>
                
                What you'll receive
              </p>
              <div className="space-y-4">
                {[
                { title: 'Phase-by-phase training guide', desc: 'Follicular, ovulatory, and luteal protocols — including how to adapt when your cycle is irregular.' },
                { title: 'Androgen-safe exercise library', desc: '40+ movements rated for cortisol impact and insulin sensitivity, with PCOS-specific notes.' },
                { title: 'Symptom tracking template', desc: 'Connect your training inputs to your hormonal outputs — built for PCOS patterns, not averages.' }].
                map((item) =>
                <div key={item.title} className="flex gap-3">
                    <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--color-sage-light)' }}>
                    
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#94A89A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">{item.title}</p>
                      <p className="text-xs text-mist font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* PDF Download secondary path */}
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: 'var(--color-blush-light)', borderColor: 'rgba(212,160,160,0.3)' }}>
              
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(212,160,160,0.2)' }}>
                  
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2v10M6 8l4 4 4-4M4 14v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="#D4A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Not ready to commit?</p>
                  <p className="text-xs text-mist font-light mt-0.5">
                    Download the free <strong className="font-medium">PCOS Exercise Timing Sheet</strong> — a one-page reference guide for training around your cycle.
                  </p>
                </div>
              </div>

              {!pdfSubmitted ?
              <form onSubmit={handlePdfSubmit} className="flex gap-2">
                  <input
                  type="email"
                  required
                  value={pdfEmail}
                  onChange={(e) => setPdfEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="form-input flex-1 px-3 py-2.5 rounded-xl border text-xs text-charcoal placeholder:text-mist/40 transition-all"
                  style={{ borderColor: 'rgba(212,160,160,0.3)', backgroundColor: 'rgba(255,255,255,0.7)' }} />
                
                  <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-white transition-all hover:scale-105 active:scale-95 flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-blush)' }}>
                  
                    Send PDF
                  </button>
                </form> :

              <p className="text-xs font-medium text-center py-2" style={{ color: 'var(--color-sage)' }}>
                  ✓ Check your inbox — it's on its way.
                </p>
              }
            </div>

            {/* Testimonial */}
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: 'var(--color-snow)', borderColor: 'var(--color-glacier)' }}>
              
              <p className="text-sm font-serif font-light text-charcoal leading-relaxed mb-4 italic">
                "I've seen three endocrinologists. None of them explained my symptoms as clearly as this page just did. And none of them told me HIIT was making things worse."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_18085a1c4-1763298593381.png"
                  alt="Meredith C., member"
                  className="w-8 h-8 rounded-full object-cover" />
                
                <div>
                  <p className="text-xs font-medium text-charcoal">Meredith C.</p>
                  <p className="text-xs text-mist font-light">Balance member, 8 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default LeadFormSection;