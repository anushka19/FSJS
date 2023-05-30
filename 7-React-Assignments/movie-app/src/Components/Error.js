import React from 'react';
import { useNavigate } from 'react-router-dom';


const Error = () => {

    const navigate=useNavigate();
    const handleprev=()=>{
        navigate("/");
    }
  return (
    <>
        <div className='flex flex-col justify-center items-center mt-60 text-5xl text-black'>
            <p>Page Not Found</p>
            <button
            className='text-lg text-red-200 bg-black rounded-lg p-2 mt-16 hover:scale-95 hover:bg-blue-800 hover:text-white'
            onClick={handleprev}
            >Go To Search Page</button>
        </div>

    </>
  )
}

export default Error;