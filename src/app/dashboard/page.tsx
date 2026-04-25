'use client';

import React from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Icons from the provided snippet
const LeafIcon = ({ className, style }: { className?: string, style?: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
    <path d="M20 3v4"></path>
    <path d="M22 5h-4"></path>
    <path d="M4 17v2"></path>
    <path d="M5 18H3"></path>
  </svg>
);

const HeartPulseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M8 2v4"></path>
    <path d="M16 2v4"></path>
    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
    <path d="M3 10h18"></path>
  </svg>
);

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = React.useMemo(() => typeof window !== 'undefined' ? require('next/navigation').useRouter() : null, []);
  const userName = session?.user?.name || "Najma";

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const completed = localStorage.getItem('bloom_onboarding_completed');
      if (!completed) {
        // If you want to force onboarding, uncomment the line below
        // window.location.href = '/onboarding';
      }
    }
  }, [router]);

  const journeyPhotos = [
    { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80', label: 'Yoga' },
    { url: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80', label: 'Nourish' },
    { url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', label: 'Reflection' },
    { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80', label: 'Peace' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]" data-testid="dashboard-page">
      <Navbar activePage="today" />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 animate-fade-in-up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-sm tracking-widest uppercase text-[#5A3E6B]/50 mb-2">Today, gently</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#5A3E6B]">Hello, {userName.split(' ')[0]}.</h1>
            <p className="text-[#5A3E6B]/60 mt-3 max-w-lg leading-relaxed text-lg italic tracking-tight">"Listen to your body. It has its own wisdom."</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bloom-card bg-white relative overflow-hidden group shadow-xl border-none" data-testid="phase-summary-card">
            {/* Interactive background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#DDEBD7]/40 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700" />

            <div className="relative z-10">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-3xl bg-[#DDEBD7] flex items-center justify-center shadow-inner">
                    <LeafIcon className="w-8 h-8 text-[#5A3E6B]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#5A3E6B]/40">Day 18</span>
                      <div className="w-1 h-1 rounded-full bg-[#5A3E6B]/20" />
                      <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF8C7A]">In rhythm</span>
                    </div>
                    <h2 className="font-serif text-4xl text-[#5A3E6B]">Luteal phase</h2>
                  </div>
                </div>
                <button data-testid="edit-cycle-btn" className="px-4 py-2 rounded-full border border-[#C8B6E2]/30 text-xs text-[#5A3E6B]/60 hover:bg-[#FAF7F2] transition flex items-center gap-2">
                  <CalendarIcon className="w-3.5 h-3.5" /> Edit cycle
                </button>
              </div>

              <p className="text-[#5A3E6B]/70 text-lg max-w-xl mb-8 leading-relaxed italic">
                "The energy is turning inward now. Like a soft exhale, your body is preparing for rest. Honor the need for grounding and space."
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Energy', value: 'Winding down' },
                  { label: 'Mood', value: 'Reflective' },
                  { label: 'Training', value: 'Gentle Flow' },
                  { label: 'Next cycle', value: '11 days' },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#FAF7F2]/60 border border-white hover:border-[#DDEBD7] transition">
                    <p className="text-[10px] uppercase tracking-widest text-[#5A3E6B]/40 font-bold mb-1">{stat.label}</p>
                    <p className="text-sm font-medium text-[#5A3E6B]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bloom-card bg-white border-none shadow-xl relative overflow-hidden group min-h-[300px] flex flex-col justify-between">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8C7A]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#5A3E6B]/40 mb-6">
                <SparklesIcon className="w-4 h-4 text-[#FF8C7A]" /> Today's whisper
              </div>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#5A3E6B]">
                Your body isn't an obstacle to overcome. It's a miracle to be heard. 
                <span className="text-[#FF8C7A] italic"> Listen closely today.</span>
              </p>
              <div className="mt-8 pt-6 border-t border-[#C8B6E2]/20 flex items-center justify-between">
                <span className="text-xs text-[#5A3E6B]/40">Daily Affirmation</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-[#FF8C7A]' : 'bg-[#C8B6E2]/40'}`} />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Move gently', desc: 'Yoga, Pilates & Walks', link: '/workout', icon: HeartPulseIcon, color: '#FCE8DA', iconColor: '#FF8C7A' },
            { title: 'Nourish', desc: 'Curated Indian menu', link: '/meals', icon: LeafIcon, color: '#DDEBD7', iconColor: '#A8C3A0' },
            { title: 'Reflect', desc: 'Your week in frames', link: '/progress', icon: SparklesIcon, color: '#EDE6F4', iconColor: '#C8B6E2' },
          ].map((item, i) => (
            <Link key={i} href={item.link} className="bloom-card group hover:scale-[1.03] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl border-none p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 duration-500" style={{ background: item.color }}>
                <item.icon className="w-8 h-8" style={{ color: item.iconColor }} />
              </div>
              <h3 className="font-serif text-2xl mb-2 text-[#5A3E6B]">{item.title}</h3>
              <p className="text-sm text-[#5A3E6B]/60 mb-6">{item.desc}</p>
              <div className="mt-auto text-[#FF8C7A] font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                Explore <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl text-[#5A3E6B]">Your journey in frames</h2>
              <p className="text-sm text-[#5A3E6B]/50 mt-1 uppercase tracking-widest">Visual updates from your practice</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {journeyPhotos.map((photo, i) => (
              <div key={i} className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg cursor-pointer">
                <img src={photo.url} alt={photo.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E6B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Moment</p>
                  <p className="font-serif text-xl">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
