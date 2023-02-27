import React, { useState, useEffect } from 'react'

export default function App(){
  const [resourceType,setResourceType] = useState('posts')
  //useeffects render everytime
  useEffect(() => {
    console.log("render")
  })
  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
  );

}

