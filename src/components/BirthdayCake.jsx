function BirthdayCake({ title, message }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center text-white backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.35em] text-white/45">Cake moment</p>
      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>

      <div className="relative mx-auto mt-8 h-44 w-full max-w-xs">
        <div className="absolute left-1/2 top-0 h-12 w-2 -translate-x-1/2 rounded-full bg-cyan-200" />
        <div className="absolute left-[38%] top-0 h-12 w-2 -translate-x-1/2 rounded-full bg-fuchsia-200" />
        <div className="absolute left-[62%] top-0 h-12 w-2 -translate-x-1/2 rounded-full bg-violet-200" />

        <div className="absolute inset-x-8 top-10 h-8 rounded-t-[2rem] bg-gradient-to-r from-fuchsia-400 via-violet-500 to-cyan-400" />
        <div className="absolute inset-x-4 top-16 h-12 rounded-[2rem] bg-gradient-to-b from-white/20 to-white/5" />
        <div className="absolute inset-x-0 bottom-0 h-14 rounded-[2rem] bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.18)]" />
      </div>

      <p className="mt-2 text-sm leading-6 text-white/65">{message}</p>
    </section>
  )
}

export default BirthdayCake