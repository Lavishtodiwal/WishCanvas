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
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        bg-gradient-to-b from-[#09090F] via-[#111827] to-[#050816]
        flex items-center justify-center
        px-4 py-8 sm:px-6
      "
    >
      {/* Background glows */}

      <div
        className="
          absolute -top-32 -left-32
          h-72 w-72 sm:h-96 sm:w-96
          rounded-full bg-pink-500/20
          blur-[130px] sm:blur-[180px]
        "
      />

      <div
        className="
          absolute -bottom-32 -right-32
          h-72 w-72 sm:h-96 sm:w-96
          rounded-full bg-violet-500/20
          blur-[130px] sm:blur-[180px]
        "
      />

      <div
        className="
          absolute top-1/2 left-1/2
          h-[350px] w-[350px] sm:h-[500px] sm:w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-cyan-500/10
          blur-[160px] sm:blur-[220px]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* CARD */}

        <div
          className="
            rounded-[28px]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            px-5 py-7
            sm:p-8
            shadow-2xl
          "
        >

          {/* ================= ICON ================= */}

          <div className="flex justify-center mb-6">

            <motion.div
              animate={
                playing
                  ? {
                      scale: [1, 1.08, 1],
                    }
                  : {
                      scale: [1, 1.03, 1],
                    }
              }
              transition={{
                duration: playing ? 1.2 : 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              {/* Outer glow */}

              <motion.div
                animate={{
                  opacity: playing
                    ? [0.3, 0.7, 0.3]
                    : [0.2, 0.4, 0.2],
                  scale: playing
                    ? [1, 1.25, 1]
                    : [1, 1.12, 1],
                }}
                transition={{
                  duration: playing ? 1.2 : 2.5,
                  repeat: Infinity,
                }}
                className="
                  absolute inset-0
                  rounded-full
                  bg-pink-500/40
                  blur-xl
                "
              />

              {/* Main orb */}

              <div
                className="
                  relative
                  h-24 w-24
                  sm:h-28 sm:w-28
                  rounded-full
                  bg-gradient-to-br
                  from-pink-500
                  via-fuchsia-500
                  to-violet-600
                  flex items-center justify-center
                  shadow-[0_0_45px_rgba(236,72,153,0.35)]
                "
              >

                {/* Sound waves */}

                <div className="absolute inset-0 flex items-center justify-center gap-1">

                  {[...Array(7)].map((_, i) => (
                    <motion.span
                      key={i}
                      animate={
                        playing
                          ? {
                              height: [
                                "8px",
                                `${14 + (i % 4) * 7}px`,
                                "8px",
                              ],
                            }
                          : {
                              height: "7px",
                            }
                      }
                      transition={{
                        duration: 0.5 + i * 0.08,
                        repeat: playing ? Infinity : 0,
                        delay: i * 0.05,
                      }}
                      className="
                        w-[3px]
                        rounded-full
                        bg-white
                      "
                    />
                  ))}

                </div>

                {/* Center heart */}

                <motion.span
                  animate={
                    playing
                      ? {
                          scale: [1, 1.15, 1],
                        }
                      : {
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: 0.9,
                    repeat: playing ? Infinity : 0,
                  }}
                  className="
                    relative z-10
                    text-2xl
                    sm:text-3xl
                  "
                >
                  ♥
                </motion.span>

              </div>
            </motion.div>

          </div>


          {/* ================= TEXT ================= */}

          <div className="text-center">

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
              "
            >
              One More Thing...
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="
                mt-3
                text-sm
                sm:text-base
                text-white/60
              "
            >
              I could have written this too...
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="
                mt-1
                text-sm
                sm:text-base
                text-pink-300
              "
            >
              But I wanted you to hear it from me. ❤️
            </motion.p>

          </div>


          {/* ================= AUDIO ================= */}

          <audio
            ref={audioRef}
            src="https://res.cloudinary.com/dxaadzj0s/video/upload/v1786711794/voice_note_xoav9e.m4a"
            onEnded={handleEnded}
            preload="metadata"
          />


          {/* ================= PLAYER ================= */}

          <div
            className="
              mt-7
              rounded-2xl
              border border-white/10
              bg-black/20
              p-4
              sm:p-5
            "
          >

            <div className="flex items-center gap-3 sm:gap-4">

              {/* PLAY */}

              <motion.button
                whileTap={{ scale: 0.88 }}
                whileHover={{ scale: 1.05 }}
                onClick={toggleAudio}
                aria-label={
                  playing
                    ? "Pause voice note"
                    : "Play voice note"
                }
                className="
                  flex
                  h-14 w-14
                  sm:h-16 sm:w-16
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-violet-600
                  text-lg sm:text-xl
                  text-white
                  shadow-lg
                  shadow-pink-500/20
                "
              >
                {playing ? "❚❚" : "▶"}
              </motion.button>


              {/* WAVEFORM */}

              <div className="min-w-0 flex-1">

                <p
                  className="
                    text-xs
                    sm:text-sm
                    font-semibold
                    text-white
                    truncate
                  "
                >
                  A little message for you
                </p>

                <div
                  className="
                    mt-3
                    flex
                    h-7
                    items-center
                    gap-[3px]
                    overflow-hidden
                  "
                >
                  {[...Array(24)].map((_, i) => (
                    <motion.span
                      key={i}
                      animate={
                        playing
                          ? {
                              height: [
                                `${4 + (i % 4) * 2}px`,
                                `${10 + (i % 6) * 3}px`,
                                `${4 + (i % 4) * 2}px`,
                              ],
                            }
                          : {
                              height: "5px",
                            }
                      }
                      transition={{
                        duration:
                          0.5 + (i % 4) * 0.1,
                        repeat: playing
                          ? Infinity
                          : 0,
                        delay: i * 0.025,
                      }}
                      className="
                        w-[3px]
                        shrink-0
                        rounded-full
                        bg-pink-400
                      "
                    />
                  ))}
                </div>

              </div>

            </div>

          </div>


          {/* ================= HINT ================= */}

          <motion.p
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              mt-5
              text-center
              text-xs
              text-white/40
            "
          >
            Take a moment... 🎧
          </motion.p>


          {/* ================= NEXT ================= */}

          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={onNext}
            className="
              mt-7
              w-full
              min-h-[52px]
              rounded-full
              border border-pink-400/20
              bg-gradient-to-r
              from-pink-500/15
              to-violet-500/15
              px-5
              py-3
              text-sm
              sm:text-base
              font-semibold
              text-white
              transition
              hover:border-pink-400/40
              hover:from-pink-500/25
              hover:to-violet-500/25
            "
          >
            There's something else... ❤️
          </motion.button>

        </div>

      </motion.div>

    </section>
  );
}
