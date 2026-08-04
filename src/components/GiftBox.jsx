import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { useState } from "react";

export default function GiftBox({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onOpen?.();
    }, 900);
  };

  return (
    <div className="flex flex-col items-center">

      {/* Floating Hearts */}

      {opened && (
        <div className="absolute pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-400 text-2xl"
              initial={{
                opacity: 1,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1.3,
                x: (Math.random() - 0.5) * 250,
                y: -200 - Math.random() * 80,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      <motion.button
        onClick={handleClick}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: .95,
        }}
        animate={
          opened
            ? {
                scale: [1, 1.15, 1],
              }
            : {
                y: [0, -12, 0],
              }
        }
        transition={{
          duration: 2,
          repeat: opened ? 0 : Infinity,
        }}
        className="relative"
      >

        {/* Glow */}

        <div className="absolute inset-0 rounded-full blur-3xl bg-pink-500/30 scale-150" />

        {/* Lid */}

        <motion.div
          animate={
            opened
              ? {
                  rotateX: -120,
                  y: -30,
                }
              : {}
          }
          transition={{
            duration: .7,
          }}
          className="
          absolute
          -top-3
          left-0
          w-40
          h-10
          rounded-xl
          bg-gradient-to-r
          from-pink-500
          via-fuchsia-500
          to-violet-600
          z-20
          origin-bottom
          "
        />

        {/* Box */}

        <div
          className="
          relative
          w-40
          h-40
          rounded-2xl
          bg-gradient-to-br
          from-pink-500
          via-fuchsia-600
          to-violet-700
          shadow-[0_0_70px_rgba(236,72,153,.45)]
          overflow-hidden
          "
        >
          {/* Ribbon */}

          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-full bg-white/40" />

          <div className="absolute top-1/2 left-0 -translate-y-1/2 h-4 w-full bg-white/40" />

          {/* Gift Icon */}

          <div className="absolute inset-0 flex items-center justify-center">
            <Gift
              size={60}
              className="text-white drop-shadow-xl"
            />
          </div>
        </div>
      </motion.button>

      <motion.p
        animate={{
          opacity: [1, .5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-8 text-pink-300 tracking-widest uppercase text-sm"
      >
        Tap the Gift
      </motion.p>

    </div>
  );
}