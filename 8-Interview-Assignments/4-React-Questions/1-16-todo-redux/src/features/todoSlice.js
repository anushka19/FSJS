import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[]
    // {id: 123, text: "Test"},
    //     {id:456, text: "Hello Word"},
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            const newtodo = {
                id: nanoid(), //Generate a unique id everytime
                text: action.payload
            };

            state.todos.push(newtodo);
            //Todos.slice(1,3) - id, position 
            //Todo.splice(1,3)-> changes the original array
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) //list of all items except the item clicked to get deleted
        },
        removeAll:(state)=>{
            state.todos=[];
        },

        //  updateTodo: (state,action) => {
        //     //state.todos = state.todos.filter((todo) => {
        //     // const index = state.todos.findIndex(todo => todo.id === action.payload)
        //     // const editTodo= [...state.todos]
        //     // editTodo[index].text = action.payload.text
        //  if(state.todo.id === action.payload)
        //     state.todos.text =  action.payload.text  //or use state
        
            
        //  }
        
    }
})

export const {addTodo, removeTodo,removeAll} = todoSlice.actions

export default todoSlice.reducer