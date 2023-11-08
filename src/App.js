import React, { useState } from 'react';
import img1 from '../src/images/1.jpg'
import img2 from '../src/images/2.jpg'
import img3 from '../src/images/3.jpg'
import img4 from '../src/images/4.jpg'
import img5 from '../src/images/5.jpg'
import img6 from '../src/images/6.jpg'

import './App.css';
import Secondary from './components/Secondary';
import Side from './components/Side';

function App() {
  const [isMovingRight, setIsMovingRight] = useState(false);

  const startAnimation = () => {
    setIsMovingRight(!isMovingRight);
  };

  const animationName = isMovingRight ? 'moveRight' : 'moveLeft';

  return (
    <div className="App">
      <Side />
      
      {isMovingRight ? <Secondary /> : ""}
    </div>
  );
}

export default App;
