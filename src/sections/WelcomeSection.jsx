import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import emoji1 from "../assets/emoji4.gif";
import introVideo from "../assets/gift.mp4";

export default function WelcomeScreen({ onStart }) {
  const [playIntro, setPlayIntro] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleVideoEnd = () => {
    setPlayIntro(false);
    onStart();
  };

  const handleOpenGift = () => {
    setShowTransition(true);
  };

  return (
    <Wrapper>
      {/* Welcome Card */}
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card2">
          <motion.div
            animate={{
              scale: [2, 2.08, 2],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="icon"
          >
            <img src={emoji1} alt="emoji" />
          </motion.div>

          <h1>A Little Surprise... ✨</h1>

          <div className="content">
            <p>Hi! 👋</p>
            <p className="highlight">Congratulations! 🎉</p>
            <p>
              You've just unlocked
              <br />
              something made
              <br />
              especially for you.
            </p>
            <p>
              Every scroll...
              <br />
              reveals a new surprise.
            </p>
            <p>
              Every little detail
              <br />
              was created with care.
            </p>
            <p className="you">
              So...
              <br />
              enjoy the journey.
            </p>
            <p>
              And hopefully...
              <br />
              one more reason
              <br />
              to smile.
            </p>
            <p className="highlight">Ready? ❤️</p>
          </div>

          <div className="btn-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenGift}
            >
              Open Your Gift 🎁
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Intro Video */}
      <AnimatePresence>
        {playIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <video
              className="h-[100vh] w-auto object-contain pointer-events-none"
              autoPlay
              playsInline
              controls={false}
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onEnded={handleVideoEnd}
            >
              <source src={introVideo} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTransition && (
          <TransitionScreen
            onDone={() => {
              setShowTransition(false);
              setPlayIntro(true);
            }}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

function TransitionScreen({ onDone }) {
  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    const revealDelay = 1800; // when the last line appears
    const readPause = 2200;   // time to actually read it
    const t = setTimeout(() => setCanContinue(true), revealDelay);
    const auto = setTimeout(onDone, revealDelay + readPause);
    return () => {
      clearTimeout(t);
      clearTimeout(auto);
    };
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black px-6 cursor-pointer"
      onClick={() => canContinue && onDone()}
    >
      <div className="text-center max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Before We Begin... 😇
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-lg md:text-xl leading-8 text-white/80"
        >
          Every smile...
          <br />
          starts with a little surprise.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8 text-pink-300 text-xl font-medium"
        >
          Here's something...
          <br />
          just for you.
        </motion.p>

        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-12 text-5xl"
        >
          🎁✨
        </motion.div>

        <AnimatePresence>
          {canContinue && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-white/30 text-xs tracking-widest uppercase"
            >
              tap to continue
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: #07070d;

  .card {
    width: 360px;
    background-image: linear-gradient(
      163deg,
      #ff4fae,
      #8b5cf6,
      #3b82f6
    );
    border-radius: 24px;
    padding: 2px;
    transition: 0.4s;
  }

  .card:hover {
    box-shadow: 0 0 45px rgba(255, 79, 174, 0.35);
  }

  .card2 {
    background: #111114;
    border-radius: 22px;
    padding: 28px 24px;
    text-align: center;
  }

  .icon {
    width: 70px;
    height: 70px;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h1 {
    color: white;
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .content {
    color: #cfcfcf;
    line-height: 1.8;
    font-size: 15px;
  }

  .highlight {
    color: #ff71b8;
    font-weight: 700;
    font-size: 18px;
    margin-top: 16px;
  }

  /* Wrapper that hosts the spinning border + glow behind the button */
  .btn-wrap {
    position: relative;
    margin-top: 30px;
    border-radius: 999px;
    padding: 2px;
    overflow: hidden;
    isolation: isolate;
  }

  .btn-wrap::before {
    content: "";
    position: absolute;
    inset: -2px;
    z-index: 0;
    background: conic-gradient(
      from 0deg,
      #ff4fae,
      #8b5cf6,
      #3b82f6,
      #ff4fae
    );
    animation: spin-border 3s linear infinite;
  }

  @keyframes spin-border {
    to {
      transform: rotate(360deg);
    }
  }

  button {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 999px;
    background: linear-gradient(135deg, #ff4fae, #8b5cf6);
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    animation: glow-pulse 2s ease-in-out infinite;
  }

  @keyframes glow-pulse {
    0%,
    100% {
      box-shadow: 0 0 15px rgba(255, 79, 174, 0.4),
        0 0 5px rgba(139, 92, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 79, 174, 0.8),
        0 0 15px rgba(139, 92, 246, 0.6);
    }
  }

  @media (max-width: 420px) {
    .card {
      width: 100%;
    }

    .card2 {
      padding: 24px 20px;
    }
  }
`;
