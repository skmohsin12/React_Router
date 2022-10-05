import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>About Page</h1>
            <br />
            <br />
            <button onClick={()=> navigate('/')}>Back to Home</button>
        </div>
    );
};

export default About;