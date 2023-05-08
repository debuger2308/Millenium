import { createSlice } from "@reduxjs/toolkit";

const filterInputReducer = createSlice({
    name: 'inputValue',
    initialState: {
        inputValue: ''
    },
    reducers:{
        changeInputValue(state, action){
            state.inputValue = action.payload
        }
    }
})

export const {changeInputValue} = filterInputReducer.actions
export default filterInputReducer.reducer