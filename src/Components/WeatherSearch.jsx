import axios from 'axios';
import React from 'react';
import { useDispatch} from 'react-redux';
import { setCity, setForecast, setMain, setWeather,  setWind } from '../features/wheater/WeatherSlice';

import WeatherForm from './WeatherForm';


const WeatherSearch = () => {

 const dispatch = useDispatch();

const getWeather = e =>{
const {name} =  e.target.elements;

  const nameCity = name.value;

 const res = `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=bf198ed79d99f2837e93d584c7884149&units=metric&cnt=5`;
 
 axios.get(res)

 
 
 .then((res) => {
        
    

console.log(res.data)

dispatch(setCity(res.data.city));
dispatch(setWeather(res.data.list[0].weather[0]));
dispatch(setMain(res.data.list[0].main));
dispatch(setWind(res.data.list[0].wind));

dispatch(setForecast(res.data.list));

   
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

