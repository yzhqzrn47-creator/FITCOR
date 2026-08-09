import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'חנות FITCOR | יצחק עזרן אימון אישי',
  description: 'ביגוד וציוד FITCOR — עיצוב שחור-זהב, BUILT BY DISCIPLINE.',
};

const products = [
  { img: '/images/products/fitcor-shirt-longsleeve.jpg', title: 'חולצת אימון FITCOR — שרוול ארוך', desc: 'בד דריי-פיט נושם, לוגו FC רקום בזהב.' },
  { img: '/images/products/fitcor-jersey-sleeveless.jpg', title: 'גופיית אימון FITCOR', desc: 'גזרה אתלטית ללא שרוולים, נושמת לאימון עצים.' },
  { img: '/images/products/fitcor-bottle.jpg', title: 'בקבוק שתייה FITCOR', desc: 'בקבוק ספורט ממותג, איכות פרימיום.' },
  { img: '/images/products/fitcor-cap.jpg', title: 'כובע מצחייה FITCOR Classic', desc: 'עיצוב קלאסי, לוגו FC וזהב על שחור.' },
];

export default function Store() {
  return (
    <main dir="rtl" style={{ backgroundColor: '#070708', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
      <Nav active="/store" ctaLabel="לחנות המלאה" ctaHref="https://shop.fitcor.online" />

      <section style={{ padding: '160px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.22em', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)', padding: '8px 20px', borderRadius: '9999px', display: 'inline-block', marginBottom: '22px' }}>OFFICIAL MERCH</span>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 900, margin: '0 0 16px' }}>חנות המותג <span style={{ color: '#D4AF37' }}>FITCOR</span></h1>
        <p style={{ color: '#a1a1aa', fontSize: '16px', maxWidth: '540px', margin: '0 auto' }}>ביגוד וציוד שיגרמו לך להרגיש ולהיראות כמו מקצוען. BUILT BY DISCIPLINE — לא רק סלוגן, זהות.</p>
      </section>

      <section style={{ padding: '60px 24px 110px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '28px' }}>
          {products.map((p) => (
            <div key={p.title} style={{ borderRadius: '22px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.15)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <div style={{ aspectRatio: '3/4', backgroundColor: '#0d0d0e', overflow: 'hidden', position: 'relative' }}>
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div style={{ padding: '22px' }}>
                <h3 style={{ fontSize: '16.5px', fontWeight: 800, margin: '0 0 8px' }}>{p.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '13.5px', margin: '0 0 14px', lineHeight: 1.5 }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <a href="https://shop.fitcor.online" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', fontSize: '13px', fontWeight: 800, textDecoration: 'none' }}>לרכישה ←</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(212,175,55,0.1)', backgroundColor: '#050506', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0 0 16px' }}>כל הקולקציה נמצאת בחנות המותג</h2>
        <p style={{ color: '#a1a1aa', fontSize: '15px', maxWidth: '480px', margin: '0 auto 32px' }}>מידות, צבעים, משלוחים ותשלום מאובטח — הכול בחנות הרשמית שלנו.</p>
        <a href="https://shop.fitcor.online" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block', backgroundColor: '#D4AF37', color: '#070708', padding: '17px 40px',
          borderRadius: '9999px', fontWeight: 900, fontSize: '15.5px', textDecoration: 'none', boxShadow: '0 10px 30px -8px rgba(212,175,55,0.4)',
        }}>כניסה לחנות FITCOR ←</a>
      </section>

      <Footer />
    </main>
  );
}
