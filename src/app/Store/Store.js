import { configureStore } from "@reduxjs/toolkit";
import { wheaterSlice } from "../../features/wheater/WheaterSlice";


export const store = configureStore({
    reducer:{
        counter: wheaterSlice,
    }
})