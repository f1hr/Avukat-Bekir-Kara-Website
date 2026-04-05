'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section style={{
      minHeight: '280px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '56px',
      background: 'var(--ink)',
    }}>
      {/* Diagonal grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23C9A84C' stroke-width='0.3' opacity='0.08'%3E%3Cpath d='M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />
      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--slate) 0%, var(--ink) 60%)', opacity: 0.7, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(29,45,62,0.5) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', width: '36px', height: '36px', borderTop: '1px solid rgba(201,168,76,0.3)', borderLeft: '1px solid rgba(201,168,76,0.3)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '36px', height: '36px', borderBottom: '1px solid rgba(201,168,76,0.2)', borderRight: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none' }} />

      <div className="container-max" style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Breadcrumb as label-tag */}
          {breadcrumb && breadcrumb.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
              <Link href="/" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,232,214,0.4)', textDecoration: 'none' }}>
                Ana Sayfa
              </Link>
              {breadcrumb.map((item, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'rgba(201,168,76,0.4)', fontSize: '10px' }}>›</span>
                  {item.href ? (
                    <Link href={item.href} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: i === breadcrumb.length - 1 ? 'var(--gold)' : 'rgba(240,232,214,0.4)', textDecoration: 'none' }}>
                      {item.label}
                    </Link>
                  ) : (
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                      {item.label}
                    </span>
                  )}
                </span>
              ))}
            </div>
          )}

          {!breadcrumb && (
            <div className="label-tag" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              {title}
            </div>
          )}

          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 54px)',
            fontWeight: 700,
            color: 'var(--ivory)',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            marginBottom: subtitle ? '14px' : '24px',
          }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: 'rgba(240,232,214,0.55)',
              marginBottom: '24px',
              maxWidth: '500px',
              margin: '0 auto 24px',
              lineHeight: 1.75,
            }}>
              {subtitle}
            </p>
          )}

          {/* Bottom brass line */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ display: 'block', width: '48px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
