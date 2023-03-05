import React, { useState, useEffect } from 'react'

export default function App(){
  const [resourceType,setResourceType] = useState('posts')
  //const [windowWidth,setwindowWidth] = useState(window.innerWidth)
  //const [items,setItems] = useState([])
  //console.log('render'); - to check how many times render runs
  //useeffects render everytime
  useEffect(() => {
    console.log("resource changed")

    return () =>  {
      console.log('return from resource change');
    }//it will first run the return code then the react code, to clean up the prev things
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))
   
  },[resourceType]) //whenever teh resource type changes it will render again, when the ddefault type is changed then only to render
  // const handleResize = () => {
  //   setwindowWidth(windowWidth.innerWidth)
  // }
  // useEffect( () =>{
  //   window.addEventListener('resize', handleResize)

  //   return () =>{
  //     window.removeEventListener('resize',handleResize)
  //   } 
  // },[])
  return (
    // <div>{windowWidth}

    // </div>
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {/*items.map(item =>   {
      return <pre>{JSON.stringify(item)} </pre>
    })} */}
    </>
  );

  }

//state change, props change