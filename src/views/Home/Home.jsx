import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ItemList from '../../components/ItemList/ItemList';

//Styles
import './Home.css';

const Home = () => {
    const products =  useSelector( state => state.shop.products);

    return(
        <div className="products-container">
            <ItemList products={products}/>
        </div>
    );
};

export default Home;