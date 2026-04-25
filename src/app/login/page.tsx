'use client';

import React from 'react';
import { signIn } from "next-auth/react";

const FlowerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flower2 w-12 h-12 text-[#FF8C7A]" aria-hidden="true">
    <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
    <circle cx="12" cy="8" r="2" />
    <path d="M12 10v12" />
    <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
    <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
  </svg>
);

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
)

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl p-10 md:p-14 text-center animate-fade-in-up">
                <div className="flex justify-center mb-6">
                    <FlowerIcon />
                </div>
                <h1 className="font-serif text-4xl text-[#5A3E6B] mb-4">Welcome to Bloom</h1>
                <p className="text-[#5A3E6B]/60 mb-10 leading-relaxed">
                    A gentler way to move and nourish your body. Sign in to start your journey.
                </p>

                <button 
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    className="w-full h-14 flex items-center justify-center bg-white border border-[#C8B6E2]/40 rounded-full hover:bg-[#FAF7F2] transition-all text-[#5A3E6B] font-medium shadow-sm hover:shadow-md"
                >
                    <GoogleIcon />
                    Continue with Google
                </button>

                <p className="mt-8 text-xs text-[#5A3E6B]/40 leading-relaxed">
                    By signing in, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
}
