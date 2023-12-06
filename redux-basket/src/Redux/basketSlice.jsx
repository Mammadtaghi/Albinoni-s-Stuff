import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../Hooks/useLocalStorage";

initialState = useLocalStorage('basket')

export const basketSlice = createSlice({
    name:"basket",
    initialState: useLocalStorage('basket'),
    reducers:{
        addToBasket:(state,action)=>{
            const index = state.findIndex((x)=>x.id === action.payload.id)
            if (index === -1) {
                action.payload.count = 1
                state.push(action.payload)
                return
            }
            state[index].count ++
        },
        increment:(state, action)=>{
            const index = state.findIndex((x)=>x.id === action.payload.id)
            state[index].count ++
        },
        decrement:(state, action)=>{
            const index = state.findIndex((x)=>x.id === action.payload.id)
            if (state[index].count === 1) {
                state = state.filter((x)=> x.id !== action.payload.id)
                return
            }
            state[index].count --
        },
    }
})

export const {addToBasket, increment, decrement} = basketSlice.actions

export default basketSlice.reducer