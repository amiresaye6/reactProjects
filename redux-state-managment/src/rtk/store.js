import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './slices/bankSlice'
import productsReducer from './slices/productsSlice'

export const store = configureStore({
    reducer: {
        bank: bankReducer,
        products: productsReducer
    },
})