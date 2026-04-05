'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ChevronDown } from 'lucide-react';

/* ─── Practice area icon paths ─── */
const iconPaths: Record<string, string> = {
  gavel:    'M14.5 2.5l7 7-10 10-7-7 10-10zM3 21l4-4M10 6l8 8',
  family:   'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  briefcase:'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2',
  building: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  scroll:   'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
  shield:   'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  landmark: 'M3 22V11M21 22V11M12 22V11M1 11h22M12 2L1 7h22L12 2z',
  umbrella: 'M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7',
};

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: 'Başarılı Dava', value: 500, suffix: '+' },
  { label: 'Yıllık Deneyim', value: 15, suffix: '+' },
  { label: 'Mutlu Müvekkil', value: 1200, suffix: '+' },
  { label: 'Başarı Oranı', value: 94, suffix: '%' },
];

const testimonials = [
  { text: 'Bekir Bey davamı büyük bir özveri ve profesyonellikle yönetti. Sonuçtan son derece memnunum. Kesinlikle tavsiye ederim.', name: 'Ayşe K.', city: 'Hatay' },
  { text: 'Ticari anlaşmazlığımda hızlı ve etkili bir çözüm sundu. Şeffaf iletişimi sayesinde süreç boyunca hiçbir zaman yalnız hissetmedim.', name: 'Murat D.', city: 'İzmir' },
  { text: 'Aile hukuku konusunda aldığım danışmanlık hayatımı değiştirdi. Hem hukuki hem de insani açıdan olağanüstü bir avukat.', name: 'Selin T.', city: 'Ankara' },
];

