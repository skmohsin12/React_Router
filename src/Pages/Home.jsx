import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Home Page</h1>
            <br />
            <button onClick={()=> navigate ("/order-summary")}>Place Order</button>
            <br />
            <br />
            <button onClick={()=> navigate('/about')}>Go to About Page</button>
        </>
    );
};

export default Home;