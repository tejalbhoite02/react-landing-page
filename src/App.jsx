import React, { useEffect } from 'react'
import { useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';



function App() {
  let heroData = [
    { text1: "Let passion ", text2: "lead the way. " },
    { text1: "Seek new horizons,", text2: "Find your path" },
    { text1: "Wander, explore,", text2: "discover." },
  ]

  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);
  }, [])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App