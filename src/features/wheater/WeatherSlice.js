import {createSlice} from '@reduxjs/toolkit'


export const weatherSlice = createSlice({
    name:'weather',
    initialState:{
       
       weather:[],
       list:[],
       WeatherTemp:[],
       country:[],
    },
    reducers:{

setWeather:(state,actions) => {
  state.weather = actions.payload;
},
setList:(state,actions) => {
  state.list = actions.payload;
 
},
setWeatherTemp:(state,actions) =>{
  state.WeatherTemp = actions.payload;
},
setCountry:(state,actions) =>{
  state.country = actions.payload;
}
  }
})



export  const {setCountry,setWeatherTemp,setList,setWeather} = weatherSlice.actions;

export default weatherSlice.reducer


