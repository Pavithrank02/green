import React from 'react'
import img8 from '../images/8.jpg'
import './side.css'
const Side = () => {
  return (
    <div className='side'>
      <div >
        <img src={img8} alt="Image 8"className='img8' />
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
        <p className='rotated-text'>Solutions</p>
      </div>
    </div>
  )
}

export default Side