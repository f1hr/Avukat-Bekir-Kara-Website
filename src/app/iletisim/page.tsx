'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/config/site';

interface FormData {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
  kvkk: boolean;
}

const topics = [
  'Ceza Hukuku',
  'Aile Hukuku',
  'Ticaret Hukuku',
  'Gayrimenkul',
  'Miras Hukuku',
  'Tüketici Hukuku',
  'İdare Hukuku',
  'Sigorta Hukuku',
];

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Telefon',
    value: siteConfig.lawyer.phone,
    href: `tel:${siteConfig.lawyer.phone}`,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Adres',
    value: siteConfig.lawyer.address,
    href: '#',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Çalışma Saatleri',
    value: siteConfig.lawyer.workingHours,
    href: null,
  },
];

export default function IletisimPage() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', topic: '', message: '', kvkk: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid #D0C8B8',
    background: 'white',
    padding: '12px 16px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    color: '#1a1a1a',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <>
      <PageHero
        title="İletişim & Randevu"
        subtitle="Size En Kısa Sürede Dönüş Yapacağız"
        breadcrumb={[{ label: 'İletişim' }]}
      />

      {/* ─── 2-col Contact ─── */}
      <section style={{ background: 'var(--parchment)', padding: '96px 0' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start', padding: '0 32px' }}>

          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="label-tag" style={{ marginBottom: '20px' }}>İletişim Bilgileri</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: 'var(--ink)', marginBottom: '32px', lineHeight: 1.1 }}>
              Bizimle İletişime Geçin
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {contactItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#3d3429', textDecoration: 'none', lineHeight: 1.5 }}>{item.value}</a>
                    ) : (
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#3d3429', margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteConfig.lawyer.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#25D366', color: 'white', padding: '14px 24px', textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.25s', marginBottom: '28px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp&apos;tan Yazın
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ background: 'var(--warm-white)', border: '1px solid rgba(201,168,76,0.2)', padding: '40px' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '28px', fontWeight: 700, color: 'var(--ink)', marginBottom: '28px' }}>
                Randevu Formu
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '24px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>Mesajınız İletildi!</h4>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#5a4f44' }}>En kısa sürede sizinle iletişime geçeceğiz.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>Ad Soyad *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Adınız Soyadınız"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                        onBlur={(e) => { e.target.style.borderColor = '#D0C8B8'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>Telefon *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+90 5XX XXX XX XX"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                        onBlur={(e) => { e.target.style.borderColor = '#D0C8B8'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>E-posta *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="ornek@email.com"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#D0C8B8'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>Hukuki Konu</label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C9A84C' strokeWidth='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#D0C8B8'; e.target.style.boxShadow = 'none'; }}
                    >
                      <option value="">Konu seçiniz...</option>
                      {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>Mesajınız *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hukuki durumunuzu kısaca açıklayın..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#D0C8B8'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  {/* KVKK */}
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div
                      onClick={() => setForm({ ...form, kvkk: !form.kvkk })}
                      style={{ width: '18px', height: '18px', border: `1px solid ${form.kvkk ? 'var(--gold)' : '#D0C8B8'}`, background: form.kvkk ? 'var(--gold)' : 'white', cursor: 'pointer', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                    >
                      {form.kvkk && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#5a4f44', lineHeight: 1.6, margin: 0, cursor: 'pointer' }} onClick={() => setForm({ ...form, kvkk: !form.kvkk })}>
                      KVKK kapsamında kişisel verilerimin işlenmesine onay veriyorum. Verileriniz üçüncü şahıslarla paylaşılmaz.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={!form.kvkk || loading}
                    className="btn-primary"
                    style={{ padding: '16px 32px', cursor: form.kvkk ? 'pointer' : 'not-allowed', opacity: form.kvkk ? 1 : 0.6, fontSize: '10px' }}
                  >
                    {loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Google Maps ─── */}
      <section style={{ borderTop: '2px solid var(--gold)' }}>
        <iframe
          src={siteConfig.googleMaps.embedUrl}
          width="100%"
          height="400"
          style={{ display: 'block', border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kara Hukuk Bürosu Konum"
        />
      </section>
    </>
  );
}
