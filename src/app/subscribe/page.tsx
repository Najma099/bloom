'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
    <circle cx="12" cy="8" r="2" />
    <path d="M12 10v12" />
    <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
    <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function SubscriptionPage() {
  const router = useRouter();

  const plans = [
    {
      id: 'free',
      name: 'Freemium Trial',
      price: '0',
      period: '· 5 days',
      description: 'Experience the soft resonance of Bloom.',
      features: [
        'Introductory workouts',
        'Daily meal inspirations',
        'Basic cycle tracking',
        'Morning daily whispers',
      ],
      theme: 'secondary'
    },
    {
      id: 'monthly',
      name: 'Monthly Bloom',
      price: '199',
      period: '/ month',
      description: 'Perfect for starting your cycle-syncing journey.',
      features: [
        'Full access to all workouts',
        'Daily Smart Indian Meals',
        'Personalized cycle tracking',
        'Insightful hormone nudges',
        'Energy landscape charts'
      ],
      theme: 'default'
    },
    {
      id: 'yearly',
      name: 'Annual Bloom',
      price: '1999',
      period: '/ year',
      description: 'The best value for long-term hormonal harmony.',
      features: [
        'Everything in Monthly',
        '2 months for free',
        'Exclusive seasonal guides',
        'Long-term progress trends',
        'Priority feature access'
      ],
      popular: true,
      theme: 'primary'
    }
  ];

  const handleSubscribe = (planId: string) => {
    localStorage.setItem('bloom_subscription_active', planId === 'free' ? 'trial' : 'true');
    localStorage.setItem('bloom_subscription_plan', planId);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#5A3E6B]">
      <Navbar activePage="" />
      
      <main className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Background Decorations */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#FF8C7A]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#C8B6E2]/5 rounded-full blur-[100px]" />

        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#C8B6E2]/20 mb-8 text-[10px] tracking-[0.3em] uppercase text-[#FF8C7A] font-bold">
            <SparklesIcon className="w-4 h-4" /> Choose your path
          </div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight mb-6">Invest in your <span className="italic">rhythm.</span></h1>
          <p className="text-[#5A3E6B]/60 text-xl max-w-2xl mx-auto italic">
            "Your body is a temple, and its cycle is the prayer. Nurture it with precision and care."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {plans.map((plan, i) => (
            <div 
              key={plan.id}
              className={`bloom-card bg-white p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] flex-1 ${plan.popular ? 'border-2 border-[#FF8C7A] shadow-2xl scale-105 z-10' : 'border border-[#C8B6E2]/10 shadow-xl opacity-90'}`}
            >
              <div>
                {plan.popular ? (
                  <div className="bg-[#FF8C7A] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full inline-block mb-4 shadow-[0_5px_15px_rgba(255,140,122,0.4)]">
                    Most Soulful Value
                  </div>
                ) : plan.id === 'free' ? (
                    <div className="bg-[#A8C3A0] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full inline-block mb-4">
                    Start Gently
                  </div>
                ) : <div className="h-8" />}
                
                <h3 className="font-serif text-2xl mb-2">{plan.name}</h3>
                <p className="text-xs text-[#5A3E6B]/50 mb-8 tracking-tight italic min-h-[32px]">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-serif text-[#5A3E6B]">₹{plan.price}</span>
                  <span className="text-sm text-[#5A3E6B]/40 ml-1">{plan.period}</span>
                </div>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className={`p-1 rounded-full mt-0.5 ${plan.popular ? 'bg-[#FF8C7A]/10 text-[#FF8C7A]' : plan.id === 'free' ? 'bg-[#A8C3A0]/10 text-[#A8C3A0]' : 'bg-[#5A3E6B]/5 text-[#5A3E6B]/40'}`}>
                        <CheckIcon className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs text-[#5A3E6B]/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${plan.popular ? 'bloom-btn-primary shadow-xl hover:translate-y-[-4px]' : plan.id === 'free' ? 'bg-[#A8C3A0] text-white hover:bg-[#97b28f] shadow-lg' : 'bg-[#C8B6E2]/20 text-[#5A3E6B] border border-[#C8B6E2]/40 hover:bg-[#C8B6E2]/40 hover:shadow-lg'}`}
              >
                {plan.id === 'free' ? 'Try Free' : `Choose ${plan.name.split(' ')[0]}`}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="inline-block bg-[#DDEBD7]/30 border border-white p-8 rounded-[3rem] max-w-xl">
             <p className="text-[#5A3E6B]/70 leading-relaxed italic text-sm">
               "Bloom is best experienced over a full cycle. The free trial allows you to feel the transition between phases and how our rituals adapt with you."
             </p>
          </div>
        </div>
      </main>
    </div>
  );
}
