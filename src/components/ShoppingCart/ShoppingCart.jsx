import React from 'react';
import { useDispatch } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'

import {ReactComponent as EmptyCartImg} from '../../assets/img/empty-cart.svg';

//Actions
import { removeItem, cleanCart} from '../../actions/actions';

//Styles
import './ShoppingCart.css';

const ShoppingCart = ({ products, total }) => {
    const dispatch = useDispatch();
    const history = useHistory()
    console.log(total);
    // let addedItems = products.length ?
    return (  
        <>
        {
        products.length 
        ? (<>
            <h1>My Cart</h1>
            {products.map(item => (
                <div className="collection-item" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.image} alt={item.image} className="" />
                            </div>
                        
                            <div className="item-desc">
                                <span className="title"><h4>{item.title}</h4></span>
                                <p>Price: {item.price.toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</p> 
                                <p>Quantity: {item.quantity}</p>
                                <p><b>Item Total: {(item.price*item.quantity).toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</b></p> 
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                </div>
                            </div>
                            <div className="action-btn">
                                <button  className="btn-secondary"onClick={()=>dispatch(removeItem(item))}>Remove</button>            
                            </div>
                </div>
            )  
            )}
            <div className="summary-container">
                <div className="summary-details">
                    <h4>Price Summary</h4>
                    <p>Order Subtotal: {total.toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</p>
                    <p>Coupons: $0.00</p>
                    <p>Promotion: $0.00 </p>
                    <p>Standard Shipping: $5.99</p>
                    <p>Estimated Tax (15%): {(total * 0.15).toLocaleString("en-US", { style: 'currency', currency: 'USD' })} </p>
                    <h4>TOTAL: {(total + 5.99 + (total * 0.15)).toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</h4>
                </div>
                <div className="action-btn">
                    <button className="btn-primary">Pay Now</button>            
                    <button className="btn-secondary" onClick={() => dispatch(cleanCart(products))}>Clean Cart</button>            
                </div>
            </div>
            
            </>
          )
        :(
            <div className="empty-cart-container">
                <EmptyCartImg className="empty-cart-img"/>
                <h2>Your shopping cart is empty.</h2>
                <p>Fill it with Clothes, Jewelery, PC Hardware and more!</p>
                <button className="btn-primary" onClick={() => history.push("/")}>Continue Shopping</button>
            </div>
        )
        }
    </>
    );
};

export default ShoppingCart;