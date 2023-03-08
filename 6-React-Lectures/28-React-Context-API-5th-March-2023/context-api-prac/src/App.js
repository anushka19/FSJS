import Navbar from "./Components/Navbar";
import {useState, createContext} from 'react'
import HeroSection from "./Components/HeroSection";
import UserDetails from "./Components/UserDetails";

export const myContext = createContext()

function App() {
  const [name,setName] =useState("");
  const [color,setColor] = useState("")

  const myName = (event) =>{
    setName(event.target.value)
  }

  const myColor = (event) =>{
    setColor(event.target.value)
  }
  return (
    //we have provider before app is created
    <>
    <myContext.Provider value={{name, color}}> 
    <Navbar/>
    <form>
      <input type={"text"} placeholder="Enter User name" value={name} onChange={myName}/>
      <input type={"text"} placeholder="Enter a color" value={color} onChange={myColor} />
      
    </form>
    <HeroSection/>
    
    </myContext.Provider>
    </>
    
  );
}

export default App;
