import React from 'react'


function Jokes({j}) {
  return (
    <>
        <h1 className='text-body'>{j.value}</h1>
    </>
  )
}

export default Jokes