import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {products} from './Reducers/products'

export const store = createStore(products, applyMiddleware(thunk))