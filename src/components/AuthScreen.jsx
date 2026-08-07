import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthScreen({ onUnlock }) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const checkAnswer = () => {
    const validAnswers = [
      "timo",
      "bhoot",
      "ghost",
      "daring girl",
      "daring",
      "aalsi"
    ];

    if (validAnswers.includes(answer.trim().toLowerCase())) {
      onUnlock();
    } else {
      setError("Oops! That's not the answer. 😊");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#09090F] via-[#111827] to-[#050816] flex items-center justify-center">
     <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-pink-500/20 blur-[180px]" />
<div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-violet-500/20 blur-[180px]" />
<div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />
      <div className="w-full max-w-md rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">

        <h1 className="text-3xl font-bold text-white text-center">
          🔒 Private Surprise
        </h1>

        <p className="mt-6 text-center text-white/70">
          Before we begin...
        </p>

        <p className="mt-4 text-center text-pink-300">
          What do I usually call you?
        </p>

        <input
          type="password"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setError("");
          }}
          placeholder="Your answer..."
          className="mt-8 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none"
        />

        {error && (
          <p className="mt-3 text-red-400 text-center">
            {error}
          </p>
        )}

        <motion.button
          whileTap={{ scale: .95 }}
          whileHover={{ scale: 1.03 }}
          onClick={checkAnswer}
          className="mt-8 w-full rounded-full bg-gradient-to-r from-pink-500 to-violet-600 py-3 text-white font-semibold"
        >
          Unlock 🤪
        </motion.button>

      </div>
    </section>
  );
}