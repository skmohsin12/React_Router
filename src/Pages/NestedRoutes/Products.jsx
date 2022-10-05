import React from 'react';
import '../NestedRoutes/Products.css'
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <>
        <div>
            <br />
            <br />
            <input type="search" placeholder='Search Products' />
        </div>
        <nav>
            {/* Note do not include forward slash / for nested routed as   to='/featured' etc not use / */}
            <br />
            <Link className='link' to='featured'>Featured</Link>
            <Link className='link' to='new'>New</Link>
        </nav>
        <Outlet />
        </>
    );
};

export default Products;