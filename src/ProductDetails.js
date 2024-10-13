import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';
import './css/productDetails.css'
import useSingleProduct from "../hook/useSingleProduct";

export const ProductDetails = () => {
    const { productId } = useParams(); // Ensure this matches your route definition
    const {singleProduct,loading} = useSingleProduct(productId);

    if(!singleProduct) return <p> product ......</p>
    if(loading) return <p>Loading is......</p>

    const {id,title,price,image,rating,description}=singleProduct;


    return(
        <div className="productDetails">
        <p>Id: {id}</p>
        <img src={image} />
        <p>{title} </p>
        <p>{description}</p>
        <p>price:{price} </p>
        <p>Rating:{rating.rate}/5 By {rating.count} people</p>
        {/* <p>price:Rs {price}</p> */}
        <button>pay now</button>
    </div>
    )

};