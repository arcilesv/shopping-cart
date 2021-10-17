import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


//Styles
import './Navbar.css'

const Navbar = () => {
    const { total } = useSelector(state => state.shop);
    return(
        <nav className="nav-wrapper">
                <Link to="/" className="brand-logo">EasyShop</Link>

                <ul className="icons-container">
                    <li><Link to="/"><i className="material-icons">store</i></Link></li>
                    <li><Link to="/wish"><i className="material-icons">bookmark</i></Link></li>
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    <li className="total-label">Total: {total.toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</li>
                </ul>
        </nav>
    );
};

export default Navbar;