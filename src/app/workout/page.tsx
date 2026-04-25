'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';

// Icons
const PlayIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className || "w-8 h-8"}>
        <path d="M8 5v14l11-7z" />
    </svg>
)

const PauseIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className || "w-8 h-8"}>
        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
    </svg>
)

const StopIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className || "w-8 h-8"}>
        <rect x="6" y="6" width="12" height="12" />
    </svg>
)

const SkipForwardIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-6 h-6"}>
        <path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path>
    </svg>
)

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#A8C3A0]">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
)

const TimerIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-5 h-5"}>
        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
    </svg>
)

const exercises = [
    { id: 1, title: "Half Moon Pose", durationSec: 30, color: "#EDE6F4", videoUrl: "/assets/video/half_moon_pose.mp4", benefits: ["Lateral balance", "Hip opening", "Nervous system calm"] },
    { id: 2, title: "Warrior II Flow", durationSec: 30, color: "#FCE8DA", videoUrl: "/assets/video/warrior-2.mp4", benefits: ["Lower body strength", "Hip mobility", "Endurance & Focus"] },
    { id: 3, title: "Forward Lunges", durationSec: 30, color: "#DDEBD7", videoUrl: "/assets/video/Forward_lunges.mp4", benefits: ["Leg strength", "Grounding presence", "Stability"] },
    { id: 4, title: "Stability Plank", durationSec: 30, color: "#FF8C7A22", videoUrl: "/assets/video/plank.mp4", benefits: ["Deep core power", "Back stability", "Pelvic floor connection"] }
]

