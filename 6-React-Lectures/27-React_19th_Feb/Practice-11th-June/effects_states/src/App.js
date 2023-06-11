import React,{useEffect, useState} from "react";
import Card from "./Card";
import Axios from 'axios';

function App() {

  const [details,setDetails] = useState({})

    const fetchDetails = async() =>{
        const {data} = await Axios.get('https://randomuser.me/api')
        console.log("Response", data);
        const details = data.results[0]

        setDetails(details)
      }


  let  list =["hitesh", "madhav", "anushka", "rashika"]

  useEffect(() => {
    //mount

    fetchDetails()
  }, [])

  return (
    <>
      <h1>Hello</h1>
      <Card myname='anushka' list={list} deti={details}/>
      <button onClick={fetchDetails}>getDetails</button>
    </>
  );
}

export default App;
