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
        <div className="bg-orange-300">
            <div className="m-3 justify-between flex text-emerald-700 bg-orange-300	 ">
                <Link to="/" className="text-rose-900 font-bold  no-underline hover:no-underline hover:text-emerald-300	"><CompanyName /></Link>
                <ContactUs />
                <button className="hover:text-yellow-600" onClick={handleGroceryClick} disabled={isPending}>
                    {isPending ? 'Loading...' : 'Grocery'}
                </button>    
            </div>
            <div className="m-3">
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
                element: <NotFound />,
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
