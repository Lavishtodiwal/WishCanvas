function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_35%),linear-gradient(to_bottom,#020617,#020617_45%,#050816)]" />
      <div className="absolute -left-20 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute right-0 top-10 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-500/20 blur-[140px]" />
    </div>
  )
}

export default AuroraBackground