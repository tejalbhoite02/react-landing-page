import React from 'react'
import './Background.css'
import video from '../../assets/video.mp4'
import image1 from '../../assets/back1.jpg'
import image2 from '../../assets/back2.jpg'
import image3 from '../../assets/back3.jpg'



function Background({ playStatus, heroCount }) {


  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
    )
  }
  else if (heroCount === 0) {
    return <img src={image1} className='background fade-in' alt="" />
  }

  else if (heroCount === 1) {
    return <img src={image2} className='background fade-in' alt="" />
  }

  else if (heroCount === 2) {
    return <img src={image3} className='background fade-in' alt="" />
  }

}

export default Background

