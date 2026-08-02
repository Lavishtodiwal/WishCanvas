import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function EntrySection() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold"
      >
        Hey You ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-xl text-pink-200"
      >
        I have something special for you...
      </motion.p>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <ChevronDown size={35} />
        <p>Scroll to see the magic</p>
      </motion.div>
    </section>
  );
}