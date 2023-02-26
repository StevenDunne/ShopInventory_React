import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
name: "Current Stock",
initialState: {
stock: []
},

reducers: {

addStock: (state, action) => {
    console.log(action.payload)
    let newStockItem = JSON.stringify(action.payload)
    state.stock = newStockItem
    console.log('the redux store has saved the stock')
}

// incorrectGuess: (state) => {
//         state.imgSrc += 1;
//         console.log(`${state.imgSrc} incorrect guesses`)        
//     },



// setWord: (state, action) => {
//     state.word = action.payload
//     console.log(action.payload)
// },


},
});

export const {addStock} = stockSlice.actions;

export default stockSlice.reducer;