import {createSlice} from '@reduxjs/toolkit'


export const weatherSlice = createSlice({
    name:'weather',
    initialState:{
       
       city:[],
       wind:[],
       Weather:[],
       Main:[],
       forecast:[],
    },
  
    reducers:{

setCity:(state,actions) => {
  state.city = actions.payload;
},
setWind:(state,actions) => {
  state.wind = actions.payload;
 
},
setWeather:(state,actions) =>{
  state.Weather = actions.payload;
},
setMain:(state,actions) =>{
  state.Main = actions.payload;
},

setForecast:(state,actions) =>{
state.forecast = actions.payload;
}
  }
})



export  const {setMain,setWeather,setWind,setCity,setForecast} = weatherSlice.actions;

export default weatherSlice.reducer


