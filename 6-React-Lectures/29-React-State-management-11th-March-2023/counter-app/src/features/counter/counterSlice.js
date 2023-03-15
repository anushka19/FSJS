
const { createSlice } = require("@reduxjs/toolkit");
//always have some initial val

const initialState = {
    value: 0 // can be db call or api call
    //email
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) =>{
            state.value +=1
            //state.email - based on defined values in initial state
        },
        decrement: (state) => {
            state.value -= 1
        },
        //action => action.type, action.payload
        incrementByValue: (state,action) => {
            state.value += action.payload // we can check whether its a num or string and sanitization - console log and see
        }
    
    }
})

export const {increment,decrement,incrementByValue} = counterSlice.actions
export default counterSlice.reducer
