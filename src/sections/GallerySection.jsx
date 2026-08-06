import { motion } from "framer-motion";
import MemoryCard from "../components/MemoryCard";

const particles = Array.from({ length: 18 });

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative min-h-screen overflow-hidden py-24 px-6 text-white"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -150],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: "-20px",
            }}
            animate={{
              y: [-20, -700],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            🎉
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <h2 className="relative z-10 mb-12 text-center text-4xl md:text-5xl font-bold">
        Beautiful Memories ✨
      </h2>

      {/* Carousel */}
<div className="relative z-10 flex justify-center">
  <MemoryCard />
</div>
    </section>
  );
}