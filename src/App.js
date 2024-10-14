import React, { lazy, Suspense, useTransition } from "react";
import ReactDOM from "react-dom/client";
import { CompanyName } from "./CompanyName";
import { ContactUs } from "./ContactUs";
import { createBrowserRouter, RouterProvider, Outlet, Link, useNavigate } from 'react-router-dom';
import { NotFound } from "./NotFound";
import { Login } from "./Login";
import { Register } from "./Register";
import { Body } from "./Body";
import { Product } from "./Product";
import { CallUs } from "./CallUs";
import { ProductDetails } from "./ProductDetails";
import { Calender } from "./Calender";

const Grocery = lazy(() => import('./Grocery'));

const App = () => {
    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate(); // Get the navigate function

    const handleGroceryClick = () => {
        startTransition(() => {
            // Use navigate to change routes
            navigate('/grocery');
        });
    };

    return (
        <div>
            <div className="navBar">
                <Link to="/" className="text-deco"><CompanyName /></Link>
                <ContactUs />
                <button onClick={handleGroceryClick} disabled={isPending}>
                    {isPending ? 'Loading...' : 'Grocery'}
                </button>    
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
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Body />
            },
            {
                path: 'productDetails/:productId',
                element: <ProductDetails />,
            },
            {
                path: 'contactus',
                element: <CallUs />
            },
            {
                path: 'grocery',
                element: (
                    <Suspense fallback={<h1>Loading Grocery...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: '*', // Catch-all route for unmatched paths
                element: <CallUs />,
            }
        ],
    },
    {
        path: "dommy",
        element: <NotFound />
    },
    {
        path: 'register',
        element: <Register />,
    },
    {
        path: 'calender',
        element: <Calender />
    },
    {
        path: 'product',
        element: <Product />,
    },
    {
        path: 'login',
        element: <Login />,
    },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
