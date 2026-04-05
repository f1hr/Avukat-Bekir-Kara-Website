'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/config/site';

const iconPaths: Record<string, string[]> = {
  gavel:    ['M14.5 2.5l7 7-10 10-7-7 10-10z', 'M3 21l4-4', 'M10 6l8 8'],
  family:   ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  briefcase:['M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z', 'M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2'],
  building: ['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10'],
  scroll:   ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8', 'M10 9H8'],
  shield:   ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
  landmark: ['M3 22V11', 'M21 22V11', 'M12 22V11', 'M1 11h22', 'M12 2L1 7h22L12 2z'],
  umbrella: ['M23 12a11.05 11.05 0 0 0-22 0z', 'M12 12v7a3 3 0 0 1-6 0'],
};

export default function UzmanlikAlanlariPage() {
  return (
    <>
      <PageHero
        title="Uzmanlık Alanları"
        subtitle="Hukuki ihtiyaçlarınıza kapsamlı çözümler sunuyoruz"
        breadcrumb={[{ label: 'Uzmanlık Alanları' }]}
      />

      {/* ─── Intro ─── */}
      <section className="sec-pad" style={{ background: 'var(--parchment)', padding: '72px 0' }}>
        <div className="container-max" style={{ textAlign: 'center', padding: '0 32px', maxWidth: '720px' }}>
          <div className="label-tag" style={{ justifyContent: 'center', marginBottom: '20px' }}>Hukuki Hizmetlerimiz</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ink)', marginBottom: '20px' }}>
            Her Hukuki Konuda Yanınızdayız
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#5a4f44', lineHeight: 1.8 }}>
            8 farklı hukuk alanında uzman ekibimizle, davalarınızı en etkili şekilde yönetiyor ve haklarınızı kararlılıkla savunuyoruz. Her müvekkile özel yaklaşımımızla kalıcı çözümler üretiyoruz.
          </p>
        </div>
      </section>

      {/* ─── Practice Areas Grid ─── */}
      <section className="sec-pad" style={{ background: 'var(--ink)', padding: '96px 0' }}>
        <div className="container-max" style={{ padding: '0 32px' }}>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }}>
            {siteConfig.practiceAreas.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                className="card-dark"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                  <div style={{ width: '52px', height: '52px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {(iconPaths[area.icon] || []).map((p, j) => (
                        <path key={j} d={p} />
                      ))}
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '28px', fontWeight: 700, color: 'var(--ivory)', lineHeight: 1.1, marginBottom: '6px' }}>{area.name}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--ivory-dim)', lineHeight: 1.7 }}>{area.description}</p>
                  </div>
                </div>

                <div style={{ height: '1px', background: 'rgba(201,168,76,0.2)', marginBottom: '20px' }} />

                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '24px', flex: 1 }}>
                  {area.scope.map((s) => (
                    <li key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(157,144,128,0.9)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>

                <Link href="/iletisim" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Danışma Talebi →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: 'var(--parchment)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container-max" style={{ padding: '0 32px' }}>
          <div className="label-tag" style={{ justifyContent: 'center', marginBottom: '20px' }}>Hemen Başlayalım</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px' }}>
            İhtiyacınız Olan Hukuki Desteği Alın
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#5a4f44', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.75 }}>
            Hukuki sorununuzu bizimle paylaşın. Ücretsiz ilk danışmada en uygun çözüm yolunu birlikte belirleyelim.
          </p>
          <Link href="/iletisim" className="btn-primary">Ücretsiz Danışma Al</Link>
        </div>
      </section>
    </>
  );
}
