import axios from 'axios';
import React from 'react';
import { useDispatch} from 'react-redux';
import { setCountry, setList, setWeather, setWeatherTemp } from '../features/wheater/WeatherSlice';

import WeatherForm from './WeatherForm';


const WeatherSearch = () => {

 const dispatch = useDispatch();

const getWeather = e =>{
const {name} =  e.target.elements;
  
  const nameCity = name.value;

 const res = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=0d5235392f278c7b5df0b3aac8760431&units=metric`;
 axios.get(res)
 .then((res) => {
        
    
  
console.log(res.data)
 
dispatch(setWeather(res.data));
dispatch(setList(res.data.weather[0]));
dispatch(setWeatherTemp(res.data.main));
dispatch(setCountry(res.data.sys));
   
})

.catch((err) =>{
alert('Por favor ingrese un nombre valido')
})
  e.preventDefault();
}



    return (
        <div>
       
<WeatherForm getWeather={getWeather}></WeatherForm>
        </div>
    );
}

export default WeatherSearch;
