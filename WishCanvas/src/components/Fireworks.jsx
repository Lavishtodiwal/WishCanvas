import { motion } from 'framer-motion'

function Fireworks() {
  const bursts = [
    { left: '20%', top: '18%' },
    { left: '70%', top: '12%' },
    { left: '58%', top: '62%' },
  ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {bursts.map((burst, index) => (
        <motion.div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.95)]"
          style={{ left: burst.left, top: burst.top }}
          animate={{ scale: [1, 5, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.8, delay: index * 0.6, repeat: Infinity }}
        >
          <span className="absolute inset-0 rounded-full bg-fuchsia-400/70 blur-[2px]" />
        </motion.div>
      ))}
    </div>
  )
}

export default Fireworks