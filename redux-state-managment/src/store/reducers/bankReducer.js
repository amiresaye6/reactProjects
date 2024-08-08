import { WIDTHDRAW, DEPOSIT } from '../actions/bank_actions';


export const bankReducer = (state = 1000, action) => {
    switch (action.type) {
        case WIDTHDRAW:
            return state - action.payload;
        case DEPOSIT:
            return state + action.payload;
        default:
            return state;
    }
}