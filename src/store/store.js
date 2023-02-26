import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./stock";
import shoeReducer from './shoe'
// The configureStore function will automatically set up an empty store for you
// with the relevant settings you will need in the future.

//store contains the reducers from balance.js
export default configureStore({
    reducer: {stock: stockReducer,
            shoe: shoeReducer}
            
        });