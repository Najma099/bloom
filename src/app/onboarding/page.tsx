'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';

const SparklesIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-5 h-5"}>
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
    </svg>
)

export default function OnboardingPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        heightFt: '5',
        heightIn: '4',
        dietary: '',
        allergies: '',
        workoutPersona: 'Yoga', // Default
        goal: '',
        cycleLength: '',
        lastPeriodStartDate: '',
        lastPeriodEndDate: ''
    });

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    const validateStep = () => {
        setError('');
        if (step === 1) {
            if (!formData.age || !formData.weight) {
                setError('Please fill in your age and weight to continue.');
                return false;
            }
        } else if (step === 2) {
            if (!formData.dietary || !formData.goal) {
                setError('Please select your preference and focus.');
                return false;
            }
        } else if (step === 3) {
            if (!formData.lastPeriodStartDate || !formData.lastPeriodEndDate || !formData.cycleLength) {
                setError('Please provide your cycle dates and length.');
                return false;
            }
        }
        return true;
    };

    const handleNext = () => {
        if (validateStep()) {
            if (step < 3) setStep(step + 1);
            else {
                localStorage.setItem('bloom_user_profile', JSON.stringify(formData));
                localStorage.setItem('bloom_onboarding_completed', 'true');
                router.push('/dashboard');
            }
        }
    };

    const handleBack = () => {
        setError('');
        if (step > 1) setStep(step - 1);
    };

    if (status === 'loading') return <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center font-serif italic text-[#5A3E6B]">Blooming...</div>;

    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#5A3E6B] relative overflow-hidden">
            <Navbar activePage="" />

            {/* Background Aesthetics */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF8C7A]/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#C8B6E2]/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <main className="max-w-3xl mx-auto px-6 py-20 relative z-10">
                <div className="mb-16 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/80 border border-white shadow-sm mb-10 text-[10px] tracking-[0.4em] uppercase text-[#FF8C7A] font-black">
                        <SparklesIcon className="w-4 h-4" /> The Beginning of Bloom
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl mb-6 tracking-tight text-[#5A3E6B]">Hello, {session?.user?.name?.split(' ')[0]}</h1>
                    <p className="text-[#5A3E6B]/60 text-xl italic max-w-lg mx-auto leading-relaxed">"Let's map your unique biological resonance to find your perfect flow."</p>
                </div>

                <div className="bloom-card bg-white/80 backdrop-blur-3xl p-10 md:p-16 shadow-[0_40px_100px_-30px_rgba(90,62,107,0.2)] rounded-[4rem] border-none relative overflow-hidden">
                    {/* Progress Visual */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#FAF7F2]">
                        <div 
                            className="h-full bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] transition-all duration-1000 ease-in-out shadow-[0_0_15px_#FF8C7A]" 
                            style={{ width: `${(step / 3) * 100}%` }}
                        />
                    </div>

                    <div className="min-h-[460px] flex flex-col">
                        {error && (
                            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-400 text-red-600 text-sm animate-fade-in">
                                {error}
                            </div>
                        )}

                        {step === 1 && (
                            <div className="animate-fade-in-up">
                                <span className="text-[10px] uppercase font-black tracking-widest text-[#FF8C7A] mb-4 block">Section 01 · Foundations</span>
                                <h2 className="font-serif text-4xl mb-12">The Basics</h2>
                                <div className="space-y-10">
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4 transition-colors group-focus-within:text-[#FF8C7A]">Your Age</label>
                                        <input 
                                            type="number" 
                                            required
                                            placeholder="What's your age?" 
                                            className="w-full p-6 h-20 rounded-[2rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-xl shadow-inner font-serif"
                                            value={formData.age}
                                            onChange={(e) => setFormData({...formData, age: e.target.value})}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="group">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4">Weight (kg)</label>
                                            <input 
                                                type="number" required placeholder="kg" 
                                                className="w-full p-6 h-20 rounded-[2rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-xl shadow-inner font-serif"
                                                value={formData.weight}
                                                onChange={(e) => setFormData({...formData, weight: e.target.value})}
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4">Height (Scrolling Select)</label>
                                            <div className="flex gap-4">
                                                <select 
                                                    className="flex-1 p-6 h-20 rounded-[2rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-xl shadow-inner font-serif appearance-none text-center cursor-pointer"
                                                    value={formData.heightFt}
                                                    onChange={(e) => setFormData({...formData, heightFt: e.target.value})}
                                                >
                                                    {[3,4,5,6,7].map(f => <option key={f} value={f}>{f} ft</option>)}
                                                </select>
                                                <select 
                                                    className="flex-1 p-6 h-20 rounded-[2rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-xl shadow-inner font-serif appearance-none text-center cursor-pointer"
                                                    value={formData.heightIn}
                                                    onChange={(e) => setFormData({...formData, heightIn: e.target.value})}
                                                >
                                                    {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => <option key={i} value={i}>{i} in</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-fade-in-up">
                                <span className="text-[10px] uppercase font-black tracking-widest text-[#FF8C7A] mb-4 block">Section 02 · Harmony</span>
                                <h2 className="font-serif text-4xl mb-6 text-[#5A3E6B]">Nourishment & Joy</h2>
                                
                                <div className="space-y-10">
                                    {/* Dietary */}
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4 transition-colors group-hover:text-[#FF8C7A]">Dietary Rhythm</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Vegetarian', 'Vegan', 'Eggitarian', 'Non-Vegetarian'].map(d => (
                                                <button 
                                                    key={d}
                                                    type="button"
                                                    onClick={() => setFormData({...formData, dietary: d})}
                                                    className={`p-6 rounded-[2rem] text-[10px] font-black tracking-[0.2em] uppercase transition-all border-2 ${formData.dietary === d ? 'bg-[#5A3E6B] text-white border-[#5A3E6B] shadow-lg scale-[1.02]' : 'bg-[#FAF7F2] border-transparent text-[#5A3E6B]/40 hover:border-[#C8B6E2]/30'}`}
                                                >
                                                    {d}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Allergies */}
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4">Any Allergies? <span className="text-[10px] lowercase italic font-normal tracking-normal">(Optional)</span></label>
                                        <input 
                                            type="text" 
                                            placeholder="Nuts, Dairy, Soy... or leave empty" 
                                            className="w-full p-6 h-16 rounded-[1.5rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-lg shadow-inner font-serif"
                                            value={formData.allergies}
                                            onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                                        />
                                    </div>

                                    {/* Persona Drag and Drop */}
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-6">Your Workout Soul <span className="text-[10px] lowercase italic font-normal tracking-normal">(Drag your vibe to choose)</span></label>
                                        
                                        <div className="flex items-center justify-between gap-6 p-4 bg-[#FAF7F2] rounded-[3rem] border border-[#C8B6E2]/20 relative">
                                            {/* Yoga Target */}
                                            <div 
                                                onDragOver={(e) => e.preventDefault()}
                                                onDrop={() => setFormData({...formData, workoutPersona: 'Yoga'})}
                                                className={`flex-1 aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 transition-all duration-500 ${formData.workoutPersona === 'Yoga' ? 'bg-[#EDE6F4] border-2 border-[#C8B6E2] shadow-xl scale-105' : 'bg-white opacity-40 grayscale hover:grayscale-0 hover:opacity-70'}`}
                                            >
                                                <div className="text-3xl mb-3">🧘‍♀️</div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#5A3E6B]">Yoga</span>
                                            </div>

                                            {/* Draggable Vibe */}
                                            <div 
                                                draggable 
                                                onDragStart={(e) => e.dataTransfer.setData('text/plain', 'vibe')}
                                                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8C7A] to-[#E8A0BF] flex items-center justify-center shadow-2xl cursor-grab active:cursor-grabbing hover:scale-110 transition-transform animate-pulse text-white"
                                            >
                                                <SparklesIcon className="w-8 h-8" />
                                            </div>

                                            {/* Exercise Target */}
                                            <div 
                                                onDragOver={(e) => e.preventDefault()}
                                                onDrop={() => setFormData({...formData, workoutPersona: 'Exercise'})}
                                                className={`flex-1 aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 transition-all duration-500 ${formData.workoutPersona === 'Exercise' ? 'bg-[#FCE8DA] border-2 border-[#FF8C7A] shadow-xl scale-105' : 'bg-white opacity-40 grayscale hover:grayscale-0 hover:opacity-70'}`}
                                            >
                                                <div className="text-3xl mb-3">🏋️‍♀️</div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#5A3E6B]">Exercise</span>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-center text-[10px] text-[#5A3E6B]/40 italic">Currently selected: <span className="font-bold text-[#FF8C7A] uppercase">{formData.workoutPersona}</span></p>
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4">Your Intent today</label>
                                        <select 
                                            className="w-full p-6 h-20 rounded-[2rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-xl shadow-inner font-serif appearance-none cursor-pointer px-10"
                                            value={formData.goal}
                                            onChange={(e) => setFormData({...formData, goal: e.target.value})}
                                        >
                                            <option value="">Select your focus...</option>
                                            <option value="Hormone Balance">Hormone Balance</option>
                                            <option value="Weight Management">Weight Management</option>
                                            <option value="Cycle Regularity">Cycle Regularity</option>
                                            <option value="Skin & Hair Health">Skin & Hair Health</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-fade-in-up">
                                <span className="text-[10px] uppercase font-black tracking-widest text-[#FF8C7A] mb-4 block">Section 03 · Rhythm</span>
                                <h2 className="font-serif text-4xl mb-12">The Cycle</h2>
                                <div className="space-y-10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="group">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4">Start of Last Period</label>
                                            <input 
                                                type="date" 
                                                required
                                                className="w-full p-6 h-20 rounded-[2rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-xl shadow-inner font-serif cursor-pointer"
                                                value={formData.lastPeriodStartDate}
                                                onChange={(e) => setFormData({...formData, lastPeriodStartDate: e.target.value})}
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4">End of Last Period</label>
                                            <input 
                                                type="date" 
                                                required
                                                className="w-full p-6 h-20 rounded-[2rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-xl shadow-inner font-serif cursor-pointer"
                                                value={formData.lastPeriodEndDate}
                                                onChange={(e) => setFormData({...formData, lastPeriodEndDate: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#5A3E6B]/40 mb-4">Cycle Length (Days)</label>
                                        <input 
                                            type="number" required placeholder="Usually 28 to 30 days" 
                                            className="w-full p-6 h-20 rounded-[2rem] bg-[#FAF7F2] border-2 border-transparent focus:border-[#E8A0BF]/40 focus:bg-white focus:outline-none transition-all text-xl shadow-inner font-serif"
                                            value={formData.cycleLength}
                                            onChange={(e) => setFormData({...formData, cycleLength: e.target.value})}
                                        />
                                    </div>
                                    <div className="p-8 rounded-[3rem] bg-[#5A3E6B] text-white relative shadow-2xl overflow-hidden group/tip">
                                        <p className="text-sm leading-relaxed italic relative z-10">
                                            "Knowledge is your superpower. These dates help Bloom determine where you are in your cycle so we can suggest the exact nutrients and movements you need today."
                                        </p>
                                        <LeafIcon className="absolute top-0 right-0 w-32 h-32 opacity-20 -mr-16 -mt-16 group-hover/tip:rotate-12 transition-transform duration-1000" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="mt-auto pt-16 flex gap-6">
                            {step > 1 && (
                                <button 
                                    onClick={handleBack}
                                    className="px-10 py-6 rounded-[2rem] border-2 border-[#C8B6E2]/20 text-[#5A3E6B]/40 hover:bg-[#FAF7F2] transition tracking-[0.2em] uppercase text-xs font-black"
                                >
                                    Back
                                </button>
                            )}
                            <button 
                                onClick={handleNext}
                                className="flex-1 bloom-btn-primary py-6 rounded-[2rem] text-lg shadow-[0_20px_50px_-10px_rgba(255,140,122,0.4)] hover:shadow-[0_30px_70px_-10px_rgba(255,140,122,0.6)] hover:translate-y-[-4px] active:translate-y-0 active:shadow-none transition-all"
                            >
                                {step === 3 ? "Start Blooming" : "Stay Focused · Next"}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

const LeafIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);
