'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

// Icons
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
);

const TrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-3.5 h-3.5"} aria-hidden="true">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
    </svg>
);

const LeafIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
);

const MOODS = [
    { label: 'calm', icon: '☁️' },
    { label: 'energetic', icon: '⚡' },
    { label: 'tired', icon: '🌙' },
    { label: 'sensitive', icon: '🌸' },
    { label: 'joyful', icon: '✨' }
];

const WEEK_DATA = [
    { day: 'Sun', energy: 30, color: '#DDEBD7' },
    { day: 'Mon', energy: 45, color: '#EDE6F4' },
    { day: 'Tue', energy: 85, color: '#FCE8DA' },
    { day: 'Wed', energy: 70, color: '#FF8C7A' },
    { day: 'Thu', energy: 95, color: '#E8A0BF' },
    { day: 'Fri', energy: 60, color: '#C8B6E2' },
    { day: 'Sat', energy: 40, color: '#FAF7F2' },
];

export default function ProgressPage() {
    const [selectedMood, setSelectedMood] = useState('calm');
    const [energy, setEnergy] = useState(3);
    const [notes, setNotes] = useState('');
    const [reflections, setReflections] = useState<any[]>([
        { id: 1, date: 'Today', mood: 'Calm', energy: 4, notes: 'Feeling grounded after a morning walk.' },
        { id: 2, date: 'Yesterday', mood: 'Energetic', energy: 5, notes: 'Full bloom energy today!' }
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReflection = {
            id: Date.now(),
            date: 'Today',
            mood: selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1),
            energy,
            notes
        };
        setReflections([newReflection, ...reflections]);
        setNotes('');
    };

    return (
        <div className="min-h-screen bg-[#FAF7F2] relative overflow-hidden" data-testid="progress-page">
            <Navbar activePage="progress" />

            {/* Background Glows */}
            <div className="absolute top-[10%] -left-20 w-96 h-96 bg-[#FF8C7A]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[20%] -right-20 w-[30rem] h-[30rem] bg-[#C8B6E2]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

            <main className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-20 relative z-10">
                <div className="mb-16 animate-fade-in-up">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#5A3E6B]/40 mb-4 bg-white/50 w-fit px-4 py-2 rounded-full border border-white">
                        <SparklesIcon className="w-3.5 h-3.5" /> Your Evolution
                    </div>
                    <h1 className="font-serif text-6xl md:text-7xl tracking-tight text-[#5A3E6B]">Rhythm & Flow.</h1>
                    <p className="text-[#5A3E6B]/50 mt-6 text-xl max-w-2xl leading-relaxed italic border-l-4 border-[#FF8C7A]/20 pl-8">
                        "Consistency is not about perfection. It's about showing up for yourself, especially on the days you need to rest."
                    </p>
                </div>

                {/* KPI Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    {[
                        { label: 'Check-ins', val: '5', icon: CalendarIcon, color: '#FF8C7A', sub: 'days of resonance' },
                        { label: 'Movements', val: '12', icon: HeartIcon, color: '#A8C3A0', sub: 'gentle connections' },
                        { label: 'Avg Energy', val: '3.8', icon: TrendingUpIcon, color: '#5A3E6B', sub: 'weekly resonance' }
                    ].map((stat, i) => (
                        <div key={i} className="bloom-card bg-white shadow-2xl border-none p-10 group hover:translate-y-[-8px] transition-all duration-500">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] flex items-center justify-center group-hover:scale-110 transition-transform duration-700" style={{ color: stat.color }}>
                                    <stat.icon />
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-[#5A3E6B]/20">{stat.label}</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="font-serif text-6xl text-[#5A3E6B]">{stat.val}</span>
                                {stat.label === 'Avg Energy' && <span className="text-xl text-[#5A3E6B]/30 font-serif">/5</span>}
                            </div>
                            <p className="text-sm text-[#5A3E6B]/50 mt-2 italic">"{stat.sub}"</p>
                        </div>
                    ))}
                </div>

                {/* Energy Chart */}
                <div className="bloom-card bg-white shadow-2xl border-none p-12 mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <h2 className="font-serif text-4xl mb-3 text-[#5A3E6B]">Energy Landscape</h2>
                            <p className="text-[#FF8C7A] font-bold text-xs uppercase tracking-[0.3em]">Fluctuations are beautiful</p>
                        </div>
                        <div className="bg-[#FAF7F2] p-6 rounded-[2rem] border border-[#C8B6E2]/10 max-w-sm">
                            <p className="text-[10px] font-bold text-[#5A3E6B]/40 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <LeafIcon className="w-3 h-3" /> Rhythm Philosophy
                            </p>
                            <p className="text-xs text-[#5A3E6B]/70 italic leading-relaxed">"Linear progress is a myth. Some days we bloom, some days we rest. Both are vital for the season."</p>
                        </div>
                    </div>

                    <div className="flex items-end gap-4 h-80 px-4 relative">
                        {/* Grid lines */}
                        <div className="absolute inset-x-0 bottom-12 border-b border-[#FAF7F2]" />
                        <div className="absolute inset-x-0 bottom-[40%] border-b border-[#FAF7F2] opacity-50" />
                        <div className="absolute inset-x-0 bottom-[70%] border-b border-[#FAF7F2] opacity-30" />

                        {WEEK_DATA.map((data, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-6 group relative z-10">
                                <div
                                    className="w-full rounded-full transition-all duration-1000 ease-in-out hover:scale-[1.05] relative overflow-hidden"
                                    style={{
                                        height: `${data.energy}%`,
                                        backgroundColor: data.color,
                                        boxShadow: `0 10px 20px -10px ${data.color}`
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-[#5A3E6B] text-white text-[10px] py-2 px-4 rounded-full transition-all whitespace-nowrap shadow-2xl font-bold tracking-widest">
                                        LEVEL: {Math.round(data.energy / 20)}
                                    </div>
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#5A3E6B]/30">{data.day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    {/* Reflection Form */}
                    <div className="lg:col-span-3">
                        <div className="bloom-card bg-white shadow-2xl border-none p-12">
                            <h2 className="font-serif text-3xl mb-10 text-[#5A3E6B]">Check-in with Heart</h2>
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div>
                                    <label className="block text-xs font-bold text-[#5A3E6B]/40 uppercase tracking-[0.2em] mb-6">Current Resonance</label>
                                    <div className="flex flex-wrap gap-4">
                                        {MOODS.map((m) => (
                                            <button
                                                key={m.label}
                                                type="button"
                                                onClick={() => setSelectedMood(m.label)}
                                                className={`flex items-center gap-3 px-6 py-4 rounded-[1.5rem] transition-all duration-500 border-2 ${selectedMood === m.label ? 'border-[#FF8C7A] bg-[#FAF7F2] shadow-lg scale-105' : 'border-transparent bg-[#FAF7F2]/60 hover:bg-[#FAF7F2]'}`}
                                            >
                                                <span className="text-xl">{m.icon}</span>
                                                <span className={`text-[10px] uppercase font-bold tracking-widest ${selectedMood === m.label ? 'text-[#FF8C7A]' : 'text-[#5A3E6B]/40'}`}>{m.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="block text-xs font-bold text-[#5A3E6B]/40 uppercase tracking-[0.2em]">Energy reserves</label>
                                        <span className="font-serif text-2xl text-[#FF8C7A]">{energy}/5</span>
                                    </div>
                                    <input
                                        type="range" min="1" max="5"
                                        value={energy} onChange={(e) => setEnergy(parseInt(e.target.value))}
                                        className="w-full h-2 bg-[#FAF7F2] rounded-full appearance-none cursor-pointer accent-[#FF8C7A]"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        value={notes} onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Soft whispers to your future self..."
                                        className="w-full p-6 rounded-[2rem] border border-[#C8B6E2]/10 bg-[#FAF7F2]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FF8C7A]/5 text-lg italic transition-all placeholder:text-[#5A3E6B]/20"
                                        rows={4}
                                    />
                                </div>

                                <button type="submit" className="w-full bloom-btn-primary py-6 rounded-[2rem] text-lg shadow-2xl flex items-center justify-center gap-3 group">
                                    Archive this moment <SparklesIcon className="w-5 h-5 group-hover:scale-125 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Reflection History */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <h2 className="font-serif text-3xl text-[#5A3E6B] px-4">Journal Archive</h2>
                        <div className="space-y-6 overflow-y-auto max-h-[600px] no-scrollbar pr-4 -mx-4 px-4 pb-8">
                            {reflections.map((r, i) => (
                                <div key={r.id} className="bloom-card bg-white shadow-xl border-none p-10 hover:translate-x-2 transition-all duration-500">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF8C7A]">{r.date}</span>
                                        <span className="text-xl">{MOODS.find(m => m.label.toLowerCase() === r.mood.toLowerCase())?.icon || '✨'}</span>
                                    </div>
                                    <h4 className="font-serif text-2xl mb-4 text-[#5A3E6B]">{r.mood}</h4>
                                    <p className="text-[#5A3E6B]/60 text-lg leading-relaxed italic mb-8 border-l-2 border-[#FAF7F2] pl-6 line-clamp-3">"{r.notes}"</p>
                                    <div className="flex items-center gap-2">
                                        {[1, 2, 3, 4, 5].map(v => (
                                            <div key={v} className={`w-3 h-1.5 rounded-full ${v <= r.energy ? 'bg-[#FF8C7A]' : 'bg-[#FAF7F2]'}`} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