const whyItems = [
  { num: '01', title: 'Kişisel İlgi', desc: 'Her müvekkilimize özel strateji geliştiriyor, bireysel ihtiyaçlarınızı her zaman ön planda tutuyoruz.' },
  { num: '02', title: 'Şeffaf İletişim', desc: 'Süreç boyunca her gelişmeden sizi haberdar ediyor, sorularınızı sabırla yanıtlıyoruz.' },
  { num: '03', title: '24s Dönüş', desc: '24 saat içinde dönüş garantisi ile acil hukuki ihtiyaçlarınızda her zaman yanınızdayız.' },
  { num: '04', title: 'Gizlilik Güvencesi', desc: 'Tüm müvekkil bilgileri KVKK kapsamında en yüksek gizlilik standartlarıyla korunmaktadır.' },
];

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const preview = siteConfig.practiceAreas.slice(0, 3);

  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '140px 32px 100px', textAlign: 'center', background: 'var(--ink)' }}>
        {/* SVG grid overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.4' opacity='0.06'%3E%3Cpath d='M0 0h80v80H0zM0 20h80M0 40h80M0 60h80M20 0v80M40 0v80M60 0v80'/%3E%3C/g%3E%3C/svg%3E")`, pointerEvents: 'none' }} />
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '60px', right: '60px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '0', right: '0', width: '500px', height: '500px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.04)', pointerEvents: 'none' }} />
        {/* Corner decorations */}
        <div style={{ position: 'absolute', top: '80px', left: '32px', width: '48px', height: '48px', borderTop: '1px solid rgba(201,168,76,0.3)', borderLeft: '1px solid rgba(201,168,76,0.3)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '80px', right: '32px', width: '48px', height: '48px', borderTop: '1px solid rgba(201,168,76,0.3)', borderRight: '1px solid rgba(201,168,76,0.3)', pointerEvents: 'none' }} />

        {/* Large decorative scales SVG — right side */}
        <div style={{ position: 'absolute', right: '-5%', bottom: '-10%', width: '60vw', pointerEvents: 'none', zIndex: 0, opacity: 0.04 }}>
          <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            <rect x="98" y="10" width="4" height="200" fill="#C9A84C"/>
            <rect x="60" y="10" width="80" height="3" fill="#C9A84C"/>
            <ellipse cx="100" cy="213" rx="30" ry="8" fill="#C9A84C"/>
            <line x1="100" y1="12" x2="40" y2="80" stroke="#C9A84C" strokeWidth="2"/>
            <line x1="100" y1="12" x2="160" y2="80" stroke="#C9A84C" strokeWidth="2"/>
            <ellipse cx="40" cy="80" rx="30" ry="12" stroke="#C9A84C" strokeWidth="2"/>
            <ellipse cx="160" cy="80" rx="30" ry="12" stroke="#C9A84C" strokeWidth="2"/>
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
          <FadeUp delay={0}>
            <div className="label-tag" style={{ justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
              Hukuki Danışmanlık Hizmetleri
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 700, color: 'var(--ivory)', lineHeight: 1.05, marginBottom: 'var(--space-3)', letterSpacing: '-0.02em' }}>
              Haklarınızı{' '}
              <em style={{ display: 'block', color: 'var(--gold)', fontStyle: 'italic', lineHeight: 1.1 }}>Güvenle Savunuyoruz</em>
            </h1>
          </FadeUp>

          <FadeUp delay={0.24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: 'var(--space-3)' }}>
            <span style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.4)' }} />
            <span style={{ width: '6px', height: '6px', background: 'var(--gold)', transform: 'rotate(45deg)', opacity: 0.8 }} />
            <span style={{ width: '40px', height: '1px', background: 'rgba(201,168,76,0.4)' }} />
          </FadeUp>

          <FadeUp delay={0.36}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(168,160,144,0.9)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto var(--space-5)' }}>
              15 yılı aşkın deneyimimiz ve 500&apos;den fazla başarıyla sonuçlanan dava ile hukuki süreçlerinizde güvenilir, şeffaf ve kararlı bir çözüm ortağıyız.
            </p>
          </FadeUp>

          <FadeUp delay={0.48} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/iletisim" className="btn-primary">Ücretsiz Danışma</Link>
            <Link href="/uzmanlik-alanlari" className="btn-outline">Uzmanlık Alanları</Link>
          </FadeUp>
        </div>

        {/* Scroll indicator — smooth float */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
          <div className="animate-scroll-down" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.5)', textTransform: 'uppercase' }}>Aşağı</span>
            <ChevronDown size={18} color="rgba(201,168,76,0.5)" />
          </div>
        </div>
      </section>

      {/* ════════════════ STATS STRIP ════════════════ */}
      <section style={{ background: 'var(--slate-mid)', borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.15)', padding: 'var(--space-5) 0' }}>
        <div className="container-max stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '0 var(--space-4)' }}>
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              {i > 0 && (
                <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '1px', background: 'rgba(201,168,76,0.2)' }} />
              )}
              <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,56px)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: 'var(--space-1)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ ABOUT ════════════════ */}
      <section style={{ background: 'var(--parchment)', padding: 'var(--space-7) 0' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', padding: '0 var(--space-4)' }}>
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ position: 'relative', paddingRight: '20px', paddingBottom: '20px' }}
          >
            <div className="photo-frame" style={{ width: '100%', maxWidth: '420px' }}>
              <div style={{ aspectRatio: '3/4', background: 'var(--slate-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" opacity={0.25}>
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#C9A84C" strokeWidth="1"/>
                  <circle cx="12" cy="10" r="3" stroke="#C9A84C" strokeWidth="1"/>
                  <path d="M6 20c0-3.31 2.686-6 6-6s6 2.69 6 6" stroke="#C9A84C" strokeWidth="1"/>
                </svg>
              </div>
              {/* Badge */}
              <div style={{ position: 'absolute', bottom: '24px', left: '-16px', background: 'var(--gold)', padding: '12px 20px', zIndex: 2 }}>
                <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '28px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1 }}>15+</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '8px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)', marginTop: '2px' }}>Yıl</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ paddingLeft: '40px', borderLeft: '1px solid rgba(201,168,76,0.2)' }}
          >
            <div className="label-tag" style={{ marginBottom: 'var(--space-3)' }}>Biz Kimiz</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '4px', letterSpacing: '-0.02em' }}>
              Av. Bekir Kara
            </h2>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 'var(--space-3)' }}>
              Hatay Barosu — Kurucu Avukat
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#3d3429', lineHeight: 1.8, marginBottom: 'var(--space-2)' }}>
              Hatay Barosu&apos;na kayıtlı olarak hukuki danışmanlık ve dava takibi alanlarında müvekkillerime kapsamlı hizmet sunmaktayım.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#3d3429', lineHeight: 1.8, marginBottom: 'var(--space-2)' }}>
              Ceza, aile, ticaret ve gayrimenkul hukuku başta olmak üzere 8 farklı alanda uzmanlaşmış büromuz, her davaya özgün ve sonuç odaklı bir yaklaşım benimsemektedir.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#3d3429', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
              Müvekkillerimizin güveni en büyük motivasyon kaynağımızdır. 500&apos;ü aşkın başarılı davamız bu güvenin en somut kanıtıdır.
            </p>
            <div style={{ marginBottom: '32px' }}>
              <svg width="120" height="36" viewBox="0 0 120 36">
                <path d="M10 26 Q20 8 30 20 Q40 32 50 16 Q60 4 70 18 Q80 30 90 14 Q100 2 110 18" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <Link href="/hakkimda" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Daha Fazla
              <span style={{ fontSize: '14px' }}>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ PRACTICE AREAS ════════════════ */}
      <section style={{ background: 'var(--ink)', padding: 'var(--space-7) 0' }}>
        <div className="container-max" style={{ padding: '0 var(--space-4)' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="label-tag" style={{ justifyContent: 'center', marginBottom: '20px' }}>Neler Yapıyoruz</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ivory)' }}>
              Uzmanlık Alanlarımız
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', marginBottom: '48px' }}>
            {preview.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-dark"
              >
                <div style={{ width: '44px', height: '44px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {iconPaths[area.icon]?.split('M').filter(Boolean).map((p, j) => (
                      <path key={j} d={'M' + p} />
                    ))}
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '24px', fontWeight: 700, color: 'var(--ivory)', marginBottom: '12px' }}>
                  {area.name}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--ivory-dim)', lineHeight: 1.75, marginBottom: '20px' }}>
                  {area.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {area.scope.slice(0, 2).map((s) => (
                    <li key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(157,144,128,0.8)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }} />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href="/uzmanlik-alanlari" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Detaylar →
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/uzmanlik-alanlari" className="btn-outline">Tüm Alanları Gör</Link>
          </div>
        </div>
      </section>

      {/* ════════════════ WHY US ════════════════ */}
      <section style={{ background: 'var(--parchment)', padding: 'var(--space-7) 0' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', padding: '0 var(--space-4)' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="label-tag" style={{ marginBottom: '20px' }}>Neden Biz</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '24px' }}>
              Neden Bizi Seçmelisiniz?
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#4a3f34', lineHeight: 1.8, marginBottom: '40px' }}>
              Hukuki süreçler karmaşık ve stres verici olabilir. Biz bu yükü sizinle paylaşıyor, her adımda yanınızda oluyor ve en iyi sonuç için çalışıyoruz.
            </p>
            <Link href="/iletisim" className="btn-primary">Randevu Al</Link>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            {whyItems.map((item, i) => (
              <div key={item.num} style={{ paddingBottom: i < whyItems.length - 1 ? '28px' : 0, marginBottom: i < whyItems.length - 1 ? '28px' : 0, borderBottom: i < whyItems.length - 1 ? '1px solid rgba(201,168,76,0.2)' : 'none' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '36px', fontWeight: 700, color: 'rgba(201,168,76,0.35)', lineHeight: 1, flexShrink: 0, width: '48px' }}>{item.num}</div>
                  <div>
                    <h4 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>{item.title}</h4>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#5a4f44', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section style={{ background: 'var(--ink)', padding: 'var(--space-7) 0' }}>
        <div className="container-max" style={{ padding: '0 var(--space-4)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div className="label-tag" style={{ justifyContent: 'center', marginBottom: 'var(--space-2)' }}>Müvekkillerimiz</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ivory)', letterSpacing: '-0.02em' }}>
              Müvekkil Yorumları
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-3)' }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)', padding: 'var(--space-4) 28px', position: 'relative', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              >
                {/* Absolute quote mark */}
                <div style={{ position: 'absolute', top: '16px', right: '24px', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '96px', color: 'var(--gold)', opacity: 0.15, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>&ldquo;</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(240,232,214,0.8)', lineHeight: 1.85, marginBottom: 'var(--space-3)', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>{t.text}</p>
                <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: 'var(--space-2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '12px' }}>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, color: 'var(--ivory)', letterSpacing: '0.05em' }}>{t.name}</div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', color: 'var(--ivory-dim)', marginTop: '2px' }}>{t.city}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#C9A84C">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA BANNER ════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #9A7A2A 100%)', padding: 'var(--space-7) 0', position: 'relative', overflow: 'hidden' }}>
        {/* Pattern overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230C1219' stroke-width='0.5' opacity='0.15'%3E%3Cpath d='M0 0l40 40M40 0L0 40'/%3E%3C/g%3E%3C/svg%3E")`, pointerEvents: 'none' }} />
        <div className="container-max" style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 32px' }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '16px' }}>
              Hukuki Sorununuz İçin<br />Hemen Başvurun
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(12,18,25,0.7)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.75 }}>
              İlk görüşme ücretsizdir. Sorununuzu dinleyor, en kısa sürede çözüm yolunuzu belirliyoruz.
            </p>
            <Link href="/iletisim" style={{ background: 'var(--ink)', color: 'var(--ivory)', fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 40px', display: 'inline-block', textDecoration: 'none', transition: 'all 0.25s', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              Ücretsiz Danışma Al
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
