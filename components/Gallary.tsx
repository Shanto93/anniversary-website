"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Photo Imports
import image1 from "../public/assets/gallery/01.jpeg";
import image2 from "../public/assets/gallery/02.jpeg";
import image4 from "../public/assets/gallery/04.jpeg";
import image5 from "../public/assets/gallery/05.jpeg";
import image6 from "../public/assets/gallery/06.jpeg";
import image7 from "../public/assets/gallery/07.jpeg";
import image8 from "../public/assets/gallery/08.jpeg";
import image9 from "../public/assets/gallery/09.jpeg";
import image10 from "../public/assets/gallery/10.jpeg";
import image11 from "../public/assets/gallery/11.jpeg";
import image12 from "../public/assets/gallery/12.jpeg";
import image13 from "../public/assets/gallery/13.jpeg";
import image14 from "../public/assets/gallery/14.jpeg";
import image15 from "../public/assets/gallery/15.jpeg";
import image16 from "../public/assets/gallery/16.jpeg";
import image17 from "../public/assets/gallery/17.jpeg";
import image18 from "../public/assets/gallery/18.jpeg";
import image19 from "../public/assets/gallery/19.jpeg";
import image20 from "../public/assets/gallery/20.jpeg";
import image21 from "../public/assets/gallery/21.jpeg";
import image22 from "../public/assets/gallery/22.jpeg";
import image23 from "../public/assets/gallery/23.jpeg";
import image26 from "../public/assets/gallery/26.jpeg";
import image27 from "../public/assets/gallery/27.jpeg";
import image28 from "../public/assets/gallery/28.jpeg";
import image29 from "../public/assets/gallery/29.jpeg";
import image30 from "../public/assets/gallery/30.jpeg";
import image32 from "../public/assets/gallery/32.jpeg";
import image33 from "../public/assets/gallery/33.jpeg";
import image34 from "../public/assets/gallery/34.jpeg";

// Video Imports
const video1 = "/assets/gallery/videos/eating.mp4";
const video2 = "/assets/gallery/videos/before_marriage.mp4";
const video3 = "/assets/gallery/videos/sajguj.mp4";
const video4 = "/assets/gallery/videos/i_wanna_be_your.mp4";
const video5 = "/assets/gallery/videos/cute.mp4";

