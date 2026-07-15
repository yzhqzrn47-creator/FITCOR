'use client';
import React, { useState } from 'react';

export default function Contact() {
  const MY_PHONE_NUMBER = "972559939351"; // <-- כאן אתה מחליף למספר הוואטסאפ האמיתי שלך!

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('נא למלא שם ומספר טלפון');
      return;
    }

    const message = `היי! הגעתי דרך דף יצירת הקשר באתר FITCORE.\n\nפרטים:\nשם מלא: ${name}\nטלפון: ${phone}\nהודעה: ${messageText || 'לא הוזנה הודעה'}`;
    const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col justify-between" dir="rtl">
      
      {/* Header */}
      <header className="border-b border-zinc-900 px-6 py-4 max-w-7xl mx-auto w-full flex justify-between items-center">
        <a href="/" className="text-2xl font-black tracking-wider text-lime-400">FITCORE</a>
        <a href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition">
          ← חזרה לדף הבית
        </a>
      </header>

      {/* Main Form Section */}
      <main className="px-6 py-12 max-w-lg mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black mb-3 text-lime-400">דברו איתי 📞</h1>
          <p className="text-zinc-400 text-sm">
            יש לכם שאלות לפני שמתחילים? רוצים לתאם שיחה? מלאו את הפרטים וההודעה תשלח אליי ישירות לוואטסאפ!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-right shadow-2xl">
          <div className="mb-4">
            <label className="block text-zinc-400 text-xs uppercase mb-2 font-bold">שם מלא</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-lime-400 transition" 
              placeholder="ישראל ישראלי" 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-zinc-400 text-xs uppercase mb-2 font-bold">מספר טלפון</label>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-lime-400 transition" 
              placeholder="050-0000000" 
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-zinc-400 text-xs uppercase mb-2 font-bold">איך אוכל לעזור לך? (אופציונלי)</label>
            <textarea 
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              rows={3}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-lime-400 transition resize-none" 
              placeholder="כאן אפשר לכתוב לי משהו בקצרה..."
            />
          </div>

          <button type="submit" className="w-full bg-lime-400 text-black py-4 rounded-xl font-black text-lg hover:bg-lime-300 transition-all">
            שלח הודעה לוואטסאפ שלי
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-6 text-center text-zinc-600 text-xs">
        © {new Date().getFullYear()} FITCORE. כל הזכויות שמורות.
      </footer>
    </div>
  );
}