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

<section className='CardHumidity'>
<p>Humidity</p>
<h1>{WeatherTemp.humidity}%</h1>
</section>

<section className='CardPressure'>
<p>Air pressure</p>
<h1>{WeatherTemp.pressure}mb</h1>

</section>




<section className='CardTempMax'>

<p>Temperature max</p>
<h1>{WeatherTemp.temp_max}ºC</h1>

</section>

<section className='CardTempMin'>


<p>Temperature Min</p>

<h1>{WeatherTemp.temp_min}ºC</h1>

</section>


        </div>
    );
}

export default WeatherMain;
