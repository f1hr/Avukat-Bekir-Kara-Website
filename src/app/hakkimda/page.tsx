'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';

const timelineItems = [
  { year: '2009', title: 'Hukuk Fakültesi Mezuniyeti', institution: 'Marmara Üniversitesi', desc: 'Hukuk Fakültesi&apos;nden birincilikle mezun oldu.' },
  { year: '2010', title: 'Baro Kaydı', institution: 'İstanbul Barosu', desc: 'İstanbul Barosu&apos;na kayıt yaptırarak avukatlık kariyerine başladı.' },
  { year: '2012', title: 'Yüksek Lisans', institution: 'İstanbul Bilgi Üniversitesi', desc: 'Ticaret ve Şirketler Hukuku alanında LLM derecesini tamamladı.' },
  { year: '2015', title: 'Büro Kuruluşu', institution: 'Kara Hukuk Bürosu', desc: 'Bağımsız hukuk bürosunu kurarak müvekkillerine hizmet vermeye başladı.' },
  { year: '2020', title: 'Önemli Başarı', institution: '500. Dava', desc: '500. davasını başarıyla sonuçlandırarak mesleğinde önemli bir dönüm noktasına ulaştı.' },
];

const certificates = [
  'İstanbul Barosu Üyeliği',
  'Ticaret Hukuku Uzmanlık Sertifikası',
  'Ceza Hukuku İleri Eğitim',
  'Avrupa İnsan Hakları Hukuku',
  'Arabuluculuk Sertifikası',
  'Dijital Hukuk ve Teknoloji',
];

export default function HakkimdaPage() {
  return (
    <>
      <PageHero
        title="Hakkımda"
        subtitle="Deneyim, Güven ve Sonuç"
        breadcrumb={[{ label: 'Hakkımda' }]}
      />

      {/* ─── Biyografi ─── */}
      <section className="sec-pad" style={{ background: 'var(--parchment)', padding: '96px 0' }}>
        <div className="container-max mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', padding: '0 32px' }}>
          <motion.div className="mob-photo" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ paddingRight: '20px', paddingBottom: '20px' }}>
            <div className="photo-frame">
              <div style={{ aspectRatio: '3/4', width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/profil.jpg" 
                  alt="Avukat Bekir Kara" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} style={{ paddingLeft: '40px', borderLeft: '1px solid rgba(201,168,76,0.2)' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '8px' }}>
              Av. Bekir Kara
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>
              Hukuk Bürosu Kurucusu
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', color: 'var(--ivory-dim)', letterSpacing: '0.08em', marginBottom: '28px', padding: '8px 14px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'inline-block' }}>
              Hatay Barosu
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#3d3429', lineHeight: 1.8, marginBottom: '16px' }}>
              2009 yılında Marmara Üniversitesi Hukuk Fakültesi&apos;nden mezun olan Av. Mehmet Yılmaz, İstanbul Barosu&apos;na kayıtlı olarak 15 yılı aşkın bir süre boyunca müvekkillerine hukuki danışmanlık ve dava takibi hizmetleri sunmaktadır.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#3d3429', lineHeight: 1.8, marginBottom: '16px' }}>
              Ceza hukuku, aile hukuku, ticaret hukuku ve gayrimenkul hukuku başta olmak üzere geniş bir alanda uzmanlaşmış olan Yılmaz, 2012 yılında İstanbul Bilgi Üniversitesi&apos;nde tamamladığı yüksek lisans programı ile akademik birikimini pekiştirmiştir.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#3d3429', lineHeight: 1.8, marginBottom: '32px' }}>
              2015 yılında kurduğu bağımsız bürosu aracılığıyla bugüne kadar 500&apos;ü aşkın davayı başarıyla sonuçlandırmış ve 1.200&apos;den fazla müvekkile hukuki destek sağlamıştır.
            </p>
            <div style={{ marginBottom: '28px' }}>
              <svg width="130" height="40" viewBox="0 0 130 40">
                <path d="M10 30 Q20 10 32 22 Q44 34 56 18 Q68 6 80 20 Q92 32 104 14 Q116 2 122 18" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="sec-pad" style={{ background: 'var(--ink)', padding: '96px 0' }}>
        <div className="container-max" style={{ padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="label-tag" style={{ justifyContent: 'center', marginBottom: '20px' }}>Kariyer Yolculuğu</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ivory)' }}>
              Mesleki Geçmişim
            </h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Center line */}
            <div className="timeline-center-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(201,168,76,0.2)', transform: 'translateX(-50%)' }} />

            {timelineItems.map((item, i) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', paddingRight: i % 2 === 0 ? 'calc(50% + 32px)' : 0, paddingLeft: i % 2 !== 0 ? 'calc(50% + 32px)' : 0, marginBottom: '48px', position: 'relative' }}
              >
                {/* Dot */}
                <div className="timeline-dot" style={{ position: 'absolute', left: '50%', top: '12px', width: '10px', height: '10px', background: 'var(--gold)', borderRadius: '50%', transform: 'translateX(-50%)', border: '2px solid var(--ink)', boxShadow: '0 0 0 3px rgba(201,168,76,0.3)' }} />
                <div className="card-dark" style={{ maxWidth: '320px', width: '100%' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '28px', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{item.year}</div>
                  <h4 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '18px', fontWeight: 700, color: 'var(--ivory)', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>{item.institution}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--ivory-dim)', lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: item.desc.replace(/&apos;/g, "'") }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sertifikalar ─── */}
      <section className="sec-pad" style={{ background: 'var(--parchment)', padding: '96px 0' }}>
        <div className="container-max" style={{ padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="label-tag" style={{ justifyContent: 'center', marginBottom: '20px' }}>Belgeler</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ink)' }}>
              Sertifikalar & Üyelikler
            </h2>
          </div>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {certificates.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{ background: 'var(--warm-white)', border: '1px solid rgba(201,168,76,0.25)', padding: '28px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div style={{ width: '36px', height: '36px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, color: '#3d3429', letterSpacing: '0.05em', margin: 0 }}>{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="sec-pad" style={{ background: 'var(--ink)', padding: '96px 0', textAlign: 'center' }}>
        <div className="container-max" style={{ padding: '0 32px' }}>
          <div className="label-tag" style={{ justifyContent: 'center', marginBottom: '20px' }}>Başlayalım</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--ivory)', marginBottom: '16px' }}>
            Hukuki Desteğe İhtiyacınız mı Var?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'var(--ivory-dim)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            İlk görüşme ücretsizdir. Bugün iletişime geçin, davanızın en iyi şekilde yönetilmesini sağlayalım.
          </p>
          <Link href="/iletisim" className="btn-primary">Randevu Al</Link>
        </div>
      </section>
    </>
  );
}
