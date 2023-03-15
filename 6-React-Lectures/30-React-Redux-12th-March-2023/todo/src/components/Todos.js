//Listing all todos and removing
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../features/todoSlice'


function Todos() {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
  return (
    <>
        {
            todos.map((todo) => (
                <div className ='flex justify-center items-center flex-col min-h-screen gap-6'>
                    <h1 key={todo.id}>{todo.text}</h1>
                    <button 
                    className ='text-white font-semibold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'
                    onClick={() => dispatch(removeTodo(todo.id))}
                    >Delete</button>
                </div>
            ))
        }
    </>
  )
}

export default Todos