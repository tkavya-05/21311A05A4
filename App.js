// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [res, setRes] = useState(null);

  const fetchData = async (numberid) => {
    try {
      const res = await axios.get(`http://localhost:3000/numbers/${numberid}`);
      setRes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <button onClick={() => fetchData('p')}>Prime Numbers</button>
      <button onClick={() => fetchData('f')}>Fibonacci Numbers</button>
      <button onClick={() => fetchData('e')}>Even Numbers</button>
      <button onClick={() => fetchData('r')}>Random Numbers</button>
      {res && (
        <div>
          <h2>Prev Window State: {JSON.stringify(res.windowPrevState)}</h2>
          <h2>Curr Window State: {JSON.stringify(res.windowCurrState)}</h2>
          <h2>Nums: {JSON.stringify(res.numbers)}</h2>
          <h2>Average: {res.avg.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
