import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./color/ColorSlice";

export default configureStore({
    reducer : {
       color : ColorSlice
    }
})