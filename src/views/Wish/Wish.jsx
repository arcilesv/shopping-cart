import React from 'react';
import { useSelector } from 'react-redux';

//Components
import WhishList from '../../components/WishList/WishList';

//Styles
import './Wish.css'

const Whish = () => {
    const products = useSelector(state => state.shop.products);
    return(
        <div className="wish-items-container">
            <WhishList products={products}/>
        </div>
    );
};

export default Whish;