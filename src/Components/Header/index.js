import React from 'react'
import {Link} from 'react-router-dom'
import  './styles.scss'

export default function Header() {
    return (
        <div className="headerContainer">
            <h1>Seller</h1>
            <hr/>
            <ul className ='headerList'>
                <li><Link to="/">T-Shirts</Link></li>
                <li><Link to="/">Hoodies</Link></li>
                <li><Link to="/">Posters</Link></li>
                <li><Link to="/">Albums</Link></li>
                <li><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></li>
            </ul>
        </div>
    )
}
