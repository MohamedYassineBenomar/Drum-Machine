import { createSlice } from "@reduxjs/toolkit";

const drumreducer = createSlice({
    name:'drum',
    initialState:{
        power:true,
        drum_bank:'Heater Kit',
        volume:100
    },
    reducers:{
        volumeChange:(state,action) =>{

        },
        drumTrig:(state,action) =>{
            
        },
        turnOnOff:(state,action) =>{
            
        }
    }
});

export const {volumeChange , drumTrig , turnOnOff} = drumreducer.actions;

export default drumreducer.reducer;