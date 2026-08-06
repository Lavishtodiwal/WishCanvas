import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LETTER = `Dear,

Happy Birthday! 🎂

Today is all about you.

Instead of sending another birthday message...

I wanted to create something
that you could remember.

Every click.
Every animation.
Every little detail.

Was created with one hope...

To make you smile.

Maybe this isn't the biggest gift.

Maybe it isn't the most expensive one.

But it's definitely one of a kind.

Because this little website
exists for one reason...

You.

I hope today brings you
lots of laughter,
beautiful memories,
and countless reasons to smile.

And if, even for a moment,
this made your day a little brighter...

then every hour spent creating it
was completely worth it.

Never stop dreaming.

Never stop believing in yourself.

And please...

keep that beautiful smile.

Happy Birthday once again. ❤️`;
export default function LetterSection() {
  const [text, setText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const started = useRef(false);
  const floatingItems = ["🎈", "🎉", "🎊", "✨", "⭐", "🎁", "🎂", "💖"];

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

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: "-30px",
          }}
          animate={{
            y: [-20, -850],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 60 - 30],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 9 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          {floatingItems[Math.floor(Math.random() * floatingItems.length)]}
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
            15 August 2026
          </p>

          <div
            className="whitespace-pre-wrap leading-5 text-[18px] font-serif"
            style={{ fontFamily: "Caveat Brush" }}
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
              <p className="italic text-lg font" style={{ fontFamily: "Caveat Brush" }} >
                With lots of love,
              </p>

              <h3 className="text-3xl font-bold mt-2" style={{ fontFamily: "Caveat Brush" }} >
                Lavish Todiwal
              </h3>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}