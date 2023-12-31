import React, { useState } from 'react'
import img7 from '../images/7.jpg'
import './secondary.css'

const Secondary = ({startAnimations}) => {
  const [isTransition, setIsTransition] = useState(false)
  const startAnimation = () => {
    startAnimations()
    setIsTransition(!isTransition)
  };
  return (  
    <div className='secondary'>
      <div className='top'>
        <div className='btn'>
          <button onClick={startAnimation}>Back</button>
        </div>
        <div className='left-blk'>
          <h3>POWERING</h3>
          <h2> Home</h2>
          <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
          <p className='first'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          <div >
          </div>
        </div>
        <div className='right-blk'>
          <img src={img7} alt='home' className='right-img' />
        </div>
      </div>
      <div className='bottom'>

        <div className='second'>
          <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
        <div>

        </div>
      </div>
    </div>

  )
}

export default Secondary