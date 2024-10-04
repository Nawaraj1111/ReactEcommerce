import { useState } from "react";
import { Products } from "../Utils/Products";
import { Product } from "./Product.js";
import { useState } from "react";

export const Body=()=>{
    const [listProduct, setListProduct] = useState(Products);

    const HighRated=()=>{
        const filterProduct = Products.filter(product=>product.rating.rate>=4);
        setListProduct(filterProduct);
    }
    const LeastRated=()=>{
        const filterProduct = Products.filter(product=>product.rating.rate<=2);
        setListProduct(filterProduct);
    }

    const Reset=()=>{
        const filterProduct = Products.filter(product=>(product.rating.rate>=0 && product.rating.rate<=5));
        setListProduct(filterProduct);
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