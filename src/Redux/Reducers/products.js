import { FETCH_PRODUCTS, ADD_TO_CART, DELETE_FROM_CART,INCREASE_QUANTITY,DECREASE_QUANTITY } from '../Actions/actionTypes'


let initialState = {
    products: [],
    cart: []
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [
                    ...action.data
                ]
            }
        case ADD_TO_CART:
            let itemFound = false;
            let newCartData = state.cart.map((item) => {
                if (item.product_id == action.data.product_id) {
                    itemFound = true;
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            if (itemFound) {
                return {
                    ...state,
                    cart:newCartData
                }
            }else{
            return {
                ...state,
                cart: [
                    ...newCartData,
                    action.data
                ]
            }
        }
        case DELETE_FROM_CART:
            let newCart = state.cart.filter((item) => item.product_id !== action.id)
            return {
                ...state,
                cart: newCart
            }
        case INCREASE_QUANTITY:
            let incrementedCart = state.cart.map((item) =>{
                if (item.product_id == action.id) {
                    return {...item, quantity: item.quantity + 1}
                }
               return item;
            })
            return {
                ...state,
                cart: incrementedCart
            }
        case DECREASE_QUANTITY:
            let decrementedCart = state.cart.map((item) =>{
                if (item.product_id == action.id) {
                    return {...item, quantity: item.quantity - 1}
                }
               return item;
            })
            return {
                ...state,
                cart: decrementedCart
            }
        default:
            return state
    }
} 