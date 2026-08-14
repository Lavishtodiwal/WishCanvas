import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GiftBox from "../components/GiftBox";

export default function SurpriseSection({ onComplete }) {
  const [stage, setStage] = useState("gift");

  const finalVideo =
    "https://res.cloudinary.com/dxaadzj0s/video/upload/v1786614081/51272_720x1280_rvy0mn.mp4";

  const handleVideoEnd = () => {
    setStage("thanks");

    // Thanks animation ke baad automatically next section
    setTimeout(() => {
      onComplete?.();
    }, 6500);
  };

  useEffect(() => {
    if (stage !== "video") return;

    const blockSaveShortcut = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "s"
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", blockSaveShortcut);

    return () =>
      window.removeEventListener(
        "keydown",
        blockSaveShortcut
      );
  }, [stage]);

  return (
    <section
      id="surprise"
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(217,70,239,0.12), transparent 60%)",
        }}
      />

      <AnimatePresence mode="wait">

        {/* ================= GIFT ================= */}

        {stage === "gift" && (
          <motion.div
            key="gift"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <GiftBox
              onOpen={() => setStage("intro")}
            />
          </motion.div>
        )}

        {/* ================= INTRO ================= */}

        {stage === "intro" && (
          <IntroScreen
            key="intro"
            onDone={() => setStage("video")}
          />
        )}

        {/* ================= VIDEO ================= */}

        {stage === "video" && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <video
              className="w-full h-full object-contain"
              autoPlay
              playsInline
              controls={false}
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              draggable={false}
              onContextMenu={(e) =>
                e.preventDefault()
              }
              onEnded={handleVideoEnd}
            >
              <source
                src={finalVideo}
                type="video/mp4"
              />
            </video>
          </motion.div>
        )}

        {/* ================= END MESSAGE ================= */}

        {stage === "thanks" && (
          <ThanksScreen
            key="thanks"
          />
        )}

      </AnimatePresence>
    </section>
  );
}


/* =====================================================
   INTRO SCREEN
===================================================== */

function IntroScreen({ onDone }) {
  const [canContinue, setCanContinue] =
    useState(false);

  useEffect(() => {
    const revealDelay = 3500;
    const readPause = 2500;

    const revealTimer = setTimeout(() => {
      setCanContinue(true);
    }, revealDelay);

    const autoTimer = setTimeout(() => {
      onDone();
    }, revealDelay + readPause);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(autoTimer);
    };
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        z-10
        w-full
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        px-6
        cursor-pointer
      "
      onClick={() =>
        canContinue && onDone()
      }
    >
      <div className="max-w-2xl text-center text-white">

        <motion.h2
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            text-4xl
            md:text-5xl
            font-bold
          "
        >
          One More Thing... ❤️
        </motion.h2>


        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
            mt-8
            text-lg
            leading-8
            text-white/80
          "
        >
          I know this can never replace
          a real moment...
          <br />

          but I wanted to create something
          <br />

          that comes straight from the heart.
        </motion.p>


        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
          className="
            mt-8
            text-pink-300
            text-lg
          "
        >
          This is just a small attempt...
          <br />

          to bring a beautiful memory
          <br />

          a little closer today.
        </motion.p>


        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3.5,
          }}
          className="
            mt-10
            text-white/60
            italic
          "
        >
          I hope it makes you smile. 🌸
        </motion.p>


        <AnimatePresence>
          {canContinue && (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="
                mt-10
                text-white/30
                text-sm
                tracking-wide
                uppercase
              "
            >
              tap to continue
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}


/* =====================================================
   THANKS SCREEN
===================================================== */

function ThanksScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        relative
        z-10
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        bg-black
        px-6
      "
    >

      <div className="text-center">

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            text-3xl
            md:text-5xl
            text-white
            font-light
          "
        >
          Keep Smiling.
        </motion.p>


        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
          className="
            mt-4
            text-3xl
            md:text-5xl
            text-white
            font-light
          "
        >
          Keep Dreaming.
        </motion.p>


        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.7,
          }}
          className="
            mt-4
            text-3xl
            md:text-5xl
            text-white
            font-light
          "
        >
          Keep Shining.
        </motion.p>


        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.8,
          }}
          className="
            mt-10
            text-lg
            md:text-2xl
            text-white/70
            leading-relaxed
          "
        >
          May life always
          <br />
          be kind to you.
        </motion.p>


        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 4,
          }}
          className="
            mt-12
            text-5xl
            md:text-7xl
            font-bold
            bg-gradient-to-r
            from-pink-400
            via-fuchsia-400
            to-violet-400
            bg-clip-text
            text-transparent
          "
        >
          Happy Birthday
        </motion.h1>


        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-6 text-6xl"
        >
          🌸
        </motion.div>

      </div>
    </motion.div>
  );
          }
