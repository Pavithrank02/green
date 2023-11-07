import React, { useState } from 'react';
import img1 from '../src/images/1.jpg'
import img2 from '../src/images/2.jpg'
import img3 from '../src/images/3.jpg'
import img4 from '../src/images/4.jpg'
import img5 from '../src/images/5.jpg'
import img6 from '../src/images/6.jpg'
import './App.css';

function App() {
  const [isMovingRight, setIsMovingRight] = useState(false);

  const startAnimation = () => {
    setIsMovingRight(!isMovingRight);
  };

  const animationName = isMovingRight ? 'moveRight' : 'moveLeft';
  return (
    <div className="App">
      <div className="row">
        <div className="image-row">
          <img src={img1} alt="Image 1" className={`moving-image ${animationName}`} />
          <img src={img2} alt="Image 2" className={`moving-image ${animationName}`} />
          <img src={img3} alt="Image 3" className={`moving-image ${animationName}`} />
        </div>
        <div className="image-row">
          <img src={img4} alt="Image 4" className={`moving-image ${animationName}`} />
          <img src={img5} alt="Image 5" className={`moving-image ${animationName}`} />
          <img src={img6} alt="Image 6" className={`moving-image ${animationName}`} />
        </div>
      </div>
      <button onClick={startAnimation}>Toggle Direction</button>
    </div>
  );
}

export default App;
