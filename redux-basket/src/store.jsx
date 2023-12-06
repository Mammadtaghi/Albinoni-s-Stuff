import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Redux/basketSlice";

export const store = configureStore({
    reducer:{
        basketStore:basketReducer,
    }
})