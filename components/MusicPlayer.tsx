"use client";
import { Music, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log(
            "Autoplay blocked by browser policy. Waiting for user interaction.",
            error,
          );
          setIsPlaying(false);
        }
      }
    };

    playAudio();
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <audio ref={audioRef} src="/assets/audio/thousand_year.mp3" loop />
      <button
        onClick={togglePlay}
        className={`flex items-center justify-center rounded-full text-white shadow-2xl transition-all duration-500 
          w-12 h-12 md:w-14 md:h-14 backdrop-blur-md
          ${isPlaying ? "bg-rose-600/80 hover:bg-rose-600" : "bg-rose-500 animate-pulse hover:scale-110"}`}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Music className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>
    </div>
  );
}
