
import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setResult(result + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = (result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" placeholder="Enter Number" value={result} readOnly />
      <br/> 
      <div className="buttons">         
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
