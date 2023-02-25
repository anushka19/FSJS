import React from 'react';
import Card from './card'
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App () {
  const [details, setDetails] = useState({})

  const fetchDetails =  async () => {
    const {data} = await Axios.get('https://randomuser.me/api')
    console.log("RESPONSE",data);

    const details = data.results[0]
    setDetails(details)
  }

  let list = ["anushka", "Madhav", "Naslun"]

  useEffect(() => {
    fetchDetails(); 
  }, [])//callback and dep

  return (
    <>
      <div>App</div>
      <Card myname = "anushka" list = {list} details = {details}/>
      <button
      onClick={fetchDetails}
      >get Details</button>
    </>
    
  )
}

export default App;
