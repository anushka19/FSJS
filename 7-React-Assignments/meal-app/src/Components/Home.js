import React, { useState } from 'react'
//import ReactDOM from 'react-dom/client';
import './../index.css';
import Axios from 'axios'

function Home() {

const [recipe, setRecipe] = useState('')



const RecipeDetails = (event) =>{
    setRecipe(event.target.value)
}

const [details,setDetails] = useState({})

const[img,setImg] = useState(false)

const[instructions,setInstructions] = useState({})

const fetchRecipe = async () => {
    const response = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
    const result = response.data
    //console.log(result?.meals[0])
    //console.log(recipe)
    setDetails(result?.meals[0])
    setImg(true)
    setInstructions(result?.meals[0])

}

  return (
    <>
        <div className ='flex flex-col justify-center gap-10'>
            <div className ='flex flex-row justify-center mt-48 gap-10'>
                <input 
                    placeholder ='Search Recipe Name' 
                    type = 'text'
                    value = {recipe}
                    onChange = {RecipeDetails}
                />

                <button 
                    className = 'border-2 border-black ml-10 bg-blue-600 rounded-md text-white p-3'
                    onClick={fetchRecipe}
                
                > Search Recipe</button>

                </div>
                {img && <div className ='flex flex-col content-center items-center'>
                    
                    <img className= 'h-56 w-40 border-none' src = {details.strMealThumb}/>
                    <p>
                    {/* /category, area, instructions  */}
                       <p className='text-center'>{details.strMeal}</p> 
                       
                        {details.strInstructions}
                    </p>
                </div>
                }
                
                
            
        </div>
        
    </>
  )
}

export default Home 