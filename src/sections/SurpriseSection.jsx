import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GiftBox from "../components/GiftBox";
import Fireworks from "../components/Fireworks";
import BirthdayCake from "../components/BirthdayCake";
import FinalMessage from "../components/FinalMessage";

export default function SurpriseSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="surprise"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 text-white"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#09090F] via-[#111827] to-[#09090F]" />

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-violet-500/20 blur-[120px]" />

      {/* Heading */}

      {!opened && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-20 text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-pink-300 text-sm">
            One Last Surprise
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            I've saved the best
            <br />
            for the very end.
          </h2>

          <p className="mt-6 text-white/70 max-w-md mx-auto leading-7">
            Tap the gift below...
            <br />
            and let the magic begin.
          </p>
        </motion.div>
      )}

      {/* Gift */}

      <div className="relative z-20">
        <GiftBox onOpen={() => setOpened(true)} />
      </div>

      {/* Celebration */}

      <AnimatePresence>
        {opened && (
          <>
            <Fireworks />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 80,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="fixed inset-0 z-40 flex items-center justify-center px-5"
            >
              <BirthdayCake />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 5,
              }}
              className="fixed bottom-10 left-0 right-0 z-50 flex justify-center"
            >
              <FinalMessage />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}