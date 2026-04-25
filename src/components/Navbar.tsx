'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

const FlowerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flower2 w-6 h-6 text-[#FF8C7A] group-hover:rotate-12 transition-transform" aria-hidden="true">
        <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path>
        <circle cx="12" cy="8" r="2"></circle>
        <path d="M12 10v12"></path>
        <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path>
        <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path>
    </svg>
);

const LogOutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out w-4 h-4" aria-hidden="true">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" x2="9" y1="12" y2="12"></line>
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const SwapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m16 3 4 4-4 4"></path>
        <path d="M20 7H9a2 2 0 0 0-2 2v10"></path>
        <path d="m8 21-4-4 4-4"></path>
        <path d="M4 17h11a2 2 0 0 0 2-2V5"></path>
    </svg>
);

interface NavbarProps {
    activePage: 'today' | 'move' | 'nourish' | 'insights' | 'progress';
}

export default function Navbar({ activePage }: NavbarProps) {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const userName = session?.user?.name || "Najma";
    const userEmail = session?.user?.email || "najma@bloom.com";
    const userImage = session?.user?.image || "https://lh3.googleusercontent.com/a/ACg8ocLRly232sRk48m6rcVjxp-3O5arB7ec-R4a6sMvSONwHYavyv2F=s96-c";

    const navLinks = [
        { label: 'Today', href: '/dashboard', id: 'today' },
        { label: 'Move', href: '/workout', id: 'move' },
        { label: 'Nourish', href: '/meals', id: 'nourish' },
        { label: 'Insights', href: '/insights', id: 'insights' },
        { label: 'Progress', href: '/progress', id: 'progress' },
    ];

    return (
        <nav className="sticky top-0 z-50 glass border-b border-[#C8B6E2]/20" data-testid="app-navbar">
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-2 group" data-testid="nav-logo">
                    <FlowerIcon />
                    <span className="font-serif text-2xl text-[#5A3E6B] tracking-tight">Bloom</span>
                </Link>

                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.id}
                            data-testid={`nav-link-${link.id}`} 
                            className={`px-4 py-2 rounded-full text-sm transition-all ${activePage === link.id ? 'bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] text-white shadow-md' : 'text-[#5A3E6B]/70 hover:text-[#5A3E6B] hover:bg-[#C8B6E2]/15'}`} 
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="relative flex items-center gap-3">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-[#C8B6E2]/10 transition-all border border-transparent hover:border-[#C8B6E2]/20"
                    >
                        <img 
                            alt={userName} 
                            className="w-9 h-9 rounded-full border-2 border-white shadow-sm" 
                            src={userImage} 
                        />
                        <div className="hidden sm:block text-left">
                            <div className="text-[10px] uppercase tracking-widest text-[#5A3E6B]/40 font-bold leading-none mb-1">Account</div>
                            <div className="text-xs text-[#5A3E6B] font-medium leading-none">{userName.split(' ')[0]}</div>
                        </div>
                    </button>

                    {/* DROPDOWN MENU */}
                    {isMenuOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)} />
                            <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-3xl shadow-2xl border border-[#C8B6E2]/20 p-2 z-20 animate-fade-in-up origin-top-right">
                                <div className="p-4 border-b border-[#C8B6E2]/10">
                                    <div className="flex items-center gap-3">
                                        <img src={userImage} alt="" className="w-10 h-10 rounded-full border-2 border-[#E8A0BF]/20" />
                                        <div className="overflow-hidden">
                                            <div className="text-sm font-serif text-[#5A3E6B] truncate">{userName}</div>
                                            <div className="text-[10px] text-[#5A3E6B]/50 truncate">{userEmail}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 space-y-1">
                                    <button className="w-full h-10 px-3 rounded-xl hover:bg-[#FAF7F2] transition flex items-center gap-3 text-sm text-[#5A3E6B]/70 hover:text-[#5A3E6B]">
                                        <UserIcon /> Profile
                                    </button>
                                    <button className="w-full h-10 px-3 rounded-xl hover:bg-[#FAF7F2] transition flex items-center gap-3 text-sm text-[#5A3E6B]/70 hover:text-[#5A3E6B]">
                                        <SettingsIcon /> Settings
                                    </button>
                                    <button 
                                        onClick={() => signOut({ callbackUrl: '/home' })}
                                        className="w-full h-10 px-3 rounded-xl hover:bg-[#FAF7F2] transition flex items-center gap-3 text-sm text-[#FF8C7A] hover:text-[#FF8C7A]"
                                    >
                                        <SwapIcon /> Switch Account
                                    </button>
                                </div>
                                <div className="mt-2 p-2 border-t border-[#C8B6E2]/10">
                                    <button 
                                        onClick={() => signOut({ callbackUrl: '/home' })}
                                        className="w-full h-10 px-3 rounded-xl hover:bg-red-50 transition flex items-center gap-3 text-sm text-red-500"
                                    >
                                        <LogOutIcon /> Sign Out
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            
            {/* MOBILE NAV (Sub) */}
            <div className="md:hidden flex overflow-x-auto no-scrollbar gap-2 px-4 pb-3" data-testid="mobile-nav">
                {navLinks.map((link) => (
                    <Link 
                        key={link.id}
                        data-testid={`nav-mobile-link-${link.id}`} 
                        className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${activePage === link.id ? 'bg-gradient-to-r from-[#E8A0BF] to-[#FF8C7A] text-white shadow-md' : 'bg-white/60 text-[#5A3E6B]/80'}`} 
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
