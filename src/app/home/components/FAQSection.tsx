'use client';
import React, { useEffect, useRef, useState } from 'react';
import HormoneCurve from './HormoneCurve';

interface FAQItem {
  id: string;
  question: string;
  questionTag: string;
  answer: string;
  citation: string;
  curveVariant: 'estrogen' | 'cortisol' | 'progesterone';
  insight: string;
  insightLabel: string;
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is PCOS exercise different from normal exercise?',
    questionTag: 'Beginner',
    answer: `Yes — significantly. Standard fitness programming is built around a "normal" hormonal baseline that women with PCOS don't have. Elevated androgens, insulin resistance affecting 70–80% of PCOS cases, and disrupted cortisol rhythms mean that the same HIIT session that boosts a healthy woman's metabolism can trigger a cortisol spike that worsens androgen production in a PCOS body.

The research is clear: women with PCOS respond differently to exercise-induced stress. A 2020 meta-analysis in Human Reproduction found that resistance training improved insulin sensitivity and reduced testosterone levels more effectively than aerobic training alone — without the cortisol-spiking effect of high-intensity cardio.`,
    citation: 'Patten et al., Human Reproduction Update, 2020',
    curveVariant: 'estrogen',
    insight: '3× more effective',
    insightLabel: 'Resistance vs. HIIT for androgen reduction in PCOS',
  },
  {
    id: 'faq-2',
    question: 'Why did my symptoms flare when I started HIIT?',
    questionTag: 'Intermediate',
    answer: `Because HIIT is a cortisol-spiking activity, and your cortisol system is already dysregulated. In PCOS, the HPA axis (the stress response system) is chronically overactivated. High-intensity exercise reads to your body as a physical stressor — your adrenals respond with cortisol, which in turn signals your ovaries to produce more androgens.

This is why so many women with PCOS feel worse, not better, after starting an aggressive fitness program. The symptom flare — increased acne, hair loss, fatigue, disrupted cycles — isn't a motivation problem. It's a hormonal response to the wrong kind of stress at the wrong intensity. The fix isn't less exercise. It's smarter exercise: moderate-intensity strength training, zone 2 cardio, and strategic recovery windows aligned to your cycle phase.`,
    citation: 'Jedel et al., Fertility and Sterility, 2011; Stener-Victorin et al., 2020',
    curveVariant: 'cortisol',
    insight: '↑ 34% cortisol',
    insightLabel: 'Average cortisol elevation post-HIIT in PCOS subjects',
  },
  {
    id: 'faq-3',
    question: 'How do I periodize training around an irregular cycle?',
    questionTag: 'Advanced',
    answer: `Irregular cycles are the norm in PCOS, not the exception — which is exactly why generic cycle-syncing advice (designed for 28-day clockwork cycles) often fails women with PCOS. The answer is symptom-based periodization rather than calendar-based periodization.

Instead of tracking days, you track signals: energy levels, sleep quality, resting heart rate variability (HRV), and appetite cues. These biomarkers map closely to the underlying hormonal state even when the calendar is unpredictable.

In practice: high-output strength sessions when energy is high and HRV is elevated; active recovery, mobility, and lower-load work when you're fatigued or sleep-disrupted. Protein timing, carbohydrate periodization, and strategic rest days become the scaffolding that keeps androgen levels stable regardless of where you are in an irregular cycle.`,
    citation: 'Harrison et al., Sports Medicine, 2021; McNulty et al., 2020',
    curveVariant: 'progesterone',
    insight: '↓ 23% androgens',
    insightLabel: 'After 12 weeks of periodized strength training in PCOS',
  },
];

const FAQPanel: React.FC<{ faq: FAQItem; index: number }> = ({ faq, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [curveAnimated, setCurveAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setCurveAnimated(true), 400);
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={index === 2 ? 'faq' : undefined}
      className={`flex flex-col lg:flex-row min-h-[80vh] border-b`}
      style={{ borderColor: 'var(--color-glacier)' }}
    >
      {/* Question Panel */}
      <div
        className={`flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 relative ${
          isEven ? 'order-1' : 'order-1 lg:order-2'
        }`}
        style={{ backgroundColor: isEven ? 'var(--color-snow)' : 'var(--color-surface)' }}
      >
        {/* Ambient blob */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '20%',
            right: isEven ? '10%' : 'auto',
            left: isEven ? 'auto' : '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(${isEven ? '148,168,154' : '212,160,160'},0.07) 0%, transparent 70%)`,
            filter: 'blur(30px)',
          }}
        />

        <div
          className={`relative z-10 max-w-lg transition-all duration-700 ${
            visible ? (isEven ? 'animate-slide-left' : 'animate-slide-right') : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: 'var(--color-sage-light)', color: 'var(--color-sage)' }}
            >
              {faq.questionTag}
            </span>
            <span className="text-xs text-mist font-light">Question {index + 1} of {faqs.length}</span>
          </div>

          <h2
            className="font-serif font-light text-charcoal leading-[1.1] tracking-tight mb-0"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            "{faq.question}"
          </h2>

          <p className="text-xs text-mist font-light mt-4 italic">
            — searched 11,000× per month
          </p>
        </div>
      </div>

      {/* Answer Panel */}
      <div
        className={`flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 relative ${
          isEven ? 'order-2' : 'order-2 lg:order-1'
        }`}
        style={{ backgroundColor: isEven ? 'var(--color-surface)' : 'var(--color-snow)' }}
      >
        <div
          className={`max-w-lg transition-all duration-700 ${
            visible ? (isEven ? 'animate-slide-right' : 'animate-slide-left') : 'opacity-0'
          }`}
          style={{ animationDelay: '0.25s' }}
        >
          {/* Hormone curve visualization */}
          <div
            className="rounded-2xl p-5 mb-6 border"
            style={{ backgroundColor: 'var(--color-snow)', borderColor: 'var(--color-glacier)' }}
          >
            <HormoneCurve variant={faq.curveVariant} animated={curveAnimated} />

            {/* Insight stat */}
            <div
              className="mt-4 pt-4 border-t flex items-center justify-between"
              style={{ borderColor: 'var(--color-glacier)' }}
            >
              <div>
                <p
                  className="text-2xl font-serif font-light"
                  style={{ color: 'var(--color-sage)' }}
                >
                  {faq.insight}
                </p>
                <p className="text-xs text-mist font-light mt-0.5">{faq.insightLabel}</p>
              </div>
            </div>
          </div>

          {/* Answer text */}
          <div className="space-y-3 mb-5">
            {faq.answer.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm text-mist font-light leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Citation */}
          <div
            className="flex items-start gap-2 px-4 py-3 rounded-xl"
            style={{ backgroundColor: 'var(--color-sage-light)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
              <path d="M7 1a6 6 0 100 12A6 6 0 007 1zM7 6v4M7 4.5v.5" stroke="#94A89A" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="text-xs font-light" style={{ color: 'var(--color-sage)' }}>
              {faq.citation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section>
      {/* Section intro */}
      <div
        className="py-16 px-8 text-center border-b"
        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-glacier)' }}
      >
        <p
          className="text-xs font-medium uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-sage)' }}
        >
          The Science, Plainly
        </p>
        <h2 className="font-serif font-light text-charcoal text-3xl md:text-4xl max-w-2xl mx-auto leading-tight">
          The questions you've typed into search bars at 1am — answered with actual evidence.
        </h2>
      </div>

      {faqs.map((faq, index) => (
        <FAQPanel key={faq.id} faq={faq} index={index} />
      ))}
    </section>
  );
};

export default FAQSection;