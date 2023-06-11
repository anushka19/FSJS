import { useState, useEffect } from 'react';
import './App.css';
import Jokes from './Components/Jokes';
import Axios from 'axios'

function App() {

  const [joke,setJoke] = useState({})

  const fetchJoke = async() => {
    const {data} = await Axios.get('https://api.chucknorris.io/jokes/random')
    console.log('Response');
    const joke = data
    //console.log(joke)
    setJoke(joke)
  }

  useEffect(() =>{
    fetchJoke()
  },[] )
  return (
    <>
    <h5 className='text-center mt-md-5'>Random Chuck Norris Joke Generator</h5>
    <div className='text-center jumbotron container mt-md-5'>
      
      {/* <hr class="my-4"></hr> */}
      <div >
        <Jokes j={joke}/>
      </div>
      <br/>
      <button 
        className='btn btn-info btn-lg'
        onClick={fetchJoke}
      >
        Generate Random Joke
      </button>
    </div>
    
    </>
  );
}

export default App;
