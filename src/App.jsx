import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import AuthScreen from "./components/AuthScreen.jsx";

import EntrySection from "./sections/EntrySection.jsx";
import WelcomeSection from "./sections/WelcomeSection.jsx";
import TimelineSection from "./sections/TimelineSection.jsx";
import GallerySection from "./sections/GallerySection.jsx";
import LetterSection from "./sections/LetterSection.jsx";
import FinalSection from "./sections/FinalSection.jsx";
import SurpriseSection from "./sections/SurpriseSection.jsx";

import "./App.css";
import VoiceNote from "./components/VoiceNot.jsx";

function App() {
  const [isReady, setIsReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 11000); // Loader duration

    return () => clearTimeout(timer);
  }, []);

  // Loader
if (!isReady) {
  return <Loader />;
}

if (!authenticated) {
  return <AuthScreen onUnlock={() => setAuthenticated(true)} />;
}

  // Main Website
  return (
    <div className="App">
      <Navbar />

      <main>
        <EntrySection />
        <WelcomeSection />
        <TimelineSection />
        <GallerySection />
        <LetterSection />
        <FinalSection />
        <SurpriseSection />
        <VoiceNote />
      </main>
    </div>
  );
}

export default App;