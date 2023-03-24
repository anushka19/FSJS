import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

//async, middleware here
export const store = configureStore({
    reducer:{
        todosok: todoReducer
    }
})