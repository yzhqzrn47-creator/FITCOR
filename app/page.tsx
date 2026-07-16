'use client';
import React, { useState, useEffect } from 'react';

const advantages = [
  {
    icon: '💪',
    title: 'תוכנית אימונים אישית ומדויקת',
    description: 'נבנית מאפס במיוחד עבור הגוף, המטרות, הפציעות ואורח החיים שלך.',
  },
  {
    icon: '🥗',
    title: 'תזונה גמישה ללא הרעבה',
    description: 'תפריט מגוון המותאם למאכלים שאתה אוהב, שתוכל להתמיד בו לאורך זמן.',
  },
  {
    icon: '📈',
    title: 'מעקב שבועי קפדני',
    description: 'בדיקת מדדים, שקילות והתקדמות שבועית כדי לוודא שאנחנו תמיד בגרף עלייה.',
  },
  {
    icon: '💬',
    title: 'זמינות אישית 24/6 בוואטסאפ',
    description: 'אני כאן איתך ביום-יום. לכל שאלה, התייעצות, דיוק טכניקה או זריקת מוטיבציה.',
  },
  {
    icon: '📸',
    title: 'בדיקת טכניקה בסרטונים',
    description: 'אתה שולח לי סרטוני ביצוע מהאימון, ואני מחזיר לך פידבק מדויק למניעת פציעות.',
  },
  {
    icon: '🎯',
    title: 'שינוי חשיבה והרגלים',
    description: 'אנחנו לא רק משנים את הגוף, אנחנו בונים הרגלים חדשים שיישארו איתך לכל החיים.',
  },
];

const steps = [
  {
    num: '01',
    title: 'מילוי שאלון התאמה',
    description: 'אתה עונה על כמה שאלות קצרות לגבי המטרות, רמת הכושר הנוכחית ואורח החיים שלך.',
  },
  {
    num: '02',
    title: 'שיחת אפיון וניתוח נתונים',
    description: 'אני מנתח את הנתונים שלך לעומק ומגדיר את האסטרטגיה המדויקת ביותר עבורך.',
  },
  {
    num: '03',
    title: 'קבלת התוכניות ויציאה לדרך',
    description: 'התוכנית המותאמת שלך מוכנה. אנחנו עושים שיחת הסבר מפורטת ויוצאים לתת בראש.',
  },
  {
    num: '04',
    title: 'ליווי צמוד ומעקב שבועי',
    description: 'בכל שבוע אנחנו מנתחים התקדמות, עושים התאמות ומבטיחים שלא תפסיק להשתפר.',
  },
];

const faqs = [
  {
    question: 'איך עובד ליווי אונליין בהשוואה למאמן אישי פיזי?',
    answer: 'בליווי אונליין אתה מקבל מעטפת יומית של 24/6. במקום לראות מאמן לשעה אחת בשבוע, יש לך ליווי יומי צמוד בוואטסאפ, בדיקת טכניקה של תרגילי מפתח דרך סרטונים שאתה שולח לי מהאימון, תפריט תזונה דינמי שמתעדכן בהתאם להתקדמות, ומעקב שבועי קפדני על כל המדדים כדי להבטיח שאתה מתקדם ב-100% מהזמן.'
  },
  {
    question: 'תוך כמה זמן רואים תוצאות?',
    answer: 'כבר בשבועיים הראשונים תרגיש שינוי דרמטי ברמת האנרגיה, בביטחון בחדר כושר ובמדדים. שינוי ויזואלי משמעותי של חיטוב, ירידה באחוזי השומן ועלייה במסת השריר נראים בבירור תוך 4 עד 8 שבועות של התמדה בתוכנית.'
  },
  {
    question: 'האם התפריט דורש ממני לאכול רק אוכל משעמם או להרעיב את עצמי?',
    answer: 'ממש לא. השיטה שלי מבוססת על תזונה גמישה ואורח חיים בריא שניתן להתמיד בו לאורך זמן. אני בונה לך תפריט עשיר, מגוון וטעים שכולל מאכלים שאתה אוהב, מותאם לסדר היום ולסגנון החיים שלך, בלי שום הימנעות קשוחה או הרעבה מיותרת.'
  },
  {
    question: 'האם הליווי מתאים גם למתחילים גמורים?',
    answer: 'מתאים במיוחד. אני מפרק איתך את התהליך לצעדים פשוטים וברורים. אני בונה לך תוכנית אימונים הדרגתית, ומלמד אותך בדיוק איך לבצע כל תרגיל בצורה בטוחה ויעילה עם סרטוני הסבר מפורטים וליווי טכני אישי.'
  }
];

