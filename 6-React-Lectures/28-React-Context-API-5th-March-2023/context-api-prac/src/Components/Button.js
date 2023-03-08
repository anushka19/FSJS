import React, {useContext} from 'react'
import { myContext } from "../App"

const Button = () => {
    const data = useContext(myContext)
  return (
    
    <div style={{backgroundColor: data.color}}>Button</div>
  )
}

export default Button