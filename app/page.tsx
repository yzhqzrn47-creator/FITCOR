'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function YitzhakAzranCoaching() {
  const router = useRouter();
  const [goal, setGoal] = useState<'build' | 'shred' | 'tone'>('build');
  const [level, setLevel] = useState<'beginner' | 'advanced'>('beginner');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      router.push(`/result?goal=${goal}&level=${level}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-lime-400 selection:text-black">
      
      {loading && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center text-center p-6">
          <div className="w-20 h-20 border-4 border-lime-400 border-t-transparent rounded-full animate-spin mb-6"></div>
          <h2 className="text-3xl font-black text-lime-400 mb-2 animate-pulse">מנתח את הנתונים שלך...</h2>
          <p className="text-gray-400 text-lg">יצחק עזרן בונה עבורך את פרוטוקול האימון המושלם</p>
        </div>
      )}

      {/* HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920')] bg-cover bg-center grayscale"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-lime-400 font-mono tracking-widest text-sm uppercase border border-lime-400/30 px-3 py-1 rounded-full bg-lime-950/20">
            PERSONAL ONLINE COACHING
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-6 mb-4">
            יצחק עזרן <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              מאמן הכושר האישי שלך.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            לא עוד תוכניות גנריות מהאינטרנט. ליווי אונליין מותאם אישית למבנה הגוף, לסדר היום וליעדים שלך. הכל מנוהל אצלך בטלפון.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#quiz" 
              className="bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 px-10 rounded-xl text-lg transition duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(163,230,53,0.3)]"
            >
              התאם לי תוכנית אישית
            </a>
            <a 
              href="#method" 
              className="border border-gray-700 hover:border-lime-400 text-white font-bold py-4 px-10 rounded-xl text-lg transition duration-300"
            >
              איך השיטה עובדת?
            </a>
          </div>
        </div>
      </header>

      {/* THE METHOD */}
      <section id="method" className="py-24 px-6 max-w-6xl mx-auto border-t border-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">הנוסחה שלי לתוצאות שלך</h2>
          <p className="text-gray-400 text-lg">בלי פשרות, בלי תירוצים. רק מדע ותמיכה מסביב לשעון.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-gray-950 to-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-lime-400/40 transition duration-500 group">
            <div className="w-12 h-12 bg-lime-950/50 border border-lime-400 text-lime-400 rounded-2xl flex items-center justify-center font-mono font-bold text-xl mb-6">01</div>
            <h3 className="text-2xl font-bold mb-3">תוכנית אימון מדעית</h3>
            <p className="text-gray-400 leading-relaxed">תכנון עומסים מדויק, סרטוני הסבר לכל תרגיל ומעקב התקדמות שבועי כדי לוודא שאתה תמיד מתקדם.</p>
          </div>

          <div className="bg-gradient-to-b from-gray-950 to-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-lime-400/40 transition duration-500 group">
            <div className="w-12 h-12 bg-lime-950/50 border border-lime-400 text-lime-400 rounded-2xl flex items-center justify-center font-mono font-bold text-xl mb-6">02</div>
            <h3 className="text-2xl font-bold mb-3">תזונה שאתה באמת אוהב</h3>
            <p className="text-gray-400 leading-relaxed">אני לא מאמין בהרעבה. נבנה תפריט דינמי שמשתלב בחיים שלך, כולל המאכלים שאתה אוהב, עם דגש על ערכים נכונים.</p>
          </div>

          <div className="bg-gradient-to-b from-gray-950 to-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-lime-400/40 transition duration-500 group">
            <div className="w-12 h-12 bg-lime-950/50 border border-lime-400 text-lime-400 rounded-2xl flex items-center justify-center font-mono font-bold text-xl mb-6">03</div>
            <h3 className="text-2xl font-bold mb-3">ליווי בוואטסאפ 24/7</h3>
            <p className="text-gray-400 leading-relaxed">אני איתך בכיס. זמינות לשאלות, בדיקת טכניקת ביצוע בסרטונים שאתה שולח לי, וזריקות מוטיבציה ברגעים הקשים.</p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE QUIZ */}
      <section id="quiz" className="bg-gray-950 py-24 px-6 border-y border-gray-900 relative">
        <div className="max-w-xl mx-auto bg-black p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl relative z-10">
          <h3 className="text-3xl font-black text-center mb-2">מצא את הדרך שלך</h3>
          <p className="text-center text-gray-400 mb-8">בחר את המטרות שלך וקבל המלצה ראשונית מיצחק</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-300">מה המטרה המרכזית שלך?</label>
              <div className="grid grid-cols-3 gap-3">
                <button type="button" onClick={() => setGoal('build')} className={`py-3 px-2 text-xs md:text-sm font-bold rounded-xl border transition ${goal === 'build' ? 'border-lime-400 bg-lime-950/30 text-lime-400' : 'border-gray-800 bg-gray-950 text-gray-400'}`}>עלייה במסה 💪</button>
                <button type="button" onClick={() => setGoal('shred')} className={`py-3 px-2 text-xs md:text-sm font-bold rounded-xl border transition ${goal === 'shred' ? 'border-lime-400 bg-lime-950/30 text-lime-400' : 'border-gray-800 bg-gray-950 text-gray-400'}`}>חיטוב אגרסיבי 🔥</button>
                <button type="button" onClick={() => setGoal('tone')} className={`py-3 px-2 text-xs md:text-sm font-bold rounded-xl border transition ${goal === 'tone' ? 'border-lime-400 bg-lime-950/30 text-lime-400' : 'border-gray-800 bg-gray-950 text-gray-400'}`}>כושר ואורח חיים 🌱</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-300">רמת הניסיון שלך בחדר כושר?</label>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setLevel('beginner')} className={`py-3 px-4 font-bold rounded-xl border transition ${level === 'beginner' ? 'border-lime-400 bg-lime-950/30 text-lime-400' : 'border-gray-800 bg-gray-950 text-gray-400'}`}>מתחיל / פחות משנה</button>
                <button type="button" onClick={() => setLevel('advanced')} className={`py-3 px-4 font-bold rounded-xl border transition ${level === 'advanced' ? 'border-lime-400 bg-lime-950/30 text-lime-400' : 'border-gray-800 bg-gray-950 text-gray-400'}`}>מתקדם / מעל שנה</button>
              </div>
            </div>

            <button type="submit" className="w-full bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 px-4 rounded-xl transition duration-300 shadow-[0_0_15px_rgba(163,230,53,0.2)]">
              הפק תוכנית מותאמת ⚡
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-600 border-t border-gray-900 text-sm">
        <p className="mb-2 text-gray-500 font-bold">YITZHAK AZRAN - ONLINE COACHING</p>
        <p>© {new Date().getFullYear()} כל הזכויות שמורות ליצחק עזרן.</p>
      </footer>

    </div>
  );
}
