import { useState } from "react";
import { Products } from "../Utils/Products";
import { Product } from "./Product.js";
import { useState } from "react";

export const Body=()=>{
    const [listProduct, setListProduct] = useState(Products);

    const HighRated=()=>{
        const filterProduct = listProduct.filter(product=>product.rating.rate>=4.5);
        setListProduct(filterProduct);
    }
    return(
        <>
        <div>
            <button onClick={HighRated}>Top Rated</button>
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