import React from "react";
import ReactDOM from "react-dom/client";
import { CompanyName } from "./CompanyName";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { NotFound } from "./NotFound";
import { Login } from "./Login";
import { Register } from "./Register";
import { Body } from "./Body";
import { Product } from "./Product";
import { CallUs } from "./CallUs";

const App = () => {
    return (
        <div>
            <div className="navBar">
                <CompanyName />
                <About />
                <ContactUs />
            </div>
            <div className="body">
                <Outlet /> {/* Render child routes here */}
            </div>
        </div>
    );
};

// Define your routes
const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path:"home",
                element:<Body/>
            },
            {
                path: 'product',
                element: <Product />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path:'contactus',
                element:<CallUs />
            }
        ],
    },
    {
        path:"dommy",
        element:<NotFound/>
    },
    {
        path: '*', // Catch-all route for unmatched paths
        element: <CallUs />,
    }
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
