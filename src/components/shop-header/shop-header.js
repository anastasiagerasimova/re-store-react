import React from 'react' 
import {Link} from "react-router-dom"
import {connect} from 'react-redux'

import './shop-header.css'

const ShopHeader = ({cartItems, totalPrice}) => {
    const totalItems = cartItems.reduce((accum, item) => {
        return accum+=item.count
    }, 0)
    return(
        <header className="row shop-header">
            <Link to="/" className="logo text-dark">ReStore</Link>
            <Link  to="/cart" className="shopping-cart"> 
                <i className="cart-icon fa fa-shopping-cart" />
                {totalItems} items (${totalPrice})
            </Link>
        </header>
    )
}

const mapStateToProps = (state) => {
    return{
        cartItems: state.cartItems,
        totalPrice: state.orderTotal,
    }
}

export default connect(mapStateToProps)(ShopHeader)