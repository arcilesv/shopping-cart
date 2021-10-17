import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

//Styles
import './Shop.css'

const Shop = () => {
    const shop = useSelector(state => state.shop.shopping);
    const total = useSelector(state => state.shop.total);
    return(
        <div className="shop-items-container">
            <ShoppingCart products={shop} total={total}/>
        </div>
    );
};

export default Shop;
