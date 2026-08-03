'use client';
import React, { useEffect, useState } from 'react';
import { colors, primaryButton } from '../lib/theme';

export default function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportBottom = scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // מסתיר את הפס לפני שמגיעים לפוטר (כדי לא לכסות את קישורי
      // התקנון/פרטיות/נגישות) - "קרוב לתחתית" מוגדר כ-500px אחרונים.
      const nearBottom = pageHeight - viewportBottom < 500;

      // מסתיר את הפס כשסקשן השאלון עצמו נמצא בתצוגה - אין טעם להציע
      // "לעבור לשאלון" כשהמשתמש כבר בתוכו.
      const surveyEl = document.getElementById('survey-section');
      const overlapsSurvey = surveyEl
        ? surveyEl.getBoundingClientRect().top < window.innerHeight &&
          surveyEl.getBoundingClientRect().bottom > 0
        : false;

      setShow(scrollY > window.innerHeight * 0.75 && !nearBottom && !overlapsSurvey);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    document.getElementById('survey-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* מוסתר לגמרי בדסקטופ - רלוונטי רק למובייל שבו קשה לגלול חזרה למעלה */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (min-width: 900px) {
          #fitcor-sticky-cta { display: none; }
        }
      `,
        }}
      />
      <div
        id="fitcor-sticky-cta"
        style={{
          position: 'fixed',
          bottom: show ? 0 : '-100px',
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '12px 16px',
          backgroundColor: 'rgba(7, 7, 8, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: `1px solid ${colors.cardBorderStrong}`,
          transition: 'bottom 0.3s ease',
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <button
          onClick={handleClick}
          aria-label="עבור לשאלון ההתאמה האישית"
          style={{
            ...primaryButton,
            width: '100%',
            maxWidth: '460px',
            padding: '14px 24px',
            fontSize: '16px',
            boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
          }}
        >
          אני רוצה להתחיל ←
        </button>
      </div>
    </>
  );
}
