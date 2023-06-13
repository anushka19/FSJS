
import { useState,createContext } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
//import UserCard from './Components/UserCard';

export const myContext = createContext();

function App() {

  const[name,setName] = useState("")

  const [color,setColor] = useState("")

  const myName =(e) =>{
    setName(e.target.value)
  }

  const myColor = (e) => {
    setColor(e.target.value)
  }

  return (
    
    <myContext.Provider value={{name,color}}>
      <h1>Hello from App</h1>
      <Navbar/>
      <form>

        <input  type={'text'} 
        placeholder="Enter User name" 
        value={name} 
        onChange={myName}/>

        <input type={'text'}
        placeholder="Enter Color"
        value={color}
        onChange={myColor}

        />
      </form>

      <Hero/>
     

    </myContext.Provider>
  );
}

export default App;
