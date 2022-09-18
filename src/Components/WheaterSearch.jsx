import axios from 'axios';
import React from 'react';
import { useDispatch} from 'react-redux';
import { setWheater } from '../features/wheater/WheaterSlice';

import WheaterForm from './WheaterForm';




const WheaterSearch = () => {

 const dispatch = useDispatch();

const getWheater = e =>{
const {name} =  e.target.elements;
  
  const nameCity = name.value;

 const res = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=0d5235392f278c7b5df0b3aac8760431`;
 axios.get(res)
 .then((res) => {
        
    
    console.log(res.data);

   dispatch(setWheater(res.data)) 

})

.catch((err) =>{
console.log(`${err}`);
})
  e.preventDefault();
}



    return (
        <div>

        <WheaterForm getWheater={getWheater} ></WheaterForm>
            
        </div>
    );
}

export default WheaterSearch;
