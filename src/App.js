import React, { useState } from 'react';
import './App.css';
import Secondary from './components/Secondary';
import Side from './components/Side';
import ImageConainer from './components/ImageConainer';

function App() {
  const [isMovingRight, setIsMovingRight] = useState(false);

  const startAnimation = () => {
    setIsMovingRight(!isMovingRight);
  };

  const animationName = isMovingRight ? 'moveRight' : 'moveLeft';

  return (
    <div className="App">
      <div className='left'>
        {/* <Side /> */}
      </div>
      <div className='right'>
        <ImageConainer animationName={animationName} startAnimation={startAnimation} />
      </div>
      {isMovingRight && <Secondary />}
    </div>
  );
}

export default App;
