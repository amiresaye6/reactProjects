export const WIDTHDRAW = 'WIDTHDRAW';
export const DEPOSIT = 'DEPOSIT';


export const widthdraw = ammount => {
    return {
        type: WIDTHDRAW,
        payload: ammount
    }
}

export const deposit = ammount => {
    return {
        type: DEPOSIT,
        payload: ammount
    }
}