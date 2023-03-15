import React, { useState } from 'react';
import {increment, decrement, incrementByValue} from "./features/counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux'; //to know whats the curr value in the store - useSelector, dispatch is used to update the value like setInput etc
//import '..css'


function App() {
  const [input, setInput] = useState('')

  const count = useSelector((state) => state.counter.value) //counter from counterSlice
  const dispatch = useDispatch()

  return (
    <div className='bg-zinc-900 text-zinc-100 flex justify-center items-center flex-col min-h-screen gap-10' >
      <div className='text-[30px]'>{count}</div>
      <div className='space-x-3'>
        <input className='bg-gray-800 rounded border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Enter a number ...'
          value={input}  onChange={(e) => setInput(e.target.value)}/>
          <button onClick={(e) => dispatch(incrementByValue(+input))}
            className ='text-white font-semibold bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg'>
              Increment By Value
          </button>
        
      </div>

      <div className='space-x-6'>
     
        <button onClick={(e) => dispatch(increment())}
        className ='text-white font-semibold bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg'>
          Increment By 1
        </button>
        {/* <span>{count}</span> */}
        <button onClick={(e) => dispatch(decrement())}
        className ='text-white font-semibold bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg'>
          Decrement By 1
        </button>
      </div>
    </div>
  );
}

export default App;
