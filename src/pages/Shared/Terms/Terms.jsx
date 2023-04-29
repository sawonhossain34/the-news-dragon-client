import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores explicabo doloribus saepe harum quos, delectus nisi nesciunt iure ea dolore!</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;