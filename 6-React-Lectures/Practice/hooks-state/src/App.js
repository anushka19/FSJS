import React,{ useState } from 'react'


function App() {
  //4 is the default value to start
  function CountInitial() {
    console.log('run function');
      return 4
  }

 const [count, setCount] = useState(() => CountInitial())
//   () => { //use state always returns the state and returns 2 things - [current state, update state]
//     console.log('run function');
//     return 4
//  }) //this arrow function runs only once initial time, but if we write a seperate function it will load everytime we refresh it, so use callbacks
  const [theme,setTheme] = useState('blue') // we can 2 different hooks and managed independently - we can break out these functions to hooks
  

  let decrementCount = () => {
    setCount((prevCount) => prevCount - 1) //use function version and do not directly use count use prevCopunt where we get copy of count and performo peration on it
    //setCount((prevCount) => prevCount - 1) - 2 times works

    //below 2 times doesnt works because we are gettion one value at a time in couunt
    //setCount(count - 1)
    //setCount(count - 1)
  }
  let incrementCount = () => {
    setCount((prevCount) => prevCount + 1) 
    setTheme('red')
  

  //Another way without using class to keep prev state as it is for using objects
  // const [state, setState] = useState({count: 4, theme: 'blue'})
  // const count =state.count
  // const theme = state.theme

  // function decrementCount() {
  //   setState(prevState => {
  //     return {...prevState, count: prevState.count - 1} // in class it over rides the prev state to pass prevState because automatically it doesnt gets merged - multiple state hoooks
  //   })
  // }
  // function incrementCount() {
  //   setState(prevState => {
  //     return {...prevState, count: prevState.count + 1} // in class it over rides the prev state to pass prevState because automatically it doesnt gets merged - multiple state hoooks
  //   })
  }
  return (
    <>
      <button onClick={decrementCount}> - </button>
      <span>{count}</span>
        <span>{theme}</span>

      <button onClick={incrementCount}>  + </button>
    </>
  );
}

export default App;


//Step1 : Import the hooks you want to use

// Rules:
// 1. Hooks can be used inside a function component not class component - classes  have their own way what hooks can do
//2. hooks must execute in same order
//3. hooks cannot be conditions, loops or nested anywhere - emains in top level in the function





