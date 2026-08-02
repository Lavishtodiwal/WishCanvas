import { ChevronDown } from 'lucide-react'

function ScrollIndicator({ href = '#welcome', label = 'Scroll to continue' }) {
  return (
    <a
      href={href}
      className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
    >
      <span>{label}</span>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </span>
    </a>
  )
}

export default ScrollIndicator