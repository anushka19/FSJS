//Listing all todos and removing
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  removeAll
  
} from "../features/todoSlice";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";


function Todos() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todosok.todos);
  const dispatch = useDispatch();
  return (
    <>
    <div className="mt-20 flex flex-row justify-center gap-3 justify-items-center">
      <input
        type="text"
        className="bg-slate-50  rounded border border-slate-500 focus:border-slate-300 focus:ring-2 focus:ring-slate-500 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter text here ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
        onClick={() => dispatch(addTodo(text))}
      >
        Add Note
      </button>
      </div>


      <div >
        {todos.map((todo) => (
          <>
          <div className="mt-20 flex flex-row justify-center gap-3 justify-items-center">
            <h1 className="text-black" key={todo.id}>
              {todo.text}
            </h1>
            <button
              className="text-white font-semibold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              
            <FaTrash/>
              
            </button>
            </div>
            
                {/* <button
                className="text-white font-semibold bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
                onClick={() => dispatch(updateTodo(todo.id,todo.text))}> 
                Update
            </button> */}
          </>
        ))}
      </div>
      
      {
        todos.length >= 2 && (
          <>
          <div className="mt-20 flex flex-row justify-center gap-3 justify-items-center">
        
            <button
              className="text-white font-semibold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              onClick={() => dispatch(removeAll())}
            >
              Delete All
            </button>
            </div>
            </>
        )
      }
    </>
  );
}

//   {/*  */}
export default Todos;
