import React from 'react';
import {useSelector } from 'react-redux';
import Styles from '../Styles/WeatherMain.scss'
import WeatherSearch from './WeatherSearch';



//Componente principal de la APP 
const WeatherMain = () => {


const {country,weather,list,WeatherTemp } = useSelector((state) => state.weather)





 return (
    
    
        <div className='Container'>

<WeatherSearch></WeatherSearch>



<section className='MainCard'>


<img src={`http://openweathermap.org/img/w/${list.icon}.png`}></img>

<h1> {WeatherTemp.temp}ºC</h1>

<h2>{list.main}</h2>
<p>{list.description}</p>
<h5><i className='bi bi-geo-alt'></i>{weather.name} {country.country}</h5>


</section>




        </div>
    );
}

export default WeatherMain;
