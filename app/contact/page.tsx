'use client';
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendWhatsApp = () => {
    const phoneNumber = '972559939351';
    const text = `היי יצחק! שמי ${name || '___'}. ${message || ''}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main dir="rtl" style={{ backgroundColor: '#070708', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden', minHeight: '100vh' }}>
      <Nav active="/contact" ctaLabel="להתחלת תהליך אישי" ctaHref="/coaching" />

      <section style={{ padding: '160px 24px 100px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.22em', color: '#D4AF37' }}>GET IN TOUCH</span>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, margin: '16px 0' }}>יצירת קשר</h1>
          <p style={{ color: '#a1a1aa', fontSize: '15.5px' }}>שאלה, בקשה, או סתם רוצה להגיד שלום — אני כאן.</p>
        </div>

        <div style={{ maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '28px', padding: '34px 26px' }}>
            <h3 style={{ fontSize: '19px', fontWeight: 800, margin: '0 0 20px' }}>שלח הודעה ישירות לוואטסאפ</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input
                type="text" 
                placeholder="השם שלך" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                style={{ 
                  padding: '16px', 
                  borderRadius: '14px', 
                  backgroundColor: '#121214', 
                  border: '1px solid rgba(212,175,55,0.2)', 
                  color: '#fff', 
                  fontSize: '15px',
                  outline: 'none'
                }}
              />
              <textarea
                placeholder="מה תרצה לשאול / לספר?" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                style={{ 
                  padding: '16px', 
                  borderRadius: '14px', 
                  backgroundColor: '#121214', 
                  border: '1px solid rgba(212,175,55,0.2)', 
                  color: '#fff', 
                  fontSize: '15px', 
                  resize: 'vertical', 
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
              <button onClick={sendWhatsApp} style={{
                padding: '17px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '14px',
                fontSize: '16px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                boxShadow: '0 8px 25px rgba(37,211,102,0.25)'
              }}>שליחה בוואטסאפ 🚀</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <a href="https://wa.me/972559939351" target="_blank" rel="noopener noreferrer" style={{
              padding: '22px', borderRadius: '18px', border: '1px solid rgba(212,175,55,0.15)', backgroundColor: 'rgba(255,255,255,0.02)',
              textDecoration: 'none', color: '#fff', textAlign: 'center',
            }}>
              <div style={{ fontSize: '26px', marginBottom: '8px' }}>💬</div>
              <div style={{ fontSize: '13.5px', fontWeight: 700 }}>וואטסאפ ישיר</div>
            </a>
            
            <a href="https://www.instagram.com/yitzhak.gym?igsh=OThxa2lrYXkxYjZn" target="_blank" rel="noopener noreferrer" style={{
              padding: '22px', borderRadius: '18px', border: '1px solid rgba(212,175,55,0.15)', backgroundColor: 'rgba(255,255,255,0.02)',
              textDecoration: 'none', color: '#fff', textAlign: 'center',
            }}>
              <div style={{ fontSize: '26px', marginBottom: '8px' }}>📷</div>
              <div style={{ fontSize: '13.5px', fontWeight: 700 }}>אינסטגרם</div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
