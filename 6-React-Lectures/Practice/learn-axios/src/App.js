//import './App.css';
import { useState } from 'react';
import Card from './Card';
import Axios from 'axios'
import { useEffect } from 'react';

function App() {
  const [details,setDetails] = useState({})

  const fetchDetails = async () =>{
    const {data} = await Axios.get('https://randomuser.me/api')//we have config options ,()
    console.log("Response", data)
    const details = data.results[0]
    setDetails(details)
  }
 

  let list = ["anu","gayu","gargi"]

  //to get something in default
  useEffect(() =>{
    fetchDetails();
  },[])

  return (
    <>
      <div>
      App
      </div>
      <Card myname = "anushka" list={list} details={details}/>
      <button onClick={fetchDetails}>Get Details</button>
    </>
  );
}

export default App;
