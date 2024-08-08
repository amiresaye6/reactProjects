import { ADD_PRODUCT, GET_PRODUCTS } from "../actions/products_actions";

export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        case GET_PRODUCTS:
            return [...state, ...action.payload];
        default:
            return state;
    }
}
