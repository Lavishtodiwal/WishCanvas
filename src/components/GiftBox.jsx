import { motion, useReducedMotion } from "framer-motion";
import { Gift } from "lucide-react";
import { useMemo, useState } from "react";

const GOLD = "#f4d675";
const GOLD_DARK = "#c9a227";
const BOX_A = "#ff6bb5";
const BOX_B = "#d946ef";
const BOX_C = "#7c3aed";

const CONFETTI_COLORS = ["#f4d675", "#ff6bb5", "#d946ef", "#a78bfa", "#ffffff"];
const SPARKLE_EMOJI = ["✨", "⭐", "💖", "💫"];

function makeConfetti(n) {
  return [...Array(n)].map((_, i) => {
    const angle = (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.6;
    const dist = 90 + Math.random() * 140;
    return {
      id: i,
      dx: Math.cos(angle) * dist,
      upY: -(120 + Math.random() * 140),
      fallY: 40 + Math.random() * 140,
      rotate: (Math.random() > 0.5 ? 1 : -1) * (280 + Math.random() * 360),
      duration: 1.3 + Math.random() * 0.7,
      delay: Math.random() * 0.12,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      shape: i % 3 === 0 ? "circle" : i % 3 === 1 ? "rect" : "emoji",
      emoji: SPARKLE_EMOJI[i % SPARKLE_EMOJI.length],
      size: 6 + Math.random() * 6,
    };
  });
}

export default function GiftBox({ onOpen }) {
  const [opened, setOpened] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const confetti = useMemo(() => makeConfetti(26), []);

  const handleClick = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => {
      onOpen?.();
    }, 1400);
  };

  const idleFloat = prefersReducedMotion
    ? {}
    : { y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Stage glow backdrop */}
      <div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle, rgba(217,70,239,0.18) 0%, rgba(124,58,237,0.10) 45%, transparent 70%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient orbiting sparkles */}
      {!opened &&
        !prefersReducedMotion &&
        [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: `${18 + Math.random() * 64}%`,
              top: `${8 + Math.random() * 64}%`,
              fontSize: 14 + Math.random() * 10,
            }}
            animate={{
              y: [0, -14, 0],
              opacity: [0.25, 1, 0.25],
              rotate: [0, 180],
              scale: [1, 1.25, 1],
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

      {/* Confetti burst */}
      {opened && (
        <div className="absolute" style={{ pointerEvents: "none" }}>
          {confetti.map((c) => (
            <motion.div
              key={c.id}
              className="absolute"
              style={{
                left: 0,
                top: 0,
                width: c.shape === "rect" ? c.size * 0.7 : c.size,
                height: c.shape === "rect" ? c.size * 1.6 : c.size,
                borderRadius: c.shape === "circle" ? "50%" : "2px",
                background: c.shape === "emoji" ? "transparent" : c.color,
                fontSize: c.size + 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              animate={{
                x: [0, c.dx * 0.6, c.dx],
                y: [0, c.upY, c.fallY],
                rotate: [0, c.rotate * 0.6, c.rotate],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: c.duration,
                delay: c.delay,
                times: [0, 0.4, 1],
                ease: ["easeOut", "easeIn"],
              }}
            >
              {c.shape === "emoji" ? c.emoji : null}
            </motion.div>
          ))}
        </div>
      )}

      {/* Ground shadow, keeps the box feeling grounded */}
      <motion.div
        className="absolute"
        style={{
          bottom: 6,
          width: 150,
          height: 26,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(20,10,30,0.45) 0%, transparent 75%)",
          filter: "blur(4px)",
        }}
        animate={
          opened
            ? { opacity: 0, scale: 0.7 }
            : prefersReducedMotion
            ? { opacity: 0.6 }
            : { opacity: [0.4, 0.65, 0.4], scale: [1, 1.08, 1] }
        }
        transition={{ duration: opened ? 0.6 : 3, repeat: opened ? 0 : Infinity }}
      />

      <div style={{ perspective: 900 }} className="relative">
        <motion.button
          onClick={handleClick}
          aria-label={opened ? "Gift opened" : "Open your gift"}
          whileHover={opened ? {} : { scale: 1.04, rotate: -1.5 }}
          whileTap={opened ? {} : { scale: 0.96 }}
          animate={
            opened
              ? { scale: [1, 1.15, 0.85, 0], opacity: [1, 1, 1, 0] }
              : idleFloat
          }
          transition={{
            duration: opened ? 1.0 : 3,
            repeat: opened ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="relative block focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-300/60 rounded-3xl"
          style={{ width: 176, height: 176 }}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              inset: -10,
              background: "rgba(236,72,153,0.35)",
              filter: "blur(60px)",
            }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.5 }
                : { scale: [1, 1.3, 1], opacity: [0.35, 0.75, 0.35] }
            }
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Opening flash */}
          {opened && (
            <motion.div
              className="absolute rounded-full"
              style={{ inset: 0, background: "#ffffff", filter: "blur(40px)" }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 6, opacity: 0 }}
              transition={{ duration: 0.9 }}
            />
          )}

          {/* Light beam escaping the box */}
          {opened && (
            <motion.div
              className="absolute"
              style={{
                left: "50%",
                bottom: "45%",
                width: 4,
                height: 220,
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.9), transparent)",
                transform: "translateX(-50%)",
                transformOrigin: "bottom center",
              }}
              initial={{ scaleY: 0, opacity: 0, scaleX: 1 }}
              animate={{ scaleY: 1, opacity: [0, 1, 0], scaleX: 14 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          )}

          {/* Box body */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: 0,
              bottom: 0,
              width: 176,
              height: 132,
              borderRadius: 20,
              background: `linear-gradient(135deg, ${BOX_A} 0%, ${BOX_B} 55%, ${BOX_C} 100%)`,
              boxShadow:
                "0 30px 60px rgba(124,58,237,0.35), inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -14px 24px rgba(0,0,0,0.18)",
            }}
          >
            {/* Satin sheen sweep */}
            {!opened && (
              <motion.div
                className="absolute"
                style={{
                  top: -20,
                  left: -60,
                  width: 60,
                  height: 220,
                  background:
                    "linear-gradient(100deg, transparent, rgba(255,255,255,0.35), transparent)",
                }}
                animate={{ left: ["-25%", "130%"] }}
                transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4 }}
              />
            )}

            {/* Fabric fold shading under ribbons */}
            <div
              className="absolute left-1/2"
              style={{
                top: 0,
                bottom: 0,
                width: 34,
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.12), rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.55) 60%, rgba(0,0,0,0.12))",
              }}
            />
            <div
              className="absolute top-1/2 left-0 right-0"
              style={{
                height: 34,
                transform: "translateY(-50%)",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.12), rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.55) 60%, rgba(0,0,0,0.12))",
              }}
            />

            {/* Gift icon peeking through gap */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Gift
                size={56}
                color="#ffffff"
                style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.6))" }}
              />
            </div>
          </div>

          {/* Lid, flips open on a 3D hinge */}
          <motion.div
            className="absolute"
            style={{
              left: 0,
              top: 26,
              width: 176,
              height: 44,
              borderRadius: 16,
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
              background: `linear-gradient(135deg, ${BOX_A}, ${BOX_C})`,
              boxShadow:
                "0 12px 24px rgba(124,58,237,0.4), inset 0 2px 4px rgba(255,255,255,0.4)",
              zIndex: 20,
            }}
            animate={
              opened
                ? { rotateX: -140, y: -46, opacity: [1, 1, 0] }
                : { rotateX: 0, y: 0 }
            }
            transition={{ duration: 0.7, ease: "easeIn" }}
          >
            <div
              className="absolute left-1/2"
              style={{
                top: 0,
                bottom: 0,
                width: 30,
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.12), rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.6) 55%, rgba(0,0,0,0.12))",
              }}
            />
          </motion.div>

          {/* Bow: two satin loops, a knot, and hanging tails */}
          {!opened && (
            <div
              className="absolute"
              style={{ left: "50%", top: 6, transform: "translateX(-50%)", zIndex: 30 }}
            >
              {/* left loop */}
              <div
                style={{
                  position: "absolute",
                  left: -34,
                  top: 6,
                  width: 34,
                  height: 24,
                  borderRadius: "60% 40% 50% 50% / 70% 70% 30% 30%",
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
                  transform: "rotate(-18deg)",
                  boxShadow: "inset 0 -3px 5px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
              {/* right loop */}
              <div
                style={{
                  position: "absolute",
                  left: 2,
                  top: 6,
                  width: 34,
                  height: 24,
                  borderRadius: "40% 60% 50% 50% / 70% 70% 30% 30%",
                  background: `linear-gradient(225deg, ${GOLD}, ${GOLD_DARK})`,
                  transform: "rotate(18deg)",
                  boxShadow: "inset 0 -3px 5px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
              {/* tails */}
              <div
                style={{
                  position: "absolute",
                  left: -8,
                  top: 16,
                  width: 10,
                  height: 26,
                  background: `linear-gradient(180deg, ${GOLD}, ${GOLD_DARK})`,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
                  transform: "rotate(-6deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 4,
                  top: 16,
                  width: 10,
                  height: 26,
                  background: `linear-gradient(180deg, ${GOLD}, ${GOLD_DARK})`,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
                  transform: "rotate(6deg)",
                }}
              />
              {/* knot */}
              <div
                style={{
                  position: "absolute",
                  left: -8,
                  top: 8,
                  width: 16,
                  height: 16,
                  borderRadius: "45%",
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
                }}
              />
            </div>
          )}
        </motion.button>
      </div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-10 text-center"
      >
        <h3
          className="font-serif font-bold text-2xl"
          style={{
            backgroundImage: "linear-gradient(90deg, #fbcfe8, #f0abfc, #ddd6fe)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Your Final Surprise
        </h3>

        <motion.p
          animate={
            prefersReducedMotion ? { opacity: 0.75 } : { opacity: [0.4, 1, 0.4] }
          }
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-3 text-sm uppercase tracking-[0.3em]"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Open When You&apos;re Ready ✨
        </motion.p>
      </motion.div>
    </div>
  );
}