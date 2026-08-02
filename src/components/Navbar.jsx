import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function EntryPage() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#050816] flex items-center justify-center">

      {/* Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140b2d] via-[#050816] to-black" />

      {/* Aurora */}
      <div className="absolute w-[700px] h-[700px] bg-pink-500/20 rounded-full blur-[180px] -top-32 -left-40 animate-pulse" />

      <div className="absolute w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[180px] bottom-0 right-0 animate-pulse delay-1000" />

      {/* Stars */}
      <div className="stars absolute inset-0"></div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: -100,
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-6"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: .3 }}
          className="text-6xl md:text-8xl font-bold text-white"
        >
          ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-8 text-3xl md:text-5xl font-semibold text-white"
        >
          I have something
          <br />
          <span className="text-pink-400">
            special for you...
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-gray-300 text-lg tracking-wide"
        >
          Scroll down to see the magic
        </motion.p>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-4 flex justify-center"
        >
          <ChevronDown
            size={40}
            className="text-pink-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}