import { createSlice } from "@reduxjs/toolkit";


export const CountSlice = createSlice({
    name : 'count',
    initialState : {
        value : 0
    },
    reducers : {
        increase_count : (state)=> {
            state.value += 1
        }
    }
})

export const { increase_count} = CountSlice.actions;

export default CountSlice.reducer;