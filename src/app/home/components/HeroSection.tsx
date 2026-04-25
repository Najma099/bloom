'use client';
import React, { useState } from 'react';

type CyclePhase = 'follicular' | 'ovulatory' | 'luteal' | 'unknown' | null;
type FormStep = 1 | 2 | 3;

const phases = [
  {
    id: 'follicular' as CyclePhase,
    label: 'Follicular',
    subtitle: 'Days 1–13 · Rising estrogen',
    description: 'Energy builds, strength peaks',
  },
  {
    id: 'ovulatory' as CyclePhase,
    label: 'Ovulatory',
    subtitle: 'Days 14–16 · Peak estrogen',
    description: 'Power output at its highest',
  },
  {
    id: 'luteal' as CyclePhase,
    label: 'Luteal',
    subtitle: 'Days 17–28 · Rising progesterone',
    description: 'Recovery needs increase',
  },
  {
    id: 'unknown' as CyclePhase,
    label: "I don't know",
    subtitle: 'Irregular or unsure',
    description: "That\'s okay — we\'ll figure it out",
  },
];

const exerciseOptions = [
  { id: 'none', label: 'Not currently exercising' },
  { id: 'cardio', label: 'Mostly cardio (running, cycling)' },
  { id: 'hiit', label: 'HIIT or bootcamp classes' },
  { id: 'strength', label: 'Some strength training' },
  { id: 'mixed', label: 'Mixed — no real structure' },
];

