//import logo from './logo.svg';

import { useState } from "react";

//import './App.css';
function SuperHeros(){
  const [heros,setHeros] = useState(["Superman","Spiderman","Ironman"])
  const [name, setName] = useState( () => "antman")

  const onAddName = () => {
    setHeros([...heros,name])
    setName("")
  }
  return (

    <div>
      <ul>
        {heros.map( (h) => (
          <li key = {h}>{h}</li>
        ))} 
        {/* looping through same of diff element */}
      </ul>

      <input 
      type = "text" 
      value = {name} 
      onChange = {(e) => setName(e.target.value)}
      />      

    <button onClick={onAddName}>Add value</button>
    </div>
  )
}

function Counter(){
  let [count, setCount] = useState(10)

  function oneUp(){
    setCount(count + 1);
  }
  return(
    <div>
      <button 
      onClick={oneUp}
      >
        Count : {count}
      </button>
      <SuperHeros/>
    </div>
  )
}

function App() {
  //want to give an avriable
  //useState
  return (
    <>
      <h1>hello to react</h1>
      <Counter/>
      {/* virtual DOM is creating copies in same memory location 
      <Counter/>
      <Counter/>
      <Counter/>*/}

    </>
    
  );
}

export default App;
