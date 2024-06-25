import { createSlice } from "@reduxjs/toolkit";

export const ColorSlice = createSlice({
    name : 'color',
    initialState : {
        value : "green"
    },
    reducers : {
        change_color : (state, action)=> {
            state.value = action.payload.color
        }
    }
})

export const { change_color } = ColorSlice.actions;

export default ColorSlice.reducer;