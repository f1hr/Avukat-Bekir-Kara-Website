import Link from 'next/link';
import { siteConfig } from '@/config/site';

const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımda', href: '/hakkimda' },
  { label: 'Uzmanlık Alanları', href: '/uzmanlik-alanlari' },
  { label: 'Davalar & Başarılar', href: '/davalar' },
  { label: 'Sık Sorulan Sorular', href: '/sss' },
  { label: 'İletişim & Randevu', href: '/iletisim' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }} />

      <div style={{ background: 'var(--ink)', padding: '64px 0 48px' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '48px', padding: '0 32px' }}>

          {/* Col 1 */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{ width: '34px', height: '34px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 6.5V11.5C4 16.3 7.6 20.9 12 22.5C16.4 20.9 20 16.3 20 11.5V6.5L12 2Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(201,168,76,0.06)"/>
                  <path d="M8.5 12L11 14.5L15.5 10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '16px', fontWeight: 600, color: 'var(--ivory)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>KARA</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '7px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>HUKUK BÜROSU</div>
              </div>
            </Link>
            {/* Decorative gold line */}
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)', marginBottom: '20px' }} />
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '12px', fontStyle: 'italic' }}>
              &ldquo;Güven, Deneyim, Sonuç&rdquo;
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--ivory-dim)', lineHeight: 1.75, marginBottom: '10px' }}>
              Hatay&apos;da hukuki danışmanlık ve dava takibi alanlarında güvenilir hizmet sunuyoruz.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--ivory-dim)', lineHeight: 1.75 }}>
              Her davada kişisel ilgi, şeffaf iletişim ve sonuç odaklı yaklaşımımızla yanınızdayız.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>Hızlı Erişim</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="link-hover" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--ivory-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '12px', height: '1px', background: 'rgba(201,168,76,0.4)', flexShrink: 0 }} />
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '24px' }}>
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>İletişim</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href={`tel:${siteConfig.lawyer.phone}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--ivory-dim)', textDecoration: 'none' }}>{siteConfig.lawyer.phone}</a>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--ivory-dim)', lineHeight: 1.6, margin: 0 }}>{siteConfig.lawyer.address}</p>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>Çalışma Saatleri</h4>
            <div style={{ background: 'var(--slate-mid)', border: '1px solid rgba(201,168,76,0.15)', padding: '20px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { day: 'Pazartesi – Cuma', hours: '09:00 – 18:30', active: true },
                  { day: 'Cumartesi', hours: 'Randevu ile', active: false },
                  { day: 'Pazar', hours: 'Kapalı', active: false },
                ].map((item, i) => (
                  <div key={i}>
                    {i > 0 && <div style={{ height: '1px', background: 'rgba(201,168,76,0.12)', marginBottom: '10px' }} />}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--ivory-dim)' }}>{item.day}</span>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, color: item.active ? 'var(--ivory)' : 'var(--ivory-dim)' }}>{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ width: '100%', height: '130px', background: 'var(--slate-mid)', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 8px', display: 'block' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#C9A84C" strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="3" stroke="#C9A84C" strokeWidth="1.5"/>
                  </svg>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', color: 'var(--ivory-dim)', letterSpacing: '0.1em' }}>Dörtyol / Hatay</p>
                </div>
              </div>
            </div>
            <Link href="/iletisim" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', fontSize: '9px' }}>Randevu Al</Link>
          </div>
        </div>
      </div>

      <div style={{ background: '#070D14', padding: '16px 0' }}>
        <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', color: 'rgba(157,144,128,0.7)', margin: 0 }}>
            © {year} {siteConfig.lawyer.name} — Tüm hakları saklıdır.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['KVKK', 'Gizlilik Politikası', 'Çerez Politikası'].map((item) => (
              <Link key={item} href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', color: 'rgba(157,144,128,0.7)', textDecoration: 'none', letterSpacing: '0.05em' }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
