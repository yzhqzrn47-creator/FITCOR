import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'אודות | יצחק עזרן — FITCOR',
  description: 'הסיפור מאחורי FITCOR — מי אני, מאיפה באתי, ולמה קמתי כל בוקר בשביל זה.',
};

export default function About() {
  return (
    <main dir="rtl" style={{ backgroundColor: '#070708', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      <Nav active="/about" ctaLabel="לליווי האישי" ctaHref="/coaching" />

      {/* HEADER */}
      <section style={{ padding: '160px 24px 60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(220px,320px) 1fr', gap: '44px', alignItems: 'center' }} className="about-hero-grid">
          <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.3)', aspectRatio: '1/1' }}>
            <img src="/images/yitzhak-hero.jpg" alt="יצחק עזרן" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.22em', color: '#D4AF37' }}>ABOUT ME</span>
            <h1 style={{ fontSize: 'clamp(1.9rem,4.5vw,3rem)', fontWeight: 900, margin: '14px 0 16px' }}>
              נעים להכיר,<br /><span style={{ color: '#D4AF37' }}>יצחק עזרן</span>
            </h1>
            <p style={{ color: '#a1a1aa', fontSize: '15.5px', lineHeight: 1.75, margin: 0 }}>
              מייסד FITCOR. הסיפור שלי לא מתחיל בחדר כושר — הוא מתחיל הרבה לפני זה. הנה הדרך המלאה.
            </p>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `@media (max-width:680px){.about-hero-grid{grid-template-columns:1fr!important}}`}} />
      </section>

      {/* STORY BLOCKS */}
      <section style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>

          <div>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em', color: '#D4AF37', marginBottom: '14px' }}>למה בכלל התחלתי</span>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: '0 0 16px' }}>
              החיבור שלי לעולם הכושר התחיל הרבה לפני שהפכתי למאמן או למתחרה. גדלתי בתוך מסגרת של משמעת חזקה, ובשלב מסוים הבנתי שאני צריך למצוא מקום שבו אוכל לבנות את עצמי מחדש — גם פיזית וגם מנטלית. את המקום הזה מצאתי בכושר.
            </p>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: 0 }}>
              אבא שלי הוא מאמן כושר, ודרכו נכנסתי כבר כנער צעיר לעולם הזה. ממנו למדתי לא רק איך להתאמן, אלא גם מה המשמעות של משמעת, התמדה, עבודה קשה ואמונה בדרך. עם השנים הכושר הפך עבורי להרבה מעבר לפיתוח גוף — הוא הפך לכלי לשינוי.
            </p>
          </div>

          <div>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em', color: '#D4AF37', marginBottom: '14px' }}>השינוי שעברתי</span>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: '0 0 16px' }}>
              אם הייתם פוגשים את יצחק של 2016, לא בטוח שהייתם מזהים אותו היום. דרך האימונים, התחרויות וההתמודדות היומיומית עם עצמי, התחלתי לבנות משהו שהיה חסר לי הרבה לפני שרואים אותו במראה — ביטחון עצמי. הגוף השתנה, אבל השינוי האמיתי התרחש בראש.
            </p>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: 0 }}>
              כל ניצחון בתחרות נתן לי תחושת סיפוק וגאווה, אבל במבט לאחור אני מבין שהניצחונות הגדולים באמת היו דווקא אלה שלא קיבלו מדליה. כל פעם ששיניתי משהו לטובה בדרך שבה חשבתי, דיברתי או פעלתי — ניצחתי עוד חלק מעצמי.
            </p>
          </div>

          <div>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em', color: '#D4AF37', marginBottom: '14px' }}>מה שונה בגישה שלי</span>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: '0 0 16px' }}>
              אני לא מאמין שמאמן צריך להיות רק האדם שנותן לך תוכנית אימונים. אני רוצה להיות האדם שאתה יודע שאתה יכול לפנות אליו. אני זמין, אני מקשיב, ואני לא מזלזל בשום שאלה.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0' }}>
              {['אם משהו לא ברור — אני אסביר.', 'אם משהו קשה — נמצא דרך להתמודד איתו.', 'אם נפלת — נבין למה, נלמד מזה ונמשיך קדימה.'].map(l => (
                <div key={l} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#D4AF37', fontSize: '17px', lineHeight: 1.6 }}>—</span>
                  <span style={{ color: '#d4d4d8', fontSize: '16px', lineHeight: 1.6 }}>{l}</span>
                </div>
              ))}
            </div>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: 0 }}>
              מבחינתי, כבוד הוא בסיס לכל מערכת יחסים עם מתאמן. אני לא רוצה רק לראות את הלקוחות שלי משתנים מבחוץ — אני רוצה לראות אותם מתחזקים גם מבפנים: בביטחון העצמי, במשמעת, בהתמדה ובגישה שלהם לחיים.
            </p>
          </div>

          <div style={{
            padding: '36px', borderRadius: '24px', backgroundColor: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)',
          }}>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em', color: '#D4AF37', marginBottom: '14px' }}>מה הרגע שהכי מגדיר אותי</span>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: '0 0 16px' }}>
              אין רגע אחד. יש אוסף של רגעים. יש את יצחק של 2016, ויש את יצחק של 2026 — ואני גאה באדם שנמצא היום באמצע הדרך ביניהם.
            </p>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: '0 0 16px' }}>
              כל שינוי קטן בחשיבה. כל החלטה נכונה. כל אימון שלא ויתרתי עליו. כל תחרות. כל ניצחון. כל כישלון שלימד אותי משהו. כל פעם שבחרתי לקום ולהמשיך. אלה הרגעים שמגדירים אותי.
            </p>
            <p style={{ color: '#D4AF37', fontSize: '17.5px', lineHeight: 1.8, margin: 0, fontWeight: 600 }}>
              כי מבחינתי, הצלחה אמיתית היא לא להגיע לנקודה מסוימת ולהגיד "סיימתי" — היא להסתכל אחורה ולראות שהאדם שאתה היום היה פעם האדם שרק חלמת להיות.
            </p>
          </div>

          <div>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em', color: '#D4AF37', marginBottom: '14px' }}>למי אני רוצה לעזור</span>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: '0 0 16px' }}>
              לשניהם. למי שרק מתחיל ולא יודע מאיפה להתחיל, ולמי שכבר מתאמן שנים ורוצה להגיע לרמה הבאה. אני מאמין שכל אדם נמצא בנקודה אחרת במסע שלו, ולכן לא צריך למדוד את כולם באותו סרגל.
            </p>
            <p style={{ color: '#d4d4d8', fontSize: '17px', lineHeight: 1.9, margin: 0 }}>
              המטרה שלי היא לקחת כל אדם מהמקום שבו הוא נמצא עכשיו — ולדחוף אותו קדימה. לא רק לעזור לו לבנות גוף טוב יותר. לעזור לו לבנות גרסה טובה יותר של עצמו. כי כושר הוא לא רק מה שאתה רואה במראה. כושר הוא מי שאתה הופך להיות בדרך.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '90px 24px', borderTop: '1px solid rgba(212,175,55,0.1)', backgroundColor: '#050506', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.7rem,4vw,2.4rem)', fontWeight: 900, margin: '0 0 16px' }}>מוכן להתחיל את הפרק הבא שלך?</h2>
        <p style={{ color: '#a1a1aa', fontSize: '15.5px', margin: '0 0 32px' }}>בוא נבנה יחד את הגרסה הבאה שלך.</p>
        <a href="/coaching" style={{ display: 'inline-block', backgroundColor: '#D4AF37', color: '#070708', padding: '17px 40px', borderRadius: '9999px', fontWeight: 900, fontSize: '15.5px', textDecoration: 'none' }}>לליווי האישי ←</a>
      </section>

      <Footer />
    </main>
  );
}
