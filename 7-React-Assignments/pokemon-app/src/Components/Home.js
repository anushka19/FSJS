import React, { useState } from "react";
import Axios from "axios";

import "./../index.css";

//image, id, name, strength

//https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
const Home = () => {
  const [pokemon, setPokemon] = useState("");

  const fetchPokemon = async () => {
    const response = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
  };

  return <div>Home</div>;
};

export default Home;
