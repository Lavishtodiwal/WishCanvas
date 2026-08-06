import { motion } from "framer-motion";

const items = [
  {
    emoji: "👻",
    title: "Bhoot",
    desc: "Because somehow...you're always there to scare me at the right time. 😂",
    size: "col-span-2 row-span-2",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    emoji: "💪",
    title: "Daring Girl",
    desc: "The kind of person, who faces problems without giving up.",
    size: "col-span-1",
    color: "from-pink-500 to-orange-500",
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
    desc: "Expert in saying, Abhi karti hoon.",
    size: "col-span-1",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-5">

        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.08,
              duration: .5
            }}
            whileHover={{
              y: -8,
              scale: 1.03
            }}
            className={`
              ${item.size}
              relative
              overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-6
              cursor-pointer
              group
            `}
          >

            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition duration-500`}
            />

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div className="text-6xl transition group-hover:scale-125 duration-500">
                {item.emoji}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="mt-2 text-white/70 leading-6 text-sm">
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