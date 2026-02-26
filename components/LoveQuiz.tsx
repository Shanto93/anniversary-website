"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export default function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Customize these questions with your actual memories!
  const questions = [
    {
      question:
        "Out of all our beautiful adventures, which trip holds the most special place in our hearts?",
      options: ["Saint Martin", "Debotakhum", "Potenga", "Bandorban"],
      answer: 0,
    },
    {
      question: "What is my absolute favorite thing about you?",
      options: [
        "Your cooking",
        "Your beautiful smile",
        "Your unconditional care",
        "Everything",
      ],
      answer: 3,
    },
    {
      question: "On what magical date did our beautiful story first begin?",
      options: ["March 7th", "March 8th", "March 9th", "None of the above"],
      answer: 2,
    },
    {
      question:
        "And on which beautiful day did you say 'Kobul' and officially become my wife?",
      options: [
        "February 14, 2025",
        "February 27, 2025",
        "March 1, 2025",
        "January 30, 2025",
      ],
      answer: 1,
    },
    {
      question: "Who fell in love first?",
      options: [
        "Shanto",
        "Sanjida",
        "It happened at the exact same time",
        "Still debating this!",
      ],
      answer: 1,
    },
  ];

  const handleAnswerOptionClick = (index: number) => {
    setSelectedAnswer(index);

    // Check if correct
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Wait a second before moving to the next question so she sees what she clicked
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 800);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <section className="py-24 bg-slate-950 px-4 flex justify-center relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl w-full bg-slate-900/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative z-10 min-h-[450px] flex flex-col justify-center">
        {showScore ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Sparkles className="w-16 h-16 text-rose-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl text-rose-300 font-serif mb-4">
              You scored {score} out of {questions.length}!
            </h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
              {score === questions.length
                ? "Perfect score! But then again, you've always paid such beautiful attention to us. I love you endlessly."
                : "You might have missed one, but you never miss a chance to make me smile. You are my greatest prize."}
            </p>
            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-medium transition-colors duration-300 shadow-lg shadow-rose-600/30"
            >
              Play Again ❤️
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl text-rose-300 font-serif">
                Our Love Story Quiz
              </h2>
              <span className="text-rose-500/50 font-medium text-sm border border-rose-500/20 px-3 py-1 rounded-full">
                Question {currentQuestion + 1} / {questions.length}
              </span>
            </div>

            <div className="mb-10">
              <h3 className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                {questions[currentQuestion].question}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                  disabled={selectedAnswer !== null} // Prevent clicking multiple times
                  className={`
                    text-left p-4 md:p-5 rounded-2xl border transition-all duration-300
                    ${
                      selectedAnswer === null
                        ? "bg-slate-800/50 border-white/5 hover:border-rose-400/50 hover:bg-slate-800 text-slate-300"
                        : selectedAnswer === index
                          ? index === questions[currentQuestion].answer
                            ? "bg-green-500/20 border-green-500/50 text-green-200" // Correct answer styling
                            : "bg-rose-500/20 border-rose-500/50 text-rose-200" // Wrong answer styling
                          : index === questions[currentQuestion].answer
                            ? "bg-green-500/20 border-green-500/50 text-green-200" // Show correct answer if they guessed wrong
                            : "bg-slate-800/50 border-white/5 opacity-50 text-slate-500" // Fade out other options
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* Add a little heart icon if selected */}
                    {selectedAnswer === index && (
                      <Heart className="w-4 h-4 fill-current" />
                    )}
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
