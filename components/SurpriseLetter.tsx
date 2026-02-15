"use client";
import { useEffect, useState } from "react";

export default function SurpriseLetter() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullLetter =
    "My dearest Sanjida,\n\nThis past year has been the greatest adventure of my life. From the moment we said 'I do', every day has been a blessing. I built this space just for us, to remind you that my love for you grows stronger with every passing second.\n\nHappy Anniversary.\n\nYours always,\nShanto";

  useEffect(() => {
    // Check if current date is past Feb 27, 2026
    const unlockDate = new Date("2026-02-27T00:00:00").getTime();

    const checkTime = () => {
      if (Date.now() >= unlockDate) setIsUnlocked(true);
    };

    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isUnlocked) {
      let i = 0;
      const typing = setInterval(() => {
        setTypedText(fullLetter.slice(0, i));
        i++;
        if (i > fullLetter.length) clearInterval(typing);
      }, 50); // Speed of typing
      return () => clearInterval(typing);
    }
  }, [isUnlocked]);

  return (
    <section className="py-32 bg-slate-950 px-4 flex justify-center">
      <div className="max-w-2xl w-full bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl min-h-[400px]">
        {!isUnlocked ? (
          <div className="text-center flex flex-col items-center justify-center h-full">
            <span className="text-5xl mb-6">🔒</span>
            <h3 className="text-2xl text-white font-light">
              A special message is locked.
            </h3>
            <p className="text-slate-400 mt-2">Check back on February 27th.</p>
          </div>
        ) : (
          <div className="text-slate-200 text-lg md:text-xl font-serif leading-relaxed whitespace-pre-wrap">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>
    </section>
  );
}
