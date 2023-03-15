import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[ {id: 123, text: "Test"},
        {id:456, text: "Hello Word"},
    
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(), //Generate a unique id everytime
                text: action.payload
            };

            state.todos.push(todo)
            //Todos.slice(1,3) - id, position 
            //Todo.splice(1,3)-> changes the original array
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) //list of all items except the item clicked to get deleted
        }

        // updateTodo: (state,action) => {
        /*   state.todos = state.todos.filter((todo) => {
         if(todo.id === action.payload)
            state.todos = state.todos.text or use state
         )}
            
         }*/
        
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer