import React, { useState } from 'react'
import img8 from '../images/8.jpg'
import './side.css'
import ImageConainer from './ImageConainer'
const Side = ({startAnimations}) => {
  const [isTransition, setIsTransition] = useState(false)
  const startAnimation = () => {
    setIsTransition(!isTransition);
    startAnimations()
  };
  const animationName = isTransition ? 'small-image' : ''
  return (
    <div className='side'>
      <div  className='img-'>
        <img src={img8} alt="Image 8" className={`img- ${animationName}`}  />
      </div>
      <div className='logo'>
        <h1>GREEN</h1>
        <p>Future:Envisioned</p>
      </div>
      <div className='msg'>
        <p>SOLUTIONS TO </p>
        <h1>POWERING </h1>
        <h1>HOME </h1>
      </div>
      <div className='rotated'>
        <p className='rotated-text'>SOLUTIONS</p>
      </div>
      <button onClick={startAnimation} className='button'>
        <div class="long-arrow-right"></div>
      </button>
    </div>
    
  )
}

export default Side