import React from 'react'

function Card({myname,list, deti}) {
  //props - details, list used to destructure the data
  // console.log(props);
  return (
    <>
      This is a card
      <div>
        myname
    
      </div>
      <h1>{deti.gender}</h1>

      <h2>{deti.name?.first}</h2>
      <ul>
        {list.map(h => (
           <li key={h}>{h}</li>
        ))}
        
         
      </ul>
      
      </>
  )
}

export default Card;