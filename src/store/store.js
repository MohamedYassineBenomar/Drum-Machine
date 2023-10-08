import { configureStore } from "@reduxjs/toolkit";
import drumReduer from "../reducers/drum-reduer";

const store = configureStore({
    reducer:{
        rootreducer:drumReduer
    }
});

export default store;