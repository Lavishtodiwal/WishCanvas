function MemoryCard({ title, description, mood, accent = 'from-fuchsia-500 to-violet-500' }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className={`h-2 bg-gradient-to-r ${accent}`} />
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.35em] text-white/45">{mood}</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/65">{description}</p>
      </div>
    </article>
  )
}

export default MemoryCard