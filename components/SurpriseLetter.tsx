"use client";
import { Heart, Lock } from "lucide-react";
import { useEffect, useState } from "react";

export default function SurpriseLetter() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullLetter = `My Dearest Sanjida,

They say 365 days make a year, but to me, this has been the most beautiful chapter ever written in the book of my life. From that sacred moment you said "Kobul" and placed your signature next to mine, the world changed its colors. You didn't just become my wife; you became my home, my ultimate peace, and my greatest strength.

I often close my eyes and find myself back in our most cherished moments. I can still taste the tea from our "cha addas" on campus and feel the quiet magic of sitting together on Central Field under the glow of a full moon. I remember our time in the department, and that freezing winter morning on Bangabandhu Hall road—the air was so cold, but I was warm because I was walking beside you. 

From laughing until our sides ached to the thrill of cycling across the sands of Saint Martin and the serene silence of our boat through Debotakhum—every path we take feels like home. Whether we’re chasing big adventures or just walking side-by-side, every memory with you is a treasure I hold closer to my heart with every passing second.

I know you see me lost in computer, or typing code late into the night. But please know, Sanjida, every line of code I write and every hour I study is a brick in the future I am building for us. Your unconditional care, your patience, and the way you look after me gives me the energy to keep going. You believe in me even when I doubt myself.

I built this little digital space just for you, typing it out line by line, to remind you that no matter how busy life gets, my love for you grows stronger with every heartbeat. You are, and always will be, my safe haven.

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
      }, 40);
      return () => clearInterval(typing);
    }
  }, [isUnlocked, fullLetter]);

  const floatingHearts = [
    { left: "10%", delay: "0s", duration: "12s", size: 24 },
    { left: "30%", delay: "2s", duration: "15s", size: 16 },
    { left: "50%", delay: "5s", duration: "10s", size: 30 },
    { left: "70%", delay: "1s", duration: "14s", size: 20 },
    { left: "90%", delay: "4s", duration: "18s", size: 28 },
    { left: "20%", delay: "7s", duration: "11s", size: 18 },
    { left: "40%", delay: "3s", duration: "16s", size: 25 },
    { left: "60%", delay: "8s", duration: "13s", size: 22 },
    { left: "80%", delay: "6s", duration: "17s", size: 16 },
    { left: "15%", delay: "4s", duration: "14s", size: 20 },
    { left: "35%", delay: "1s", duration: "12s", size: 26 },
    { left: "55%", delay: "8s", duration: "19s", size: 18 },
    { left: "75%", delay: "2s", duration: "15s", size: 22 },
    { left: "85%", delay: "5s", duration: "11s", size: 28 },
    { left: "5%", delay: "3s", duration: "16s", size: 15 },
    { left: "95%", delay: "7s", duration: "13s", size: 24 },
    { left: "25%", delay: "9s", duration: "17s", size: 21 },
    { left: "65%", delay: "0.5s", duration: "14s", size: 19 },
    { left: "45%", delay: "6.5s", duration: "12s", size: 27 },
  ];

  return (
    <section className="py-32 bg-slate-950 px-4 flex justify-center relative overflow-hidden">
      {/* Subtle ambient glow behind the letter container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 3D Glassmorphic Letter Container */}
      <div
        className={`
          max-w-4xl w-full p-8 md:p-14 rounded-[2rem] relative z-10 flex flex-col justify-center overflow-hidden
          transition-all duration-1000 ease-in-out min-h-[500px]
          ${
            !isUnlocked
              ? "bg-slate-900/40 backdrop-blur-md border border-white/5 shadow-2xl"
              : "bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-rose-950/40 backdrop-blur-xl border border-rose-500/20 shadow-[0_0_50px_-12px_rgba(225,29,72,0.3)]"
          }
        `}
      >
        {/* The Floating Hearts Background */}
        {isUnlocked && (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {floatingHearts.map((heart, i) => (
              <div
                key={i}
                className="absolute bottom-0 animate-float-up text-rose-500/25"
                style={{
                  left: heart.left,
                  /* @ts-expect-error - passing custom properties to CSS */
                  "--delay": heart.delay,
                  "--duration": heart.duration,
                }}
              >
                <Heart size={heart.size} className="fill-current" />
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        {!isUnlocked ? (
          <div className="text-center flex flex-col items-center justify-center h-full relative z-10">
            <div className="w-20 h-20 bg-slate-950/50 rounded-full flex items-center justify-center mb-6 border border-rose-500/20 shadow-[0_0_30px_rgba(225,29,72,0.2)]">
              <Lock className="w-8 h-8 text-rose-400" />
            </div>
            <h3 className="text-3xl md:text-4xl text-rose-300 font-light font-serif tracking-wide mb-3">
              Sealed Until Midnight
            </h3>
            <p className="text-slate-400 text-lg md:text-xl font-light">
              Check back on February 27th.
            </p>
          </div>
        ) : (
          // FIX: Reduced text size (text-base md:text-xl) and tightened line spacing (leading-relaxed md:leading-[1.9])
          <div className="text-rose-50 text-base md:text-xl font-serif leading-relaxed md:leading-[1.9] whitespace-pre-wrap tracking-wide relative z-10 drop-shadow-md">
            {typedText}
            {/* Romantic pulsing heart cursor */}
            <span className="inline-block ml-1 animate-pulse text-rose-500 relative top-1">
              <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
