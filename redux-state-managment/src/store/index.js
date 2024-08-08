import { createStore, combineReducers, applyMiddleware } from "redux"
import { bankReducer } from "./reducers/bankReducer"
import { productsReducer } from "./reducers/productsReducer"
import { thunk } from 'redux-thunk'


const appReducser = combineReducers({
    bank: bankReducer,
    products: productsReducer
});

export const store = createStore(appReducser, applyMiddleware(thunk));
