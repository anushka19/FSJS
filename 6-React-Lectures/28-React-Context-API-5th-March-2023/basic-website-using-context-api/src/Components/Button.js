import React,{useContext} from 'react'
import { myContext } from '../App'

const Button = () => {
    const data1 = useContext(myContext) //Consumer
  return (
    <>
    <div style={{backgroundColor:data1.color}}> Color entered by {data1.name} </div>
    <input type='submit' value="Submit"/>
    </>
    
  )
}

export default Button