import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LETTER = `Dear,

Happy Birthday! 🎂

Today is your day.

And instead of sending just another birthday message...

I wanted to create something that would stay with you a little longer.

Every animation.
Every colour.
Every little detail.

Was chosen while thinking about one person...

You.

Maybe this isn't the biggest gift.

Maybe it isn't the most expensive one either.

But I can promise you one thing—

No one else in this world has this website.

It exists only because you do.

I hope today gives you countless reasons to smile.

And if this tiny website manages to make you smile even once...

then I'll consider it my best project ever.

Happy Birthday once again.

Stay happy.
Stay healthy.
Stay exactly the way you are.`;

export default function LetterSection() {
  const [text, setText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;

    const timer = setInterval(() => {
      index++;

      setText(LETTER.slice(0, index));

      if (index >= LETTER.length) {
        clearInterval(timer);
      }
    }, 28);

    return () => clearInterval(timer);
  }, [startTyping]);

  return (
    <section
      id="letter"
      className="relative min-h-screen flex items-center justify-center px-5 py-14 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Floating Sparkles */}

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -120],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Letter */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          rotate: -4,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: -1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        onViewportEnter={() => {
          if (!started.current) {
            started.current = true;
            setStartTyping(true);
          }
        }}
        transition={{
          duration: 1,
        }}
        className="
        relative
        z-10
        w-full
        max-w-2xl
        rounded-xl
        bg-[#F7EFD8]
        p-8
        md:p-12
        shadow-[0_30px_70px_rgba(0,0,0,.4)]
        border
        border-[#d7c4a4]
        text-[#3d2b1f]
        "
      >
        {/* Paper Texture */}

        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[length:18px_18px]" />

        <div className="relative">

          <div className="flex items-center justify-between mb-3">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              💌 A Letter For You
            </h2>

            <Sparkles className="text-pink-500" />
          </div>

          <p className="text-right text-sm italic opacity-70 mb-4">
            4 August 2026
          </p>

          <div
            className="whitespace-pre-wrap leading-5 text-[18px] font-serif"
            style={{  fontFamily: "Caveat Brush" }} 
          >
            {text}

            {text.length < LETTER.length && (
              <span className="animate-pulse font-bold">|</span>
            )}
          </div>

          {text.length === LETTER.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="mt-5 text-right"
            >
              <p className="italic text-lg font" style={{  fontFamily: "Caveat Brush" }} >
                With lots of love,
              </p>

              <h3 className="text-3xl font-bold mt-2" style={{  fontFamily: "Caveat Brush" }} >
                Lavish Todiwal❤️
              </h3>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}