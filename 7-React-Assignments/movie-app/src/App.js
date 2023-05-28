import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Movie from "./Components/Movie";
import Search from "./Components/Search";
import MovieDetails from "./Components/MovieDetails";
import Error from "./Components/Error";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Home/><Search/></>}>
          <Route path="/movie" element={<Movie />} >
            <Route path="moviemoredetails" element={<MovieDetails/>} />
          </Route>
        </Route>
        <Route path="*" element={<Error/>}></Route>
        
      </Routes>
    </>
  );
};

export default App;