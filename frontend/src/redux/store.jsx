import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from './loginSlice' ;


const store = configureStore({
    reducer : {
        login : LoginReducer,
        
    }
})

export default store ;