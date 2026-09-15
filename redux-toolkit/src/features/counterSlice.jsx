import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 6,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        updatement: (state, actions) => {
            state.value += Number(actions.payload)
        }
    }
})

console.log(counterSlice)

export const { increment, decrement, updatement } = counterSlice.actions

export default counterSlice.reducer