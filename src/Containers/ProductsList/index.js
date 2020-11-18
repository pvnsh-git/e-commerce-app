import React from 'react'
import {connect} from 'react-redux'
import Product from '../Product'
import './_styles.scss'


function ProductsList(props) {

    return (
        <div className="productContainer ">
            {
                props.productData.map((item,index)=>{
                    return <Product key={index} item={item}/>
                })
            }
        </div>
    )
}
const mapStateToProps = (store) => {
    return {
        productData : store.products
    }
}
export default connect(mapStateToProps)(ProductsList)
