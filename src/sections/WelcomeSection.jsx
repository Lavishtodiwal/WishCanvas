import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

export default function WelcomeScreen({ onStart }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#09090F] via-[#17172A] to-[#0F172A]">
      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-pink-500/20 rounded-full blur-[180px]" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[180px]" />

      {/* Floating Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-[3px] h-[3px] bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Main Card */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-[90%] max-w-xl rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-10 text-center shadow-2xl"
      >
        <motion.div
          animate={{
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex justify-center mb-6"
        >
          <Gift
            size={75}
            className="text-pink-400 drop-shadow-[0_0_30px_rgba(255,0,150,.8)]"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold text-white"
        >
          Welcome ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-300 text-lg leading-relaxed"
        >
          Someone spent time creating something
          <span className="text-pink-400 font-semibold"> very special </span>
          just for you.
          <br />
          <br />
          Every scroll hides a little surprise...
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 30px rgba(236,72,153,.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold flex items-center gap-3 mx-auto"
        >
          <Sparkles size={20} />
          Begin the Journey
        </motion.button>
      </motion.div>
    </section>
  );
}
