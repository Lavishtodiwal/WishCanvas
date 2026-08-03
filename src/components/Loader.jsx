function Loader({ label = 'Preparing something special...' }) {
  return (
    <section
      className="flex min-h-screen items-center justify-center bg-slate-950 text-white"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-500 to-cyan-400 shadow-[0_0_60px_rgba(168,85,247,0.5)]" />
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">{label}</p>
      </div>
    </section>
  )
}

export default Loader