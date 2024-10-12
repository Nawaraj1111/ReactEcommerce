import React from "react";
import ReactDOM from "react-dom/client";
import { CompanyName } from "./CompanyName";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import { createBrowserRouter, RouterProvider, Outlet,Link } from 'react-router-dom';
import { NotFound } from "./NotFound";
import { Login } from "./Login";
import { Register } from "./Register";
import { Body } from "./Body";
import { Product } from "./Product";
import { CallUs } from "./CallUs";
import { ProductDetails } from "./ProductDetails";


const App = () => {
    return (
        <div>
            <div className="navBar">
                <Link to="" className="text-deco"><CompanyName /></Link>
                <About />
                <ContactUs />
            </div>
            <div className="body">
                <Outlet /> 
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
                path:"",
                element:<Body/>
            },
            {
                path: 'product',
                element: <Product />,
            },
            {
                path: 'productDetails/:productId',
                element: <ProductDetails />,
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
        path: 'register',
        element: <Register />,
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: '*', // Catch-all route for unmatched paths
        element: <CallUs />,
    }
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
