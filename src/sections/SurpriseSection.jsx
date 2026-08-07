import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GiftBox from "../components/GiftBox";
import finalVideo from "../assets/intro.mp4";

export default function SurpriseSection() {
  const [stage, setStage] = useState("gift"); // gift -> intro -> video -> thanks
  const [showThanks, setShowThanks] = useState(false);

  const handleVideoEnd = () => {
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
      setStage("gift");
    }, 10000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Soft ambient backdrop, keeps the stage feeling intentional rather than a flat black void */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(217,70,239,0.12), transparent 60%)",
        }}
      />

      <AnimatePresence mode="wait">
        {stage === "gift" && (
          <motion.div
            key="gift"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GiftBox
              onOpen={() => {
                setStage("intro");
                setTimeout(() => setStage("video"), 5000);
              }}
            />
          </motion.div>
        )}

        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black px-6"
          >
            <div className="max-w-2xl text-center text-white">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold"
              >
                One More Thing... ❤️
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-lg leading-8 text-white/80"
              >
                I know this can never replace a real moment...
                <br />
                but I wanted to create something
                <br />
                that comes straight from the heart.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-8 text-pink-300 text-lg"
              >
                This is just a small attempt...
                <br />
                to bring a beautiful memory
                <br />
                a little closer today.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="mt-10 text-white/60 italic"
              >
                I hope it makes you smile. 🌸
              </motion.p>
            </div>
          </motion.div>
        )}

        {stage === "video" && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <video
              className="h-full w-auto max-w-full"
              autoPlay
              playsInline
              controls={false}
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              onEnded={handleVideoEnd}
            >
              <source src={finalVideo} type="video/mp4" />
            </video>

            <AnimatePresence>
              {showThanks && (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black px-6"
                >
                  <div className="text-center">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-5xl text-white font-light"
                    >
                      Keep Smiling.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="mt-4 text-3xl md:text-5xl text-white font-light"
                    >
                      Keep Dreaming.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 }}
                      className="mt-4 text-3xl md:text-5xl text-white font-light"
                    >
                      Keep Shining.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.8 }}
                      className="mt-10 text-lg md:text-2xl text-white/70 leading-relaxed"
                    >
                      May life always
                      <br />
                      be kind to you.
                    </motion.p>

                    <motion.h1
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 4 }}
                      className="mt-12 text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent"
                    >
                      Happy Birthday
                    </motion.h1>

                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="mt-6 text-6xl"
                    >
                      🌸
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5 }}
                      className="mt-8 text-white/40 tracking-[0.35em] uppercase"
                    >
                      — Lavish Todiwal
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}