export default function WorkoutPage() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isPaused, setIsPaused] = useState(true);
    const [isBreak, setIsBreak] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const currentExercise = exercises[currentIdx];

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (!isPaused && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && !isPaused) {
            handleAutoNext();
        }
        return () => clearInterval(timer);
    }, [isPaused, timeLeft]);

    const handleAutoNext = () => {
        if (!isBreak) {
            setIsBreak(true);
            setTimeLeft(30);
            if (videoRef.current) videoRef.current.pause();
        } else {
            handleSkip();
        }
    };

    const handleSkip = () => {
        if (isBreak) {
            const nextIdx = currentIdx + 1;
            if (nextIdx < exercises.length) {
                setCurrentIdx(nextIdx);
                setTimeLeft(exercises[nextIdx].durationSec);
                setIsBreak(false);
                setIsPaused(false);
                if (videoRef.current) videoRef.current.play().catch(() => {});
            } else {
                handleComplete();
            }
        } else {
            setIsBreak(true);
            setTimeLeft(30);
            setIsPaused(false); // Auto start break timer
            if (videoRef.current) videoRef.current.pause();
        }
    };

    const handleComplete = () => {
        alert("Workout Complete! You've bloomed today.");
        setIsPaused(true);
        setCurrentIdx(0);
        setTimeLeft(30);
        setIsBreak(false);
    }

    const togglePlay = () => {
        const nextPaused = !isPaused;
        setIsPaused(nextPaused);
        if (videoRef.current) {
            if (!nextPaused) videoRef.current.play().catch(() => {});
            else videoRef.current.pause();
        }
    };

    const handleStop = () => {
        setIsPaused(true);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setTimeLeft(isBreak ? 30 : exercises[currentIdx].durationSec);
    };

    const formatTime = (seconds: number) => {
        if (isBreak) return seconds.toString();
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#5A3E6B]">
            <Navbar activePage="move" />

            <main className="max-w-7xl mx-auto px-6 md:px-10 py-10 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    
                    <div className="lg:w-[65%]">
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-black border-8 border-white group">
                            {isBreak ? (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#5A3E6B] to-[#3E2B4B] flex flex-col items-center justify-center text-white p-12 text-center animate-fade-in">
                                    <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF8C7A] mb-8">Rest Interval</div>
                                    <h2 className="font-serif text-5xl mb-6">Take a Breath</h2>
                                    <div className="text-9xl font-serif mb-12">{timeLeft}</div>
                                    
                                    <div className="flex gap-4">
                                        <button onClick={togglePlay} className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-white hover:text-[#5A3E6B] transition-all">
                                            {isPaused ? <PlayIcon className="w-6 h-6" /> : <PauseIcon className="w-6 h-6" />}
                                        </button>
                                        <button onClick={handleSkip} className="px-8 py-4 rounded-full bg-[#FF8C7A] text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all">
                                            Skip Break <SkipForwardIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <video 
                                        ref={videoRef}
                                        src={currentExercise.videoUrl} 
                                        className="absolute inset-0 w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E6B]/60 via-transparent to-transparent flex flex-col justify-end p-12">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h1 className="font-serif text-5xl text-white mb-2">{currentExercise.title}</h1>
                                                <div className="flex items-center gap-4 text-white/70 font-medium uppercase tracking-widest text-sm">
                                                    <TimerIcon className="w-4 h-4" /> {formatTime(timeLeft)}
                                                </div>
                                            </div>
                                            
                                            {/* TIMER CONTROLS CONSOLE */}
                                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl p-3 rounded-[2.5rem] border border-white/20 shadow-2xl">
                                                <button 
                                                    onClick={togglePlay}
                                                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isPaused ? 'bg-[#FF8C7A] text-white hover:scale-110' : 'bg-white/20 text-white hover:bg-white/30'}`}
                                                    title={isPaused ? "Start" : "Pause"}
                                                >
                                                    {isPaused ? <PlayIcon className="w-6 h-6" /> : <PauseIcon className="w-6 h-6" />}
                                                </button>
                                                <button 
                                                    onClick={handleStop}
                                                    className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500 transition-all"
                                                    title="Stop"
                                                >
                                                    <StopIcon className="w-6 h-6" />
                                                </button>
                                                <button 
                                                    onClick={handleSkip}
                                                    className="w-14 h-14 rounded-full bg-white text-[#5A3E6B] flex items-center justify-center hover:scale-110 transition-all"
                                                    title="Skip"
                                                >
                                                    <SkipForwardIcon className="w-6 h-6" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="mt-8 h-2 bg-white rounded-full overflow-hidden shadow-inner">
                            <div 
                                className="h-full bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] transition-all duration-1000 shadow-[0_0_10px_#FF8C7A]" 
                                style={{ width: `${((currentIdx + (isBreak ? 0.5 : 0)) / (exercises.length)) * 100}%` }}
                            />
                        </div>

                        <div className="mt-12 grid md:grid-cols-2 gap-10">
                            <div>
                                <h2 className="font-serif text-3xl mb-6">About this flow</h2>
                                <p className="text-[#5A3E6B]/70 line-height-relaxed text-lg italic mb-6">"{currentExercise.benefits[0]} focuses on grounding your energy while building subtle internal heat."</p>
                                <div className="space-y-3">
                                    {currentExercise.benefits.map((b, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#C8B6E2]/10">
                                            <CheckCircleIcon /> {b}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bloom-card bg-white text-[#5A3E6B] p-10 flex flex-col justify-between relative overflow-hidden shadow-xl border-none">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <TimerIcon className="w-24 h-24" />
                                </div>
                                <h3 className="font-serif text-3xl mb-6">Cycle Rhythm</h3>
                                <p className="text-[#5A3E6B]/70 text-lg leading-relaxed italic mb-8 border-l-4 border-[#FF8C7A]/20 pl-6">
                                    "Movement is medicine when it listens to your body. Today's flow is designed to be gentle but effective for your current phase."
                                </p>
                                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#FF8C7A]">Tuned to your hormone health</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[35%]">
                        <div className="bloom-card bg-white shadow-xl h-fit p-8 flex flex-col">
                            <h3 className="font-serif text-3xl mb-8">Today's Flow</h3>
                            <div className="space-y-4">
                                {exercises.map((ex, idx) => (
                                    <button 
                                        key={ex.id}
                                        onClick={() => {
                                            setCurrentIdx(idx);
                                            setTimeLeft(ex.durationSec);
                                            setIsBreak(false);
                                            setIsPaused(true);
                                        }}
                                        className={`w-full flex items-center gap-5 p-4 rounded-3xl border-2 transition-all ${currentIdx === idx ? 'bg-[#FAF7F2] border-[#FF8C7A]' : 'bg-white border-transparent opacity-60 hover:opacity-100'}`}
                                    >
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner" style={{ backgroundColor: ex.color }}>
                                            <TimerIcon className="w-6 h-6 opacity-40" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-serif text-lg">{ex.title}</h4>
                                            <p className="text-[10px] font-bold text-[#FF8C7A] uppercase tracking-widest">30 Sec</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
