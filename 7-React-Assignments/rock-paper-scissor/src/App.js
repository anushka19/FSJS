import { useState, useEffect } from "react";
//import {GiRock, GiHand, GiScissors} from "react-icons/gi"
import {FaHandRock, FaHandScissors} from "react-icons/fa"
import {IoMdHand} from "react-icons/io"
///*

function App() {
  const [userchoice, setUserChoice] = useState('')
  const [machineChoice, setMachineChoice] = useState('')
  const [userGameScore, setUserGameScore] = useState(0) //inc and dec
  const [computerGameScore, setComputerGameScore] = useState(0)
  const [gameResult, setGameResult] = useState('') //if else

  const options = ['Rock', 'Paper', 'Scissors']
//user selected option

  //const res = gameResult
  const UserSelectedOptionRock = () =>{
    setUserChoice('Rock')
    randomComputerChoice()
    // Results()
  }

  const UserSelectedOptionPaper = () =>{
    setUserChoice('Paper')
    randomComputerChoice()
    // Results()
  }

  const UserSelectedOptionScissor = () =>{
    setUserChoice('Scissors')
    randomComputerChoice()
    // Results()
  }

  const randomComputerChoice = () =>{
    //const random = ]
    setMachineChoice(options[Math.floor(Math.random() * options.length)])
  }
  
  // useEffect(() =>{
  //   randomComputerChoice()
  // }, [])

  // const increaseScoreBy1 = () => {
  //   setGameScore((score) => score + 1) 
  // }

  // const decrementScoreBy1 = () =>{
  //   setGameScore((score) => score - 1)
  // }
  //*/userchoice, machineChoice
  //const Results 
 useEffect( () => { //rock,paper,scissors

    //rock, scissors
    if(userchoice === 'Rock' && machineChoice === 'Scissors'){ //both nulls,//rock scissors,scissors paper, paper rock -userchpoce else machine
      setGameResult('You Win') 
      // setUserGameScore((score) => ++ score) 
    }
    
    //rock, paper
    else if(userchoice === 'Rock' && machineChoice === 'Paper'){
      setGameResult('Computer Win') 
      // setComputerGameScore((score) => ++ score) 
    }

    else if(userchoice === 'Paper' && machineChoice === 'Rock'){
      setGameResult('You Win') 
      // setUserGameScore((score) => ++ score) 
    }

    else if(userchoice === 'Paper' && machineChoice === 'Scissors'){
      setGameResult('Computer Win') 
      // setComputerGameScore((score) => ++ score) 
    }

    else if(userchoice === 'Scissors' && machineChoice === 'Paper'){
      setGameResult('You Win') 
      // setUserGameScore((score) => ++ score) 
    }

    else if(userchoice === 'Scissors' && machineChoice === 'Rock'){
      setGameResult('Computer Win') 
      // setComputerGameScore((score) => ++ score) 
    }

    //Draw
    else if(userchoice === 'Rock' && machineChoice === 'Rock' ){
      setGameResult('Draw') 
      // setComputerGameScore((score) => score + 0.5) 
      // setUserGameScore((score) => score + 0.5) 
    }
  

    else if(userchoice === 'Paper' && machineChoice === 'Paper'){
      setGameResult('Draw') 
      // setComputerGameScore((score) => score + 0.5) 
      // setUserGameScore((score) => score + 0.5) 
    }

    else if(userchoice === 'Scissors' && machineChoice === 'Scissors'){
      setGameResult('Draw') 
      // setComputerGameScore((score) => score + 0.5) 
      // setUserGameScore((score) => score + 0.5) 
    } 

    // else{
    //   setGameResult('Error') 

    // }
    // else{
    //   setGameResult('Computer Win') 
    //   setComputerGameScore((score) => score + 1) 
    // }
  
  },[userchoice,machineChoice])

  useEffect(() =>{
    if(gameResult === 'You Win'){
      setUserGameScore((score) => ++ score)
    }
      
    else if(gameResult === 'Computer Win'){
        setComputerGameScore((score) => ++ score)
      }

      else if(gameResult === 'Draw'){
        setComputerGameScore((score) => score + 0.5)
        setUserGameScore((score) => score + 0.5)
      }
  },[gameResult])

  // useEffect (() => {
  //   Results()
  // },[])

  return (
  <>
  <div className="flex-col gap-10 justify-center bg-slate-900 h-screen font-mono" >
    <div className="relative top-20 text-center">
    <h1 className="text-white font-bold font-mono text-5xl">Rock Paper Scissors Game</h1>
    <h1 className="text-white pt-10 text-xl font-bold">Please pick any one to play:</h1>
    </div>
    
    <div className="flex gap-20 justify-center mt-36">
    
      <button className="bg-slate-300 text-8xl px-8 rounded-full" onClick={UserSelectedOptionRock}> <FaHandRock/> </button> 
      <button className="bg-slate-300 text-8xl px-8 rounded-full relative top-20" onClick={UserSelectedOptionPaper}> <IoMdHand/></button>
      <button className="bg-slate-300 text-8xl px-8 rounded-full" onClick={UserSelectedOptionScissor}> <FaHandScissors/></button>
    </div>
    <div className="flex gap-10 justify-center mt-20 relative top-10 text-xl font-bold">
        <h1 className="text-white">Your Choice:{userchoice} </h1>
        <h1 className="text-white">Computer's Choice:{machineChoice} </h1>
    </div>
    <h1 className="text-white flex gap-10 justify-center relative top-20 text-xl font-bold">{gameResult}</h1>
    <div className="flex gap-10 justify-center mt-20 text-white relative top-20 text-xl font-bold">
      <h1>Your Score:{userGameScore}</h1>
      <h1>Computer's Score: {computerGameScore}</h1>
    </div>
  </div>
    
  </>
  )
}

export default App;
