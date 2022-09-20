import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';


//Componente principal de la APP 
const WheaterMain = () => {


const {list : wheaters } = useSelector((state) => state.wheater)


 return (
        <div>
<h1>{wheaters.name}</h1>
{wheaters.timezone}
<h3>{wheaters.main.humidity}</h3>
<h2>{wheaters.base}</h2>
{wheaters.wind.speed}

        </div>
    );
}

export default WheaterMain;
