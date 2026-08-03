import { motion } from "framer-motion";
import { Gift, Sparkles, Volume2 } from "lucide-react";

export default function WelcomeScreen({ onStart }) {
  const stars = Array.from({ length: 35 });

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 bg-gradient-to-br from-[#06070F] via-[#111827] to-[#1B1034]">

      {/* Aurora Background */}
      <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-pink-500/20 blur-[140px] animate-pulse" />

      <div className="absolute bottom-0 -right-28 w-[350px] h-[350px] rounded-full bg-violet-500/20 blur-[140px] animate-pulse" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full bg-fuchsia-400/10 blur-[120px]" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-lg"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: "-20px",
            }}
            animate={{
              y: [-20, -700],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1,
          y: {
            repeat: Infinity,
            duration: 5,
          },
        }}
        className="relative z-20 w-full max-w-md rounded-[32px]
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_80px_rgba(236,72,153,.18)]
        px-8 py-10"
      >
        {/* Gift */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-pink-400/20 bg-white/5 backdrop-blur-xl"
        >
          <Gift
            size={58}
            className="text-pink-400 drop-shadow-[0_0_25px_rgba(236,72,153,.7)]"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="text-center text-4xl font-bold text-white leading-tight"
        >
          A Little Surprise
          <br />
          <span className="text-pink-400">
            Just For You ✨
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-7 text-center text-gray-300 leading-8"
        >
          I wanted to give you something
          <br />
          a little different this year.
          <br />
          <br />
          So instead of buying a gift...
          <br />
          <span className="text-pink-300 font-semibold">
            I made one.
          </span>
        </motion.p>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />

        {/* Audio Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .9 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-400"
        >
          <Volume2 size={17} />
          Best experienced with sound on
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={onStart}
          className="relative mt-8 w-full overflow-hidden rounded-full
          bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600
          py-4
          font-semibold
          text-white
          shadow-[0_0_30px_rgba(236,72,153,.45)]"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Sparkles size={18} />
            Open My Surprise
          </span>

          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_3s_linear_infinite]" />
        </motion.button>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-center text-xs tracking-wide text-gray-500"
        >
          Every scroll reveals another little surprise ❤️
        </motion.p>
      </motion.div>
    </section>
  );
}