import React from "react";
// import Axios from 'axios';

const Pokemon = ({ details }) => {
  // const x=details?.id;
  // console.log(details?.id);
  // console.log(details?.id);
  const pokemonname = (details?.name).toUpperCase();
  // const pokemonname2=pokemonname.toUpperCase();
  return (
    <>
      <div className="mt-10">
        <div className=" rounded-2xl flex flex-col items-center ">
          <img
            className="w-1/4 hover:cursor-pointer hover:scale-95 hover:bg-gray-400 bg-gray-200 rounded-2xl"
            alt="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${details?.id}.png`}//when using image src in JSX...follow this syntax
          />

          <div className="mt-10 w-6/12 rounded-2xl h-full pb-5 border-black bg-gray-100 text-2xl text-black flex flex-col ">
            <p className="mt-10 py-2 flex flex-row justify-center hover:cursor-pointer text-4xl text-black font-semibold">
              {pokemonname}
            </p>

            <div className="bg-gray-100 mt-10 flex flex-row justify-around">
              <p>ABILITY 1</p>
              <p>{details?.abilities?.[0]?.ability?.name.toUpperCase()}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around ml-[40px]">
              <p>ABILITY 2</p>
              <p>{details?.abilities?.[1]?.ability?.name.toUpperCase()}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around ml-[50px]">
              <p>{details?.stats?.[0]?.stat?.name.toUpperCase()}</p>
              <p>{details?.stats?.[0]?.base_stat}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around ml-m[50px]">
              <p>{details?.stats?.[1]?.stat?.name.toUpperCase()}</p>
              <p>{details?.stats?.[1]?.base_stat}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around">
              <p>{details?.stats?.[2]?.stat?.name.toUpperCase()}</p>
              <p>{details?.stats?.[2]?.base_stat}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around">
              <p className="ml-[-90px]">{details?.stats?.[3]?.stat?.name.toUpperCase()}</p>
              <p>{details?.stats?.[3]?.base_stat}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around">
              <p className="ml-[-90px]">{details?.stats?.[4]?.stat?.name.toUpperCase()}</p>
              <p>{details?.stats?.[4]?.base_stat}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around">
              <p className="mr-45">{details?.stats?.[5]?.stat?.name.toUpperCase()}</p>
              <p>{details?.stats?.[5]?.base_stat}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around">
              <p>HEIGHT</p>
              <p>{details?.height}</p>
            </div>
            <div className="bg-gray-100 mt-10 flex flex-row justify-around">
              <p>WEIGHT</p>
              <p>{details?.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;