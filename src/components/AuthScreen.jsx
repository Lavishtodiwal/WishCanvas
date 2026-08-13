import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthScreen({ onUnlock }) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const validAnswers = [
    "timo",
    "bhoot",
    "ghost",
    "daring girl",
    "daring",
    "aalsi",
  ];

  const checkAnswer = () => {
    if (validAnswers.includes(answer.trim().toLowerCase())) {
      onUnlock();
    } else {
      setError(
        "Hmm... nice try 😏 But I don't think that's what I call you."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#09090F] via-[#111827] to-[#050816] flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-pink-500/20 blur-[180px]" />

      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-violet-500/20 blur-[180px]" />

      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

      {/* Auth Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-md rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl"
      >

        {/* Lock */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 border border-pink-400/20 text-3xl"
        >
          🔒
        </motion.div>

        <h1 className="text-3xl font-bold text-white text-center">
          A Little Something For You
        </h1>

        <p className="mt-5 text-center text-white/65 leading-6">
          I made this little surprise especially for you.
          <br />
          But obviously, I can't just let anyone walk in. 😌
        </p>

        <p className="mt-5 text-center text-white/70">
          So before you continue...
        </p>

        <p className="mt-4 text-center text-pink-300 font-medium">
          💭 What do I usually call you?
        </p>

        {/* Input */}
        <input
          type="password"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setError("");
          }}
          placeholder="Think carefully... 👀"
          autoComplete="off"
          className="mt-8 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition"
        />

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-red-400 text-center text-sm"
          >
            {error}
          </motion.p>
        )}

        {/* Button */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="mt-8 w-full rounded-full bg-gradient-to-r from-pink-500 to-violet-600 py-3 text-white font-semibold shadow-lg shadow-pink-500/20"
        >
          Unlock My Surprise 🤪
        </motion.button>

        <p className="mt-5 text-center text-xs text-white/30">
          No cheating... you should know this one. 👀
        </p>

      </motion.form>
    </section>
  );
}