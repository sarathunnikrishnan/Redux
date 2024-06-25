import {configureStore } from '@reduxjs/toolkit';
import ColorSlice from './ColorSlice/ColorSlice';
import CountSlice from './CountSlice/CountSlice';
import GetDataSlice from './GetData/GetDataSlice';

export const Store = configureStore({
    reducer : {
        color : ColorSlice,
        count : CountSlice,
        data : GetDataSlice
    }
})