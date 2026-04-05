'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(12,18,25,0.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(201,168,76,0.3)',
      padding: '16px 24px',
      zIndex: 998,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap',
    }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--ivory-dim)', margin: 0, flex: 1, minWidth: '240px', lineHeight: 1.6 }}>
        Bu site, hizmet kalitesini artırmak ve kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır.
        KVKK kapsamında kişisel verileriniz korunmaktadır.{' '}
        <Link href="#" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
          Daha Fazla Bilgi
        </Link>
      </p>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
        <button
          onClick={reject}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: 'transparent',
            border: 'none',
            color: 'var(--ivory-dim)',
            padding: '8px 12px',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ivory-dim)')}
        >
          Reddet
        </button>
        <Link href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', color: 'var(--ivory-dim)', textDecoration: 'none' }}>
          Daha Fazla
        </Link>
        <button
          onClick={accept}
          className="btn-primary"
          style={{ padding: '9px 22px', fontSize: '10px', cursor: 'pointer' }}
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
