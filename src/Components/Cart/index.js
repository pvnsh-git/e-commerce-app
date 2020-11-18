import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../CartItem'
import './_styles.scss'

function Cart(props) {
    let subTotal = 0
    props.cartData.map((item) => {
        subTotal = subTotal + (item.price * item.quantity)
    })
    return (
        <>
            <table className="table bg-light">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cartData.map((item, index) => {
                        return <CartItem key={index} item={item} />
                    })}
                </tbody>
            </table>
            <div className="totalContainer">
                <div className="cartTotal">
                    <h3>Cart Total</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>SUBTOTAL</th>
                                <td>${subTotal}</td>
                            </tr>
                            <tr>
                                <th>TOTAL</th>
                                <td>${subTotal}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="checkoutBtn">Proceed To Checkout</button>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (store) => {
    return {
        cartData: store.cart
    }
}
export default connect(mapStateToProps)(Cart)