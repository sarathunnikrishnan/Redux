import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInfo = createAsyncThunk('api/getdata', ( )=>{
    const url = 'https://jsonplaceholder.typicode.com/todos';
       return axios.get(url)
       .then(response => response.data)
})

export const GetDataSlice = createSlice({
    name : 'data',
    initialState : {
        data : [],
        loading : false,
        error : ''
    },
    reducers: {},
    extraReducers : {
        [getInfo.fulfilled] : (state, action) => {
            state.loading = false
            state.data = action.payload;
        },
        [getInfo.pending] : (state, action) => {
            state.loading = true
        },
        [getInfo.rejected] : (state, action) => {
            state.loading = false
            state.error = "Error"
        }
    }
})


export default GetDataSlice.reducer