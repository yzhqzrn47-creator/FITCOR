'use client';
import React, { useState, useEffect } from 'react';

// ==========================================
// 1. נתוני האתר (יתרונות, שלבים, שאלות)
// ==========================================
const advantages = [
  {
    icon: '💪',
    title: 'תוכנית אימונים מותאמת אישית',
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
  // states לשאלון
  const [surveyStep, setSurveyStep] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [location, setLocation] = useState('');
  const [frequency, setFrequency] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // state לשאלות נפוצות
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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main 
      dir="rtl" 
      style={{ backgroundColor: '#070708', color: '#ffffff' }}
      className="min-h-screen font-sans overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-300"
    >
      
      {/* ==========================================
          חלק 1: HERO (המסך הראשי)
         ========================================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-40 pb-32 overflow-hidden">
        {/* הילות אור יוקרתיות ברקע */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute top-[25%] right-[-5%] w-[300px] h-[300px] rounded-full bg-amber-600/5 blur-[100px] pointer-events-none z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
          
          <div className="mb-8" dir="ltr">
            <span className="text-xs md:text-sm font-black tracking-[0.4em] text-amber-500 bg-amber-500/10 px-6 py-3 rounded-full uppercase border border-amber-500/20">
              YITZHAK AZRAN
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-10" dir="ltr">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 mb-4 drop-shadow-[0_4px_12px_rgba(245,158,11,0.15)]">
              THE METHOD
            </span>
            <span className="text-white block text-2xl md:text-5xl tracking-wide font-extrabold uppercase">
              BUILD YOUR BEST VERSION
            </span>
          </h1>

          <p className="max-w-2xl text-neutral-400 text-lg md:text-xl mb-14 leading-relaxed px-4">
            הליווי האישי שיעזור לך לבנות גוף חזק, חטוב ובריא באמצעות תוכנית מותאמת אישית, הכוונה תזונתית גמישה וליווי מקצועי צמוד אונליין.
          </p>

          {/* תמונת הפתיחה שלך עם גלואו זהב */}
          <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden mb-16 border-4 border-amber-500/20 p-1.5 bg-neutral-900/60 shadow-[0_0_50px_rgba(245,158,11,0.2)] hover:border-amber-500/50 transition-all duration-700 hover:scale-105 group">
            <img 
              src="/yitzhak.jpg" 
              alt="יצחק עזרן" 
              className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition duration-700 ease-in-out"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600";
              }}
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <button 
              onClick={handleScrollToSurvey}
              className="relative px-14 py-5 bg-[#0a0a0b] rounded-full text-white font-black text-lg md:text-xl flex items-center gap-3 transition duration-300 hover:bg-neutral-950 border border-amber-500/30"
            >
              <span>אני רוצה להתחיל</span>
              <span className="text-amber-500">←</span>
            </button>
          </div>

        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30" dir="ltr">
          <span className="text-xs tracking-widest text-neutral-500 uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent mx-auto mt-3"></div>
        </div>
      </section>

      {/* ==========================================
          חלק 2: WHY ME (למה דווקא אני - זכוכית יוקרתית)
         ========================================== */}
      <section id="why-me" className="relative py-44 px-4 border-t border-neutral-900/50" style={{ backgroundColor: '#070708' }}>
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4 block">
              THE ADVANTAGE
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
              למה דווקא <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">ME</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl leading-relaxed">
              השילוב המנצח בין מקצועיות ללא פשרות, יחס אישי וליווי צמוד שיביא אותך לתוצאות המקסימליות שלך.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {advantages.map((item, index) => (
              <div 
                key={index}
                className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 hover:border-amber-500/40 flex flex-col items-start gap-6 transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.08)] group"
              >
                <div className="text-5xl filter drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          חלק 3: HOW IT WORKS (איך זה עובד)
         ========================================== */}
      <section id="how-it-works" className="relative py-44 px-4 border-t border-neutral-900/50" style={{ backgroundColor: '#050506' }}>
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4 block">
              THE PROCESS
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
              איך זה <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">WORKS</span>?
            </h2>
            <p className="max-w-xl mx-auto text-neutral-400 text-lg md:text-xl">
              ארבעה שלבים פשוטים ומדויקים שמפרידים בינך לבין הגוף שתמיד רצית.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex gap-8 p-8 md:p-10 rounded-3xl border border-white/5 bg-neutral-950/40 hover:border-amber-500/20 transition duration-500 shadow-xl group"
              >
                <div className="font-mono text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-transparent select-none transition-transform duration-500 group-hover:scale-110">
                  {step.num}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          חלק 4: השאלון החכם (THE SMART SURVEY - בעיצוב זכוכית קריסטל)
         ========================================== */}
      <section id="survey-section" className="relative py-44 px-4 border-t border-neutral-900/50 min-h-[850px] flex items-center justify-center" style={{ backgroundColor: '#070708' }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none"></div>

        <div className="max-w-2xl w-full mx-auto relative z-10">
          <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 md:p-16 border border-white/10 shadow-[0_0_50px_rgba(245,158,11,0.08)]">
            
            {surveyStep === 0 && (
              <div className="text-center flex flex-col items-center gap-8">
                <span className="text-xs font-bold tracking-[0.3em] text-amber-500 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">THE SURVEY</span>
                <h3 className="text-3xl md:text-4xl font-black text-white">השאלון להתאמת הליווי האישי</h3>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                  השאלון הבא לוקח פחות מדקה. התשובות שלך יעזרו לי להבין בדיוק איזה תפריט ותוכנית אימונים יביאו אותך לתוצאה המהירה והבטוחה ביותר.
                </p>
                <button
                  onClick={() => setSurveyStep(1)}
                  className="w-full py-5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl text-black font-black text-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.4)] transition duration-300"
                >
                  בוא נתחיל 🔥
                </button>
              </div>
            )}

            {surveyStep === 1 && (
              <div className="flex flex-col gap-8">
                <h4 className="text-2xl md:text-3xl font-black text-white">👋 איך קוראים לך?</h4>
                <input
                  type="text"
                  placeholder="הכנס שם מלא"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-5 rounded-2xl bg-[#0d0d0f] border border-white/10 text-white text-lg focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition duration-300"
                />
                <button
                  disabled={!name}
                  onClick={() => setSurveyStep(2)}
                  className="py-5 bg-white text-black font-bold text-lg rounded-2xl disabled:opacity-50 transition hover:bg-neutral-200"
                >
                  המשך
                </button>
              </div>
            )}

            {surveyStep === 2 && (
              <div className="flex flex-col gap-8">
                <h4 className="text-2xl md:text-3xl font-black text-white">🎂 בן כמה אתה?</h4>
                <input
                  type="number"
                  placeholder="הכנס גיל"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-5 rounded-2xl bg-[#0d0d0f] border border-white/10 text-white text-lg focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition duration-300"
                />
                <div className="flex gap-4">
                  <button onClick={() => setSurveyStep(1)} className="w-1/3 py-5 bg-transparent rounded-2xl text-white border border-white/10 hover:bg-white/5 transition">חזור</button>
                  <button disabled={!age} onClick={() => setSurveyStep(3)} className="w-2/3 py-5 bg-white text-black font-bold text-lg rounded-2xl disabled:opacity-50 transition">המשך</button>
                </div>
              </div>
            )}

            {surveyStep === 3 && (
              <div className="flex flex-col gap-8">
                <h4 className="text-2xl md:text-3xl font-black text-white">⚖️ מה הגובה והמשקל שלך?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="גובה (ס״מ)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-5 rounded-2xl bg-[#0d0d0f] border border-white/10 text-white text-lg focus:outline-none focus:border-amber-500 transition"
                  />
                  <input
                    type="number"
                    placeholder="משקל (ק״ג)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-5 rounded-2xl bg-[#0d0d0f] border border-white/10 text-white text-lg focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setSurveyStep(2)} className="w-1/3 py-5 bg-transparent rounded-2xl text-white border border-white/10 hover:bg-white/5 transition">חזור</button>
                  <button disabled={!height || !weight} onClick={() => setSurveyStep(4)} className="w-2/3 py-5 bg-white text-black font-bold text-lg rounded-2xl disabled:opacity-50 transition">המשך</button>
                </div>
              </div>
            )}

            {surveyStep === 4 && (
              <div className="flex flex-col gap-8">
                <h4 className="text-2xl md:text-3xl font-black text-white">🎯 מה המטרה העיקרית שלך?</h4>
                <div className="flex flex-col gap-4">
                  {['חיטוב וירידה באחוזי שומן', 'עלייה במסת שריר וכוח', 'שיפור סיבולת וכושר כללי'].map((option) => (
                    <button
                      key={option}
                      onClick={() => { setGoal(option); setSurveyStep(5); }}
                      className={`w-full p-5 rounded-2xl text-right border transition-all duration-300 ${goal === option ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-white/10 bg-[#0d0d0f] hover:bg-white/5'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button onClick={() => setSurveyStep(3)} className="py-5 bg-transparent border border-white/10 rounded-2xl text-white hover:bg-white/5 transition">חזור</button>
              </div>
            )}

            {surveyStep === 5 && (
              <div className="flex flex-col gap-8">
                <h4 className="text-2xl md:text-3xl font-black text-white">📍 איפה אתה מתאמן בדרך כלל?</h4>
                <div className="flex flex-col gap-4">
                  {['חדר כושר', 'בבית עם ציוד בסיסי', 'בחוץ / פארק (משקל גוף)'].map((option) => (
                    <button
                      key={option}
                      onClick={() => { setLocation(option); setSurveyStep(6); }}
                      className={`w-full p-5 rounded-2xl text-right border transition-all duration-300 ${location === option ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-white/10 bg-[#0d0d0f] hover:bg-white/5'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button onClick={() => setSurveyStep(4)} className="py-5 bg-transparent border border-white/10 rounded-2xl text-white hover:bg-white/5 transition">חזור</button>
              </div>
            )}

            {surveyStep === 6 && (
              <div className="flex flex-col gap-8">
                <h4 className="text-2xl md:text-3xl font-black text-white">⚡ כמה פעמים בשבוע אתה יכול להתאמן?</h4>
                <div className="flex flex-col gap-4">
                  {['1-2 אימונים בשבוע', '3-4 אימונים בשבוע', '5+ אימונים בשבוע'].map((option) => (
                    <button
                      key={option}
                      onClick={() => { setFrequency(option); setSurveyStep(7); }}
                      className={`w-full p-5 rounded-2xl text-right border transition-all duration-300 ${frequency === option ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-white/10 bg-[#0d0d0f] hover:bg-white/5'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button onClick={() => setSurveyStep(5)} className="py-5 bg-transparent border border-white/10 rounded-2xl text-white hover:bg-white/5 transition">חזור</button>
              </div>
            )}

            {surveyStep === 7 && isAnalyzing && (
              <div className="text-center py-16 flex flex-col items-center justify-center gap-8">
                <div className="w-20 h-20 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                <h4 className="text-2xl md:text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 animate-pulse">
                  ANALYZING DATA...
                </h4>
                <p className="text-neutral-400 text-base">
                  בונה אסטרטגיה מותאמת אישית על סמך המדדים והמטרות שלך.
                </p>
              </div>
            )}

            {surveyStep === 8 && (
              <div className="text-center flex flex-col items-center gap-8 animate-fade-in">
                <div className="text-7xl filter drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">🎉</div>
                <h4 className="text-3xl md:text-4xl font-black text-white">הנתונים נותחו בהצלחה!</h4>
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                  היי <span className="text-amber-500 font-bold">{name}</span>, הכנתי עבורך ניתוח ראשוני המבוסס על הנתונים שהזנת. לחץ על הכפתור למטה כדי לשלוח לי את התוצאות ישירות לוואטסאפ האישי שלי, ונתחיל לבנות את תוכנית העבודה שלך!
                </p>
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-5 bg-[#25D366] text-white font-extrabold text-xl rounded-2xl flex items-center justify-center gap-4 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-[1.02] transition duration-300"
                >
                  <span>שלח ליצחק בוואטסאפ 🚀</span>
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ==========================================
          חלק 5: FAQ (שאלות נפוצות)
         ========================================== */}
      <section id="faq" className="relative py-44 px-4 border-t border-neutral-900/50" style={{ backgroundColor: '#070708' }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
              שאלות <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">נפוצות</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 md:p-8 text-right flex justify-between items-center gap-4 hover:bg-white/[0.03] transition duration-300"
                  >
                    <span className="text-lg md:text-xl font-bold text-white">{faq.question}</span>
                    <span className={`text-amber-500 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-6 md:p-8 pt-0 text-neutral-400 text-base md:text-lg leading-relaxed border-t border-white/5 bg-[#0a0a0c]/80">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          חלק 6: FOOTER
         ========================================== */}
      <footer className="relative py-20 px-4 border-t border-neutral-900 text-center" style={{ backgroundColor: '#050506' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-right">
            <span className="text-lg font-black tracking-[0.4em] text-amber-500 block mb-2" dir="ltr">
              YITZHAK AZRAN
            </span>
            <span className="text-neutral-600 text-sm">THE METHOD. ALL RIGHTS RESERVED © 2026</span>
          </div>

          <div className="flex gap-10 text-sm text-neutral-400 font-bold tracking-wider" dir="ltr">
            <a href="https://instagram.com/yitzhak_azran" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-all">INSTAGRAM</a>
            <a href="https://wa.me/972559939351" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-all">WHATSAPP</a>
          </div>
        </div>
      </footer>

      {/* ==========================================
          חלק 7: כפתור וואטסאפ צף
         ========================================== */}
      <a 
        href="https://wa.me/972559939351"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition duration-300 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.45.99c-5.438 0-9.863 4.37-9.867 9.801-.001 1.73.461 3.42 1.337 4.921l-1.02 3.725 3.84-1.01l1.317.778zM17.15 14.18c-.29-.145-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.3-.77.95-.94 1.15-.17.2-.34.22-.63.08-1.15-.575-1.93-1.01-2.695-2.315-.2-.35.2-.32.57-1.04.09-.19.04-.36-.02-.5-.06-.14-.46-1.1-.63-1.51-.17-.4-.36-.33-.5-.33h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.78 2.13.9 2.28c.11.15 1.54 2.35 3.73 3.3 1.14.49 1.76.54 2.38.45.62-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.32z"/>
        </svg>
      </a>

    </main>
  );
}
