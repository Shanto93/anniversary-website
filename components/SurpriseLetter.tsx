"use client";
import { useEffect, useState } from "react";

export default function SurpriseLetter() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullLetter = `My dearest Sanjida,

When I look back at the past 365 days, it feels like I am looking at the most beautiful chapter of my life. From the moment we made our dua together and you signed your name next to mine, everything shifted. You didn't just become my wife; you became my home, my ultimate peace, and my greatest strength.

We have shared so many simple, unforgettable moments. Whether it's a cha addas on campus and the nights we spent getting lost in the city, laughing until our sides ached. From the freedom of cycling together on the sands of Saint Martin to the serene, quiet beauty of our boat journey through Debotakhum—every path we take feels like home. Whether we’re chasing big adventures or just walking side-by-side, every memory with you is a treasure I hold closer to my heart with every passing second 

I know my days are often filled with studies, preparing for our future, and coding late into the night. But I want you to know that every late hour I push through is for us. Your unconditional care, your patience, and the way you look after me gives me the energy to keep going. You believe in me even when I doubt myself.

I built this little digital space just for you, typing it out line by line, to remind you that no matter how busy life gets, my love for you grows stronger with every passing second. You are, and always will be, my safe haven.

Thank you for choosing me. Thank you for loving me exactly as I am. Here is to our first year down, and a beautiful lifetime to go.

Happy 1st Anniversary, my love.

Yours always,
Shanto`;

  useEffect(() => {
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
  }, [isUnlocked, fullLetter]);

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
