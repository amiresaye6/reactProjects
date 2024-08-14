import data from '../Components/Assets/all_product';

const initialState = {
    cart: [],
    cartTotal: 0,
    products: data,
};
const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART': {
            const productIndex = state.cart.findIndex(product => product.id === payload.id);
            let newCart;

            if (productIndex === -1) {
                newCart = [...state.cart, { ...payload, quantity: 1 }];
            } else {
                newCart = state.cart.map(product => {
                    if (product.id === payload.id) {
                        return { ...product, quantity: product.quantity + 1 };
                    }
                    return product;
                });
            }

            const newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0);

            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            };
        }

        case 'REMOVE_FROM_CART': {
            const newCart = state.cart.filter(product => product.id !== payload.id);
            const newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0);

            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            };
        }

        case 'INCREASE_QUANTITY': {
            const newCart = state.cart.map(product => {
                if (product.id === payload.id) {
                    return { ...product, quantity: product.quantity + payload.change };
                }
                return product;
            });

            const newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0);

            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            };
        }

        case 'DECREASE_QUANTITY': {
            const newCart = state.cart.map(product => {
                if (product.id === payload.id) {
                    // Ensure quantity does not go below 1
                    const newQuantity = Math.max(1, product.quantity + payload.change);
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });

            const newCartTotal = newCart.reduce((a, b) => a + b.new_price * b.quantity, 0);

            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            };
        }

        default:
            return state;
    }
};

export default reducer;
