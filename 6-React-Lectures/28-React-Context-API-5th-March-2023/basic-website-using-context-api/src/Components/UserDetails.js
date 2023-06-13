import React, { useContext } from 'react'
import { myContext } from '../App'


const UserDetails = () => {

    const data = useContext(myContext)
  return (
    <>
        <div>My name is {data.name}</div>
        <div>Color {data.color}</div>
    </>
    
  )
}

export default UserDetails