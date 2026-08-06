import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import emoji from "../assets/emoji1.gif";
import emoji1 from "../assets/emoji3.gif";

export default function FinalSection() {
  const particles = Array.from({ length: 24 });
  const floatingItems = ["🎈", "🎉", "🎊", "✨", "⭐", "🎁", "🎂", "💖"];
  return (
    <section
      id="final"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090F] via-[#111827] to-[#050816]" />

      {/* Aurora Glow */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-pink-500/20 blur-[180px]" />
      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-violet-500/20 blur-[180px]" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -180],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-[0_0_80px_rgba(236,72,153,.15)]"
      >
        {/* Icon */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full overflow-hidden bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 p-1 shadow-[0_0_50px_rgba(236,72,153,.5)]"
        >
          <img
            src={emoji}
            alt="Birthday Dance"
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center uppercase tracking-[0.45em] text-pink-300 text-sm"
        >
          One Last Thing...
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-5 text-center text-5xl md:text-6xl font-bold"
        >
          Happy Birthday 🎉
        </motion.h1>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 space-y-5 text-center text-lg leading-9 text-gray-300"
        >
          <p>
            Maybe...
            <br />
            years from now,
            <br />
            you won't remember
            <br />
            every word written here.
          </p>

          <p>
            But I hope
            <br />
            one little thing stays...
            <br />
            the smile
            <br />
            you had while reading it.
          </p>

          <p className="text-pink-300 font-medium">
            Because honestly...
            <br />
            imagining your reaction
            <br />
            was my favourite part.
            <br />
            of creating this
            😊
          </p>

          <p>
            Some gifts
            <br />
            come in beautiful boxes.
          </p>

          <p>
            Mine came
            <br />
            with HTML,
            <br />
            CSS,
            <br />
            JavaScript,
            <br />
            and lots of coffee.
            ☕
          </p>

          <p className="text-xl font-semibold text-white">
            Promise me one thing...
          </p>

          <p className="text-pink-200">
            Whenever life gets busy...
            <br />
            don't forget
            <br />
            to smile.
            ✨
          </p>

        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1.5 }}
          className="mx-auto my-10 h-px w-40 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
        />

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-5xl justify-center flex items-center gap-2 text-pink-400"
          >
            <img
              src={emoji1}
              alt="Birthday Dance"
              className="h-18 w-18 rounded object-cover"
            />
          </motion.div>

          <p className="mt-8 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-3xl font-bold text-transparent">
            A Little Surprise, Just for You 💖
          </p>

          <p className="mt-2 text-white/60 italic">
            with best wishes,
          </p>

          <p className="text-lg font-semibold text-white">
            Lavish Todiwal
          </p>
        </motion.div>
      </motion.div>
      
    </section>
  );
}