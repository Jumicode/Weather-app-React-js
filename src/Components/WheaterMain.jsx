import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { getWheater } from '../service/AxiosService';


const WheaterMain = () => {


const {list : wheaters } = useSelector((state) => state.wheater)

const dispatch = useDispatch();

useEffect(() => {

   dispatch(getWheater());
   
}, [dispatch]);

 return (
        <div>


            
        </div>
    );
}

export default WheaterMain;
