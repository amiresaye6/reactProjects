import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
    initialState: 1000,
    name: 'bankSlice',
    reducers: {
        widthdraw: (state, action) => {
            return state - action.payload;
        },
        deposit: (state, action) => {
            return state + action.payload;
        }
    }
})

export const {widthdraw, deposit} = bankSlice.actions;
export default bankSlice.reducer;