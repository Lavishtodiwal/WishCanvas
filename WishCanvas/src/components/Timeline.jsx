function Timeline({ items = [] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article
          key={`${item.when}-${item.title}`}
          className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">{item.when}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export default Timeline