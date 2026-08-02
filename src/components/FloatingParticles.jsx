import { motion } from 'framer-motion'

function FloatingParticles({ count = 14 }) {
  const particles = Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${(index * 29 + 11) % 100}%`,
    top: `${(index * 13 + 7) % 100}%`,
    delay: (index % 6) * 0.5,
  }))

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-2 w-2 rounded-full bg-cyan-300/50 blur-[1px]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -26, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: 7, delay: particle.delay, repeat: Infinity }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles