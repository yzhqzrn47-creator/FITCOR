'use client';
import React from 'react';

// ==========================================
// 1. נתוני היתרונות (Why Me)
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

// ==========================================
// 2. נתוני שלבי העבודה (How It Works)
// ==========================================
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

export default function Home() {
  const handleScrollToSurvey = () => {
    const surveySection = document.getElementById('survey-section');
    if (surveySection) {
      surveySection.scrollIntoView({ behavior: 'smooth' });
    }
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

        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-none mb-4 animate-slide-up">
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
                {/* מספר השלב בעיצוב Apple ענק ויוקרתי */}
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

      {/* אזור זמני לשאלון עד שנבנה אותו בשלב הבא */}
      <div id="survey-section" className="py-12 text-center text-gray-500 text-xs tracking-widest font-space uppercase">
        Survey Section Coming Next...
      </div>

    </main>
  );
}
