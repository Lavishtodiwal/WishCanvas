import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GiftBox from "../components/GiftBox";

export default function SurpriseSection({ onComplete }) {
  const [stage, setStage] = useState("gift"); // gift -> intro -> video -> thanks
  const finalVideo =
    "https://res.cloudinary.com/dxaadzj0s/video/upload/v1786614081/51272_720x1280_rvy0mn.mp4";

  const handleVideoEnd = () => {
    setStage("thanks");
  };

  // Block common "save" shortcuts while the video is on screen.
  useEffect(() => {
    if (stage !== "video") return;
    const blockSaveShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", blockSaveShortcut);
    return () => window.removeEventListener("keydown", blockSaveShortcut);
  }, [stage]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
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
            <GiftBox onOpen={() => setStage("intro")} />
          </motion.div>
        )}

        {stage === "intro" && (
          <IntroScreen onDone={() => setStage("video")} />
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
              className="h-full w-auto max-w-full pointer-events-none"
              autoPlay
              playsInline
              controls={false}
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onEnded={handleVideoEnd}
            >
              <source src={finalVideo} type="video/mp4" />
            </video>
          </motion.div>
        )}

        {stage === "thanks" && (
          <ThanksScreen
            onReplay={() => setStage("gift")}
            onDone={() => {
              setStage("done");
              onComplete?.();
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function IntroScreen({ onDone }) {
  const [canContinue, setCanContinue] = useState(false);

  // Advance automatically a beat after the last line finishes,
  // but also let her tap through early if she's already read it.
  useEffect(() => {
    const revealDelay = 3500; // when the last line appears
    const readPause = 2500;   // time to actually read it
    const t = setTimeout(() => setCanContinue(true), revealDelay);
    const auto = setTimeout(onDone, revealDelay + readPause);
    return () => {
      clearTimeout(t);
      clearTimeout(auto);
    };
  }, [onDone]);

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black px-6 cursor-pointer"
      onClick={() => canContinue && onDone()}
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

        <AnimatePresence>
          {canContinue && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 text-white/30 text-sm tracking-wide uppercase"
            >
              tap to continue
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function ThanksScreen({ onReplay, onDone }) {
  useEffect(() => {
    const autoDone = setTimeout(onDone, 7600);
    return () => clearTimeout(autoDone);
  }, [onDone]);

  return (
    <motion.div
      key="thanks"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black px-6"
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

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6 }}
          onClick={onReplay}
          className="mt-10 text-white/30 text-xs tracking-widest uppercase underline underline-offset-4"
        >
          watch again
        </motion.button>
      </div>
    </motion.div>
  );
}