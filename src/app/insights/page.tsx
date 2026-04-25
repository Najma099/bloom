'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

// Icons
const SparklesIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
    </svg>
);

const RefreshIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
        <path d="M21 3v5h-5"></path>
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
        <path d="M8 16H3v5"></path>
    </svg>
);

const LeafIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
);

const MOODS = [
    { id: 'calm', icon: '☁️' },
    { id: 'energetic', icon: '⚡' },
    { id: 'tired', icon: '🌙' },
    { id: 'sensitive', icon: '🌸' },
    { id: 'joyful', icon: '✨' }
];

const SEASONAL = [
    { name: 'Pomegranate', season: 'Winter', benefit: 'Iron + antioxidants', image: 'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=400&q=80' },
    { name: 'Beetroot', season: 'Winter', benefit: 'Replenishes iron stores', image: 'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=400&q=80' },
    { name: 'Spinach', season: 'Winter', benefit: 'Folate + iron', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80' },
    { name: 'Pumpkin', season: 'Autumn', benefit: 'Soothes cravings', image: 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?w=400&q=80' },
    { name: 'Coconut', season: 'Year-round', benefit: 'Hydration + electrolytes', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&q=80' },
    { name: 'Almonds', season: 'Year-round', benefit: 'Magnesium + healthy fats', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&q=80' },
]

export default function InsightsPage() {
    const [selectedMood, setSelectedMood] = useState('calm');
    const [energy, setEnergy] = useState(3);

    return (
        <div className="min-h-screen bg-[#FAF7F2] relative overflow-hidden" data-testid="insights-page">
            <Navbar activePage="insights" />

            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#FF8C7A]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#C8B6E2]/5 rounded-full blur-[100px]" />

            <main className="max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-16 relative z-10" data-testid="insights-main">
                <div className="mb-12 animate-fade-in-up">
                    <p className="text-sm tracking-widest uppercase text-[#5A3E6B]/40 mb-3 font-bold">Personalized for you</p>
                    <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-[#5A3E6B]">Soft insights.</h1>
                    <p className="text-[#5A3E6B]/60 mt-4 text-xl max-w-2xl leading-relaxed italic">"Everything you need is already within you. Let's find your rhythm together."</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="lg:col-span-2 bloom-card bg-white shadow-xl border-none p-10">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8C7A] mb-8">
                            <SparklesIcon className="w-4 h-4" /> Your Presence
                        </div>

                        <div className="mb-10">
                            <label className="block text-sm font-bold text-[#5A3E6B]/60 uppercase tracking-widest mb-4">How are you showing up?</label>
                            <div className="flex flex-wrap gap-3">
                                {MOODS.map((m) => (
                                    <button
                                        key={m.id}
                                        onClick={() => setSelectedMood(m.id)}
                                        className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedMood === m.id ? 'bg-[#5A3E6B] text-white shadow-lg scale-105' : 'bg-[#FAF7F2] text-[#5A3E6B]/70 border border-[#C8B6E2]/20 hover:border-[#FF8C7A]/50'}`}
                                    >
                                        <span className="text-lg">{m.icon}</span>
                                        <span className="capitalize">{m.id}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex justify-between items-end mb-4">
                                <label className="block text-sm font-bold text-[#5A3E6B]/60 uppercase tracking-widest">Energy reserves</label>
                                <span className="text-2xl font-serif text-[#FF8C7A]">{energy} <span className="text-sm text-[#5A3E6B]/30">/ 5</span></span>
                            </div>
                            <div className="relative h-2 bg-[#FAF7F2] rounded-full overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] transition-all duration-500"
                                    style={{ width: `${(energy / 5) * 100}%` }}
                                />
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    value={energy}
                                    onChange={(e) => setEnergy(parseInt(e.target.value))}
                                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-[#5A3E6B]/30 font-bold">
                                <span>Soft exhale</span>
                                <span>Full bloom</span>
                            </div>
                        </div>

                        <button className="w-full sm:w-auto bloom-btn-primary px-8 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 group">
                            <RefreshIcon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                            Get Your Whisper
                        </button>
                    </div>

                    <div className="bloom-card bg-white border-none shadow-xl p-10 relative overflow-hidden group flex flex-col justify-between">
                        {/* Decorative background glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8C7A]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#C8B6E2]/20 text-[#5A3E6B]/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                                <SparklesIcon className="w-3 h-3 text-[#FF8C7A]" /> Current Insight
                            </div>
                            <h3 className="font-serif text-3xl mb-4 leading-tight text-[#5A3E6B]">Luteal grounding</h3>
                            <p className="text-[#5A3E6B]/70 text-lg leading-relaxed italic">"Your energy is gently turning inward. A light, joyful movement like a sunset walk and some fresh spinach greens would feel lovely today."</p>
                        </div>
                        <div className="mt-12 text-[10px] text-[#5A3E6B]/30 uppercase tracking-[0.2em] font-bold">
                            Tuned to your rhythm
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <div className="flex items-end justify-between mb-8">
                        <h2 className="font-serif text-3xl text-[#5A3E6B]">Invitations for today</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { text: "Grounding foods (oats, sweet potato) help anchor your energy today.", color: 'bg-[#DDEBD7]/30', iconColor: '#A8C3A0' },
                            { text: "Magnesium-rich dark chocolate is a beautiful kindness for your nerves.", color: 'bg-[#EDE6F4]/30', iconColor: '#C8B6E2' },
                            { text: "Choose a soft stretch over high intensity. Your body will thank you.", color: 'bg-[#FCE8DA]/30', iconColor: '#FF8C7A' }
                        ].map((tip, i) => (
                            <div key={i} className={`p-8 rounded-[2rem] ${tip.color} border border-white hover:scale-[1.03] transition-all duration-500`}>
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                                    <LeafIcon className="w-5 h-5" style={{ color: tip.iconColor }} />
                                </div>
                                <p className="text-[#5A3E6B] leading-relaxed text-lg italic tracking-tight">"{tip.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-10">
                    <h2 className="font-serif text-3xl mb-8 text-[#5A3E6B]">Eat with the seasons</h2>
                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-2 -mx-2">
                        {SEASONAL.map((s, i) => (
                            <div
                                key={i}
                                style={{ animationDelay: `${i * 100}ms` }}
                                className="bloom-card min-w-[260px] p-0 overflow-hidden shadow-xl border-none hover:translate-y-[-8px] transition-all duration-500 bg-white animate-fade-in-up"
                            >
                                <div className="aspect-[4/5] overflow-hidden relative group">
                                    <img alt={s.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={s.image} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E6B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="font-serif text-2xl text-[#5A3E6B]">{s.name}</p>
                                        <span className="text-[10px] px-3 py-1 rounded-full bg-[#FAF7F2] font-bold text-[#5A3E6B]/40 uppercase tracking-widest">{s.season}</span>
                                    </div>
                                    <p className="text-sm text-[#5A3E6B]/60 leading-relaxed italic border-t border-[#FAF7F2] pt-4 mt-4">{s.benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
