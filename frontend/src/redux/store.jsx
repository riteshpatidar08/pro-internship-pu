import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from './loginSlice' ;
import CartReducer from './cartSlice'
import ProductReducer from './productSlice'

import {loadState , saveState} from './localStorage'

const persistedState = loadState();

const store = configureStore({
    reducer : {
        login : LoginReducer,
        product : ProductReducer,
        cart : CartReducer
        
    },
    preloadedState : {
        cart : persistedState
    }
 
})

console.log(store.getState().cart)

store.subscribe(()=>{
    saveState(store.getState().cart)
})
export default store ;