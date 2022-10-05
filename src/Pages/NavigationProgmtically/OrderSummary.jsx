import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>Order Confirmed</h3>

            <button onClick={()=> navigate("/")}>Back to Home</button>
        </div>
    );
};

export default OrderSummary;