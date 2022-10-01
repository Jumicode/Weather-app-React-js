import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../../features/wheater/WeatherSlice";


export const store = configureStore({
    reducer:{
     weather:WeatherReducer,
        
    }
})