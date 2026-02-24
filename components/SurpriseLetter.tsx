"use client";
import { useEffect, useState } from "react";

export default function SurpriseLetter() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [typedText, setTypedText] = useState("");

  // const fullLetter =
  //   "My dearest Sanjida,\n\nThis past year has been the greatest adventure of my life. From the moment we said 'I do', every day has been a blessing. I built this space just for us, to remind you that my love for you grows stronger with every passing second.\n\nHappy Anniversary.\n\nYours always,\nShanto";

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

// "use client";
// import { motion } from "framer-motion";
// import { Lock } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function SurpriseLetter() {
//   const [isUnlocked, setIsUnlocked] = useState(false);
//   const [typedText, setTypedText] = useState("");

//   // Using template literals (backticks) makes formatting long letters much easier
//   const fullLetter = `My dearest Sanjida,

// When I look back at the past 365 days, it feels like I am looking at the most beautiful chapter of my life. From the moment we made our dua together and you signed your name next to mine, everything shifted. You didn't just become my wife; you became my home, my ultimate peace, and my greatest strength.

// We have shared so many simple, unforgettable moments. Whether it's a quiet ride in a CNG with a single rose, getting lost in the city and laughing for hours, or just walking side-by-side—every memory with you is a treasure I hold close to my heart.

// I know my days are often filled with heavy studies, preparing for our future, and coding late into the night. But I want you to know that every late hour I push through is for us. Your unconditional care, your patience, and the way you look after me gives me the energy to keep going. You believe in me even when I doubt myself.

// I built this little digital space just for you, typing it out line by line, to remind you that no matter how busy life gets, my love for you grows stronger with every passing second. You are, and always will be, my safe haven.

// Thank you for choosing me. Thank you for loving me exactly as I am. Here is to our first year down, and a beautiful lifetime to go.

// Happy 1st Anniversary, my love.

// Yours always,
// Shanto`;

//   useEffect(() => {
//     // Set to strictly unlock on February 27th, 2026 at Midnight
//     const unlockDate = new Date("2026-02-21T00:00:00").getTime();

//     const checkTime = () => {
//       if (Date.now() >= unlockDate) setIsUnlocked(true);
//     };

//     checkTime();
//     const interval = setInterval(checkTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (isUnlocked) {
//       let i = 0;
//       const typing = setInterval(() => {
//         setTypedText(fullLetter.slice(0, i));
//         i++;
//         if (i > fullLetter.length) clearInterval(typing);
//       }, 35); // Sped up slightly from 50ms so it flows beautifully as she reads
//       return () => clearInterval(typing);
//     }
//   }, [isUnlocked, fullLetter]);

//   return (
//     <section className="py-32 bg-slate-950 px-4 flex justify-center relative overflow-hidden">
//       {/* Soft ambient background glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none"></div>

//       {/* Upgraded Container: Wider, taller, and more elegant */}
//       <div className="max-w-4xl w-full bg-slate-900/80 backdrop-blur-md p-10 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl min-h-[500px] relative z-10 flex flex-col justify-center">
//         {!isUnlocked ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-center flex flex-col items-center justify-center h-full"
//           >
//             <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center mb-6 border border-white/5 shadow-inner">
//               <Lock className="w-8 h-8 text-rose-500/80" />
//             </div>
//             <h3 className="text-3xl md:text-4xl text-rose-300 font-light font-serif tracking-wide mb-3">
//               Sealed Until Midnight
//             </h3>
//             <p className="text-slate-400 text-lg md:text-xl font-light">
//               Check back on February 27th.
//             </p>
//           </motion.div>
//         ) : (
//           <div className="text-slate-200 text-lg md:text-2xl font-serif leading-loose md:leading-[2.5] whitespace-pre-wrap tracking-wide">
//             {typedText}
//             <span className="animate-pulse text-rose-500">|</span>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
