import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import './imagecontainer.css'

const ImageConainer = ({ startAnimation, animationName }) => {
  return (
    <div className='image-containers'>
      <div className='image-container-top'>
        <div className='image-container-top-left'>
          <p className=''>LOREM IPSUM</p>
          <p className='image-container-top-left-p'>LOREM IPSUM</p>
        </div>
        <div className='image-container-top-right'>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <p>Learn More</p>
        </div>
      </div>
      <div className='image-container-bottom'>
        <div className={`image-container `}>
          <img src={img1} alt="Image 1" className={`moving-image ${animationName}`} />
          <img src={img2} alt="Image 2" className={`moving-image ${animationName}`} />
          <img src={img3} alt="Image 3" className={`moving-image ${animationName}`} />
          <img src={img4} alt="Image 4" className={`moving-image ${animationName}`} />
          <img src={img5} alt="Image 5" className={`moving-image ${animationName}`} />
          <img src={img6} alt="Image 6" className={`moving-image ${animationName}`} />
        </div>
      </div>
    </div>
  )
}

export default ImageConainer