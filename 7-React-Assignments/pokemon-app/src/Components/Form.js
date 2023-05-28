import React, { useState } from "react";
// import { MdSend } from "react-icons/md";
import Axios from 'axios';
import Home from "./Home";

const Form = () => {
  const [input, setInput] = useState("");
  const [handle, setHandle] = useState(false);
  const handleinput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const [details,setDetails]=useState({});

//   let response={};
  const searchPokemonFunc=async(e)=>{
    e.preventDefault();
    if(!input || input==="" || input===null){
        alert("Please enter Pokemon Name or ID");
      }
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
    //   if(response.error){//if no dish found from API
    //     alert("No Pokemon Found.")
    //   }
    //   console.log(response?.data);
      const data=response.data;
      setDetails(data);
      setHandle(true);
  }

  return (
    <>
      <div className="mt-20 flex flex-row justify-center gap-3">
        <input
          className="h-10 w-500 text-xl text-slate-900 pl-50 rounded-lg "
          type="text"
          placeholder="Enter Pokemon Name/ID "
          value={input}
          onChange={handleinput}
          onKeyDown={(e) => (e.key === "Enter" && searchPokemonFunc(e))}
        />
        <button 
            onClick={searchPokemonFunc}
            className="hover:scale-105 text-white text-xl bg-gray-800 rounded-md px-3 p-2"> Show Results
          {/* <MdSend></MdSend> */}
        </button>
      </div>
      {handle && <Home details={details} ></Home>}
      
    </>
  );
};

export default Form;