'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

// Icons 
const CoffeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="M10 2v2"></path>
        <path d="M14 2v2"></path>
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
        <path d="M6 2v2"></path>
    </svg>
);

const UtensilsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path>
        <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path>
        <path d="m2.1 21.8 6.4-6.3"></path>
        <path d="m19 5-7 7"></path>
    </svg>
);

const SoupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
        <path d="M7 21h10"></path>
        <path d="M19.5 12 22 6"></path>
        <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"></path>
        <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"></path>
        <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"></path>
    </svg>
);

const LeafIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
);

const MEALS = [
    {
        id: 'm1',
        name: 'Iron-Rich Beetroot Rice',
        type: 'Breakfast',
        phase: 'Menstrual',
        image: '/assets/images/Beetroot_rice.jpeg',
        why: 'Iron-rich beetroot and grounding rice gently replenish what your body releases.',
        tags: ['Iron', 'Warming', 'Comfort'],
        icon: CoffeeIcon,
        phaseColor: '#C8B6E2',
        textColor: '#5A3E6B'
    },
    {
        id: 'm2',
        name: 'Healing Moong Khichdi',
        type: 'Lunch',
        phase: 'Menstrual',
        image: '/assets/images/moong_khichri.jpeg',
        why: 'Soft, easy to digest and warming — a hug in a bowl for your digestive system.',
        tags: ['Easy digest', 'Warming', 'Grounding'],
        icon: UtensilsIcon,
        phaseColor: '#C8B6E2',
        textColor: '#5A3E6B'
    },
    {
        id: 'm10',
        name: 'Magnesium Almond Milk',
        type: 'Breakfast',
        phase: 'Luteal',
        image: '/assets/images/Almond_milk.jpeg',
        why: 'Magnesium and healthy fats help calm cravings as your cycle winds down.',
        tags: ['Magnesium', 'Calming'],
        icon: CoffeeIcon,
        phaseColor: '#E8A0BF',
        textColor: 'white'
    },
    {
        id: 'm11',
        name: 'Palak Dal with Brown Rice',
        type: 'Lunch',
        phase: 'Luteal',
        image: '/assets/images/Palak_dal_brownRice.jpeg',
        why: 'Spinach and lentils together — comforting, grounding and rich in iron.',
        tags: ['Iron', 'Grounding'],
        icon: UtensilsIcon,
        phaseColor: '#E8A0BF',
        textColor: 'white'
    },
    {
        id: 'm12',
        name: 'Roasted Pumpkin & Methi',
        type: 'Dinner',
        phase: 'Luteal',
        image: '/assets/images/roasted_Pumkin.jpeg',
        why: 'Sweet pumpkin gently soothes cravings without spiking sugar.',
        tags: ['Soothing', 'Balanced'],
        icon: SoupIcon,
        phaseColor: '#E8A0BF',
        textColor: 'white'
    },
    {
        id: 'm7',
        name: 'Peak Performance Masala Oats',
        type: 'Breakfast',
        phase: 'Ovulatory',
        image: '/assets/images/Masala_Oats.jpeg',
        why: 'Steady energy and fiber to match your peak-phase glow.',
        tags: ['Fiber', 'Sustained energy'],
        icon: CoffeeIcon,
        phaseColor: '#FF8C7A',
        textColor: 'white'
    },
    {
        id: 'm8',
        name: 'Rajma Chawal Bowl',
        type: 'Lunch',
        phase: 'Ovulatory',
        image: '/assets/images/rice_Rajma.jpeg',
        why: 'Plant protein and complex carbs to fuel your strongest workouts.',
        tags: ['Protein', 'Fuel'],
        icon: UtensilsIcon,
        phaseColor: '#FF8C7A',
        textColor: 'white'
    },
    {
        id: 'm13',
        name: 'Grounding Roasted Squash',
        type: 'Snack',
        phase: 'Luteal',
        image: '/assets/images/Roasted_squash.jpeg',
        why: 'Warming and nutrient-dense, perfect for high-progesterone days.',
        tags: ['Grounding', 'Fiber'],
        icon: LeafIcon,
        phaseColor: '#E8A0BF',
        textColor: 'white'
    }
];

export default function MealsPage() {
    const [filter, setFilter] = useState('all');
    
    const filteredMeals = filter === 'today' 
        ? MEALS.filter(m => m.phase === 'Luteal') 
        : MEALS;

    return (
        <div className="min-h-screen bg-[#FAF7F2]" data-testid="meals-page">
            <Navbar activePage="nourish" />

            <main className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-in-up">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8C7A] mb-3">
                            <LeafIcon className="w-4 h-4" /> Flavour of India
                        </div>
                        <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-[#5A3E6B]">Soulful Indian meal.</h1>
                    </div>

                    <div className="flex gap-2 p-1.5 rounded-full bg-white shadow-lg border border-[#C8B6E2]/20">
                        <button 
                            onClick={() => setFilter('today')}
                            data-testid="filter-today" 
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${filter === 'today' ? 'bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] text-white shadow-md scale-105' : 'text-[#5A3E6B]/60 hover:text-[#5A3E6B]'}`}
                        >
                            Today
                        </button>
                        <button 
                            onClick={() => setFilter('all')}
                            data-testid="filter-all" 
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${filter === 'all' ? 'bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] text-white shadow-md scale-105' : 'text-[#5A3E6B]/60 hover:text-[#5A3E6B]'}`}
                        >
                            Library
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMeals.map((m, i) => (
                        <div 
                            key={m.id} 
                            style={{ animationDelay: `${i * 100}ms` }}
                            className="bloom-card p-0 overflow-hidden text-left hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-xl border-none animate-fade-in-up"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative group">
                                <img alt={m.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={m.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-4 right-4">
                                    <span className="text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest backdrop-blur-md border border-white/30" style={{ backgroundColor: `${m.phaseColor}44`, color: m.textColor }}>
                                        {m.phase}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A3E6B]/40 mb-3">
                                    <m.icon /> {m.type}
                                </div>
                                <h3 className="font-serif text-2xl mb-3 text-[#5A3E6B]">{m.name}</h3>
                                <p className="text-sm text-[#5A3E6B]/70 leading-relaxed mb-6 italic">"{m.why}"</p>
                                <div className="flex flex-wrap gap-2">
                                    {m.tags.map(t => (
                                        <span key={t} className="text-[10px] px-3 py-1 rounded-full bg-[#FAF7F2] font-bold uppercase tracking-widest text-[#5A3E6B]/40 border border-[#C8B6E2]/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
