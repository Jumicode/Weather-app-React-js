import {createSlice} from '@reduxjs/toolkit'



export const wheaterSlice = createSlice({
    name:'wheater',
    initialState:{
        list:[],    
    },
    reducers:{
//Funciones actualizadoras del estado
setWheater:(state,actions) => {
state.list = actions.payload;
},
  }
})

export  const {setWheater} = wheaterSlice.actions;

export default wheaterSlice.reducer


