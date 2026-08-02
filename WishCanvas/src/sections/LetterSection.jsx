import { motion } from "framer-motion";

export default function LetterSection() {
  return (
    <section
      id="letter"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ scale: .8, opacity:0 }}
        whileInView={{ scale:1, opacity:1 }}
        transition={{ duration:.8 }}
        className="max-w-4xl bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-white"
      >
        <h2 className="text-4xl font-bold mb-8">
          A Letter For You 💌
        </h2>

        <p className="leading-9 text-lg">
          Write your entire birthday message here...

          <br /><br />

          Tell her how much she means to you,
          your favourite memories,
          your wishes,
          and end it with something emotional.
        </p>
      </motion.div>
    </section>
  );
}