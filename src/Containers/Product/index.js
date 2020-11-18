import React from 'react'
import {connect } from 'react-redux'
import hoody from '../../assets/hoody.jpg'
import { addToCart } from '../../Redux/Actions/products'
import './_styles.scss'
import {toast} from 'react-toastify';

function Product(props) {
    const handleAddCart = () => {
        toast.success('Added to Cart',{position: toast.POSITION.TOP_RIGHT}, {autoClose:500})  
        props.dispatch(addToCart({...props.item, quantity:1}))
    }
    return (
        <div className='product'>
            <div>
                <img src={hoody} height='100' width='100' alt={props.item.product_name} />
                <p className="productName">{props.item.product_name}</p>
                <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                <div>
                ${props.item.price}
                </div>
                <button className="button" onClick={handleAddCart}>Add to Cart</button>
            </div>
        </div>
    )
}
export default connect()(Product)