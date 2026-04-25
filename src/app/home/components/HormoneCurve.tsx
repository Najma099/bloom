'use client';
import React, { useEffect, useRef, useState } from 'react';

interface HormoneCurveProps {
  variant: 'estrogen' | 'cortisol' | 'progesterone';
  animated?: boolean;
}

const curves = {
  estrogen: {
    path: 'M 20 80 C 60 80, 80 20, 120 15 C 160 10, 180 60, 200 55 C 220 50, 230 70, 260 65 C 290 60, 310 80, 360 80',
    color: '#94A89A',
    label: 'Estrogen',
    peaks: [{ x: 120, y: 15, label: 'Ovulation peak' }],
  },
  cortisol: {
    path: 'M 20 40 C 50 38, 80 35, 100 70 C 120 100, 150 90, 180 75 C 210 60, 230 65, 260 70 C 290 75, 320 72, 360 75',
    color: '#D4A0A0',
    label: 'Cortisol',
    peaks: [{ x: 100, y: 60, label: 'AM peak' }],
  },
  progesterone: {
    path: 'M 20 80 C 60 80, 100 78, 140 80 C 160 80, 180 40, 220 25 C 250 15, 280 30, 310 60 C 330 75, 345 80, 360 80',
    color: '#B8C4BA',
    label: 'Progesterone',
    peaks: [{ x: 220, y: 25, label: 'Luteal peak' }],
  },
};

const HormoneCurve: React.FC<HormoneCurveProps> = ({ variant, animated = false }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsAnimated(true), 300);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  const curve = curves[variant];

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 380 100"
        className="w-full"
        style={{ height: '120px' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid lines */}
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="20" y1={y} x2="360" y2={y} stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="4 4" />
        ))}

        {/* Phase markers */}
        <line x1="110" y1="10" x2="110" y2="90" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="200" y1="10" x2="200" y2="90" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="290" y1="10" x2="290" y2="90" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" />

        {/* Phase labels */}
        <text x="55" y="98" fontSize="7" fill="#94A89A" textAnchor="middle" fontFamily="DM Sans">Follicular</text>
        <text x="155" y="98" fontSize="7" fill="#94A89A" textAnchor="middle" fontFamily="DM Sans">Ovulatory</text>
        <text x="245" y="98" fontSize="7" fill="#94A89A" textAnchor="middle" fontFamily="DM Sans">Luteal</text>
        <text x="325" y="98" fontSize="7" fill="#94A89A" textAnchor="middle" fontFamily="DM Sans">Menstrual</text>

        {/* The curve */}
        <path
          ref={pathRef}
          d={curve.path}
          stroke={curve.color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`curve-path ${isAnimated || !animated ? 'animated' : ''}`}
          style={{
            strokeDasharray: 600,
            strokeDashoffset: isAnimated || !animated ? 0 : 600,
            transition: 'stroke-dashoffset 1.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        {/* Area fill */}
        <path
          d={`${curve.path} L 360 90 L 20 90 Z`}
          fill={curve.color}
          fillOpacity="0.06"
        />

        {/* Peak dot */}
        {curve.peaks.map((peak, i) => (
          <circle key={i} cx={peak.x} cy={peak.y} r="3" fill={curve.color} opacity={isAnimated || !animated ? 1 : 0}
            style={{ transition: 'opacity 0.3s ease 1.4s' }}
          />
        ))}
      </svg>

      <div className="flex items-center gap-2 mt-1">
        <div className="w-4 h-0.5 rounded-full" style={{ backgroundColor: curve.color }} />
        <span className="text-xs font-medium" style={{ color: curve.color }}>{curve.label}</span>
      </div>
    </div>
  );
};

export default HormoneCurve;