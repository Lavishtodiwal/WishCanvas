function FinalMessage({ title, message, signature }) {
  return (
    <section className="rounded-[2.5rem] border border-white/10 bg-white/5 px-6 py-10 text-center text-white backdrop-blur-xl sm:px-10">
      <p className="text-xs uppercase tracking-[0.35em] text-white/45">Final note</p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">{message}</p>
      <p className="mt-6 text-sm uppercase tracking-[0.3em] text-cyan-100/80">{signature}</p>
    </section>
  )
}

export default FinalMessage