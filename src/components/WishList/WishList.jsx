import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import wishImg from '../../assets/img/empty-wish.png';

//Actions
import { toggleWishList } from '../../actions/actions';

//Styles
import './WishList.css';

const WhishList = ({products =[]}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const wishList = products.filter(item => item.wish === true);
    return (  
        <>
        {
        wishList?.length
        ? (<>
            <h1>My Wish List</h1>
            {wishList.filter(item => item.wish === true).map(item => (
                <div className="collection-item" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.image} alt={item.image} className="" />
                            </div>
                            <div className="item-desc">
                                <span className="title"><h4>{item.title}</h4></span>
                                <p>Price: {item.price.toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</p> 
                                <p>Stock: {item.stock}</p>
                            </div>
                            <div className="action-btn">
                                <button  className="btn-secondary" onClick={() => dispatch(toggleWishList(item))}>Remove</button>            
                            </div>
                </div>
            )  
            )}
            </>
          )
        : (
            <div className="empty-cart-container">
                <img src={wishImg} alt="empty-wish" className="empty-wish-img" />
                <h2>Your Wishlist is empty.</h2>
                <p>Fill it with Clothes, Jewelery, PC Hardware and more!</p>
                <button className="btn-primary" onClick={() => history.push("/")}>Continue Shopping</button>
            </div>
          )
        }
    </>
    );

};

export default WhishList;