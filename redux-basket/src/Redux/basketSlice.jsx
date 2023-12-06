import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name:"basket",
    initialState:{
        basket:[]
    },
    reducers:{
        addToBasket:(state,action)=>{
            const index = state.basket.findIndex((x)=>x.id === action.payload.id)
            if (index === -1) {
                action.payload.count = 1
                state.basket.push(action.payload)
                return
            }
            state.basket[index].count ++
        },
        increment:(state, action)=>{
            const index = state.basket.findIndex((x)=>x.id === action.payload.id)
            state.basket[index].count ++
        },
        decrement:(state, action)=>{
            const index = state.basket.findIndex((x)=>x.id === action.payload.id)
            if (state.basket[index].count === 1) {
                state.basket = state.basket.filter((x)=> x.id !== action.payload.id)
                return
            }
            state.basket[index].count --
        },
    }
})

export const {addToBasket, increment, decrement} = basketSlice.actions

export default basketSlice.reducer