export default function Home() {
  const [surveyStep, setSurveyStep] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [location, setLocation] = useState('');
  const [frequency, setFrequency] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (surveyStep === 7) {
      setIsAnalyzing(true);
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
        setSurveyStep(8);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [surveyStep]);

  const handleScrollToSurvey = () => {
    const surveySection = document.getElementById('survey-section');
    if (surveySection) {
      surveySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppSend = () => {
    const phoneNumber = '972559939351';
    const message = `היי יצחק, מילאתי את שאלון ההתאמה באתר! הנה הפרטים שלי:
    
👤 שם: ${name}
🎂 גיל: ${age}
📏 גובה: ${height} ס"מ
⚖️ משקל: ${weight} ק"ג
🎯 מטרה: ${goal}
📍 מקום אימון: ${location}
⚡ תדירות: ${frequency} פעמים בשבוע

אשמח לשמוע איך מתחילים את התהליך! 🔥`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <main dir="rtl" style={{
      backgroundColor: '#070708',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      overflowX: 'hidden',
      lineHeight: '1.5',
    }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />

      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px 24px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(600px, 100vw)',
          height: 'min(600px, 100vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}></div>
        
        <div style={{ position: 'relative', maxWidth: '800px', width: '100%', zIndex: 1 }}>
          <div style={{ marginBottom: '28px' }}>
            <span style={{
              fontSize: '12px',
              fontWeight: '900',
              letterSpacing: '0.25em',
              color: '#D4AF37',
              backgroundColor: 'rgba(212, 175, 55, 0.07)',
              padding: '10px 28px',
              borderRadius: '9999px',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              display: 'inline-block',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.05)',
            }}>
              YITZHAK AZRAN
            </span>
          </div>

          <h1 style={{ 
            margin: '0 0 24px 0', 
            fontSize: 'clamp(2.2rem, 7.5vw, 3.5rem)', 
            fontWeight: '900', 
            letterSpacing: '-1px' 
          }}>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #FFE89C 0%, #D4AF37 50%, #AA7C11 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '8px',
            }}>
              THE METHOD
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(1rem, 4vw, 1.4rem)',
              color: '#e4e4e7',
              letterSpacing: '0.15em',
              fontWeight: '800',
              textTransform: 'uppercase',
            }}>
              BUILD YOUR BEST VERSION
            </span>
          </h1>

          <p style={{
            maxWidth: '600px',
            margin: '0 auto 40px auto',
            color: '#a1a1aa',
            fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
            lineHeight: '1.75',
          }}>
            הליווי האישי שיעזור לך לבנות גוף חזק, חטוב ובריא באמצעות תוכנית אימונים מותאמת אישית, הכוונה תזונתית גמישה וליווי מקצועי צמוד אונליין.
          </p>

          <div style={{
            position: 'relative',
            maxWidth: '460px',
            margin: '0 auto 48px auto',
            padding: '28px 20px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.015)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '900',
              color: '#D4AF37',
              letterSpacing: '0.2em',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              🌟 הסטנדרט החדש שלך לתוצאות
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: '900', color: '#D4AF37', lineHeight: '1' }}>100%</div>
                <div style={{ fontSize: '12px', color: '#e4e4e7', marginTop: '6px', fontWeight: '700' }}>מותאם אישית</div>
              </div>
              
              <div style={{ width: '1px', height: '35px', backgroundColor: 'rgba(212, 175, 55, 0.15)' }}></div>
              
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: '900', color: '#D4AF37', lineHeight: '1' }}>24/6</div>
                <div style={{ fontSize: '12px', color: '#e4e4e7', marginTop: '6px', fontWeight: '700' }}>זמינות אישית</div>
              </div>
              
              <div style={{ width: '1px', height: '35px', backgroundColor: 'rgba(212, 175, 55, 0.15)' }}></div>
              
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: '900', color: '#D4AF37', lineHeight: '1' }}>PRO</div>
                <div style={{ fontSize: '12px', color: '#e4e4e7', marginTop: '6px', fontWeight: '700' }}>מעטפת מדעית</div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleScrollToSurvey}
            style={{
              backgroundColor: '#D4AF37',
              color: '#070708',
              border: 'none',
              padding: '18px 48px',
              borderRadius: '9999px',
              fontSize: '18px',
              fontWeight: '900',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 8px 30px rgba(212, 175, 55, 0.35)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            אני רוצה להתחיל ←
          </button>
        </div>
      </section>

      <section style={{
        padding: '100px 24px',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        backgroundColor: '#070708',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>THE ADVANTAGE</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', margin: 0 }}>
              למה דווקא <span style={{ color: '#D4AF37' }}>אני?</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {advantages.map((item, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '24px',
                  padding: '32px',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div style={{ fontSize: '36px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: '#ffffff' }}>{item.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '100px 24px',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        backgroundColor: '#050506',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>THE PROCESS</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', margin: 0 }}>
              איך התהליך <span style={{ color: '#D4AF37' }}>עובד?</span>
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            {steps.map((step, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '32px',
                  borderRadius: '24px',
                  border: '1px solid rgba(212, 175, 55, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: '900',
                  color: 'rgba(212, 175, 55, 0.25)',
                  fontFamily: 'monospace',
                  lineHeight: '1',
                }}>{step.num}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: '#ffffff' }}>{step.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="survey-section" style={{
        padding: '100px 24px',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        backgroundColor: '#070708',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '32px',
            padding: '40px 24px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            boxSizing: 'border-box',
          }}>
            
            {surveyStep === 0 && (
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 'bold',
                  color: '#D4AF37',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  alignSelf: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}>THE SURVEY</span>
                <h3 style={{ fontSize: '26px', fontWeight: '900', margin: 0 }}>השאלון להתאמת הליווי האישי</h3>
                <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                  השאלון הבא לוקח פחות מדקה. התשובות שלך יעזרו לי להבין בדיוק איזה תפריט ותוכנית אימונים יביאו אותך לתוצאה המהירה והבטוחה ביותר.
                </p>
                <button
                  onClick={() => setSurveyStep(1)}
                  style={{
                    padding: '18px',
                    backgroundColor: '#D4AF37',
                    color: '#070708',
                    border: 'none',
                    borderRadius: '16px',
                    fontSize: '18px',
                    fontWeight: '900',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.25)',
                  }}
                >
                  בוא נתחיל 🔥
                </button>
              </div>
            )}

            {surveyStep === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h4 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>👋 איך קוראים לך?</h4>
                <input
                  type="text"
                  placeholder="הכנס שם מלא"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    padding: '18px',
                    borderRadius: '16px',
                    backgroundColor: '#121214',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    color: '#ffffff',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
                <button
                  disabled={!name}
                  onClick={() => setSurveyStep(2)}
                  style={{
                    padding: '18px',
                    backgroundColor: name ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
                    color: name ? '#070708' : '#52525b',
                    border: 'none',
                    borderRadius: '16px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: name ? 'pointer' : 'not-allowed',
                  }}
                >
                  המשך
                </button>
              </div>
            )}

            {surveyStep === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h4 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>🎂 בן כמה אתה?</h4>
                <input
                  type="number"
                  placeholder="הכנס גיל"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  style={{
                    padding: '18px',
                    borderRadius: '16px',
                    backgroundColor: '#121214',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    color: '#ffffff',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => setSurveyStep(1)} style={{ flex: 1, padding: '18px', backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#ffffff', borderRadius: '16px', cursor: 'pointer' }}>חזור</button>
                  <button disabled={!age} onClick={() => setSurveyStep(3)} style={{ flex: 2, padding: '18px', backgroundColor: age ? '#ffffff' : 'rgba(255, 255, 255, 0.1)', color: age ? '#070708' : '#52525b', border: 'none', borderRadius: '16px', fontWeight: 'bold', cursor: age ? 'pointer' : 'not-allowed' }}>המשך</button>
                </div>
              </div>
            )}

            {surveyStep === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h4 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>⚖️ מה הגובה והמשקל שלך?</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <input
                    type="number"
                    placeholder="גובה (ס״מ)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '18px',
                      borderRadius: '16px',
                      backgroundColor: '#121214',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      color: '#ffffff',
                      fontSize: '16px',
                      outline: 'none',
                    }}
                  />
                  <input
                    type="number"
                    placeholder="משקל (ק״ג)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '18px',
                      borderRadius: '16px',
                      backgroundColor: '#121214',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      color: '#ffffff',
                      fontSize: '16px',
                      outline: 'none',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => setSurveyStep(2)} style={{ flex: 1, padding: '18px', backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#ffffff', borderRadius: '16px', cursor: 'pointer' }}>חזור</button>
                  <button disabled={!height || !weight} onClick={() => setSurveyStep(4)} style={{ flex: 2, padding: '18px', backgroundColor: (height && weight) ? '#ffffff' : 'rgba(255, 255, 255, 0.1)', color: (height && weight) ? '#070708' : '#52525b', border: 'none', borderRadius: '16px', fontWeight: 'bold', cursor: (height && weight) ? 'pointer' : 'not-allowed' }}>המשך</button>
                </div>
              </div>
            )}

            {surveyStep === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 8px 0' }}>🎯 מה המטרה העיקרית שלך?</h4>
                {['חיטוב וירידה באחוזי שומן', 'עלייה במסת שריר וכוח', 'שיפור סיבולת וכושר כללי'].map((option) => (
                  <button
                    key={option}
                    onClick={() => { setGoal(option); setSurveyStep(5); }}
                    style={{
                      width: '100%',
                      padding: '18px',
                      borderRadius: '16px',
                      textAlign: 'right',
                      border: goal === option ? '1px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: goal === option ? 'rgba(212, 175, 55, 0.15)' : '#121214',
                      color: goal === option ? '#D4AF37' : '#ffffff',
                      fontSize: '16px',
                      cursor: 'pointer',
                      fontWeight: goal === option ? 'bold' : 'normal',
                    }}
                  >
                    {option}
                  </button>
                ))}
                <button onClick={() => setSurveyStep(3)} style={{ padding: '18px', backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#ffffff', borderRadius: '16px', cursor: 'pointer', marginTop: '12px' }}>חזור</button>
              </div>
            )}

            {surveyStep === 5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 8px 0' }}>📍 איפה אתה מתאמן בדרך כלל?</h4>
                {['חדר כושר', 'בבית עם ציוד בסיסי', 'בחוץ / פארק (משקל גוף)'].map((option) => (
                  <button
                    key={option}
                    onClick={() => { setLocation(option); setSurveyStep(6); }}
                    style={{
                      width: '100%',
                      padding: '18px',
                      borderRadius: '16px',
                      textAlign: 'right',
                      border: location === option ? '1px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: location === option ? 'rgba(212, 175, 55, 0.15)' : '#121214',
                      color: location === option ? '#D4AF37' : '#ffffff',
                      fontSize: '16px',
                      cursor: 'pointer',
                      fontWeight: location === option ? 'bold' : 'normal',
                    }}
                  >
                    {option}
                  </button>
                ))}
                <button onClick={() => setSurveyStep(4)} style={{ padding: '18px', backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#ffffff', borderRadius: '16px', cursor: 'pointer', marginTop: '12px' }}>חזור</button>
              </div>
            )}

            {surveyStep === 6 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 8px 0' }}>⚡ כמה פעמים בשבוע אתה יכול להתאמן?</h4>
                {['1-2 אימונים בשבוע', '3-4 אימונים בשבוע', '5+ אימונים בשבוע'].map((option) => (
                  <button
                    key={option}
                    onClick={() => { setFrequency(option); setSurveyStep(7); }}
                    style={{
                      width: '100%',
                      padding: '18px',
                      borderRadius: '16px',
                      textAlign: 'right',
                      border: frequency === option ? '1px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: frequency === option ? 'rgba(212, 175, 55, 0.15)' : '#121214',
                      color: frequency === option ? '#D4AF37' : '#ffffff',
                      fontSize: '16px',
                      cursor: 'pointer',
                      fontWeight: frequency === option ? 'bold' : 'normal',
                    }}
                  >
                    {option}
                  </button>
                ))}
                <button onClick={() => setSurveyStep(5)} style={{ padding: '18px', backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#ffffff', borderRadius: '16px', cursor: 'pointer', marginTop: '12px' }}>חזור</button>
              </div>
            )}

            {surveyStep === 7 && isAnalyzing && (
              <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  border: '4px solid #D4AF37',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}></div>
                <h4 style={{ fontSize: '18px', fontWeight: '900', color: '#D4AF37', letterSpacing: '0.1em' }}>מנתח נתונים אישיים...</h4>
              </div>
            )}

            {surveyStep === 8 && (
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <div style={{ fontSize: '64px' }}>🎉</div>
                <h4 style={{ fontSize: '26px', fontWeight: '900', margin: 0 }}>הנתונים נותחו בהצלחה!</h4>
                <p style={{ color: '#d4d4d8', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                  היי <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>{name}</span>, הכנתי עבורך ניתוח ראשוני של הנתונים. לחץ על הכפתור למטה כדי לשלוח לי אותם ישירות לוואטסאפ ונתחיל לעבוד על הגוף החדש שלך!
                </p>
                <button
                  onClick={handleWhatsAppSend}
                  style={{
                    width: '100%',
                    padding: '18px',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '16px',
                    fontSize: '18px',
                    fontWeight: '900',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  שלח ליצחק בוואטסאפ 🚀
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      <section id="faq" style={{
        padding: '100px 24px',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        backgroundColor: '#070708',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>QUESTIONS</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', margin: 0 }}>
              שאלות <span style={{ color: '#D4AF37' }}>נפוצות</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '24px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      textAlign: 'right',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span style={{ flex: 1 }}>{faq.question}</span>
                    <span style={{ color: '#D4AF37', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '24px',
                      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
                      color: '#a1a1aa',
                      fontSize: '16px',
                      lineHeight: '1.7',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer style={{
        padding: '60px 24px',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        backgroundColor: '#050506',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '32px',
        }}>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '18px', fontWeight: '900', color: '#D4AF37', letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>YITZHAK AZRAN</span>
            <span style={{ color: '#52525b', fontSize: '13px' }}>THE METHOD. ALL RIGHTS RESERVED © 2026</span>
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a 
              href="https://instagram.com/yitzhakazran" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#a1a1aa', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}
            >
              INSTAGRAM
            </a>
            <a 
              href="https://wa.me/972559939351" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#a1a1aa', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
