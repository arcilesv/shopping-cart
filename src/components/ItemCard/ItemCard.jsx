import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, toggleWishList } from '../../actions/actions'

import './ItemCard.css';

const ItemCard = ({ product={} }) => {
    const dispatch =  useDispatch();
    return(
        <>
        <div className="product-card">
            <div className="photo">
                <img src={product.image} alt={product.title}/>
            </div>
            <div className="description">
                <h4>{product.title}</h4>
                <h4>Stock: {product.stock}</h4>
                <h1>{product.price?.toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</h1>
                {product.stock>0
                ?(
                    <div className="button-container">
                        <button className="btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                        <button className="btn-primary" onClick={() => dispatch(toggleWishList(product))}>Wishlist</button>
                        {product.wish && <span className="wish-item">Wished</span>}
                    </div>    
                )
                : (
                    <div className="button-container">
                        <button className="btn-disable" disabled={true}>Add to Cart</button>
                        <button className="btn-disable" disabled={true}>Wishlist</button>
                        <span className="out-stock">Out Stock</span>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default ItemCard;