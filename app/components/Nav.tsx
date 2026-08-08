'use client';
import React, { useEffect, useState } from 'react';

const LINKS = [
  { href: '/', label: 'בית' },
  { href: '/coaching', label: 'ליווי' },
  { href: '/store', label: 'חנות' },
  { href: '/about', label: 'אודות' },
  { href: '/contact', label: 'יצירת קשר' },
];

export default function Nav({ active, ctaLabel = 'בואו נתחיל', ctaHref = '/coaching#survey' }: { active: string; ctaLabel?: string; ctaHref?: string; }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || menuOpen ? 'rgba(7,7,8,0.95)' : 'linear-gradient(to bottom, rgba(7,7,8,0.85), rgba(7,7,8,0))',
      backdropFilter: scrolled || menuOpen ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(212,175,55,0.12)' : '1px solid transparent',
      transition: 'all .3s ease',
      padding: scrolled ? '14px 0' : '22px 0',
    }}>
      <nav dir="rtl" style={{
        maxWidth: '1180px', margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ fontSize: '19px', fontWeight: '900', letterSpacing: '0.08em', color: '#fff', textDecoration: 'none' }}>
          FIT<span style={{ color: '#D4AF37' }}>COR</span>
        </a>

        {/* תפריט למחשב */}
        <div style={{ display: 'flex', gap: '30px' }} className="nav-links-desktop">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              color: active === l.href ? '#D4AF37' : '#e4e4e7',
              borderBottom: active === l.href ? '1px solid #D4AF37' : '1px solid transparent',
              paddingBottom: '3px',
            }}>{l.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href={ctaHref} style={{
            fontSize: '13px', fontWeight: 800, color: '#070708', backgroundColor: '#D4AF37',
            padding: '11px 22px', borderRadius: '9999px', textDecoration: 'none', whiteSpace: 'nowrap',
          }}>{ctaLabel}</a>

          {/* כפתור המבורגר לנייד */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', padding: 0 }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* תפריט נפתח לנייד */}
      {menuOpen && (
        <div className="mobile-menu-dropdown" dir="rtl" style={{
          backgroundColor: '#070708', padding: '20px 24px 30px', display: 'flex', flexDirection: 'column', gap: '16px',
          borderBottom: '1px solid rgba(212,175,55,0.2)'
        }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: '16px', fontWeight: 700, textDecoration: 'none',
              color: active === l.href ? '#D4AF37' : '#e4e4e7',
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 781px) { .mobile-menu-btn, .mobile-menu-dropdown { display: none !important; } }
        @media (max-width: 780px) { .nav-links-desktop { display: none !important; } }
      `}} />
    </header>
  );
}
