import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: 'יצחק עזרן אימון אישי',
  description: 'FITCOR — ליווי אימונים אישי עם יצחק עזרן. תוכנית אימונים ותזונה מותאמת אישית, ליווי 24/6.',
};

export default function Home() {
  return (
    <main dir="rtl" style={{ backgroundColor: '#070708', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      <Nav active="/" />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '140px 24px 80px' }}>
        <div style={{
          position: 'absolute', top: '10%', right: '-10%', width: 'min(700px,90vw)', height: 'min(700px,90vw)',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'relative', maxWidth: '1140px', margin: '0 auto', width: '100%',
          display: 'grid', gridTemplateColumns: 'minmax(280px,1fr) minmax(300px,1fr)', gap: '56px', alignItems: 'center',
        }} className="hero-grid">
          <div style={{ order: 2 }}>
            <span style={{
              fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em', color: '#D4AF37',
              backgroundColor: 'rgba(212,175,55,0.07)', padding: '9px 22px', borderRadius: '9999px',
              border: '1px solid rgba(212,175,55,0.25)', display: 'inline-block', marginBottom: '28px',
            }}>FITCOR BY YITZHAK AZRAN</span>

            <h1 style={{ margin: '0 0 22px', fontSize: 'clamp(2.4rem,6vw,4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1px' }}>
              <span style={{
                display: 'block', background: 'linear-gradient(135deg,#FFE89C 0%,#D4AF37 50%,#AA7C11 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>BUILD YOURSELF.</span>
              <span style={{ display: 'block', color: '#e4e4e7' }}>NOT EXCUSES.</span>
            </h1>

            <p style={{ maxWidth: '460px', margin: '0 0 40px', color: '#a1a1aa', fontSize: 'clamp(1rem,2.5vw,1.15rem)', lineHeight: 1.75 }}>
              ליווי אישי שיעזור לך לבנות גוף חזק, חטוב ובריא — תוכנית אימונים מותאמת אישית, הכוונה תזונתית גמישה, וליווי מקצועי צמוד. FITCOR — BUILT BY DISCIPLINE.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="/coaching" style={{
                backgroundColor: '#D4AF37', color: '#070708', padding: '18px 38px', borderRadius: '9999px',
                fontSize: '15.5px', fontWeight: 900, textDecoration: 'none', boxShadow: '0 8px 30px rgba(212,175,55,0.35)',
              }}>לעמוד הליווי ←</a>
              <a href="/store" style={{
                border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', padding: '18px 34px', borderRadius: '9999px',
                fontSize: '15.5px', fontWeight: 800, textDecoration: 'none',
              }}>לחנות FITCOR</a>
            </div>
          </div>

          <div style={{ order: 1, position: 'relative' }}>
            <div style={{
              position: 'relative', borderRadius: '28px', overflow: 'hidden',
              border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 30px 70px -20px rgba(0,0,0,0.7)', aspectRatio: '1/1',
            }}>
              <img src="/images/yitzhak-hero.jpg" alt="יצחק עזרן — FITCOR" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '54px', height: '54px', borderTop: '2px solid #D4AF37', borderRight: '2px solid #D4AF37', opacity: 0.6 }} />
            <div style={{ position: 'absolute', bottom: '-14px', right: '-14px', width: '54px', height: '54px', borderBottom: '2px solid #D4AF37', borderLeft: '2px solid #D4AF37', opacity: 0.6 }} />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `@media (max-width:760px){.hero-grid{grid-template-columns:1fr!important}}`}} />
      </section>

      {/* THREE-WAY TEASER: ליווי / חנות / אודות */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid rgba(212,175,55,0.1)', backgroundColor: '#050506' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
          {[
            { href: '/coaching', icon: '💪', title: 'ליווי אישי', desc: 'תוכנית אימונים ותזונה בנויה מאפס עבורך, מעקב שבועי וזמינות 24/6.' },
            { href: '/store', icon: '🛍️', title: 'חנות FITCOR', desc: 'ביגוד וציוד מקוריים במותג — עיצוב שחור-זהב שמרגיש כמו מותג עולמי.' },
            { href: '/about', icon: '📖', title: 'הסיפור שלי', desc: 'מי אני,   FITCOR.' },
          ].map(c => (
            <a key={c.href} href={c.href} style={{
              display: 'block', padding: '36px 30px', borderRadius: '22px',
              backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.15)',
              textDecoration: 'none', color: '#fff',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{c.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 10px' }}>{c.title}</h3>
              <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, margin: '0 0 16px' }}>{c.desc}</p>
              <span style={{ color: '#D4AF37', fontSize: '13.5px', fontWeight: 800 }}>למידע נוסף ←</span>
            </a>
          ))}
        </div>
      </section>

      {/* IG PROOF */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid rgba(212,175,55,0.1)', backgroundColor: '#070708' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto', padding: '48px', borderRadius: '24px',
          backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.15)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px', flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 8px' }}>900+ עוקבים כבר בקהילת FITCOR</h3>
            <p style={{ color: '#a1a1aa', fontSize: '14.5px', margin: 0, maxWidth: '440px' }}>עדכונים, אימונים ורגעים מהתהליך — יומיומי באינסטגרם.</p>
          </div>
          <a href="#" style={{ border: '1px solid #fff', color: '#fff', padding: '14px 26px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 800, fontSize: '14px', whiteSpace: 'nowrap' }}>עקבו באינסטגרם ←</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