export default function Gallery() {
  // 1. Memory Chapters Data (UPDATED WITH ROMANTIC CAPTIONS)
  const memoryChapters = [
    {
      id: "wedding",
      timestamp: "February 27, 2025",
      title: "The Promise of Forever",
      desc: "A single signature, a quiet prayer, and two lives becoming one. That was the exact moment the world shifted, and my heart knew it had finally found its home.",
      images: [image5, image6, image11, image9, image32, image33, image34],
    },
    {
      id: "adventures",
      timestamp: "Chasing Horizons",
      title: "Every Beautiful Escape",
      desc: "From the endless blue waves of Saint Martin to the quiet, floating peace of Debotakhum. The world is breathtaking, but every view is better when I am looking at it with you.",
      images: [
        image4,
        image16,
        image17,
        image22,
        image23,
        image26,
        image27,
        image28,
        image29,
        image30,
      ],
    },
    {
      id: "simple-joys",
      timestamp: "The Beautiful Ordinary",
      title: "My Favorite Kind of Magic",
      desc: "Late-night campus walks, endless 'cha addas', and laughter across the table. These quiet, simple everyday moments are the treasures I hold closest to my soul.",
      images: [image1, image2, image14, image18, image19, image20, image21],
    },
    {
      id: "just-us",
      timestamp: "You & Me",
      title: "My Ultimate Safe Haven",
      desc: "Whether we are standing on a rooftop watching the sunset or just getting lost in each other's eyes... being anywhere near you is my absolute favorite place to be.",
      images: [
        image7,
        image8,
        image10,
        image12,
        image13,
        image15,
        image17,
        image30,
      ],
    },
  ];

  const videos = [video1, video2, video3, video4, video5];

  // 2. State Management
  const [activeChapterId, setActiveChapterId] = useState(memoryChapters[0].id);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 3. Derived State & Safety Checks (This completely fixes the crash)
  const activeChapter =
    memoryChapters.find((c) => c.id === activeChapterId) || memoryChapters[0];

  // Guarantee the index never exceeds the current chapter's array length
  const safeImgIndex = Math.max(
    0,
    Math.min(currentImgIndex, activeChapter.images.length - 1),
  );

  // 4. Auto-Slider Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImgIndex((prev) =>
          prev >= activeChapter.images.length - 1 ? 0 : prev + 1,
        );
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeChapter.images.length]);

  // 5. Handlers
  const handleNext = () => {
    setCurrentImgIndex((prev) =>
      prev >= activeChapter.images.length - 1 ? 0 : prev + 1,
    );
    setIsAutoPlaying(false); // Pause if user manually clicks
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? activeChapter.images.length - 1 : prev - 1,
    );
    setIsAutoPlaying(false);
  };

  const handleChapterSelect = (chapterId: string) => {
    setActiveChapterId(chapterId);
    setCurrentImgIndex(0); // Instantly reset to the first image of the new chapter
    setIsAutoPlaying(true); // Resume auto-play for the new chapter
  };

  return (
    <section className="py-24 bg-slate-950 px-4 md:px-8 min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-64 w-[800px] h-[800px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center font-serif font-light mb-16 text-rose-300 drop-shadow-md relative z-10"
      >
        Echoes of Forever
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 relative z-10">
        {/* === LEFT COLUMN: CHAPTER SELECTOR === */}
        <div className="flex flex-col gap-3 order-2 lg:order-1">
          <h3 className="text-rose-200/50 uppercase tracking-widest font-medium mb-4 hidden lg:block text-sm">
            Select a Chapter
          </h3>

          <div className="flex overflow-x-auto lg:overflow-visible lg:flex-col gap-3 pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
            {memoryChapters.map((chapter) => {
              const isActive = chapter.id === activeChapterId;
              return (
                <button
                  key={chapter.id}
                  onClick={() => handleChapterSelect(chapter.id)}
                  className={`
                    relative flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left px-5 py-5 rounded-2xl transition-all duration-500 group
                    border backdrop-blur-md overflow-hidden
                    ${
                      isActive
                        ? "bg-rose-950/40 border-rose-500/50 shadow-[0_0_30px_rgba(225,29,72,0.15)]"
                        : "bg-slate-900/40 border-white/5 hover:bg-slate-800/60 hover:border-white/10"
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-transparent pointer-events-none"
                    />
                  )}

                  <div className="relative z-10">
                    <span
                      className={`block text-xs md:text-sm font-semibold tracking-wider uppercase mb-1 transition-colors ${isActive ? "text-rose-400" : "text-slate-500 group-hover:text-slate-400"}`}
                    >
                      {chapter.timestamp}
                    </span>
                    <span
                      className={`block font-serif text-base md:text-lg transition-colors ${isActive ? "text-rose-50" : "text-slate-300"}`}
                    >
                      {chapter.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* === RIGHT COLUMN: CINEMATIC VIEWER === */}
        <div className="order-1 lg:order-2 flex flex-col gap-6">
          {/* Main Cinematic Image Display */}
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl aspect-[4/5] md:aspect-[16/10] group">
            <AnimatePresence mode="wait">
              {/* Uses safeImgIndex to guarantee it never errors out */}
              <motion.img
                key={`${activeChapterId}-${safeImgIndex}`}
                src={activeChapter.images[safeImgIndex].src}
                alt="Memory"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"></div>

            {/* Manual Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-rose-600/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-rose-600/50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white/70 hover:text-white transition-colors z-20"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-1" />
              )}
            </button>

            {/* Romantic Caption Area */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
              <motion.p
                key={activeChapterId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-rose-50/90 text-sm md:text-lg font-serif italic tracking-wide leading-relaxed drop-shadow-lg"
              >
                &quot;{activeChapter.desc}&quot;
              </motion.p>
            </div>
          </div>

          {/* Interactive Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1">
            {activeChapter.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentImgIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`
                  relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300
                  ${safeImgIndex === idx ? "ring-2 ring-rose-500 ring-offset-2 ring-offset-slate-950 scale-105" : "opacity-50 hover:opacity-100"}
                `}
              >
                <Image
                  src={img}
                  alt="thumbnail"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- DIVIDER ----------------- */}
      <div className="max-w-4xl mx-auto my-32 flex items-center justify-center opacity-70">
        <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-rose-400/50"></div>
        <div className="w-2 h-2 rounded-full bg-rose-400/80 mx-4 shadow-[0_0_10px_rgba(251,113,133,0.8)]"></div>
        <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-rose-400/50"></div>
      </div>

      {/* ----------------- VIDEO SECTION ----------------- */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center font-serif font-light mb-16 text-rose-300 drop-shadow-md relative z-10"
      >
        Living Memories
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {videos.map((video, index) => (
          <motion.div
            key={`vid-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: (index % 3) * 0.15,
              ease: "easeOut",
            }}
            className="relative rounded-[2rem] overflow-hidden bg-slate-900/40 border border-white/10 shadow-xl w-full aspect-[9/16] hover:border-rose-500/30 transition-all duration-500"
          >
            <video
              src={typeof video === "string" ? video : undefined}
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
