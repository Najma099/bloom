'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';

export default function OnboardingPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        height: '',
        dietary: 'Vegetarian',
        goal: 'Hormone Balance',
        cycleLength: '28'
    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else {
            // Save to local storage for mock persistence
            localStorage.setItem('bloom_onboarding_completed', 'true');
            router.push('/dashboard');
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#5A3E6B]">
            <div className="max-w-xl mx-auto px-6 py-20">
                <div className="mb-12 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-[#FF8C7A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF8C7A]"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
                    </div>
                    <h1 className="font-serif text-4xl mb-3">Welcome to Bloom, {session?.user?.name?.split(' ')[0]}</h1>
                    <p className="text-[#5A3E6B]/60">Let's tailor your journey to your unique rhythm.</p>
                </div>

                <div className="bloom-card p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#FAF7F2]">
                        <div
                            className="h-full bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] transition-all duration-500"
                            style={{ width: `${(step / 3) * 100}%` }}
                        />
                    </div>

                    {step === 1 && (
                        <div className="animate-fade-in-up">
                            <h2 className="font-serif text-2xl mb-8">The Basics</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">How old are you?</label>
                                    <input
                                        type="number"
                                        placeholder="Age"
                                        className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-none focus:ring-2 focus:ring-[#E8A0BF]"
                                        value={formData.age}
                                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                                        <input
                                            type="number"
                                            placeholder="kg"
                                            className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-none focus:ring-2 focus:ring-[#E8A0BF]"
                                            value={formData.weight}
                                            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Height (cm)</label>
                                        <input
                                            type="number"
                                            placeholder="cm"
                                            className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-none focus:ring-2 focus:ring-[#E8A0BF]"
                                            value={formData.height}
                                            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-fade-in-up">
                            <h2 className="font-serif text-2xl mb-8">Nourishment & Goals</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Dietary Preference</label>
                                    <select
                                        className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-none focus:ring-2 focus:ring-[#E8A0BF]"
                                        value={formData.dietary}
                                        onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                                    >
                                        <option>Vegetarian</option>
                                        <option>Vegan</option>
                                        <option>Eggitarian</option>
                                        <option>Non-Vegetarian</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Primary Goal</label>
                                    <select
                                        className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-none focus:ring-2 focus:ring-[#E8A0BF]"
                                        value={formData.goal}
                                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                    >
                                        <option>Hormone Balance</option>
                                        <option>Weight Management</option>
                                        <option>Cycle Regularity</option>
                                        <option>Skin & Hair Health</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-fade-in-up">
                            <h2 className="font-serif text-2xl mb-8">Cycle Details</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Average Cycle Length (days)</label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 28"
                                        className="w-full p-4 rounded-2xl bg-[#FAF7F2] border-none focus:ring-2 focus:ring-[#E8A0BF]"
                                        value={formData.cycleLength}
                                        onChange={(e) => setFormData({ ...formData, cycleLength: e.target.value })}
                                    />
                                </div>
                                <p className="text-sm text-[#5A3E6B]/60 italic">
                                    Don't worry, we'll help you track this as we go. Bloom is about finding your natural rhythm, not perfection.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="mt-12 flex gap-4">
                        {step > 1 && (
                            <button
                                onClick={handleBack}
                                className="flex-1 p-4 rounded-2xl border border-[#C8B6E2]/20 text-[#5A3E6B]/60 hover:bg-[#FAF7F2] transition"
                            >
                                Back
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            className="flex-[2] bloom-btn-primary py-4 rounded-2xl shadow-xl"
                        >
                            {step === 3 ? "Let's Bloom" : "Next Step"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
