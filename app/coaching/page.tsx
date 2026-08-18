'use client';
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const advantages = [
  { icon: '💪', title: 'תוכנית אימונים אישית ומדויקת', description: 'נבנית מאפס במיוחד עבור הגוף, המטרות, הפציעות ואורח החיים שלך.' },
  { icon: '🥗', title: 'תזונה גמישה ללא הרעבה', description: 'תפריט מגוון המותאם למאכלים שאתה אוהב, שתוכל להתמיד בו לאורך זמן.' },
  { icon: '📈', title: 'מעקב שבועי קפדני', description: 'בדיקת מדדים, שקילות והתקדמות שבועית כדי לוודא שאנחנו תמיד בגרף עלייה.' },
  { icon: '💬', title: 'זמינות אישית בוואטסאפ', description: 'אני כאן איתך ביום-יום. לכל שאלה, התייעצות, דיוק טכניקה או זריקת מוטיבציה.' },
  { icon: '📸', title: 'בדיקת טכניקה בסרטונים', description: 'אתה שולח לי סרטוני ביצוע מהאימון, ואני מחזיר לך פידבק מדויק למניעת פציעות.' },
  { icon: '🎯', title: 'שינוי חשיבה והרגלים', description: 'אנחנו לא רק משנים את הגוף, אנחנו בונים הרגלים חדשים שיישארו איתך לכל החיים.' },
];

const steps = [
  { num: '01', title: 'מילוי שאלון התאמה', description: 'אתה עונה על כמה שאלות קצרות לגבי המטרות, רמת הכושר הנוכחית ואורח החיים שלך.' },
  { num: '02', title: 'שיחת אפיון וניתוח נתונים', description: 'אני מנתח את הנתונים שלך לעומק ומגדיר את האסטרטגיה המדויקת ביותר עבורך.' },
  { num: '03', title: 'קבלת התוכניות ויציאה לדרך', description: 'התוכנית המותאמת שלך מוכנה. אנחנו עושים שיחת הסבר מפורטת ויוצאים לתת בראש.' },
  { num: '04', title: 'ליווי צמוד ומעקב שבועי', description: 'בכל שבוע אנחנו מנתחים התקדמות, עושים התאמות ומבטיחים שלא תפסיק להשתפר.' },
];

const faqs = [
  { question: 'איך עובד ליווי אונליין בהשוואה למאמן אישי פיזי?', answer: 'בליווי אונליין אתה מקבל מעטפת יומית. במקום לראות מאמן לשעה אחת בשבוע, יש לך ליווי יומי צמוד בוואטסאפ, בדיקת טכניקה של תרגילי מפתח דרך סרטונים שאתה שולח לי מהאימון, תפריט תזונה דינמי שמתעדכן בהתאם להתקדמות, ומעקב שבועי קפדני על כל המדדים כדי להבטיח שאתה מתקדם ב-100% מהזמן.' },
  { question: 'תוך כמה זמן רואים תוצאות?', answer: 'כבר בשבועיים הראשונים תרגיש שינוי דרמטי ברמת האנרגיה, בביטחון בחדר כושר ובמדדים. שינוי ויזואלי משמעותי של חיטוב, ירידה באחוזי השומן ועלייה במסת השריר נראים בבירור תוך 4 עד 8 שבועות של התמדה בתוכנית.' },
  { question: 'האם התפריט דורש ממני לאכול רק אוכל משעמם או להרעיב את עצמי?', answer: 'ממש לא. השיטה שלי מבוססת על תזונה גמישה ואורח חיים בריא שניתן להתמיד בו לאורך זמן. אני בונה לך תפריט עשיר, מגוון וטעים שכולל מאכלים שאתה אוהב, מותאם לסדר היום ולסגנון החיים שלך, בלי שום הימנעות קשוחה או הרעבה מיותרת.' },
  { question: 'האם הליווי מתאים גם למתחילים גמורים?', answer: 'מתאים במיוחד. אני מפרק איתך את התהליך לצעדים פשוטים וברורים. אני בונה לך תוכנית אימונים הדרגתית, ומלמד אותך בדיוק איך לבצע כל תרגיל בצורה בטוחה ויעילה עם סרטוני הסבר מפורטים וליווי טכני אישי.' },
];

