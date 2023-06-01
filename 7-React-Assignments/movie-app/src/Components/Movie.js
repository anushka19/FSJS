import React, { createContext, useContext, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MyContext } from "./Search";


export const MyContext2 = createContext();

const Movie = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const navigate = useNavigate();

  const { details } = useContext(MyContext);
  
  const handlemoviedetails = () => {
    navigate("moviedetails");
    ref.current?.scrollIntoView({ behavior: "smooth" });
    
  };

  window.onload = function () {
    window.location = "/";
  };
  //   console.log(details.Title);
  return (
    <>
      <MyContext2.Provider value={{ ref2 }}>
        <div
          ref={ref2}
          className=" rounded-lg py-7 mt-10 flex flex-col justify-items-center"
        >
          <img
            onClick={handlemoviedetails}
            alt="Movie Poster"
            src={details.Poster}
            className="rounded-2xl hover:scale-95 hover:cursor-pointer"
          ></img>

          <p className="text-center rounded-lg p-3 mt-5 text-4xl text-sky-950 font-semibold">
           {details.Title}
          </p>
          <button
            onClick={handlemoviedetails}
            className="text-md text-sky-700 font-semibold mt-5 hover:scale-95 rounded-lg bg-white p-1"
          >
            MORE DETAILS
          </button>
        </div>
        <div ref={ref}>
          <Outlet></Outlet>
        </div>
        {/* <ToastContainer/> */}
      </MyContext2.Provider>
    </>
  );
};

export default Movie;