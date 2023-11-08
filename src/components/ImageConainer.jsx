import React from 'react'

const ImageConainer = () => {
  return (
    <div>
      <div className={`image-container ${animationName}`}>
        <img src={img1} alt="Image 1" className={`moving-image ${animationName}`} />
        <img src={img2} alt="Image 2" className={`moving-image ${animationName}`} />
        <img src={img3} alt="Image 3" className={`moving-image ${animationName}`} />
        <img src={img4} alt="Image 4" className={`moving-image ${animationName}`} />
        <img src={img5} alt="Image 5" className={`moving-image ${animationName}`} />
        <img src={img6} alt="Image 6" className={`moving-image ${animationName}`} />
      </div>
      <button onClick={startAnimation}>Toggle Direction</button>
    </div>
  )
}

export default ImageConainer