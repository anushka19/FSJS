import {useState} from 'react'

function SuperHeroes(){
  const [hero,setHero] = useState(["Superman","Spiderman", "Ironman"])

  //whenever we use input we need some kind of state
  const [name,setName] = useState(()=> "antman")

  const onAddName = () =>{
    setHero([...hero,name])
    setName("")
  }

  return(
    <div>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <input
        type='text'
        value = {name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={onAddName}
      >
        Add Value
      </button>
    </div>
  )

  //we are adding key={h} to avoid repeation and madke all list va;ues re unique , its repeating same element to avoid that
}

function Counter(){
  // to keep indepent state we use usestate, every counte it passes diff state
  let [count,setCount] = useState(100)

  function oneUp(){
    setCount(++count);
  }

  return(
    <div>
      <button
      onClick={oneUp}
      >Counter : {count}</button>
    </div>
  )
  
}

function App() {

  //declare a var we use usestate

  return (
    // diff copies is creating in same memory loc, in the same way navbar and other components can be handled
    <>
    <h1>Hello</h1>
    <Counter/> 
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>

    <SuperHeroes/>

    </>
  );
}

export default App;
