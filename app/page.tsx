'use client';
import React, { useState, useEffect } from 'react';

// ==========================================
// 1. נתוני האתר (יתרונות, שלבים, ביקורות, שאלות)
// ==========================================
const advantages = [
  {
    icon: '💪',
    title: 'תוכנית אימונים מותאמת אישית',
    description: 'נבנית מאפס עבור הגוף, המטרות ורמת הכושר הנוכחית שלך.',
  },
  {
    icon: '🥗',
    title: 'תזונה שמתאימה לחיים שלך',
    description: 'בלי הרעבה. תפריט גמיש, בריא וטעים שתוכל להתמיד בו.',
  },
  {
    icon: '📈',
    title: 'מעקב שבועי מדויק',
    description: 'ניתוח התקדמות, שקילות ומדידות כדי לוודא שאנחנו במסלול.',
  },
  {
    icon: '💬',
    title: 'זמינות אישית בוואטסאפ',
    description: 'אני כאן לכל שאלה, התייעצות או דחיפה קלה שצריך בדרך.',
  },
  {
    icon: '📸',
    title: 'השוואת תמונות התקדמות',
    description: 'ויזואליזציה של השינוי הפיזי כדי לראות את התוצאות בעיניים.',
  },
  {
    icon: '🎯',
    title: 'התאמות עד להשגת היעד',
    description: 'התוכנית דינמית ומשתנה יחד איתך כדי למקסם תוצאות.',
  },
];

const steps = [
  {
    num: '01',
    title: 'מילוי שאלון התאמה',
    description: 'אתה עונה על כמה שאלות קצרות ומדויקות לגבי המטרות, אורח החיים והרגלי האימון שלך.',
  },
  {
    num: '02',
    title: 'ניתוח נתונים ובניית אסטרטגיה',
    description: 'אני עובר באופן אישי על כל התשובות שלך ומאפיין את תוכנית העבודה המנצחת עבורך.',
  },
  {
    num: '03',
    title: 'קבלת התוכניות ויציאה לדרך',
    description: 'התוכנית המותאמת אישית שלך מוכנה. אנחנו עושים שיחת הסבר מפורטת ומתחילים לתת בראש.',
  },
  {
    num: '04',
    title: 'ליווי, מעקב והתקדמות שבועית',
    description: 'מעקב צמוד בכל שבוע, ניתוח מדדים והתאמות בתוכנית כדי לוודא שאתה לא מפסיק להשתפר.',
  },
];

const reviews = [
  {
    name: 'אורן לוי',
    role: 'מתאמן ליווי אישי אונליין',
    text: '״הגעתי ליצחק אחרי שנים של ניסיונות לבד בחדר כושר בלי תוצאות. תוך 3 חודשים הגענו לאחוז שומן נמוך וקוביות שלא ראיתי בחיים שלי. הליווי הכי מקצועי שיש.״',
    stars: 5
  },
  {
    name: 'תומר כהן',
    role: 'חייל משוחרר',
    text: '״הזמינות של יצחק בוואטסאפ זה משהו שלא ראיתי אצל אף מאמן. הוא עונה על כל שאלה, מתקן לי טכניקה בסרטונים שאני שולח לו, ומחזיק אותי מפוקס ב-100%.״',
    stars: 5
  },
  {
    name: 'דניאל אהרוני',
    role: 'הייטקיסט / עובד שעות ארוכות',
    text: '״היה לי קשה להתמיד בגלל העבודה. יצחק בנה לי תוכנית גמישה של 3 אימונים בשבוע ותפריט שלא דורש ממני לבשל כל היום. חטוב וחזק מאי פעם.״',
    stars: 5
  }
];

