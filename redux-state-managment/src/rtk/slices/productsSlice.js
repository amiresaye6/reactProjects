import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'productsSlice/fetchProducts',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data)
        return data;
    }
)

const productsSlice = createSlice({
    initialState: [{ id: 1, title: 'product 1 :)' }],
    name: 'productsSlice',
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.rejected, (state, action) => {
            //stuff here
            console.log('failed to fetch')
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            //stuff here
            console.log('pending')
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;