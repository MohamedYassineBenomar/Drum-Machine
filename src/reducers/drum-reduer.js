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
            state.volume = action.payload;
        },
        drumTrig:(state,action) =>{
            
        },
        turnOnOff:(state) =>{
            state.power = !state.power;
        }
    }
});

export const {volumeChange , drumTrig , turnOnOff} = drumreducer.actions;

export default drumreducer.reducer;