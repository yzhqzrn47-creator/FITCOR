import React from 'react';

export default function Footer() {
  return (
    <footer dir="rtl" style={{ padding: '60px 24px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', backgroundColor: '#050506' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', gap: '24px',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontSize: '15px', fontWeight: '900', letterSpacing: '0.15em', color: '#D4AF37' }}>
          FITCOR BY YITZHAK AZRAN
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
