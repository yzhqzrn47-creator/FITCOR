import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

const cards = [
  {
    icon: '🎯',
    title: 'תוכניות אימון ותזונה אישיות',
    desc: 'בנייה מדויקת מבוססת מטרות, אורח חיים ומדדים אישיים.',
    link: '/coaching',
  },
  {
    icon: '📊',
    title: 'מעקב שבועי קפדני',
    desc: 'בדיקת התקדמות, עדכון מדדים ודיוקים שבועיים כדי להבטיח תוצאות.',
    link: '/coaching',
  },
  {
    icon: '⚡',
    title: 'משמעת ותהליך ארוך טווח',
    desc: 'גישה מקצועית שבונה הרגלים חזקים ותוצאות שנשארות לאורך זמן.',
    link: '/about',
  },
];

export default function Home() {
  return (
    <main dir="rtl" style={{ backgroundColor: '#070708', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      <Nav active="/" ctaLabel="להתחלת תהליך אישי" ctaHref="/coaching" />

      {/* HERO SECTION */}
      <section style={{ padding: '180px 24px 100px', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.25em', color: '#D4AF37', textTransform: 'uppercase' }}>
            FITCOR — ONLINE COACHING
          </span>
          
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 900, margin: '20px 0 24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            BUILD YOUR BEST VERSION.<br />
            <span style={{ color: '#D4AF37' }}>ללבוש את המטרה.</span>
          </h1>

          <p style={{ color: '#a1a1aa', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            ליווי כושר ותזונה אישי אונליין. מעטפת מקצועית מלאה לבניית גוף חזק, חטוב ובריא יותר.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/coaching" style={{
              backgroundColor: '#D4AF37',
              color: '#070708',
              padding: '18px 38px',
              borderRadius: '9999px',
              fontWeight: 900,
              fontSize: '16px',
              textDecoration: 'none',
              boxShadow: '0 10px 30px -8px rgba(212,175,55,0.4)',
            }}>
              התחל תהליך אישי ←
            </a>
            <a href="/about" style={{
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '18px 38px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '16px',
              textDecoration: 'none',
            }}>
              אודות FITCOR
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES / CARDS */}
      <section style={{ padding: '80px 24px 120px', backgroundColor: '#050506', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {cards.map((c, i) => (
              <a key={i} href={c.link} style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '24px',
                padding: '36px 28px',
                textDecoration: 'none',
                color: '#fff',
                display: 'block',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{c.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 10px' }}>{c.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, margin: '0 0 16px' }}>{c.desc}</p>
                <span style={{ color: '#D4AF37', fontSize: '13.5px', fontWeight: 800 }}>למידע נוסף ←</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
