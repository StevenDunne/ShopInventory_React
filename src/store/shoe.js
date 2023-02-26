import { createSlice } from "@reduxjs/toolkit";

export const shoeSlice = createSlice({
name: "shoe",
initialState: {
    name: '',
    upc: 0,
    quantity:0,
    cost: 0,
    price: 0
},

reducers: {

createShoe: (state, action) => {
    state.name = action.payload.name
    state.upc = action.payload.upc
    state.quantity = action.payload.quantity
    state.cost = action.payload.cost
    state.price = action.payload.price
    console.log('Created new shoe in redux store - now sending to local storage, hopefully')
}

},
});

export const {createShoe} = shoeSlice.actions;

export default shoeSlice.reducer;