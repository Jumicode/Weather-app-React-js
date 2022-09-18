import React from 'react';


const WheaterForm = ({getWheater}) => {

    return (
   <form onSubmit={getWheater} >
      <input type='text' name='name' placeholder='city name'   ></input> 
      <input type='text' name='city country' placeholder='country' ></input> 
      <input type='submit' value='Search'></input>
    </form>
    );
}

export default WheaterForm;
