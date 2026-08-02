import { useState } from 'react'

function GiftBox({ title, message, revealLabel = 'Open the gift' }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="group flex w-full flex-col items-center gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/60 px-6 py-8 transition hover:border-fuchsia-400/50"
      >
        <div className="relative h-28 w-28 rounded-[1.5rem] bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-[0_0_50px_rgba(168,85,247,0.35)] transition group-hover:scale-105">
          <div className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-white/20" />
          <div className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 bg-white/20" />
        </div>
        <span className="text-xs uppercase tracking-[0.35em] text-white/50">{revealLabel}</span>
      </button>

      <div className="mt-5 text-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/65">{message}</p>
        {isOpen && (
          <p className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cyan-100">
            The box is open. Keep the surprise going.
          </p>
        )}
      </div>
    </section>
  )
}

export default GiftBox