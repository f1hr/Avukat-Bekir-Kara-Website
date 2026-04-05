'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımda', href: '/hakkimda' },
  { label: 'Uzmanlık Alanları', href: '/uzmanlik-alanlari' },
  { label: 'Davalar', href: '/davalar' },
  { label: 'SSS', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(12,18,25,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6.5V11.5C4 16.3 7.6 20.9 12 22.5C16.4 20.9 20 16.3 20 11.5V6.5L12 2Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(201,168,76,0.06)"/>
                <path d="M8.5 12L11 14.5L15.5 10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '17px', fontWeight: 600, color: 'var(--ivory)', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.1 }}>KARA</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '8px', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '2px' }}>HUKUK BÜROSU</div>
            </div>
          </Link>

          <div className="hidden-mobile" style={{ alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 500,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: pathname === link.href ? 'var(--gold)' : 'rgba(240,232,214,0.7)',
                  textDecoration: 'none', transition: 'color 0.2s ease', position: 'relative', paddingBottom: '3px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? 'var(--gold)' : 'rgba(240,232,214,0.7)')}
              >
                {link.label}
                {pathname === link.href && (
                  <span style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '1px', background: 'var(--gold)' }} />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden-mobile" style={{ alignItems: 'center', gap: '20px' }}>
            <a href="tel:+902125550123" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 500, color: 'rgba(240,232,214,0.55)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,232,214,0.55)')}>
              +90 212 555 01 23
            </a>
            <Link href="/iletisim" className="btn-primary" style={{ padding: '10px 22px', fontSize: '9px' }}>Randevu Al</Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }} aria-label="Menü">
            {menuOpen ? <X size={22} color="var(--gold)" /> : <Menu size={22} color="var(--ivory)" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(12,18,25,0.99)', backdropFilter: 'blur(24px)', zIndex: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
            {navLinks.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={link.href} style={{ display: 'block', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '34px', fontWeight: 600, color: pathname === link.href ? 'var(--gold)' : 'var(--ivory)', textDecoration: 'none', padding: '10px 40px', textAlign: 'center' }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ marginTop: '32px' }}>
              <Link href="/iletisim" className="btn-primary" style={{ fontSize: '11px' }}>Randevu Al</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
