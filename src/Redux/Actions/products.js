import {FETCH_PRODUCTS, ADD_TO_CART, DELETE_FROM_CART,INCREASE_QUANTITY,DECREASE_QUANTITY} from './actionTypes'

export const fetchProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/products')
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type: FETCH_PRODUCTS,
                data
            })
        })
    }
}
export const addToCart = (data) => {
    return {
        type:ADD_TO_CART,
        data
    }
}
export const increaseQuantity = (id) => {
    return {
        type:INCREASE_QUANTITY,
        id
    }
}
export const decreaseQuantity = (id) => {
    return {
        type:DECREASE_QUANTITY,
        id
    }
}
export const deleteFromCart = (id) => {
    return {
        type:DELETE_FROM_CART,
        id
    }
}