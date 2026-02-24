"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ReasonGrid() {
  const reasons = [
    {
      title: "My Safe Haven",
      desc: "A house is just a place, but my true home is wherever you are. No matter what happens in the world, the moment I look at you, my heart finally rests.",
    },
    {
      title: "Your Unconditional Care",
      desc: "You nurture me with a pure, selfless love that I have never known before. The way you look after me makes me feel completely safe and endlessly cherished.",
    },
    {
      title: "My Ultimate Peace",
      desc: "When my mind is overwhelmed and the days get too loud, your presence is the quiet I crave. Just being near you makes everything else fade away.",
    },
    {
      title: "My Greatest Strength",
      desc: "Even on the days I doubt myself, your unwavering belief in me never falters. You are the foundation of my confidence and the reason I keep pushing forward.",
    },
  ];

  return (
    <section className="py-32 bg-slate-950 px-4 relative overflow-hidden">
      {/* Subtle background ambient glow to set a romantic mood */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-20 relative z-10"
      >
        <Heart className="w-8 h-8 text-rose-500/50 mx-auto mb-6 animate-pulse" />
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide drop-shadow-lg">
          Why I Love You
        </h2>
        <div className="w-24 h-[1px] bg-rose-500/30 mx-auto mt-8"></div>
      </motion.div>

      {/* Cinematic Focus Group - Hovering one dims the rest */}
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 group relative z-10">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            // The magic UI touch: group-hover dims un-hovered cards
            className="p-8 md:p-12 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/5 shadow-2xl transition-all duration-700 hover:bg-slate-800/60 hover:border-rose-500/30 hover:shadow-rose-900/20 hover:-translate-y-2 group-hover:opacity-40 hover:!opacity-100 cursor-default"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              {/* Elegant Numbering */}
              <div className="flex-shrink-0">
                <span className="text-5xl md:text-7xl font-serif font-light text-slate-800 tracking-tighter select-none transition-colors duration-700 group-hover:text-rose-950/50">
                  0{i + 1}
                </span>
              </div>

              {/* The Emotional Text */}
              <div>
                <h3 className="text-2xl md:text-3xl text-rose-300 font-light mb-4 font-serif tracking-wide">
                  {r.title}
                </h3>
                <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed md:leading-loose">
                  {r.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
