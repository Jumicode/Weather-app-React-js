import { configureStore } from "@reduxjs/toolkit";
import  wheaterReducer  from "../../features/wheater/WheaterSlice";


export const store = configureStore({
    reducer:{
       wheater:wheaterReducer,
    }
})