import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

export const ContactUs = () => {
    return (
        <div className="flex justify-between text-emerald-900">
            <Link to="/contactus">
                <button>Call Us</button>
            </Link>
            <Link to="/register">
                <button>Link Register</button>
            </Link>
            <Link to="/login">
                <button>Sign In</button>
            </Link>
        </div>
    );
};
