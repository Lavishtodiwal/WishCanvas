import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function EntrySection() {
  const particles = Array.from({ length: 18 });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-8 text-center text-white"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -120],
              opacity: [0, 1, 0],
              scale: [0.5, 1.4, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          className="text-5xl mb-8"
        >
          ✨
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-bold leading-tight"
        >
          Happy Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-lg text-pink-200 leading-8"
        >
          There's something
          <br />
          waiting for you...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 text-base text-gray-300 leading-7"
        >
          Not just a website,
          <br />
          but a little piece of time
          <br />
          I wanted to gift you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-10 text-pink-300 font-medium tracking-wide"
        >
          Keep scrolling...
          <br />
          The best part is still ahead.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <ChevronDown size={28} className="text-pink-400" />
        <p className="text-sm tracking-widest uppercase text-pink-300">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}