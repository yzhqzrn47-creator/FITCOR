import React from 'react';

export default function Footer() {
  return (
    <footer dir="rtl" style={{ padding: '60px 24px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', backgroundColor: '#050506' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', gap: '24px',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: '15px', fontWeight: '900', letterSpacing: '0.15em', color: '#D4AF37' }}>
            FITCOR BY YITZHAK AZRAN
          </div>
          <div style={{ display: 'flex', gap: '14px', marginTop: '8px', fontSize: '13px' }}>
            <a href="https://wa.me/972559939351" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>
              WhatsApp ←
            </a>
            <a href="https://www.instagram.com/yitzhak.gym?igsh=OThxa2lrYXkxyjZn" target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold', textDecoration: 'none' }}>
              Instagram ←
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', fontSize: '13px' }}>
          <a href="/coaching" style={{ color: '#a1a1aa', textDecoration: 'none' }}>ליווי</a>
          <a href="/store" style={{ color: '#a1a1aa', textDecoration: 'none' }}>חנות</a>
          <a href="/about" style={{ color: '#a1a1aa', textDecoration: 'none' }}>אודות</a>
          <a href="/contact" style={{ color: '#a1a1aa', textDecoration: 'none' }}>יצירת קשר</a>
        </div>

        <p style={{ color: '#71717a', fontSize: '13px', margin: 0 }}>
          © {new Date().getFullYear()} כל הזכויות שמורות ליצחק עזרן.
        </p>
      </div>
    </footer>
  );
}
