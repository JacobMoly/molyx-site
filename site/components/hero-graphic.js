'use client';
import { useEffect, useRef } from 'react';

export default function HeroGraphic() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: 40,
        right: 32,
        width: 460,
        height: 460,
        pointerEvents: 'none',
        opacity: 0.9,
        willChange: 'transform',
      }}
    >
      <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="230" cy="230" r="228" fill="url(#hg)" />
        <circle cx="230" cy="230" r="150" stroke="#e5e5ee" strokeWidth="1" />
        <circle cx="230" cy="230" r="100" stroke="#ececf4" strokeWidth="1" />
        <circle
          cx="230"
          cy="230"
          r="190"
          stroke="#6366f1"
          strokeWidth="1"
          strokeDasharray="2 8"
          opacity="0.5"
          style={{ transformOrigin: '230px 230px', animation: 'molyxSpin 40s linear infinite' }}
        />
        <path d="M80 230 H180 M230 80 V180 M280 230 H380 M230 280 V380" stroke="#dcdce8" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="230" cy="80" r="7" fill="#6366f1" style={{ animation: 'molyxFloat 4s ease-in-out infinite' }} />
        <circle cx="380" cy="230" r="7" fill="#16161a" style={{ animation: 'molyxFloat 4.5s ease-in-out infinite 0.4s' }} />
        <circle cx="230" cy="380" r="7" fill="#6366f1" style={{ animation: 'molyxFloat 5s ease-in-out infinite 0.8s' }} />
        <circle cx="80" cy="230" r="7" fill="#16161a" style={{ animation: 'molyxFloat 4.2s ease-in-out infinite 0.2s' }} />
        <circle cx="230" cy="230" r="13" fill="#6366f1" />
      </svg>
    </div>
  );
}