export default function Coaching() {
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
      const timer = setTimeout(() => { setIsAnalyzing(false); setSurveyStep(8); }, 3000);
      return () => clearTimeout(timer);
    }
  }, [surveyStep]);

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
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main dir="rtl" style={{ backgroundColor: '#070708', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      <Nav active="/coaching" ctaLabel="לשאלון" ctaHref="#survey-section" />
      <style dangerouslySetInnerHTML={{__html: `@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}`}} />

      {/* PAGE HEADER */}
      <section style={{ padding: '160px 24px 60px', textAlign: 'center' }}>
        <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.22em', color: '#D4AF37' }}>FITCOR COACHING</span>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 900, margin: '18px 0 16px' }}>הליווי האישי<br /><span style={{ color: '#D4AF37' }}>מתחיל כאן</span></h1>
        <p style={{ color: '#a1a1aa', fontSize: '16px', maxWidth: '520px', margin: '0 auto' }}>תוכנית אימונים ותזונה מותאמת אישית, ליווי מקצועי צמוד אונליין.</p>
      </section>

      {/* ADVANTAGES */}
      <section style={{ padding: '60px 24px 100px', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', letterSpacing: '0.2em' }}>THE ADVANTAGE</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: '10px 0 0' }}>למה דווקא <span style={{ color: '#D4AF37' }}>אני?</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
            {advantages.map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '32px', border: '1px solid rgba(212,175,55,0.15)' }}>
                <div style={{ fontSize: '34px', marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '19px', fontWeight: 800, margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid rgba(212,175,55,0.1)', backgroundColor: '#050506' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', letterSpacing: '0.2em' }}>THE PROCESS</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: '10px 0 0' }}>איך התהליך <span style={{ color: '#D4AF37' }}>עובד?</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '22px', padding: '30px', borderRadius: '22px', border: '1px solid rgba(212,175,55,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div style={{ fontSize: '44px', fontWeight: 900, color: 'rgba(212,175,55,0.25)', fontFamily: 'monospace' }}>{s.num}</div>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SURVEY */}
      <section id="survey-section" style={{ padding: '100px 24px', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '32px', padding: '40px 24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            {surveyStep === 0 && (
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#D4AF37', backgroundColor: 'rgba(212,175,55,0.1)', padding: '6px 16px', borderRadius: '9999px', alignSelf: 'center', border: '1px solid rgba(212,175,55,0.2)' }}>THE SURVEY</span>
                <h3 style={{ fontSize: '24px', fontWeight: 900, margin: 0 }}>השאלון להתאמת הליווי האישי</h3>
                <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>השאלון הבא לוקח פחות מדקה. התשובות שלך יעזרו לי להבין בדיוק איזה תפריט ותוכנית אימונים יביאו אותך לתוצאה המהירה והבטוחה ביותר.</p>
                <button onClick={() => setSurveyStep(1)} style={{ padding: '18px', backgroundColor: '#D4AF37', color: '#070708', border: 'none', borderRadius: '16px', fontSize: '17px', fontWeight: 900, cursor: 'pointer' }}>בוא נתחיל 🔥</button>
              </div>
            )}
            {surveyStep === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <h4 style={{ fontSize: '21px', fontWeight: 900, margin: 0 }}>👋 איך קוראים לך?</h4>
                <input type="text" placeholder="הכנס שם מלא" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '17px', borderRadius: '16px', backgroundColor: '#121214', border: '1px solid rgba(212,175,55,0.2)', color: '#fff', fontSize: '15px' }} />
                <button disabled={!name} onClick={() => setSurveyStep(2)} style={{ padding: '17px', backgroundColor: name ? '#fff' : 'rgba(255,255,255,0.1)', color: name ? '#070708' : '#52525b', border: 'none', borderRadius: '16px', fontWeight: 'bold', cursor: name ? 'pointer' : 'not-allowed' }}>המשך</button>
              </div>
            )}
            {surveyStep === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <h4 style={{ fontSize: '21px', fontWeight: 900, margin: 0 }}>🎂 בן כמה אתה?</h4>
                <input type="number" placeholder="הכנס גיל" value={age} onChange={(e) => setAge(e.target.value)} style={{ padding: '17px', borderRadius: '16px', backgroundColor: '#121214', border: '1px solid rgba(212,175,55,0.2)', color: '#fff', fontSize: '15px' }} />
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => setSurveyStep(1)} style={{ flex: 1, padding: '17px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px' }}>חזור</button>
                  <button disabled={!age} onClick={() => setSurveyStep(3)} style={{ flex: 2, padding: '17px', backgroundColor: age ? '#fff' : 'rgba(255,255,255,0.1)', color: age ? '#070708' : '#52525b', border: 'none', borderRadius: '16px', fontWeight: 'bold' }}>המשך</button>
                </div>
              </div>
            )}
            {surveyStep === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <h4 style={{ fontSize: '21px', fontWeight 900, margin: 0 }}>⚖️ מה הגובה והמשקל שלך?</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <input type="number" placeholder="גובה (ס״מ)" value={height} onChange={(e) => setHeight(e.target.value)} style={{ flex: 1, padding: '17px', borderRadius: '16px', backgroundColor: '#121214', border: '1px solid rgba(212,175,55,0.2)', color: '#fff', fontSize: '15px' }} />
                  <input type="number" placeholder="משקל (ק״ג)" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ flex: 1, padding: '17px', borderRadius: '16px', backgroundColor: '#121214', border: '1px solid rgba(212,175,55,0.2)', color: '#fff', fontSize: '15px' }} />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => setSurveyStep(2)} style={{ flex: 1, padding: '17px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px' }}>חזור</button>
                  <button disabled={!height || !weight} onClick={() => setSurveyStep(4)} style={{ flex: 2, padding: '17px', backgroundColor: (height && weight) ? '#fff' : 'rgba(255,255,255,0.1)', color: (height && weight) ? '#070708' : '#52525b', border: 'none', borderRadius: '16px', fontWeight: 'bold' }}>המשך</button>
                </div>
              </div>
            )}
            {surveyStep === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h4 style={{ fontSize: '21px', fontWeight: 900, margin: '0 0 6px' }}>🎯 מה המטרה העיקרית שלך?</h4>
                {['חיטוב וירידה באחוזי שומן', 'עלייה במסת שריר וכוח', 'שיפור סיבולת וכושר כללי'].map((o) => (
                  <button key={o} onClick={() => { setGoal(o); setSurveyStep(5); }} style={{ width: '100%', padding: '17px', borderRadius: '16px', textAlign: 'right', border: goal === o ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)', backgroundColor: goal === o ? 'rgba(212,175,55,0.15)' : '#121214', color: goal === o ? '#D4AF37' : '#fff', fontSize: '15px' }}>{o}</button>
                ))}
                <button onClick={() => setSurveyStep(3)} style={{ padding: '17px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px', marginTop: '10px' }}>חזור</button>
              </div>
            )}
            {surveyStep === 5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h4 style={{ fontSize: '21px', fontWeight: 900, margin: '0 0 6px' }}>📍 איפה אתה מתאמן בדרך כלל?</h4>
                {['חדר כושר', 'בבית עם ציוד בסיסי', 'בחוץ / פארק (משקל גוף)'].map((o) => (
                  <button key={o} onClick={() => { setLocation(o); setSurveyStep(6); }} style={{ width: '100%', padding: '17px', borderRadius: '16px', textAlign: 'right', border: location === o ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)', backgroundColor: location === o ? 'rgba(212,175,55,0.15)' : '#121214', color: location === o ? '#D4AF37' : '#fff', fontSize: '15px' }}>{o}</button>
                ))}
                <button onClick={() => setSurveyStep(4)} style={{ padding: '17px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px', marginTop: '10px' }}>חזור</button>
              </div>
            )}
            {surveyStep === 6 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h4 style={{ fontSize: '21px', fontWeight: 900, margin: '0 0 6px' }}>⚡ כמה פעמים בשבוע אתה יכול להתאמן?</h4>
                {['1-2 אימונים בשבוע', '3-4 אימונים בשבוע', '5+ אימונים בשבוע'].map((o) => (
                  <button key={o} onClick={() => { setFrequency(o); setSurveyStep(7); }} style={{ width: '100%', padding: '17px', borderRadius: '16px', textAlign: 'right', border: frequency === o ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)', backgroundColor: frequency === o ? 'rgba(212,175,55,0.15)' : '#121214', color: frequency === o ? '#D4AF37' : '#fff', fontSize: '15px' }}>{o}</button>
                ))}
                <button onClick={() => setSurveyStep(5)} style={{ padding: '17px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px', marginTop: '10px' }}>חזור</button>
              </div>
            )}
            {surveyStep === 7 && isAnalyzing && (
              <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px' }}>
                <div style={{ width: '56px', height: '56px', border: '4px solid #D4AF37', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <h4 style={{ fontSize: '17px', fontWeight: 900, color: '#D4AF37', letterSpacing: '0.1em' }}>מנתח נתונים אישיים...</h4>
              </div>
            )}
            {surveyStep === 8 && (
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px' }}>
                <div style={{ fontSize: '58px' }}>🎉</div>
                <h4 style={{ fontSize: '24px', fontWeight: 900, margin: 0 }}>הנתונים נותחו בהצלחה!</h4>
                <p style={{ color: '#d4d4d8', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>היי <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>{name}</span>, הכנתי עבורך ניתוח ראשוני. לחץ למטה לשליחה ישירה לוואטסאפ!</p>
                <button onClick={handleWhatsAppSend} style={{ width: '100%', padding: '17px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '17px', fontWeight: 900, cursor: 'pointer' }}>שלח ליצחק בוואטסאפ 🚀</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid rgba(212,175,55,0.1)', backgroundColor: '#050506' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', letterSpacing: '0.2em' }}>QUESTIONS</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: '10px 0 0' }}>שאלות <span style={{ color: '#D4AF37' }}>נפוצות</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((f, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} style={{ border: '1px solid rgba(212,175,55,0.1)', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '16px', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaqIndex(isOpen ? null : i)} style={{ width: '100%', padding: '22px', backgroundColor: 'transparent', border: 'none', color: '#fff', textAlign: 'right', fontSize: '16.5px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                    <span style={{ flex: 1 }}>{f.question}</span>
                    <span style={{ color: '#D4AF37', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s' }}>▼</span>
                  </button>
                  {isOpen && <div style={{ padding: '22px', borderTop: '1px solid rgba(212,175,55,0.1)', color: '#a1a1aa', fontSize: '15px', lineHeight: 1.7, backgroundColor: 'rgba(0,0,0,0.3)' }}>{f.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
