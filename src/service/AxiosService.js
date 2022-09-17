import axios from "axios"
import { setWheater } from "../features/wheater/WheaterSlice";

export const getWheater = () => (dispatch) =>{

    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0d5235392f278c7b5df0b3aac8760431')
    .then((res) => {
        
      
        console.log(res.data);

        dispatch(setWheater(res.data));

    })

.catch((err) =>{
    console.log(`${err}`);
})
}