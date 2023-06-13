import { useState } from "react";

function App() {

  const [count,setCount] = useState(0)

  //const increment = 
  const increment = () =>{
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count - 1)
  }

  return (
    <>
      <div className="counter">
        <h1>Counter App</h1>
        <div>{count}</div>
        <div>
          <button
            onClick={increment}
          >+</button>

          <button
            onClick={decrement}
          >-</button>
        </div>
        

      </div>
      
    </>
  );
}

export default App;
