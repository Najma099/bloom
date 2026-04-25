'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import Navbar from '@/components/Navbar';

// Icons
const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M8 5v14l11-7z" />
    </svg>
)

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#A8C3A0]">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
)

const exercises = [
    {
        id: 1,
        title: "Gentle Morning Flow",
        duration: "5 min",
        description: "A soft opening for your body, focusing on breath and light spinal movements to wake up your energy centers.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
        videoUrl: "/assets/video/WhatsApp Video 2026-04-25 at 13.28.54.mp4"
    },
    {
        id: 2,
        title: "Luteal Core Stability",
        duration: "8 min",
        description: "Low-impact core engagement designed to provide stability and support for the lower back during your luteal phase.",
        image: "https://images.unsplash.com/photo-1518611012118-29600000a646?q=80&w=800",
        videoUrl: "/assets/video/WhatsApp Video 2026-04-25 at 14.30.05.mp4"
    },
    {
        id: 3,
        title: "Restorative Hip Release",
        duration: "10 min",
        description: "Longer holds in seated and supine positions to release tension in the hips and psoas, soothing the nervous system.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
        videoUrl: "/assets/video/WhatsApp Video 2026-04-25 at 14.25.11.mp4"
    },
    {
        id: 4,
        title: "Breath & Bloom Meditation",
        duration: "5 min",
        description: "A guided visualization and breathwork session to ground your energy and connect with your inner rhythm.",
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800",
        videoUrl: "/assets/video/WhatsApp Video 2026-04-25 at 14.24.07.mp4"
    }
]

export default function WorkoutPage() {
    const [currentExercise, setCurrentExercise] = useState(exercises[0]);

    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#5A3E6B]">
            <Navbar activePage="move" />

            <main className="max-w-7xl mx-auto px-6 md:px-10 py-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* VIDEO PLAYER SECTION */}
                    <div className="lg:w-2/3">
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group">
                            {/* In a real app, this would be a <video> or <iframe> */}
                            <video
                                src={currentExercise.videoUrl}
                                poster={currentExercise.image}
                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                muted
                                loop
                                autoPlay
                                playsInline
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all transform hover:scale-110">
                                    <PlayIcon />
                                </button>
                            </div>

                            <div className="absolute bottom-6 left-8 right-8">
                                <h1 className="font-serif text-3xl text-white mb-2">{currentExercise.title}</h1>
                                <div className="flex items-center gap-4 text-white/80 text-sm">
                                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">{currentExercise.duration}</span>
                                    <span>Luteal Phase Recovery</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bloom-card">
                            <h2 className="font-serif text-2xl mb-4">About this movement</h2>
                            <p className="text-[#5A3E6B]/80 leading-relaxed text-lg">
                                {currentExercise.description}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-4">
                                <span className="flex items-center gap-2 text-sm text-[#5A3E6B]/60">
                                    <CheckCircleIcon /> Eases lower back pain
                                </span>
                                <span className="flex items-center gap-2 text-sm text-[#5A3E6B]/60">
                                    <CheckCircleIcon /> Calms the nervous system
                                </span>
                                <span className="flex items-center gap-2 text-sm text-[#5A3E6B]/60">
                                    <CheckCircleIcon /> Supports pelvic circulation
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* PLAYLIST SECTION */}
                    <div className="lg:w-1/3">
                        <div className="bloom-card h-full">
                            <div className="mb-6">
                                <h3 className="font-serif text-xl mb-1">Today's Flow</h3>
                                <p className="text-sm text-[#5A3E6B]/60 tracking-wider uppercase">3 Movements · 10 Minutes Total</p>
                            </div>

                            <div className="space-y-4">
                                {exercises.map((ex) => (
                                    <button
                                        key={ex.id}
                                        onClick={() => setCurrentExercise(ex)}
                                        className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 border-2 ${currentExercise.id === ex.id ? 'bg-[#C8B6E2]/10 border-[#C8B6E2]/30' : 'bg-white/40 border-transparent hover:border-[#C8B6E2]/10'}`}
                                    >
                                        <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                            <img src={ex.image} alt={ex.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-medium text-[#5A3E6B] leading-tight">{ex.id}. {ex.title}</h4>
                                            <p className="text-xs text-[#5A3E6B]/50 mt-1">{ex.duration}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button className="w-full mt-8 bloom-btn-primary py-4 rounded-2xl flex items-center justify-center gap-2 text-lg shadow-lg">
                                Finish Workout
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
