import data from '../Components/Assets/all_product';

const initialState = {
    cart: [],
    cartTotal: 0,
    products: data,
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_TO_CART': {
            console.log(state)
            let newCart = [...state.cart, payload]
            const productIndex = newCart.findIndex(product => product.id === payload.id)
            if (productIndex <= -1) {
                newCart = newCart.concat({ ...payload, quantity: 1 })
            } else {
                newCart = newCart.map(product => {
                    if (product.id === payload.id) {
                        return { ...product, quantity: product.quantity + 1 }
                    }
                    return product;
                });
            }
            return {
                ...state,
                cart: newCart,
                cartTotal: state.cartTotal + payload.new_price
            }
        }

        case 'REMOVE_FROM_CART': {
            let newCart = [...state.cart]
            newCart = newCart.filter(product => product.name !== payload.name)
            let newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0)
            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            }
        }

        case 'INCREASE_QUANTITY': {
            const newCart = [...state.cart].map(product => {
                if (product.name === payload.name) {
                    return { ...product, quantity: product.quantity + 1 }
                }
                return product
            })
            let newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0)
            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            }
        }

        case 'DECREASE_QUANTITY': {
            const newCart = [...state.cart].map(product => {
                if (product.name === payload.name) {
                    return { ...product, quantity: product.quantity - 1 }
                }
                return product
            })
            let newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0)
            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            }
        }

        // case 'ADD_TO_WISHLIST': {
        //     return {
        //         ...state,
        //         wishlist: state.wishlist.concat(payload)
        //     }
        // }

        // //////////////////////////////
        // case 'REMOVE_FROM_WISHLIST': {
        //     const newWishlist = [...state.wishlist].filter(recipe => recipe.title !== payload.title)
        //     return {
        //         ...state,
        //         wishlist: newWishlist
        //     }
        // }

        default:
            return state
    }

};



export default reducer;