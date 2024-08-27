import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='nav__bar'>
            <ul className='unoreder__list'>
                <li><Link className='textdec' to="/">Home</Link></li>
                <li><Link className='textdec' to="/about">About</Link></li>
                <li><Link className='textdec' to="/services">Services</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;
