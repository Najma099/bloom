'use client';
import React from 'react';
import Link from 'next/link';

// ---- SVG Icons ----
const FlowerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
    <circle cx="12" cy="8" r="2" />
    <path d="M12 10v12" />
    <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
    <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const HeartPulseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </svg>
);

const LeafIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const MoonIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const SproutIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </svg>
);

const SunIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const CoffeeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M10 2v2" /><path d="M14 2v2" />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
    <path d="M6 2v2" />
  </svg>
);

const UtensilsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// ---- Data ----
const steps = [
  { n: '01', t: 'Tell us about yourself', d: 'Share your last cycle date and how you feel today. Nothing more, nothing scary.' },
  { n: '02', t: 'We understand your cycle', d: 'Bloom maps your phases — Menstrual, Follicular, Ovulatory, Luteal — and what each one needs.' },
  { n: '03', t: 'Get your daily plan', d: 'Gentle workouts, Indian meals, and tiny nudges that adapt to your body each day.' },
];

interface Phase {
  key: string;
  name: string;
  energy: string;
  description: string;
  workout: string;
  bg: string;
  iconBg: string;
  iconColor: string;
  Icon: React.FC<{ className?: string; style?: React.CSSProperties }>;
  glow?: boolean;
}

const phases: Phase[] = [
  {
    key: 'menstrual',
    name: 'Menstrual',
    energy: 'Low',
    description: 'A quiet phase for rest and gentle nourishment.',
    workout: 'Restorative yoga, slow walks',
    bg: 'linear-gradient(160deg, rgb(237, 230, 244) 0%, rgb(255, 255, 255) 70%)',
    iconBg: 'rgba(90, 62, 107, 0.133)',
    iconColor: 'rgb(90, 62, 107)',
    Icon: MoonIcon,
  },
  {
    key: 'follicular',
    name: 'Follicular',
    energy: 'Rising',
    description: 'Energy gently returns. A lovely time to begin again.',
    workout: 'Light cardio, dance, pilates',
    bg: 'linear-gradient(160deg, rgb(252, 232, 218) 0%, rgb(255, 255, 255) 70%)',
    iconBg: 'rgba(246, 193, 163, 0.133)',
    iconColor: 'rgb(246, 193, 163)',
    Icon: SproutIcon,
  },
  {
    key: 'ovulatory',
    name: 'Ovulatory',
    energy: 'Peak',
    description: 'Your natural glow phase. Move boldly and connect.',
    workout: 'Strength, HIIT, group classes',
    bg: 'linear-gradient(160deg, rgb(255, 224, 218) 0%, rgb(255, 255, 255) 70%)',
    iconBg: 'rgba(255, 140, 122, 0.133)',
    iconColor: 'rgb(255, 140, 122)',
    Icon: SunIcon,
    glow: true,
  },
  {
    key: 'luteal',
    name: 'Luteal',
    energy: 'Winding down',
    description: 'A turning inward. Slow rhythms and grounding foods.',
    workout: 'Yoga, pilates, long walks',
    bg: 'linear-gradient(160deg, rgb(221, 235, 215) 0%, rgb(255, 255, 255) 70%)',
    iconBg: 'rgba(168, 195, 160, 0.133)',
    iconColor: 'rgb(168, 195, 160)',
    Icon: LeafIcon,
  },
];

const workoutFeatures = [
  'Soft countdown timers',
  'Breathing rest animations',
  "Today's flow, picked for your phase",
  'Skip or pause whenever — no guilt',
];

interface Meal {
  type: string;
  TypeIcon: React.FC<{ className?: string }>;
  name: string;
  image: string;
  alt: string;
  reason: string;
}

const meals: Meal[] = [
  {
    type: 'Breakfast',
    TypeIcon: CoffeeIcon,
    name: 'Warm Beetroot & Jaggery Poha',
    image: '/assets/images/Beetroot_rice.jpeg',
    alt: 'Warm beetroot and jaggery poha served in a bowl with garnish',
    reason: 'Rich in iron and natural sugars to replenish energy during your menstrual phase.',
  },
  {
    type: 'Lunch',
    TypeIcon: UtensilsIcon,
    name: 'Palak Dal with Brown Rice',
    image: '/assets/images/Palak_dal_brownRice.jpeg',
    alt: 'Palak dal with brown rice served in a traditional Indian bowl',
    reason: 'Spinach and lentils provide folate and protein to support your follicular phase.',
  },
  {
    type: 'Dinner',
    TypeIcon: UtensilsIcon,
    name: 'Paneer Tikka with Mint Chutney',
    image: '/assets/images/rice_Rajma.jpeg',
    alt: 'Grilled paneer tikka with fresh mint chutney on a wooden board',
    reason: 'High-protein paneer supports muscle recovery during your peak ovulatory phase.',
  },
];

