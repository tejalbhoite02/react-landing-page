import React from 'react'
import './Hero.css'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";

function Hero({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-dot-play">
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>

        </ul>
        <div className="hero-play" onClick={() => setPlayStatus(!playStatus)}>
          {playStatus ? <FaCirclePause className='hero-icon' /> : <FaCirclePlay className='hero-icon' />}
          <p>See the Video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero