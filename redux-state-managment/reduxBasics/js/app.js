// // console.log(Redux)
// // console.log(ReduxThunk)
// // const action = {
// //     type: 'WIDTHDRAW',
// //     payload: 100
// // }
// // const action2 = {
// //     type: 'DEPOSIT',
// //     payload: 100
// // }

// const WIDTHDRAW = 'WIDTHDRAW';
// const DEPOSIT = 'DEPOSIT';
// const ADD_PRODUCT = 'ADD_PRODUCT';
// const GET_PRODUCTS = 'GET_PRODUCTS'

// // Action Creators
// const widthdraw = ammount => {
//     return {
//         type: WIDTHDRAW,
//         payload: ammount
//     }
// }

// const deposit = ammount => {
//     return {
//         type: DEPOSIT,
//         payload: ammount
//     }
// }

// const addProduct = product => {
//     return {
//         type: ADD_PRODUCT,
//         payload: product
//     }
// }

// const getProducts = (products) => {
//     return {
//         type: GET_PRODUCTS,
//         payload: products
//     }
// }

// const fetchProducts = () => {
//     return async (dispatch) => {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const data = await res.json();
//         dispatch(getProducts(data))
//     }
// }

// // Reducers
// const bankReducer = (state = 1000, action) => {
//     switch (action.type) {
//         case WIDTHDRAW:
//             return state - action.payload;
//         case DEPOSIT:
//             return state + action.payload;
//         default:
//             return state;
//     }
// }

// // const productsReducer = (state = [], action) => {
// //     switch (action.type) {
// //         case ADD_PRODUCT:
// //             return [...state, action.payload];
// //         case GET_PRODUCTS:
// //             return [...state, ...action.payload];
// //         default:
// //             return state;
// //     }
// // }

// // const rootReducer = Redux.combineReducers({
// //     bank: bankReducer,
// //     products: productsReducer
// // })

// // const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk));

// // console.log(store.dispatch(action))
// // console.log(store.dispatch(action2))
// // store.dispatch(widthdraw(100))
// // store.dispatch(widthdraw(150))
// // store.dispatch(deposit(20))
// // console.log(store.getState())
// // store.subscribe(() => {
// //     console.log(store.getState())
// // });
// // @@observable
// // ƒ observable()
// //
// // ƒ dispatch(action)
// // getState
// // ƒ getState()
// // replaceReducer
// // ƒ replaceReducer(nextReducer)
// // subscribe
// // ƒ subscribe(listener)

// let value = document.getElementById('value');
// let amount = document.getElementById('amount');
// const widthdra = document.getElementById('widthdraw')
// const Deposit = document.getElementById('deposit')

// value.innerHTML = store.getState().bank;

// widthdra.addEventListener('click', () => {
//     store.dispatch(widthdraw(+amount.value))
// })
// Deposit.addEventListener('click', () => {
//     store.dispatch(deposit(+amount.value))
//     console.log("h9i")
// })

// store.subscribe(() => {
//     value.innerHTML = store.getState().bank;
// })