import { motion } from 'framer-motion'

function FloatingStars({ count = 24 }) {
  const stars = Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    top: `${(index * 19) % 100}%`,
    delay: (index % 8) * 0.3,
    duration: 4 + (index % 5),
  }))

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.9)]"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.25, 0.8] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity }}
        />
      ))}
    </div>
  )
}

export default FloatingStars