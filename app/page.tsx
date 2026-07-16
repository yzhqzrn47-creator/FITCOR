import React from 'react';

export default function Home() {
  return (
    <main style={{
      backgroundColor: '#070708',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      direction: 'rtl',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      {/* לוגו / כותרת ראשית */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '900',
          margin: '0 0 10px 0',
          background: 'linear-gradient(to left, #FFE259, #FFA751)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-1px'
        }}>
          THE METHOD
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#a0aec0',
          margin: '0',
          fontWeight: '300'
        }}>
          מאמן כושר אישי אונליין | יצחק עזראן
        </p>
      </div>

      {/* תיבת תוכן מעוצבת */}
      <div style={{
        backgroundColor: '#121214',
        border: '1px solid #27272a',
        borderRadius: '16px',
        padding: '30px',
        maxWidth: '450px',
        width: '100%',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#ffffff',
          marginTop: '0',
          marginBottom: '15px'
        }}>
          האתר החדש בבנייה 🚀
        </h2>
        <p style={{
          color: '#a0aec0',
          lineHeight: '1.6',
          fontSize: '1rem',
          marginBottom: '25px'
        }}>
          אנחנו מסדרים את החיבורים האחרונים מאחורי הקלעים. האתר יעלה בקרוב בעיצוב המלא והחדש שלו!
        </p>

        {/* כפתור מעוצב */}
        <a 
          href="https://www.instagram.com" /* כאן תוכל להחליף לקישור לאינסטגרם שלך */
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#ffa751',
            color: '#070708',
            padding: '12px 30px',
            borderRadius: '9999px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 15px rgba(255, 167, 81, 0.3)'
          }}
        >
          עקבו באינסטגרם
        </a>
      </div>
    </main>
  );
}
