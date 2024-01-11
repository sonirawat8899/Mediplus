import React, { useState, useEffect } from 'react';

function Counter({ limit }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < limit) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10); // Change the interval duration as needed (here it's set to 1 second)

    return () => clearInterval(interval);
  }, [count, limit]);

  return <div>{count}</div>;
}

export default Counter;
