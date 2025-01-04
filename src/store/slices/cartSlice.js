import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state, action)
        {
            const id = action.payload.id;
            const index = state.findIndex(ele=>ele.id === id);
            //If element found
            if(index !== -1)
            {
                state[index] = {
                    ...state[index],
                    quantity:(state[index].quantity + 1) 
                }
            }
            else
            {
                const newCartItem = {
                    ...action.payload,
                    quantity: 1
                }
                state.push(newCartItem);
            }
        },
        removeFromCart(state, action)
        {
            const id = action.payload;
            const index = state.findIndex(ele=>ele.id === id);
            state.splice(index, 1);
        },

        reduceTheItemQuantity(state, action){
            const id = action.payload;
            const index = state.findIndex(ele=>ele.id === id);
            //If element found
            if(index !== -1)
            {
                state[index] = {
                    ...state[index],
                    //Making sure that quantity is not negative
                    quantity:(state[index].quantity - 1)?(state[index].quantity - 1): 1
                }
            }
        },
        increaseTheItemQuantity(state, action){
            const id = action.payload;
            const index = state.findIndex(ele=>ele.id === id);
            //If element found
            if(index !== -1)
            {
                state[index] = {
                    ...state[index],
                    //Making sure that quantity is not negative
                    quantity:(state[index].quantity + 1)
                }
            }
        }
    }

});

export const cartReducer = cartSlice.reducer;
export const {addToCart, removeFromCart, reduceTheItemQuantity, increaseTheItemQuantity} = cartSlice.actions;