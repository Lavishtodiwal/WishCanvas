import { motion } from "framer-motion";

const items = [
  {
    emoji: "💪",
    title: "Daring Girl",
    desc: "The one who never backs down. No matter how tough life gets, you always find the courage to stand back up.",
    size: "col-span-2 md:row-span-2",
    color: "from-pink-500 via-fuchsia-500 to-violet-600",
    featured: true,
  },
  {
    emoji: "👻",
    title: "Bhoot",
    desc: "Because somehow... you're always there to scare me at the right time. 😂",
    size: "col-span-2",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    emoji: "😂",
    title: "Drama Queen",
    desc: "Oscar-worthy reactions for tiny problems.",
    size: "col-span-2",
    color: "from-amber-400 to-pink-500",
  },
  {
    emoji: "🍕",
    title: "Foodie",
    desc: "Can never say no to good food.",
    size: "col-span-1",
    color: "from-green-500 to-emerald-500",
  },
  {
    emoji: "😊",
    title: "Smile",
    desc: "The reason this website exists.",
    size: "col-span-1",
    color: "from-rose-500 to-pink-500",
  },
  {
    emoji: "😴",
    title: "Aalsi",
    desc: "Expert in saying, 'Abhi karti hoon.' 😆",
    size: "col-span-1",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Timeline() {
  return (
    <div className="w-full px-4 md:px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[220px] md:auto-rows-[250px]">

        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className={`
              ${item.size}
              group
              relative
              overflow-hidden
              rounded-[28px]
              ${
                item.featured
                  ? "border-2 border-pink-400 shadow-[0_0_35px_rgba(236,72,153,.4)]"
                  : "border border-white/10"
              }
              bg-white/5
              backdrop-blur-xl
              p-4 md:p-6
            `}
          >
            {/* Background Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-all duration-500`}
            />

            {/* Featured Badge */}
            {item.featured && (
              <div className="absolute top-4 right-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
                ⭐ Favourite
              </div>
            )}

            <div className="relative z-10 flex h-full flex-col">

              {/* Emoji */}
              <div
                className={`mb-5 transition duration-500 ${
                  item.featured
                    ? "text-6xl md:text-7xl group-hover:scale-110"
                    : "text-4xl md:text-6xl group-hover:scale-125"
                }`}
              >
                {item.emoji}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h2
                  className={`font-bold text-white ${
                    item.featured
                      ? "text-2xl md:text-4xl"
                      : "text-lg md:text-2xl"
                  }`}
                >
                  {item.title}
                </h2>

                <p className="mt-3 text-white/80 text-xs md:text-base leading-6">
                  {item.desc}
                </p>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}