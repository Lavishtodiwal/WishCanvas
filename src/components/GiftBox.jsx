import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { useState } from "react";

const particles = ["✨", "⭐", "💖", "🎉", "🎊", "🤍", "💫", "🥳"];

export default function GiftBox({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onOpen?.();
    }, 1000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">

      {/* Floating Sparkles */}

      {!opened &&
        [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl pointer-events-none"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 180],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random(),
              delay: i * 0.25,
            }}
          >
            ✨
          </motion.div>
        ))}

      {/* Opening Burst */}

      {opened && (
        <div className="absolute pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              initial={{
                opacity: 1,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1.4,
                x: (Math.random() - 0.5) * 350,
                y: -250 + Math.random() * -100,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              {particles[Math.floor(Math.random() * particles.length)]}
            </motion.div>
          ))}
        </div>
      )}

      <motion.button
        onClick={handleClick}
        whileHover={{
          scale: 1.05,
          rotate: -2,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={
          opened
            ? {
              scale: [1, 1.2, 0],
              rotate: [0, 8, -8, 0],
              opacity: [1, 1, 0],
            }
            : {
              y: [0, -12, 0],
              rotate: [-2, 2, -2],
            }
        }
        transition={{
          duration: opened ? 0.9 : 3,
          repeat: opened ? 0 : Infinity,
        }}
        className="relative"
      >
        {/* Animated Glow */}

        <motion.div
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full bg-pink-500/30 blur-[70px]"
        />

        {/* White Flash */}

        {opened && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: 5,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="absolute inset-0 rounded-full bg-white blur-3xl"
          />
        )}

        {/* Lid */}

        <motion.div
          animate={
            opened
              ? {
                rotateX: -120,
                y: -35,
              }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="absolute -top-3 left-0 h-10 w-40 origin-bottom rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 z-20"
        />

        {/* Gift Box */}

        <div
          className="
    relative
    w-44
    h-44
    rounded-[28px]
    bg-gradient-to-br
    from-[#ff6bb5]
    via-[#d946ef]
    to-[#7c3aed]
    shadow-[0_35px_80px_rgba(236,72,153,.45)]
    overflow-hidden
  "
        >

          {/* Shine */}

          <div
            className="
      absolute
      -left-12
      top-0
      h-full
      w-8
      rotate-12
      bg-white/20
      blur-md
    "
          />

          {/* Vertical Ribbon */}

          <div className="absolute left-1/2 top-0 h-full w-5 -translate-x-1/2 bg-white/40" />

          {/* Horizontal Ribbon */}

          <div className="absolute left-0 top-1/2 h-5 w-full -translate-y-1/2 bg-white/40" />

          {/* Gift Icon */}

          <div className="absolute inset-0 flex items-center justify-center">
            <Gift
              size={70}
              className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,.6)]"
            />
          </div>

        </div>
      </motion.button>

      {/* Bottom Text */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-10 text-center"
      >
        <h3 className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent">
          Your Final Surprise
        </h3>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-3 text-sm uppercase tracking-[0.35em] text-white/60"
        >
          Open When You're Ready ✨
        </motion.p>
      </motion.div>
    </div>
  );
}