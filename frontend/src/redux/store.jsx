import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from './loginSlice' ;

import ProductReducer from './productSlice'
const store = configureStore({
    reducer : {
        login : LoginReducer,
        product : ProductReducer,
        
    }
})

export default store ;