const faqs = [
  {
    question: 'איך עובד ליווי אונליין בהשוואה למאמן אישי בחדר כושר?',
    answer: 'בליווי אונליין אתה מקבל מעטפת של 24/7. במקום לראות מאמן לשעה אחת בשבוע, יש לך ליווי יומי צמוד בוואטסאפ, בדיקת טכניקה של תרגילי מפתח דרך סרטונים, תפריט תזונה מדויק שמתעדכן, ומעקב שבועי קפדני על כל המדדים כדי להבטיח שאתה מתקדם.'
  },
  {
    question: 'תוך כמה זמן רואים תוצאות?',
    answer: 'כבר ב-14 הימים הראשונים תרגיש שינוי ברמות האנרגיה, במראה ובביטחון בחדר כושר. תוצאות ויזואליות משמעותיות של חיטוב ועלייה במסת השריר נראות בבירור תוך 4-8 שבועות של התמדה בתוכנית.'
  },
  {
    question: 'האם התפריט דורש ממני לאכול רק חזה עוף ואורז?',
    answer: 'ממש לא! הגישה שלי מבוססת על תזונה גמישה ואורח חיים בריא שניתן להתמיד בו. אני בונה לך תפריט עשיר ומגוון שכולל מאכלים שאתה אוהב, מותאם לסדר היום ולסגנון החיים שלך, בלי הגבלות קשוחות ומיותרות.'
  },
  {
    question: 'האם הליווי מתאים גם למתחילים גמורים?',
    answer: 'מתאים במיוחד! אני מפרק איתך את התהליך לצעדים פשוטים, בונה לך תוכנית אימונים הדרגתית, ומלמד אותך בדיוק איך לבצע כל תרגיל בצורה בטוחה ונכונה עם סרטוני הסבר.'
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

  // state לשאלות נפוצות (נפתח/נסגר)
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

אשמח לשמוע איך מתחילים! 🔥`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white">
      
      {/* ==========================================
          חלק 1: HERO (המסך הראשי)
         ========================================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        <div className="gold-glow top-[10%] left-1/2 -translate-x-1/2 md:w-[500px] md:h-[500px]" />
        
        <div className="animate-fade-in mb-4">
          <span className="font-space text-xs md:text-sm tracking-[0.4em] text-gray-400 uppercase">
            YITZHAK AZRAN
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-none mb-4">
          <span className="font-space block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 mb-2">
            THE METHOD
          </span>
          <span className="text-white block text-3xl md:text-5xl">
            BUILD YOUR BEST VERSION
          </span>
        </h1>

        <p className="max-w-xl text-gray-400 text-sm md:text-lg mb-8 leading-relaxed px-2">
          הליווי האישי שיעזור לך לבנות גוף חזק, חטוב ובריא באמצעות תוכנית מותאמת אישית, הכוונה תזונתית וליווי מקצועי צמוד אונליין.
        </p>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <button 
            onClick={handleScrollToSurvey}
            className="relative px-8 py-4 bg-black rounded-full text-white font-bold text-base md:text-lg flex items-center gap-3 transition duration-200 hover:bg-neutral-900"
          >
            <span>אני רוצה להתחיל</span>
            <span className="font-space">→</span>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <span className="text-xs font-space tracking-widest text-gray-500 uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent mx-auto mt-2"></div>
        </div>
      </section>

      {/* ==========================================
          חלק 2: WHY ME (למה דווקא אני)
         ========================================== */}
      <section id="why-me" className="relative py-24 px-4 bg-[#030303] overflow-hidden">
        <div className="gold-glow -bottom-[20%] -right-[10%] opacity-10 md:w-[600px] md:h-[600px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-space text-xs md:text-sm tracking-[0.3em] text-amber-400 uppercase mb-2 block">
              THE ADVANTAGE
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
              למה דווקא <span className="font-space text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-400">ME</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
              השילוב המנצח בין מקצועיות ללא פשרות, יחס אישי וליווי צמוד שיביא אותך לתוצאות המקסימליות שלך.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {advantages.map((item, index) => (
              <div 
                key={index}
                className="glass-card rounded-3xl p-8 flex flex-col items-start gap-4 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl mb-2 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
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
      <section id="how-it-works" className="relative py-24 px-4 bg-black border-t border-neutral-900">
        <div className="gold-glow top-[20%] -left-[10%] opacity-10 md:w-[600px] md:h-[600px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="font-space text-xs md:text-sm tracking-[0.3em] text-amber-400 uppercase mb-2 block">
              THE PROCESS
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
              איך זה <span className="font-space text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-400">WORKS</span>?
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 text-base md:text-lg">
              ארבעה שלבים פשוטים ומדויקים שמפרידים בינך לבין הגוף שתמיד רצית.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex gap-6 p-6 rounded-3xl border border-transparent hover:border-neutral-900 hover:bg-neutral-950/40 transition duration-300"
              >
                <div className="font-space text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-500/80 to-amber-600/10 select-none">
                  {step.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          חלק 4: THE SMART SURVEY (השאלון החכם)
         ========================================== */}
      <section id="survey-section" className="relative py-24 px-4 bg-[#030303] border-t border-neutral-900 min-h-[600px] flex items-center justify-center">
        <div className="gold-glow bottom-0 left-1/2 -translate-x-1/2 opacity-15 md:w-[600px] md:h-[600px]" />

        <div className="max-w-xl w-full mx-auto relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl">
            
            {surveyStep === 0 && (
              <div className="text-center flex flex-col items-center gap-6">
                <span className="font-space text-xs tracking-[0.3em] text-amber-400 uppercase">STEP 1 OF 2</span>
                <h3 className="text-3xl font-black text-white">השאלון החכם להתאמת הליווי</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  השאלון הבא לוקח פחות מדקה. התשובות שלך יעזרו לי להבין בדיוק איזה תפריט ותוכנית אימונים יביאו אותך לתוצאה המהירה והבטוחה ביותר.
                </p>
                <button
                  onClick={() => setSurveyStep(1)}
                  className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl text-black font-extrabold text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition duration-300"
                >
                  בוא נתחיל 🔥
                </button>
              </div>
            )}

            {surveyStep === 1 && (
              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-black text-white">איך קוראים לך? 👋</h4>
                <input
                  type="text"
                  placeholder="הכנס שם מלא"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-lg focus:outline-none focus:border-amber-400 transition"
                />
                <button
                  disabled={!name}
                  onClick={() => setSurveyStep(2)}
                  className="py-4 bg-white text-black font-bold rounded-xl disabled:opacity-50 transition"
                >
                  המשך
                </button>
              </div>
            )}

            {surveyStep === 2 && (
              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-black text-white">בן כמה אתה? 🎂</h4>
                <input
                  type="number"
                  placeholder="הכנס גיל"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-lg focus:outline-none focus:border-amber-400 transition"
                />
                <div className="flex gap-4">
                  <button onClick={() => setSurveyStep(1)} className="w-1/3 py-4 bg-neutral-900 rounded-xl text-white">חזור</button>
                  <button disabled={!age} onClick={() => setSurveyStep(3)} className="w-2/3 py-4 bg-white text-black font-bold rounded-xl disabled:opacity-50 transition">המשך</button>
                </div>
              </div>
            )}

            {surveyStep === 3 && (
              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-black text-white">מה הגובה והמשקל שלך? ⚖️</h4>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="גובה (ס״מ)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-lg focus:outline-none focus:border-amber-400 transition"
                  />
                  <input
                    type="number"
                    placeholder="משקל (ק״ג)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-lg focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setSurveyStep(2)} className="w-1/3 py-4 bg-neutral-900 rounded-xl text-white">חזור</button>
                  <button disabled={!height || !weight} onClick={() => setSurveyStep(4)} className="w-2/3 py-4 bg-white text-black font-bold rounded-xl disabled:opacity-50 transition">המשך</button>
                </div>
              </div>
            )}

            {surveyStep === 4 && (
              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-black text-white">מה המטרה העיקרית שלך? 🎯</h4>
                <div className="flex flex-col gap-3">
                  {['חיטוב וירידה באחוזי שומן', 'עלייה במסת שריר וכוח', 'שיפור סיבולת וכושר כללי'].map((option) => (
                    <button
                      key={option}
                      onClick={() => { setGoal(option); setSurveyStep(5); }}
                      className={`w-full p-4 rounded-xl text-right border transition ${goal === option ? 'border-amber-400 bg-amber-400/10' : 'border-neutral-800 bg-neutral-900'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button onClick={() => setSurveyStep(3)} className="py-4 bg-neutral-900 rounded-xl text-white">חזור</button>
              </div>
            )}

            {surveyStep === 5 && (
              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-black text-white">איפה אתה מתאמן בדרך כלל? 📍</h4>
                <div className="flex flex-col gap-3">
                  {['חדר כושר', 'בבית עם ציוד בסיסי', 'בחוץ / פארק (משקל גוף)'].map((option) => (
                    <button
                      key={option}
                      onClick={() => { setLocation(option); setSurveyStep(6); }}
                      className={`w-full p-4 rounded-xl text-right border transition ${location === option ? 'border-amber-400 bg-amber-400/10' : 'border-neutral-800 bg-neutral-900'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button onClick={() => setSurveyStep(4)} className="py-4 bg-neutral-900 rounded-xl text-white">חזור</button>
              </div>
            )}

            {surveyStep === 6 && (
              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-black text-white">כמה פעמים בשבוע אתה יכול להתאמן? ⚡</h4>
                <div className="flex flex-col gap-3">
                  {['1-2 פעמים בשבוע', '3-4 פעמים בשבוע', '5+ פעמים בשבוע'].map((option) => (
                    <button
                      key={option}
                      onClick={() => { setFrequency(option); setSurveyStep(7); }}
                      className={`w-full p-4 rounded-xl text-right border transition ${frequency === option ? 'border-amber-400 bg-amber-400/10' : 'border-neutral-800 bg-neutral-900'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button onClick={() => setSurveyStep(5)} className="py-4 bg-neutral-900 rounded-xl text-white">חזור</button>
              </div>
            )}

            {surveyStep === 7 && isAnalyzing && (
              <div className="text-center py-12 flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                <h4 className="text-2xl font-black font-space tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-400 animate-pulse">
                  ANALYZING DATA...
                </h4>
                <p className="text-gray-400 text-sm">
                  בונה אסטרטגיה מותאמת אישית על סמך המדדים והמטרות שלך.
                </p>
              </div>
            )}

            {surveyStep === 8 && (
              <div className="text-center flex flex-col items-center gap-6 animate-fade-in">
                <div className="text-6xl">🎉</div>
                <h4 className="text-3xl font-black text-white">הנתונים נותחו בהצלחה!</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  היי <span className="text-amber-400 font-bold">{name}</span>, הכנתי עבורך ניתוח ראשוני המבוסס על הנתונים שהזנת. לחץ על הכפתור למטה כדי לשלוח לי את התוצאות ישירות לוואטסאפ האישי שלי, ונתחיל לבנות את תוכנית העבודה שלך!
                </p>
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-4 bg-[#25D366] text-white font-extrabold text-lg rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition duration-300"
                >
                  <span>שלח ליצחק בוואטסאפ 🚀</span>
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ==========================================
          חלק 5: TESTIMONIALS (ביקורות ופידבקים)
         ========================================== */}
      <section id="reviews" className="relative py-24 px-4 bg-black border-t border-neutral-900 overflow-hidden">
        <div className="gold-glow top-[40%] right-[-10%] opacity-10 md:w-[600px] md:h-[600px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-space text-xs md:text-sm tracking-[0.3em] text-amber-400 uppercase mb-2 block">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
              הסיפורי הצלחה <span className="font-space text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-400">שלהם</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 text-base md:text-lg">
              לא עוד הבטחות באוויר. תוצאות אמיתיות של אנשים אמיתיים שהחליטו לעשות שינוי בחיים.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, index) => (
              <div 
                key={index}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between gap-6 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* חמישה כוכבי זהב */}
                  <div className="flex gap-1 text-amber-400 text-lg">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                    {rev.text}
                  </p>
                </div>
                
                <div className="border-t border-neutral-900 pt-4 mt-4">
                  <h4 className="text-white font-bold text-lg">{rev.name}</h4>
                  <span className="text-xs text-amber-500 font-medium">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          חלק 6: FAQ (שאלות נפוצות)
         ========================================== */}
      <section id="faq" className="relative py-24 px-4 bg-[#030303] border-t border-neutral-900">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-space text-xs md:text-sm tracking-[0.3em] text-amber-400 uppercase mb-2 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
              שאלות <span className="font-space text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-400">נפוצות</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="border border-neutral-900 bg-neutral-950/40 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-right flex justify-between items-center gap-4 hover:bg-neutral-900/30 transition"
                  >
                    <span className="text-base md:text-lg font-bold text-white">{faq.question}</span>
                    <span className={`text-amber-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      {/* חץ נקי פשוט */}
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-neutral-900/50 bg-neutral-950/20">
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
          חלק 7: FOOTER (פוטר מעוצב)
         ========================================== */}
      <footer className="relative py-16 px-4 bg-black border-t border-neutral-900 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-right">
            <span className="font-space text-sm tracking-[0.4em] text-amber-400 uppercase block mb-1">
              YITZHAK AZRAN
            </span>
            <span className="text-gray-500 text-xs">THE METHOD. ALL RIGHTS RESERVED © 2026</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-400 font-bold">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">INSTAGRAM</a>
            <a href="https://wa.me/972559939351" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">WHATSAPP</a>
          </div>
        </div>
      </footer>

      {/* ==========================================
          חלק 8: כפתור וואטסאפ צף
         ========================================== */}
      <a 
        href="https://wa.me/972559939351"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition duration-300 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        {/* אייקון וואטסאפ פשוט ב-SVG */}
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.45.99c-5.438 0-9.863 4.37-9.867 9.801-.001 1.73.461 3.42 1.337 4.921l-1.02 3.725 3.84-1.01l1.317.778zM17.15 14.18c-.29-.145-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.3-.77.95-.94 1.15-.17.2-.34.22-.63.08-1.15-.575-1.93-1.01-2.695-2.315-.2-.35.2-.32.57-1.04.09-.19.04-.36-.02-.5-.06-.14-.46-1.1-.63-1.51-.17-.4-.36-.33-.5-.33h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.78 2.13.9 2.28c.11.15 1.54 2.35 3.73 3.3 1.14.49 1.76.54 2.38.45.62-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.32z"/>
        </svg>
      </a>

    </main>
  );
}
