import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import emoji from "../assets/emoji.gif";

export default function EntrySection() {
  const particles = Array.from({ length: 18 });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 text-white"
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
              y: [-20, -150],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>{" "}
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
            🎉
          </motion.div>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
        {/* Emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="mb-8"
        >
          <motion.img
            src={emoji}
            alt="Hi"
            animate={{
              y: [0, -6, 0],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="w-36 h-36 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,.18)]"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight"
        >
          Hey You 👋
        </motion.h1>

        {/* Text 1 */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-2xl leading-9 text-pink-200 font-medium"
        >
          Can I borrow
          <br />
          <span className="text-white font-bold">45 seconds</span>
          <br />
          of your day?
        </motion.p>

        {/* Text 2 */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-gray-300 leading-8"
        >
          I couldn't find the perfect gift...
          <br />
          so I made something instead.
        </motion.p>

        {/* Text 3 */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-pink-300 font-medium"
        >
          I hope it makes you smile. ❤️
        </motion.p>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 -translate-x-1/2 flex flex-col items-center"
      >
        <ChevronDown size={30} className="text-pink-400" />
        <p className="mt-1 text-xs tracking-[0.35em] uppercase text-pink-300">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}
