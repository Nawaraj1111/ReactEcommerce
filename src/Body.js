import { useEffect, useState } from "react";
// import { Products } from "../Utils/Products";
import { Product } from "./Product.js";
import { useState } from "react";
import { Skeleton } from "./Skeleton.js";
export const Body=()=>{
    const [listProduct, setListProduct] = useState([]);
    const [orginalProduct, setOriginalProduct] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        ProductList();
    },[]);

   

    const ProductList = async()=>{
        const data=await fetch('https://fakestoreapi.com/products/')
        const resJson = await data.json();
        setListProduct(resJson);
        setOriginalProduct(resJson);
        setLoading(false);
    }


    const HighRated=async()=>{
        const filterProduct = orginalProduct.filter(product=>product.rating.rate>=4);
        setListProduct(filterProduct);
    }
    const LeastRated=()=>{
        const filterProduct = orginalProduct.filter(product=>product.rating.rate<=2);
        setListProduct(filterProduct);
    }

    const Reset=()=>{
        const filterProduct = orginalProduct.filter(product=>(product.rating.rate>=0 && product.rating.rate<=5));
        setListProduct(filterProduct);
    }

    if(loading)
        {
            return <Skeleton/>;
        }
    return(
        <>
        <div>
            <button onClick={HighRated}>Top Rated</button>
            <button onClick={LeastRated}>Least Rated</button>
            <button onClick={Reset}>Reset</button>
        </div>
       
        <div className="bodyProduct">
            {
                listProduct.map((product,index)=>{
                    return(
                        <Product key={product.id} product={product}/>
                    );
                })
            }
        </div>
        </>
        
    );
}