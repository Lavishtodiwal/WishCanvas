import { useEffect, useRef, useState } from 'react'
import { Pause, Play, SkipBack, SkipForward, Music2 } from 'lucide-react'

function MusicPlayer({ tracks = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const currentTrack = tracks[currentIndex] ?? null
  const hasPlayableTrack = Boolean(currentTrack?.src)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return undefined
    }

    if (isPlaying && hasPlayableTrack) {
      void audio.play()
    } else {
      audio.pause()
    }

    return undefined
  }, [isPlaying, hasPlayableTrack, currentTrack])

  useEffect(() => {
    setIsPlaying(false)
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((index) => (index - 1 + tracks.length) % tracks.length)
  }

  const goToNext = () => {
    setCurrentIndex((index) => (index + 1) % tracks.length)
  }

  const togglePlayback = () => {
    if (!hasPlayableTrack) {
      return
    }

    setIsPlaying((playing) => !playing)
  }

  if (!tracks.length) {
    return (
      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white/70 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-white/40">Music</p>
        <p className="mt-3 text-lg">Drop a track into the playlist to enable playback.</p>
      </section>
    )
  }

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
      <audio ref={audioRef} src={currentTrack?.src ?? ''} onEnded={goToNext} preload="none" />

      <div className="flex items-center gap-3 text-white/70">
        <Music2 className="h-5 w-5 text-fuchsia-300" />
        <p className="text-xs uppercase tracking-[0.35em]">Soundtrack</p>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-semibold">{currentTrack?.title ?? 'Untitled track'}</h3>
        <p className="mt-1 text-sm text-white/60">{currentTrack?.artist ?? 'Unknown artist'}</p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={goToPrevious}
          className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:bg-white/10"
          aria-label="Previous track"
        >
          <SkipBack className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={togglePlayback}
          disabled={!hasPlayableTrack}
          className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 p-4 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label={isPlaying ? 'Pause track' : 'Play track'}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:bg-white/10"
          aria-label="Next track"
        >
          <SkipForward className="h-4 w-4" />
        </button>
      </div>

      {!hasPlayableTrack && (
        <p className="mt-4 text-sm text-white/50">Add an audio file path to the active track to hear playback.</p>
      )}
    </section>
  )
}

export default MusicPlayer