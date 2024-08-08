import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './slices/bankSlice'
export const store = configureStore({
    reducer: {
        bank: bankReducer,
    },
})