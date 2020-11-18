import React,{useState} from 'react'
import {connect} from 'react-redux'
import hoody from '../../assets/hoody.jpg'
import {  deleteFromCart,increaseQuantity,decreaseQuantity } from '../../Redux/Actions/products'
import './_styles.scss'
import {toast} from 'react-toastify';

function CartItem(props) {
    let {product_id,product_name,price, quantity} = props.item
    

    const handleDelete = () => {
        toast.warning('Item Removed form Cart',{position: toast.POSITION.TOP_RIGHT}, {autoClose:500})  
        props.dispatch(deleteFromCart(product_id))
    }

    return (
        <tr className="cartItems">
            <td>
            <span onClick={handleDelete} className="deleteIcon"><i className="fa fa-trash" ></i></span>
            </td>
           <td><img src={hoody} alt="hoody"  height='50' width='50' /></td> 
    <td>{product_name}</td> 
    <td>${price}</td> 
    <td className="quantity">
        <button onClick={()=>{quantity > 1 && props.dispatch(decreaseQuantity(product_id))}}>-</button>
        <input type="text" value={quantity} readOnly/>
        <button onClick={()=>{ props.dispatch(increaseQuantity(product_id))}}>+</button>
        </td> 
    <td>${price * quantity}</td> 
        </tr>
    )
}
export default connect()(CartItem)