const HeroSection: React.FC = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [selectedPhase, setSelectedPhase] = useState<CyclePhase>(null);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePhaseSelect = (phase: CyclePhase) => {
    setSelectedPhase(phase);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => (s + 1) as FormStep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const phaseMessages: Record<string, string> = {
    follicular: 'This is your power window. Heavy compound lifts, progressive overload — your body is primed.',
    ovulatory: 'Peak output phase. Your coordination and strength are at their monthly high. Make it count.',
    luteal: 'Your nervous system needs more recovery time here. Reduce intensity, prioritize sleep and protein.',
    unknown: 'With PCOS, cycles can be unpredictable. We build programs that adapt to irregularity — not ignore it.',
  };

  return (
    <section className="relative min-h-screen pt-16 flex flex-col lg:flex-row">
      {/* Split divider */}
      <div className="split-line hidden lg:block" />

      {/* LEFT PANEL */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 lg:py-0 relative">
        {/* Ambient background blob */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(148,168,154,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative z-10 max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-8">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
              style={{ backgroundColor: 'var(--color-sage-light)', color: 'var(--color-sage)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--color-sage)' }}
              />
              Hormone-Adapted Programming
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif font-light text-charcoal leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}
          >
            Your cycle changes everything about how you should train.
          </h1>

          <p className="text-mist text-lg font-light leading-relaxed mb-10 max-w-md">
            Balance is a movement program built specifically for women with PCOS — calibrated to insulin resistance, cortisol patterns, and the phase you're in right now.
          </p>

          {/* Proof points */}
          <div className="flex flex-col gap-3">
            {[
              'Strength training timed to your hormonal window',
              'No generic cardio prescriptions — ever',
              'Built around PCOS physiology, not assumptions',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'var(--color-sage-light)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#94A89A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-mist font-light">{point}</span>
              </div>
            ))}
          </div>

          {/* Trust signal */}
          <div
            className="mt-12 pt-8 border-t flex items-center gap-6"
            style={{ borderColor: 'var(--color-glacier)' }}
          >
            <div className="flex -space-x-3">
              {[
                'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100',
                'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
                'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Member ${i + 1}`}
                  className="w-9 h-9 rounded-full object-cover border-2 border-snow"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-medium text-charcoal">2,400+ women</p>
              <p className="text-xs text-mist font-light">training with their cycle, not against it</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — Multi-step form */}
      <div
        className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-20 lg:py-0"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="max-w-lg w-full mx-auto lg:mx-0">

          {/* Progress indicators */}
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div
                  className={`progress-dot ${step >= s ? (step > s ? 'completed' : 'active') : ''}`}
                />
                {s < 3 && (
                  <div
                    className="h-px flex-1 transition-all duration-500"
                    style={{
                      backgroundColor: step > s ? 'var(--color-sage)' : 'var(--color-glacier)',
                    }}
                  />
                )}
              </React.Fragment>
            ))}
            <span className="ml-2 text-xs text-mist font-medium">Step {step} of 3</span>
          </div>

          {!submitted ? (
            <>
              {/* STEP 1 */}
              {step === 1 && (
                <div>
                  <h2 className="font-serif font-light text-charcoal text-2xl mb-2">
                    Where are you in your cycle right now?
                  </h2>
                  <p className="text-sm text-mist font-light mb-6">
                    This shapes every recommendation we make. No wrong answer.
                  </p>

                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {phases.map((phase) => (
                      <button
                        key={phase.id}
                        onClick={() => handlePhaseSelect(phase.id)}
                        className={`phase-btn text-left px-5 py-4 rounded-2xl border transition-all duration-300 group ${
                          selectedPhase === phase.id ? 'selected' : 'border-glacier bg-snow hover:border-sage/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span
                                className={`phase-dot w-2 h-2 rounded-full transition-colors duration-300 ${
                                  selectedPhase === phase.id ? '' : 'bg-glacier'
                                }`}
                                style={selectedPhase === phase.id ? { backgroundColor: 'var(--color-sage)' } : {}}
                              />
                              <span className="text-sm font-medium text-charcoal">{phase.label}</span>
                            </div>
                            <span className="text-xs text-mist font-light pl-4">{phase.subtitle}</span>
                          </div>
                          {selectedPhase === phase.id && (
                            <span className="text-xs font-light italic" style={{ color: 'var(--color-sage)' }}>
                              {phase.description}
                            </span>
                          )}
                        </div>

                        {/* Reveal message on select */}
                        {selectedPhase === phase.id && phase.id && (
                          <div
                            className="mt-3 pt-3 border-t text-xs font-light leading-relaxed"
                            style={{ borderColor: 'rgba(148,168,154,0.3)', color: 'var(--color-mist)' }}
                          >
                            {phaseMessages[phase.id as string]}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!selectedPhase}
                    className="w-full py-4 rounded-2xl text-sm font-medium text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] cta-pulse"
                    style={{ backgroundColor: selectedPhase ? 'var(--color-blush)' : 'var(--color-glacier)', color: selectedPhase ? 'white' : 'var(--color-mist)' }}
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div>
                  <h2 className="font-serif font-light text-charcoal text-2xl mb-2">
                    What does your current exercise look like?
                  </h2>
                  <p className="text-sm text-mist font-light mb-6">
                    Honest answers help us build something that actually fits your life.
                  </p>

                  <div className="flex flex-col gap-3 mb-6">
                    {exerciseOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedExercise(opt.id)}
                        className={`text-left px-5 py-3.5 rounded-xl border text-sm transition-all duration-200 ${
                          selectedExercise === opt.id
                            ? 'border-sage bg-sage-light text-charcoal' :'border-glacier bg-snow text-mist hover:border-sage/40 hover:text-charcoal'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                              selectedExercise === opt.id ? 'border-sage' : 'border-glacier'
                            }`}
                          >
                            {selectedExercise === opt.id && (
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-sage)' }} />
                            )}
                          </div>
                          {opt.label}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 rounded-2xl text-sm font-medium border border-glacier text-mist hover:border-sage/40 hover:text-charcoal transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!selectedExercise}
                      className="flex-1 py-4 rounded-2xl text-sm font-medium text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: selectedExercise ? 'var(--color-blush)' : 'var(--color-glacier)', color: selectedExercise ? 'white' : 'var(--color-mist)' }}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h2 className="font-serif font-light text-charcoal text-2xl mb-2">
                    Build your free cycle plan.
                  </h2>
                  <p className="text-sm text-mist font-light mb-6">
                    No spam. Just your personalized PCOS training roadmap — delivered once.
                  </p>

                  <div className="mb-5">
                    <label className="block text-xs font-medium text-mist uppercase tracking-wider mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="form-input w-full px-4 py-3.5 rounded-xl border border-glacier bg-snow text-sm text-charcoal placeholder:text-mist/50 transition-all duration-200"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-4 rounded-2xl text-sm font-medium border border-glacier text-mist hover:border-sage/40 hover:text-charcoal transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 rounded-2xl text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-blush"
                      style={{ backgroundColor: 'var(--color-blush)' }}
                    >
                      Build My Cycle Plan
                    </button>
                  </div>

                  <p className="text-xs text-mist/60 text-center mt-4 font-light">
                    No credit card. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </>
          ) : (
            /* Success state */
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--color-sage-light)' }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14l6 6L22 8" stroke="#94A89A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif font-light text-charcoal text-2xl mb-3">
                Your plan is on its way.
              </h3>
              <p className="text-sm text-mist font-light leading-relaxed max-w-xs mx-auto">
                Check your inbox for your personalized PCOS cycle training roadmap. Welcome to Balance.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;