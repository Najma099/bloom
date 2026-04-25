'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

// Icons
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-5 h-5" aria-hidden="true">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-5 h-5" aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
);

const TrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-5 h-5" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-3.5 h-3.5" aria-hidden="true">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
        <path d="M4 17v2"></path>
        <path d="M5 18H3"></path>
    </svg>
);

const LeafIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
);

const MOODS = ['calm', 'energetic', 'tired', 'sensitive', 'joyful'];

const WEEK_DATA = [
    { day: 'Sun', energy: 30 },
    { day: 'Mon', energy: 45 },
    { day: 'Tue', energy: 85 },
    { day: 'Wed', energy: 70 },
    { day: 'Thu', energy: 95 },
    { day: 'Fri', energy: 60 },
    { day: 'Sat', energy: 40 },
];

export default function ProgressPage() {
    const [selectedMood, setSelectedMood] = useState('calm');
    const [energy, setEnergy] = useState(3);
    const [notes, setNotes] = useState('');
    const [reflections, setReflections] = useState<any[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReflection = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            mood: selectedMood,
            energy,
            notes
        };
        setReflections([newReflection, ...reflections]);
        setNotes('');
    };

    return (
        <div className="min-h-screen bg-[#FAF7F2]" data-testid="progress-page">
            <Navbar activePage="progress" />

            <main className="max-w-6xl mx-auto px-6 md:px-10 py-10">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="text-xs tracking-widest uppercase text-[#5A3E6B]/50 mb-1">A gentle look back</p>
                        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">Your week, beautifully.</h1>
                    </div>
                    {/* VISUAL ELEMENT: ILLUSTRATION PLACEHOLDER */}
                    <div className="hidden md:block w-32 h-32 rounded-full bg-gradient-to-br from-[#E8A0BF]/20 to-[#FF8C7A]/20 blur-2xl animate-pulse" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bloom-card bg-gradient-to-br from-[#FCE8DA] to-white border-none shadow-sm flex flex-col justify-between" data-testid="stat-checkins">
                        <div className="bg-white/50 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[#FF8C7A]">
                            <CalendarIcon />
                        </div>
                        <div>
                            <p className="font-serif text-5xl mb-1 text-[#5A3E6B]">5</p>
                            <p className="text-sm text-[#5A3E6B]/70">days you showed up this week</p>
                        </div>
                    </div>

                    <div className="bloom-card bg-gradient-to-br from-[#DDEBD7] to-white border-none shadow-sm flex flex-col justify-between" data-testid="stat-workouts">
                        <div className="bg-white/50 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[#A8C3A0]">
                            <HeartIcon />
                        </div>
                        <div>
                            <p className="font-serif text-5xl mb-1 text-[#5A3E6B]">12</p>
                            <p className="text-sm text-[#5A3E6B]/70">gentle movements completed</p>
                        </div>
                    </div>

                    <div className="bloom-card bg-gradient-to-br from-[#EDE6F4] to-white border-none shadow-sm flex flex-col justify-between" data-testid="stat-energy">
                        <div className="bg-white/50 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[#5A3E6B]">
                            <TrendingUpIcon />
                        </div>
                        <div>
                            <p className="font-serif text-5xl mb-1 text-[#5A3E6B]">3.8<span className="text-xl opacity-40">/5</span></p>
                            <p className="text-sm text-[#5A3E6B]/70">average energy you felt</p>
                        </div>
                    </div>
                </div>

                {/* ENERGY CHART */}
                <div className="bloom-card mb-10 relative overflow-hidden group">
                    {/* Visual accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8A0BF]/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 relative z-10 gap-4">
                        <div>
                            <h2 className="font-serif text-3xl text-[#5A3E6B]">Energy this week</h2>
                            <p className="text-sm text-[#FF8C7A] font-bold mt-1 uppercase tracking-[0.2em]">No streaks. Just rhythm.</p>
                        </div>
                        <div className="bg-[#FAF7F2] px-6 py-3 rounded-2xl border border-[#C8B6E2]/20">
                            <p className="text-[10px] text-[#5A3E6B]/40 uppercase tracking-widest font-bold mb-1">Rhythm Philosophy</p>
                            <p className="text-xs text-[#5A3E6B]/70 leading-relaxed italic">"Linear progress is a myth. Healing travels in circles. Some days we bloom, some days we rest."</p>
                        </div>
                    </div>

                    <div className="flex items-end gap-3 h-64 relative z-10 px-2">
                        {WEEK_DATA.map((data, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4">
                                <div 
                                    className="w-full rounded-t-full bg-gradient-to-t from-[#C8B6E2]/30 via-[#E8A0BF]/50 to-[#FF8C7A]/70 transition-all duration-1000 ease-out hover:brightness-110 cursor-pointer group/bar relative"
                                    style={{ height: `${data.energy}%`, minHeight: '16px' }}
                                >
                                    <div className="opacity-0 group-hover/bar:opacity-100 absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-[#5A3E6B] text-white text-[10px] py-1.5 px-3 rounded-xl transition-all whitespace-nowrap shadow-xl">
                                        Rhythm: {Math.round(data.energy/10)}%
                                    </div>
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-[#5A3E6B]/30">{data.day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CYCLE RHYTHM VISUAL SECTION */}
                <div className="mb-10">
                    <h2 className="font-serif text-2xl mb-6 text-[#5A3E6B]">Cycle Rhythm</h2>
                    <div className="bloom-card bg-white relative overflow-hidden p-0">
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="md:w-1/3 bg-gradient-to-br from-[#E8A0BF] to-[#FF8C7A] p-8 text-white flex flex-col justify-between">
                                <div>
                                    <h3 className="font-serif text-3xl mb-4 text-white">Luteal Phase</h3>
                                    <p className="text-white/80 leading-relaxed text-sm">
                                        You are currently in your Luteal phase. Your body is naturally slowing down, preparing for rest. It's a beautiful time for grounding and soft reflections.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                        <LeafIcon className="w-6 h-6" />
                                    </div>
                                    <div className="text-xs uppercase tracking-[0.2em] font-bold">14 days left</div>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8">
                                <div className="grid grid-cols-4 gap-4 h-full">
                                    {[
                                        { name: 'Menstrual', color: '#C8B6E2', active: false },
                                        { name: 'Follicular', color: '#FCE8DA', active: false },
                                        { name: 'Ovulatory', color: '#FF8C7A', active: false },
                                        { name: 'Luteal', color: '#E8A0BF', active: true },
                                    ].map((p, i) => (
                                        <div key={i} className="flex flex-col items-center gap-3">
                                            <div 
                                                className={`w-full aspect-square rounded-3xl transition-all duration-500 flex items-center justify-center ${p.active ? 'scale-110 shadow-xl border-4 border-white' : 'opacity-40 grayscale-[0.5]'}`}
                                                style={{ backgroundColor: p.color }}
                                            >
                                                {p.active && <SparklesIcon />}
                                            </div>
                                            <span className={`text-[10px] uppercase tracking-widest font-bold ${p.active ? 'text-[#5A3E6B]' : 'text-[#5A3E6B]/40'}`}>{p.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-4 rounded-2xl bg-[#FAF7F2] border border-[#C8B6E2]/20">
                                    <p className="text-xs text-[#5A3E6B]/70 leading-relaxed italic">
                                        "This week's focus: Softness over strength. Your reflection today showed a 20% increase in calm compared to last month."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* REFLECTION FORM */}
                    <form onSubmit={handleSubmit} className="lg:col-span-3 bloom-card bg-white" data-testid="checkin-form">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF8C7A] mb-6 font-bold">
                            <SparklesIcon /> Today's gentle check-in
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="text-sm font-serif text-[#5A3E6B] block mb-3">How does your heart feel today?</label>
                                <div className="flex flex-wrap gap-2">
                                    {MOODS.map((m) => (
                                        <button 
                                            key={m}
                                            type="button" 
                                            onClick={() => setSelectedMood(m)}
                                            data-testid={`checkin-mood-${m}`} 
                                            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${selectedMood === m ? 'bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] text-white shadow-lg scale-105' : 'bg-[#FAF7F2] text-[#5A3E6B]/70 border border-[#C8B6E2]/20 hover:border-[#E8A0BF]/40'}`}
                                        >
                                            {m}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-serif text-[#5A3E6B] block mb-3">Today's energy level ({energy}/5)</label>
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="5" 
                                    value={energy}
                                    onChange={(e) => setEnergy(parseInt(e.target.value))}
                                    data-testid="checkin-energy" 
                                    className="w-full accent-[#FF8C7A] h-2 bg-[#FAF7F2] rounded-full appearance-none cursor-pointer" 
                                />
                                <div className="flex justify-between mt-2 px-1">
                                    <span className="text-[10px] uppercase text-[#5A3E6B]/30 tracking-widest">Gently resting</span>
                                    <span className="text-[10px] uppercase text-[#5A3E6B]/30 tracking-widest">Full glow</span>
                                </div>
                            </div>

                            <div>
                                <textarea 
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Any small notes for future-you..." 
                                    data-testid="checkin-notes" 
                                    className="w-full p-4 rounded-3xl border border-[#C8B6E2]/20 bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E8A0BF]/20 text-sm resize-none transition-all placeholder:text-[#5A3E6B]/30" 
                                    rows={4} 
                                />
                            </div>

                            <button type="submit" data-testid="checkin-submit" className="bloom-btn-primary w-full py-4 rounded-3xl text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                                Save this moment
                            </button>
                        </div>
                    </form>

                    {/* RECENT REFLECTIONS */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bloom-card border-none bg-[#C8B6E2]/10 h-full">
                            <h3 className="font-serif text-2xl mb-6 text-[#5A3E6B]">Recent reflections</h3>
                            
                            {reflections.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C8B6E2]">
                                        <SparklesIcon />
                                    </div>
                                    <p className="text-sm text-[#5A3E6B]/50 max-w-[180px] mx-auto leading-relaxed italic">
                                        No reflections yet. Whenever you're ready, we'll keep them safe.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {reflections.map((r) => (
                                        <div key={r.id} className="p-4 bg-white rounded-2xl shadow-sm border border-[#C8B6E2]/10 animate-fade-in-up">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="text-[10px] uppercase tracking-widest text-[#FF8C7A] font-bold">{r.date}</div>
                                                <div className="px-2 py-0.5 bg-[#FAF7F2] rounded-full text-[10px] text-[#5A3E6B]/60">{r.mood}</div>
                                            </div>
                                            <p className="text-sm text-[#5A3E6B] font-serif mb-1">Energy Level: {r.energy}/5</p>
                                            {r.notes && <p className="text-xs text-[#5A3E6B]/70 italic line-clamp-2 mt-1">"{r.notes}"</p>}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* EXTRA VISUAL: FLOWERS IMAGE PLACEHOLDER */}
                            <div className="mt-8 rounded-3xl overflow-hidden aspect-[4/3] relative group">
                                <img 
                                    src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80" 
                                    alt="Flowers" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E6B]/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white text-xs font-serif italic">"Growth is not always visible, but it's always happening."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            {/* BACKGROUND DECORATIONS */}
            <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-[#DDEBD7]/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="fixed -top-32 -right-32 w-96 h-96 bg-[#FCE8DA]/30 rounded-full blur-[100px] pointer-events-none" />
        </div>
    );
}
