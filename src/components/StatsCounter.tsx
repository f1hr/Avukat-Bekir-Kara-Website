'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Başarılı Dava', icon: '⚖' },
  { value: 15,  suffix: '+', label: 'Yıllık Deneyim', icon: '◆' },
  { value: 1200,suffix: '+', label: 'Mutlu Müvekkil', icon: '◎' },
  { value: 8,   suffix: '',  label: 'Hukuk Alanı', icon: '✦' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(ease * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section style={{
      background: 'var(--navy-deep)',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      borderBottom: '1px solid rgba(201,168,76,0.1)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '200px', background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-max stats-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        position: 'relative',
        zIndex: 1,
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            padding: '40px 24px',
            textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(201,168,76,0.08)' : 'none',
            position: 'relative',
          }}>
            {/* Top accent line */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '24px', height: '2px', background: i === 0 ? 'var(--gold)' : 'transparent' }} />

            <div style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 700,
              color: 'var(--gold)',
              lineHeight: 1,
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}>
              <CountUp target={stat.value} suffix={stat.suffix} />
            </div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
