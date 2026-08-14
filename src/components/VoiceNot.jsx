import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VoiceNote({ onNext }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const isToggling = useRef(false);

  const toggleAudio = async () => {
    if (!audioRef.current || isToggling.current) return;
    isToggling.current = true;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error("Audio could not be played:", error);
      setPlaying(false);
    } finally {
      isToggling.current = false;
    }
  };

  const handleEnded = () => {
    setPlaying(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#09090F] via-[#111827] to-[#050816] flex items-center justify-center px-6">
      {/* Background glow */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-pink-500/20 blur-[180px]" />
      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-violet-500/20 blur-[180px]" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="text-center">
            <motion.div
              animate={{
                scale: playing ? [1, 1.08, 1] : 1,
              }}
              transition={{
                duration: 1.2,
                repeat: playing ? Infinity : 0,
              }}
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 text-4xl shadow-lg"
            >
              🎙️
            </motion.div>

            <h2 className="text-2xl font-bold text-white">
              One More Thing...
            </h2>

            <p className="mt-3 text-white/60">
              I could have written this too...
            </p>

            <p className="mt-1 text-pink-300">
              But I wanted you to hear it from me. ❤️
            </p>
          </div>

          {/* Audio */}
          <audio
            ref={audioRef}
            src="https://res.cloudinary.com/dxaadzj0s/video/upload/v1786711794/voice_note_xoav9e.m4a"
            onEnded={handleEnded}
            preload="metadata"
          />

          {/* Player */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={toggleAudio}
                aria-label={playing ? "Pause voice note" : "Play voice note"}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-xl text-white"
              >
                {playing ? "❚❚" : "▶"}
              </motion.button>

              <div className="flex-1">
                <p className="text-sm font-semibold text-white">
                  A little message for you
                </p>

                <div className="mt-3 flex items-center gap-1">
                  {[...Array(22)].map((_, i) => (
                    <motion.span
                      key={i}
                      animate={
                        playing
                          ? {
                              height: [
                                `${4 + (i % 5) * 2}px`,
                                `${10 + (i % 7) * 4}px`,
                                `${4 + (i % 5) * 2}px`,
                              ],
                            }
                          : { height: "5px" }
                      }
                      transition={{
                        duration: 0.6 + (i % 4) * 0.1,
                        repeat: playing ? Infinity : 0,
                        delay: i * 0.03,
                      }}
                      className="w-1 rounded-full bg-pink-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small hint */}
          <p className="mt-5 text-center text-xs text-white/40">
            Put your headphones on... 🎧
          </p>

          {/* Continue */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={onNext}
            className="mt-7 w-full rounded-full bg-white/10 py-3 font-semibold text-white transition hover:bg-white/15"
          >
            There's something else... ❤️
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