const insights = [
  {
    icon: MoonIcon,
    iconBg: 'rgba(200, 182, 226, 0.2)',
    iconColor: 'rgb(90, 62, 107)',
    title: 'You may feel a little low today',
    description: 'A 10-minute walk and warm soup might be just right.',
  },
  {
    icon: LeafIcon,
    iconBg: 'rgba(168, 195, 160, 0.2)',
    iconColor: 'rgb(90, 62, 107)',
    title: 'Light yoga is recommended',
    description: 'Cat-cow stretches release tension in the lower back.',
  },
  {
    icon: HeartPulseIcon,
    iconBg: 'rgba(246, 193, 163, 0.2)',
    iconColor: 'rgb(90, 62, 107)',
    title: 'Hydrate a little more',
    description: 'Add a pinch of jeera to warm water — gentle and grounding.',
  },
];

const seasonal = [
  { name: 'Pomegranate', season: 'Winter', benefit: 'Iron + antioxidants', image: 'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=400&q=80', alt: 'Fresh pomegranate cut open showing ruby red seeds' },
  { name: 'Beetroot', season: 'Winter', benefit: 'Replenishes iron stores', image: 'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=400&q=80', alt: 'Fresh beetroot with green leaves on wooden surface' },
  { name: 'Spinach', season: 'Winter', benefit: 'Folate + iron', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80', alt: 'Fresh green spinach leaves in a bowl' },
  { name: 'Pumpkin', season: 'Autumn', benefit: 'Soothes cravings', image: 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?w=400&q=80', alt: 'Orange pumpkin on rustic wooden background' },
  { name: 'Coconut', season: 'Year-round', benefit: 'Hydration + electrolytes', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&q=80', alt: 'Fresh coconut halved showing white flesh' },
  { name: 'Almonds', season: 'Year-round', benefit: 'Magnesium + healthy fats', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&q=80', alt: 'Raw almonds scattered on a light surface' },
]

const weekBars = [40, 65, 50, 80, 60, 90, 70];

// ---- Main Component ----
export default function BloomLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#5A3E6B] overflow-x-hidden">

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-[#C8B6E2]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FlowerIcon className="w-6 h-6 text-[#FF8C7A]" />
            <span className="font-serif text-2xl tracking-tight">Bloom</span>
          </div>
          <Link href="/login" className="bloom-btn-secondary text-sm py-2 px-5">Sign in</Link>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative pt-40 pb-32 bloom-gradient-bg overflow-hidden">
        {/* Orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#C8B6E2]/30 blur-3xl animate-drift" />
        <div className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#F6C1A3]/30 blur-3xl animate-drift" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/60 mb-8 text-xs tracking-widest uppercase text-[#5A3E6B]/70">
              <SparklesIcon className="w-3.5 h-3.5" />
              A gentler way to move
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Your body changes{' '}
              <span className="italic text-[#FF8C7A]">every day.</span>
              <br />
              Your fitness should too.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[#5A3E6B]/75 max-w-xl leading-relaxed">
              Cycle-aware workouts, soulful Indian nutrition, and gentle daily care — made for the woman who deserves to feel understood.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/login" className="bloom-btn-primary">
                Start Your Journey <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a href="#how-it-works" className="bloom-btn-secondary">See how it works</a>
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="relative flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E8A0BF]/40 to-[#FF8C7A]/30 animate-breathe" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#C8B6E2]/50 to-[#F6C1A3]/40 animate-breathe" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center shadow-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Woman in calm meditation pose with soft lighting"
                  className="w-full h-full object-cover rounded-full"
                  src="https://images.pexels.com/photos/7880180/pexels-photo-7880180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              {/* Badge 1 */}
              <div className="absolute -top-2 right-8 px-4 py-2 rounded-full bg-white shadow-lg text-xs flex items-center gap-2 animate-drift">
                <HeartPulseIcon className="w-3.5 h-3.5 text-[#FF8C7A]" />
                Day 14 · Ovulatory
              </div>
              {/* Badge 2 */}
              <div className="absolute bottom-4 -left-4 px-4 py-2 rounded-full bg-white shadow-lg text-xs flex items-center gap-2 animate-drift" style={{ animationDelay: '1.5s' }}>
                <LeafIcon className="w-3.5 h-3.5 text-[#A8C3A0]" />
                Energy: Radiant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-24 md:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">How it works</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
              Three soft steps. <span className="italic">No pressure.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="bloom-card group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-5xl font-serif text-[#E8A0BF]/60 mb-4">{s.n}</div>
                <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
                <p className="text-[#5A3E6B]/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CYCLE PHASES ===== */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAF7F2] to-[#FCE8DA]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">Your inner seasons</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
              Four phases. <span className="italic">One you.</span>
            </h2>
            <p className="mt-4 text-[#5A3E6B]/70 text-lg">Each phase has its own rhythm — and its own gifts.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <div
                key={p.key}
                data-testid={`phase-card-${p.key}`}
                className={`bloom-card relative overflow-hidden${p.glow ? ' animate-glow-pulse' : ''}`}
                style={{ background: p.bg, animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: p.iconBg }}>
                  <p.Icon className="w-6 h-6" style={{ color: p.iconColor }} />
                </div>
                <h3 className="font-serif text-2xl mb-1">{p.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#5A3E6B]/50 mb-4">
                  <span>{p.energy}</span> energy
                </p>
                <p className="text-sm text-[#5A3E6B]/75 leading-relaxed mb-3">{p.description}</p>
                <p className="text-xs text-[#5A3E6B]/60 italic">{p.workout}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKOUT EXPERIENCE ===== */}
      <section className="py-24 md:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">Move with us</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">
              A gentle coach <span className="italic">in your pocket.</span>
            </h2>
            <p className="text-lg text-[#5A3E6B]/75 leading-relaxed mb-8">
              Your animated companion guides each movement at your pace. Breathe through rests. See what&apos;s next without the pressure of &quot;more, faster, harder.&quot;
            </p>
            <ul className="space-y-3 text-[#5A3E6B]/80">
              {workoutFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <FlowerIcon className="w-4 h-4 mt-1 text-[#E8A0BF] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Workout Card */}
          <div className="relative">
            <div className="bloom-card p-0 overflow-hidden">
              <div className="aspect-[4/5] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Woman practicing yoga in a serene indoor setting with soft natural light"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://images.pexels.com/photos/6193559/pexels-photo-6193559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E6B]/60 via-transparent to-transparent" />
                {/* Top bar */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white/90 text-xs">
                  <span>Now: Cat-Cow</span>
                  <span>3 of 5</span>
                </div>
                {/* Progress bar */}
                <div className="absolute top-10 left-4 right-4 h-1 rounded-full bg-white/30 overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A]" />
                </div>
                {/* Bottom overlay */}
                <div className="absolute bottom-6 inset-x-6 glass rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#5A3E6B]/60">Next</p>
                    <p className="font-serif text-lg text-[#5A3E6B]">Child&apos;s Pose · 60s</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8A0BF] to-[#FF8C7A] animate-breathe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEALS ===== */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAF7F2] to-[#EDE6F4]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">Smart Indian meals</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Food that loves you back.</h2>
            <p className="mt-4 text-[#5A3E6B]/70 text-lg">Familiar dals, rotis, and chaats — paired with your phase.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {meals.map((m, i) => (
              <div key={m.name} className="bloom-card p-0 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-[5/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={m.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    src={m.image}
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5A3E6B]/50 mb-2">
                    <m.TypeIcon className="w-3.5 h-3.5" />
                    {m.type}
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{m.name}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#A8C3A0]/30 text-xs text-[#5A3E6B] mb-3">Why today?</div>
                  <p className="text-sm text-[#5A3E6B]/75 leading-relaxed">{m.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GENTLE SUGGESTIONS ===== */}
      <section className="py-24 md:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">Gentle suggestions</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
              Never alarms. <span className="italic">Always invitations.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((tip) => (
              <div key={tip.title} className="bloom-card flex gap-5 items-start" data-testid={`insight-${tip.title}`}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: tip.iconBg }}>
                  <tip.icon className="w-5 h-5" style={{ color: tip.iconColor }} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{tip.title}</h3>
                  <p className="text-sm text-[#5A3E6B]/70 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEASONAL NUTRITION ===== */}
      <section className="py-24 md:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">Seasonal nutrition</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Eat with the seasons.</h2>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6" style={{ scrollbarWidth: 'none' }}>
            {seasonal.map((s, i) => (
              <div key={s.name} className="bloom-card min-w-[220px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={s.alt} className="w-full h-full object-cover" src={s.image} />
                </div>
                <h3 className="font-serif text-lg">{s.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#5A3E6B]/50 mt-1">{s.season}</p>
                <p className="text-sm text-[#5A3E6B]/70 mt-3">{s.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 md:py-32 bg-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">Sharing the glow</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Voices of Bloom</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Bloom changed how I see my body. I no longer feel guilty for resting during my period. It's truly a gentler way to live.",
                author: "Ananya S.",
                role: "Marketing lead",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
              },
              {
                text: "The meal suggestions are so familiar yet scientifically backed. My energy levels have never been this stable throughout the month.",
                author: "Priya K.",
                role: "Yoga Instructor",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
              },
              {
                text: "Finally, an app that doesn't yell at me to do HIIT when I'm in my luteal phase. It feels like a friend who actually understands me.",
                author: "Meera R.",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
              }
            ].map((t, i) => (
              <div key={i} className="bloom-card flex flex-col h-full hover:scale-[1.02] transition-all duration-300">
                <div className="text-[#FF8C7A] text-4xl font-serif mb-6">&ldquo;</div>
                <p className="text-[#5A3E6B]/80 leading-relaxed mb-8 flex-grow italic">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover border-2 border-[#C8B6E2]/20" />
                  <div>
                    <div className="font-serif text-lg leading-tight">{t.author}</div>
                    <div className="text-xs text-[#5A3E6B]/50 tracking-wide uppercase">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRESS & MILESTONES ===== */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAF7F2] to-[#DDEBD7]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Bar Chart Card */}
          <div className="bloom-card">
            <div className="flex items-center gap-3 mb-6 text-[#A8C3A0]">
              <TrendingUpIcon className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest">This week</span>
            </div>
            <p className="font-serif text-3xl mb-6">
              &ldquo;You showed up <span className="italic">5 days</span> this week. Beautiful.&rdquo;
            </p>
            <div className="flex gap-2 items-end h-24">
              {weekBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-[#C8B6E2]/60 to-[#E8A0BF]/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-sm text-[#5A3E6B]/60 mt-4">Energy gently rising — and that&apos;s worth celebrating.</p>
          </div>

          {/* Right — Text + CTA */}
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">Progress, your way</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">
              Small wins. <span className="italic">No streaks to break.</span>
            </h2>
            <p className="text-lg text-[#5A3E6B]/75 leading-relaxed mb-8">
              We celebrate showing up — not perfection. Rest is progress. Showing up once is progress. Bloom is built so you never have to &ldquo;catch up.&rdquo;
            </p>
            <button data-testid="footer-cta" className="bloom-btn-primary">
              Begin gently <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== SUBSCRIPTION ===== */}
      <section id="pricing" className="py-24 md:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.2em] uppercase text-[#FF8C7A] mb-4">The Bloom Experience</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Invest in your <span className="italic text-[#FF8C7A]">rhythm.</span></h2>
            <p className="text-[#5A3E6B]/70 text-lg max-w-2xl mx-auto italic">
              "Your body is a temple, and its cycle is the prayer. Nurture it with precision and care."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
            {/* Free */}
            <div className="bloom-card bg-white p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] border border-[#C8B6E2]/10 shadow-xl opacity-90">
              <div>
                <div className="bg-[#A8C3A0] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full inline-block mb-4">
                  Start Gently
                </div>
                <h3 className="font-serif text-2xl mb-2">Freemium Trial</h3>
                <p className="text-xs text-[#5A3E6B]/50 mb-8 tracking-tight italic min-h-[32px]">Experience the soft resonance of Bloom.</p>
                <div className="mb-8">
                  <span className="text-4xl font-serif text-[#5A3E6B]">₹0</span>
                  <span className="text-sm text-[#5A3E6B]/40 ml-1">· 5 days</span>
                </div>
                <div className="space-y-4 mb-10">
                  {['Introductory workouts', 'Daily meal inspirations', 'Basic cycle tracking', 'Morning daily whispers'].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <div className="p-1 rounded-full mt-0.5 bg-[#A8C3A0]/10 text-[#A8C3A0]">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span className="text-xs text-[#5A3E6B]/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/subscribe" className="w-full py-4 rounded-xl text-center bg-[#A8C3A0] text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-[#97b28f] transition-all">Try Free</Link>
            </div>

            {/* Monthly */}
            <div className="bloom-card bg-white p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] border border-[#C8B6E2]/10 shadow-xl opacity-90">
              <div>
                <div className="h-8" />
                <h3 className="font-serif text-2xl mb-2">Monthly Bloom</h3>
                <p className="text-xs text-[#5A3E6B]/50 mb-8 tracking-tight italic min-h-[32px]">Perfect for starting your cycle-syncing journey.</p>
                <div className="mb-8">
                  <span className="text-4xl font-serif text-[#5A3E6B]">₹199</span>
                  <span className="text-sm text-[#5A3E6B]/40 ml-1">/ month</span>
                </div>
                <div className="space-y-4 mb-10">
                  {['Full access to all workouts', 'Daily Smart Indian Meals', 'Personalized cycle tracking', 'Insightful hormone nudges'].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <div className="p-1 rounded-full mt-0.5 bg-[#5A3E6B]/5 text-[#5A3E6B]/40">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span className="text-xs text-[#5A3E6B]/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/subscribe" className="w-full py-4 rounded-xl text-center bg-[#C8B6E2]/20 text-[#5A3E6B] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#C8B6E2]/40 hover:bg-[#C8B6E2]/40 hover:shadow-lg transition-all">Choose Monthly</Link>
            </div>

            {/* Yearly */}
            <div className="bloom-card bg-white p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] border-2 border-[#FF8C7A] shadow-2xl scale-105 z-10">
              <div>
                <div className="bg-[#FF8C7A] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full inline-block mb-4 shadow-[0_5px_15px_rgba(255,140,122,0.4)]">
                  Most Soulful Value
                </div>
                <h3 className="font-serif text-2xl mb-2">Annual Bloom</h3>
                <p className="text-xs text-[#5A3E6B]/50 mb-8 tracking-tight italic min-h-[32px]">The best value for long-term hormonal harmony.</p>
                <div className="mb-8">
                  <span className="text-4xl font-serif text-[#5A3E6B]">₹1999</span>
                  <span className="text-sm text-[#5A3E6B]/40 ml-1">/ year</span>
                </div>
                <div className="space-y-4 mb-10">
                  {['Everything in Monthly', '2 months for free', 'Exclusive seasonal guides', 'Long-term progress trends'].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <div className="p-1 rounded-full mt-0.5 bg-[#FF8C7A]/10 text-[#FF8C7A]">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span className="text-xs text-[#5A3E6B]/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/subscribe" className="w-full py-4 rounded-xl text-center bloom-btn-primary shadow-xl hover:translate-y-[-4px] transition-all">Choose Annual</Link>
            </div>
          </div>

          <div className="mt-20 text-center animate-fade-in-up">
            <p className="text-sm text-[#5A3E6B]/40 mb-4 font-bold tracking-widest uppercase">Special Invitation</p>
            <div className="inline-block bg-[#DDEBD7]/30 border border-white p-8 rounded-[3rem] max-w-xl">
               <p className="text-[#5A3E6B]/70 leading-relaxed italic">
                 "New to Bloom? We invite you to explore every ritual and rhythm **freely for 5 days**. No strings, just soul."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 border-t border-[#C8B6E2]/20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5A3E6B]/60">
          <div className="flex items-center gap-2">
            <FlowerIcon className="w-4 h-4 text-[#FF8C7A]" />
            Bloom · made with care for your body
          </div>
          <div>© 2026 · A calm companion</div>
        </div>
      </footer>
    </div>
  );
}