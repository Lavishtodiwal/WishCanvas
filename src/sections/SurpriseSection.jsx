import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GiftBox from "../components/GiftBox";
import finalVideo from "../assets/intro.mp4";

export default function SurpriseSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleVideoEnd = () => {
    setShowThanks(true);

    setTimeout(() => {
      setShowThanks(false);
      setPlayVideo(false);
    }, 2500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">

      {!playVideo && (
        <GiftBox onOpen={() => setPlayVideo(true)} />
      )}

      <AnimatePresence>

        {playVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .8 }}
            className="fixed inset-0 z-50 bg-black"
          >

            <video
              className="w-full h-full object-contain"
              autoPlay
              playsInline
              controls={false}
              onEnded={handleVideoEnd}
            >
              <source src={finalVideo} type="video/mp4" />
            </video>

            {showThanks && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black"
              >
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-white">
                    Thank You ❤️
                  </h1>

                  <p className="mt-4 text-white/70">
                    Happy Birthday ✨
                  </p>
                </div>
              </motion.div>
            )}

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}