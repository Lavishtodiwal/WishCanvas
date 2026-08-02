import { motion } from 'framer-motion'

function ShootingStars() {
  const streaks = [
    { top: '12%', left: '8%', duration: 4.5, delay: 0 },
    { top: '24%', left: '60%', duration: 5, delay: 1.2 },
    { top: '54%', left: '20%', duration: 4.2, delay: 2.4 },
  ]

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {streaks.map((streak, index) => (
        <motion.span
          key={index}
          className="absolute h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-70"
          style={{ top: streak.top, left: streak.left }}
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 180, opacity: [0, 1, 0] }}
          transition={{ duration: streak.duration, delay: streak.delay, repeat: Infinity, repeatDelay: 2 }}
        />
      ))}
    </div>
  )
}

export default ShootingStars