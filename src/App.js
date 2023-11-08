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
        <Side animationName={animationName}/>
      </div>
      <div  className='right'>
        {!isMovingRight ? (<div>
          <ImageConainer  startAnimation={startAnimation} />
        </div>)
        :  <Secondary />}
      </div>
    </div>
  );
}

export default App;
