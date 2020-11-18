import React, { useEffect } from 'react'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import ProductsList from '../Containers/ProductsList'
import { fetchProducts } from '../Redux/Actions/products'
import Cart from './Cart'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App(props) {

  useEffect(() => {
    props.dispatch(fetchProducts())
  }, [])

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      
    </div>
  )
}
export default connect()(App)