'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';

type CaseResult = 'Kazanıldı' | 'Uzlaşıldı' | 'Devam Ediyor';

interface CaseData {
  id: number;
  category: string;
  year: string;
  title: string;
  desc: string;
  result: CaseResult;
}

const cases: CaseData[] = [
  { id: 1, category: 'Ceza', year: '2023', title: 'Ağır Ceza Davası – Beraat', desc: 'Ağır ceza mahkemesinde görülen davada müvekkilin beraatiyle sonuçlandı.', result: 'Kazanıldı' },
  { id: 2, category: 'Aile', year: '2023', title: 'Velayet ve Nafaka Davası', desc: 'Çocuğun velayeti ve nafaka miktarı müvekkil lehine belirlendi.', result: 'Kazanıldı' },
  { id: 3, category: 'Ticaret', year: '2022', title: 'Ticari Sözleşme Uyuşmazlığı', desc: 'İki şirket arasındaki sözleşme ihlali davasında tazminat alındı.', result: 'Uzlaşıldı' },
  { id: 4, category: 'Gayrimenkul', year: '2022', title: 'Tapu İptali ve Tescil', desc: 'Hatalı tapu tescili iptal edilerek müvekkil adına düzeltildi.', result: 'Kazanıldı' },
  { id: 5, category: 'Miras', year: '2023', title: 'Miras Taksimi Davası', desc: 'Karmaşık miras paylaşımı anlaşmazlığı adil bir çözüme kavuşturuldu.', result: 'Uzlaşıldı' },
  { id: 6, category: 'Ceza', year: '2024', title: 'Dolandırıcılık Savunması', desc: 'Dolandırıcılık suçlamasıyla yargılanan müvekkil beraat etti.', result: 'Kazanıldı' },
  { id: 7, category: 'Ticaret', year: '2024', title: 'İş Hukuku – Tazminat', desc: 'İşçi hakları ihlali davasında müvekkile tam tazminat ödendi.', result: 'Kazanıldı' },
  { id: 8, category: 'Aile', year: '2024', title: 'Boşanma ve Mal Paylaşımı', desc: 'Mal rejimi ve boşanma süreci müvekkil lehine tamamlandı.', result: 'Devam Ediyor' },
  { id: 9, category: 'Gayrimenkul', year: '2023', title: 'Kira Uyuşmazlığı', desc: 'Uzun süreli kira anlaşmazlığı tahliye kararıyla çözüme kavuştu.', result: 'Kazanıldı' },
];

const filters = ['Tümü', 'Ceza', 'Aile', 'Ticaret', 'Gayrimenkul', 'Miras'];

const resultStyle: Record<CaseResult, React.CSSProperties> = {
  'Kazanıldı': { background: 'rgba(27,67,50,0.9)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)' },
  'Uzlaşıldı': { background: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)' },
  'Devam Ediyor': { background: 'transparent', color: 'var(--ivory-dim)', border: '1px solid rgba(157,144,128,0.4)' },
};

const caseStats = [
  { value: '%94', label: 'Başarı Oranı' },
  { value: '500+', label: 'Tamamlanan Dava' },
  { value: '15', label: 'Yıl Deneyim' },
];

export default function DavalarPage() {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filtered = activeFilter === 'Tümü' ? cases : cases.filter(c => c.category === activeFilter);

  return (
    <>
      <PageHero
        title="Öne Çıkan Davalarımız"
        subtitle="Müvekkillerimiz için elde ettiğimiz başarılardan seçkiler"
        breadcrumb={[{ label: 'Davalar' }]}
      />

      {/* ─── Filter Bar ─── */}
      <section style={{ background: 'var(--parchment)', padding: '40px 0', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="container-max" style={{ padding: '0 32px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '10px 24px',
                cursor: 'pointer',
                border: '1px solid',
                transition: 'all 0.25s',
                background: activeFilter === f ? 'var(--gold)' : 'transparent',
                color: activeFilter === f ? 'var(--ink)' : 'var(--gold)',
                borderColor: 'var(--gold)',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Cases ─── */}
      <section style={{ background: 'var(--parchment)', padding: '64px 0 96px' }}>
        <div className="container-max" style={{ padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {filtered.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="case-card"
                style={{ padding: '28px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{c.category}</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', color: '#8a7e72' }}>{c.year}</span>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#1a1510', lineHeight: 1.2, marginBottom: '10px' }}>{c.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#5a4f44', lineHeight: 1.7, marginBottom: '20px' }}>{c.desc}</p>
                <span style={{ display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 12px', ...resultStyle[c.result] }}>
                  {c.result}
                </span>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ivory-dim)' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '24px' }}>Bu kategoride henüz dava bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section style={{ background: 'var(--ink)', padding: '48px 0', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', padding: '0 32px' }}>
          {caseStats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
              {i > 0 && <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '1px', background: 'rgba(201,168,76,0.2)' }} />}
              <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: '8px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
