import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

export const ContactUs = () => {
    return (
        <div className=" m-2">
            <Link to="/contactus">
                <button className='mx-2'>Call Us</button>
            </Link>
            <Link to="/category">
                <button className='mx-2'>Category</button>
            </Link>
            
            <Link to="/register">
                <button className='mx-2'>Link Register</button>
            </Link>
            <Link to="/login">
                <button className='mx-2'>Sign In</button>
            </Link>
        </div>
    );
};
