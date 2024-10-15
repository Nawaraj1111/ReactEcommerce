import { useEffect, useState } from "react";
import { Products } from "../Utils/Products";
import { Product, HOF } from "./Product.js";
import { Skeleton } from "./Skeleton.js";
import { Link } from "react-router-dom";

export const Body = () => {
    const [listProduct, setListProduct] = useState([]);
    const [orginalProduct, setOriginalProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        ProductList();
    }, []);

    const ProductList = async () => {
        const data = await fetch('https://fakestoreapi.com/products/');
        const resJson = await data.json();
        setListProduct(resJson);
        setOriginalProduct(resJson);
        setLoading(false);
    }

    const HighRated = async () => {
        const filterProduct = orginalProduct.filter(product => product.rating.rate >= 4);
        setListProduct(filterProduct);
    }
    const LeastRated = () => {
        const filterProduct = orginalProduct.filter(product => product.rating.rate <= 2);
        setListProduct(filterProduct);
    }

    const Reset = () => {
        setListProduct(orginalProduct);
    }

    const ComponentHof = HOF(Product);

    return loading ? (
        <Skeleton />
    ) : (
        <>
            <div className="p-4">
                <div className="flex flex-col md:flex-row items-center mb-4">
                    <input 
                        type="text" 
                        onChange={(e) => setSearch(e.target.value)} 
                        value={search} 
                        className="border rounded-lg py-2 px-4 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3"
                        placeholder="Search products..."
                    />
                    <button 
                        onClick={() => {
                            const searchText = orginalProduct.filter((product) => 
                                product.title.toUpperCase().includes(search.toUpperCase())
                            );
                            setListProduct(searchText.length ? searchText : []);
                        }} 
                        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition"
                    >
                        Search
                    </button>
                </div>
                <div className="flex space-x-2 mb-4 bg-emerald-600">
                    <button 
                        onClick={HighRated} 
                        className="bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-600 transition"
                    >
                        Top Rated
                    </button>
                    <button 
                        onClick={LeastRated} 
                        className="bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-600 transition"
                    >
                        Least Rated
                    </button>
                    <button 
                        onClick={Reset} 
                        className="bg-gray-500 text-white rounded-lg py-2 px-4 hover:bg-gray-600 transition"
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between px-4">
                {
                    listProduct.map((product) => (
                        <Link to={`/productDetails/${product.id}`} key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                            {
                                product.rating.rate <= 4 ? <Product product={product} /> : <ComponentHof product={product} />
                            }
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
