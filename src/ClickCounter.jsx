import React, { useState } from 'react';
import './assets/ClickCounter.css'; // For styling

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const limit = 10;

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter</h1>
      <h2>Count: {count}</h2>
      {count >= limit && <p className="limit-message">You've reached the limit!</p>}
      <div className="button-group">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
};

export default ClickCounter;
