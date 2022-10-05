import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <h1>Navbar for Navigations</h1>
            {/* <Link to="/">Home Page</Link> */}
            {/* <Link to="/about">About Page</Link> */}
            <NavLink to="/"> Home Page</NavLink>
            <NavLink to="/about"> About Page</NavLink>
            <NavLink to="/products"> Products</NavLink>
        </div>
    );
};

export default Navbar;