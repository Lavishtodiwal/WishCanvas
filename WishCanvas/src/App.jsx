import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Loader from './components/Loader.jsx'
import EntrySection from './sections/EntrySection.jsx'
import WelcomeSection from './sections/WelcomeSection.jsx'
import TimelineSection from './sections/TimelineSection.jsx'
import GallerySection from './sections/GallerySection.jsx'
import LetterSection from './sections/LetterSection.jsx'
import SurpriseSection from './sections/SurpriseSection.jsx'
import FinalSection from './sections/FinalSection.jsx'
import { memories } from './data/memories.js'
import './App.css'

function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 350)

    return () => window.clearTimeout(timer)
  }, [])

  if (!isReady) {
    return <Loader />
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Navbar links={memories.navLinks} brand={memories.brand} />

      <main>
        <EntrySection data={memories.entry} />
        <WelcomeSection data={memories.welcome} memories={memories.memories} />
        <TimelineSection data={memories.timeline} />
        <GallerySection data={memories.gallery} />
        <LetterSection data={memories.letter} />
        <SurpriseSection data={memories.surprise} tracks={memories.music} />
        <FinalSection data={memories.finalMessage} />
      </main>
    </div>
  )
}

export default App
