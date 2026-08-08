import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'אודות | יצחק עזרן — FITCOR',
  description: 'הסיפור מאחורי FITCOR — משמעת, תוצאות וגישה בגובה העיניים.',
};

export default function About() {
  return (
    <main dir="rtl" style={{ backgroundColor: '#070708', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      <Nav active="/about" ctaLabel="לליווי האישי" ctaHref="/coaching" />

      {/* HERO SECTION */}
      <section style={{ padding: '150px 24px 60px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(240px,320px) 1fr', gap: '48px', alignItems: 'center' }} className="about-hero-grid">
          <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.3)', aspectRatio: '1/1', position: 'relative' }}>
            <Image 
              src="/yitzhak-hero.jpg" 
              alt="יצחק עזרן" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority 
            />
          </div>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.22em', color: '#D4AF37' }}>ABOUT FITCOR</span>
            <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', fontWeight: 900, margin: '12px 0 16px', lineHeight: 1.1 }}>
              BUILT BY DISCIPLINE.<br />
              <span style={{ color: '#D4AF37' }}>NOT BY LUCK.</span>
            </h1>
            <p style={{ color: '#a1a1aa', fontSize: '16.5px', lineHeight: 1.7, margin: 0 }}>
              היי, אני יצחק עזרן. הגישה שלי לכושר פשוטה: בלי קיצורי דרך, בלי גימיקים. רק עבודה נכונה, משמעת עצמית וליווי צמוד שמביא אותך לתוצאות שנשארות.
            </p>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `@media (max-width:680px){.about-hero-grid{grid-template-columns:1fr!important; text-align:center}}`}} />
      </section>

      {/* THREE PILLARS / HIGHLIGHTS */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          
          <div style={{ padding: '28px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <div style={{ fontSize: '24px', marginBottom: '12px' }}>🔥</div>
            <h3 style={{ color: '#D4AF37', fontSize: '18px', fontWeight: 800, margin: '0 0 8px' }}>הבסיס שלי</h3>
            <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
              גדלתי לתוך עולם הכושר והמשמעת. השינוי הפיזי שעברתי בעצמי הראה לי שכושר הוא לא רק חיטוב — הוא הדרך הכי מהירה לבנות ביטחון עצמי חזק.
            </p>
          </div>

          <div style={{ padding: '28px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <div style={{ fontSize: '24px', marginBottom: '12px' }}>🤝</div>
            <h3 style={{ color: '#D4AF37', fontSize: '18px', fontWeight: 800, margin: '0 0 8px' }}>גובה העיניים</h3>
            <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
              אני לא מאמן שנותן דף ויורד למחתרת. אני כאן בשביל השאלות שלך, ההתמודדויות, והתאמת התהליך בדיוק לסדר היום הריאלי שלך.
            </p>
          </div>

          <div style={{ padding: '28px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <div style={{ fontSize: '24px', marginBottom: '12px' }}>🎯</div>
            <h3 style={{ color: '#D4AF37', fontSize: '18px', fontWeight: 800, margin: '0 0 8px' }}>המטרה שלי בשבילך</h3>
            <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
              לקחת אותך מהנקודה שבה אתה נמצא היום ולבנות אותך חזק יותר, חטוב יותר ובעיקר בעל יכולת לשמור על התוצאות לאורך זמן.
            </p>
          </div>

        </div>
      </section>

      {/* KEY QUOTE */}
      <section style={{ padding: '60px 24px', backgroundColor: '#050506', borderTop: '1px solid rgba(212,175,55,0.1)', borderBottom: '1px solid rgba(212,175,55,0.1)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', color: '#e4e4e7', fontWeight: 700, lineHeight: 1.5, margin: '0 0 12px' }}>
            "הצלחה היא לא להגיע לנקודה מסוימת ולהגיד 'סיימתי' — היא להסתכל אחורה ולהבין שהפכת לאדם שפעם רק חלמת להיות."
          </p>
          <span style={{ color: '#D4AF37', fontSize: '14px', fontWeight: 800 }}>— יצחק עזרן</span>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '90px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.7rem,4vw,2.4rem)', fontWeight: 900, margin: '0 0 12px' }}>מוכן להתחיל את השינוי שלך?</h2>
        <p style={{ color: '#a1a1aa', fontSize: '15.5px', margin: '0 0 32px' }}>בוא נבנה תוכנית מותאמת אישית לצרכים שלך.</p>
        <a href="/coaching" style={{ display: 'inline-block', backgroundColor: '#D4AF37', color: '#070708', padding: '17px 40px', borderRadius: '9999px', fontWeight: 900, fontSize: '15.5px', textDecoration: 'none', boxShadow: '0 10px 30px -8px rgba(212,175,55,0.3)' }}>לתיאום ליווי אישי ←</a>
      </section>

      <Footer />
    </main>
  );
}
