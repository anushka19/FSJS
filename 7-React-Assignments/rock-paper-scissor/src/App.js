import { useState } from "react";
import {GiRock, GiHand, GiScissors} from "react-icons/gi"
import {FaHandRock, FaHandScissors} from "react-icons/fa"
import {IoMdHand} from "react-icons/io"
///*

function App() {
  const [userchoice, setUserChoice] = useState('')
  const [machineChoice, setMachineChoice] = useState('')
  const [gameResult, setGameResult] = useState('') //if else
  const [gameScore, setGameScore] = useState(0) //inc and dec
  const options = ['rock', 'paper', 'scissors']

  //const res = gameResult
  const UserSelectedOption = (options) =>{
    setUserChoice(options)
    randomComputerChoice()
  }

  const randomComputerChoice = () =>{
    const random = options[Math.floor(Math.random() * options.length)]
    setMachineChoice(random)
  }


  const increaseScoreBy1 = () => {
    setGameScore((score) => score + 1) 
  }

  // const decrementScoreBy1 = () =>{
  //   setGameScore((score) => score - 1)
  // }
  //*/
  const Results = (userchoice, machineChoice) => {
    if(userchoice === 'rock' && machineChoice === 'scissors'){ //both nulls,//rock scissors,scissors paper, paper rock -userchpoce else machine
      return 'You Win'
      increaseScoreBy1()
    }
    else{
      console.log('Computer Wins')
      
    }

    if(userchoice === 'scissors' && machineChoice === 'rock'){}
  };

  return (
  <>
  <div className="flex-col gap-10 justify-center bg-slate-900 h-screen font-sans" >
    <div className="relative top-20 text-center">
    <h1 className="text-white font-bold font-mono text-5xl">Rock Paper Scissors Game</h1>
    <h1 className="text-white pt-10 text-xl font-bold">Please pick any one to play:</h1>
    </div>
    
    <div className="flex gap-20 justify-center mt-36">
    
      <button className="bg-slate-300 text-8xl px-8 rounded-full" onClick={UserSelectedOption}> <FaHandRock/> </button> 
      <button className="bg-slate-300 text-8xl px-8 rounded-full relative top-20" onClick={UserSelectedOption}> <IoMdHand/></button>
      <button className="bg-slate-300 text-8xl px-8 rounded-full" onClick={UserSelectedOption}> <FaHandScissors/></button>
    </div>
    <div className="flex gap-10 justify-center mt-20 relative top-10 text-xl font-bold">
        <h1 className="text-white">Your Choice:{userchoice} </h1>
        <h1 className="text-white">Computer's Choice:{machineChoice} </h1>
    </div>
    <h1 className="text-white flex gap-10 justify-center relative top-20 text-xl font-bold">Who Won!!</h1>
    <div className="flex gap-10 justify-center mt-20 text-white relative top-20 text-xl font-bold">
      <h1>Your Score:</h1>
      <h1>Computer's Score:</h1>
    </div>
  </div>
    
  </>
  )
}

export default App;
