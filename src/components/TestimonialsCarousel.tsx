'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: 'Boşanma sürecimde inanılmaz bir destek aldım. Her aşamada yanımda oldu, sorularımı sabırla yanıtladı. Sonuç tam olarak istediğim gibiydi. Güvenilir ve profesyonel bir hukuk bürosu.',
    name: 'Ayşe K.',
    city: 'İstanbul',
    stars: 5,
    role: 'Aile Hukuku Müvekkili',
  },
  {
    text: 'Şirketime açılan ticari davada mükemmel bir savunma stratejisi hazırlandı. Dava tamamen lehimize sonuçlandı. Bu kadar karmaşık bir süreci bu denli başarıyla yönetebileceğini düşünmüyordum.',
    name: 'Mehmet T.',
    city: 'Ankara',
    stars: 5,
    role: 'Ticaret Hukuku Müvekkili',
  },
  {
    text: 'Miras davamda çok karmaşık bir süreçti ama her şeyi çok net anlattı ve başarıyla çözdük. Profesyonelliği ve titizliği gerçekten takdire şayan. Herkese gönül rahatlığıyla tavsiye ederim.',
    name: 'Fatma Y.',
    city: 'İzmir',
    stars: 5,
    role: 'Miras Hukuku Müvekkili',
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ background: 'var(--navy)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

      <div className="container-max" style={{ padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left: heading + controls */}
          <div>
            <span className="label-tag" style={{ marginBottom: '20px' }}>Referanslar</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '32px' }}>
              Müvekkillerimiz<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Ne Diyor?</em>
            </h2>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '3px',
                    background: i === current ? 'var(--gold)' : 'rgba(201,168,76,0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    borderRadius: '2px',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Arrow controls */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {['←', '→'].map((arrow, idx) => (
                <button
                  key={arrow}
                  onClick={() => setCurrent((p) => (p + (idx === 0 ? -1 : 1) + testimonials.length) % testimonials.length)}
                  style={{
                    width: '44px',
                    height: '44px',
                    border: '1px solid rgba(201,168,76,0.25)',
                    background: 'transparent',
                    color: 'var(--cream-muted)',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--cream-muted)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'; }}
                >
                  {arrow}
                </button>
              ))}
            </div>
          </div>

          {/* Right: testimonial card */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
              transform: `translateX(-${current * 100}%)`,
            }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  minWidth: '100%',
                  background: 'rgba(27,46,75,0.6)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  padding: '48px 44px',
                  position: 'relative',
                  backdropFilter: 'blur(8px)',
                }}>
                  {/* Corner accent */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', opacity: 0.5 }} />

                  {/* Quote mark */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '24px',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: '96px',
                    color: 'var(--gold)',
                    opacity: 0.15,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}>
                    &ldquo;
                  </div>

                  <p style={{
                    fontFamily: 'Source Serif 4, serif',
                    fontSize: '15px',
                    fontStyle: 'italic',
                    color: 'rgba(245,240,232,0.85)',
                    lineHeight: 1.9,
                    marginBottom: '32px',
                  }}>
                    {t.text}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '12px' }}>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 700, color: 'var(--cream)', letterSpacing: '0.05em', marginBottom: '3px' }}>
                        {t.name}
                      </div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {t.role} — {t.city}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(t.stars)].map((_, j) => (
                        <span key={j} style={{ color: 'var(--gold)', fontSize: '13px' }}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
