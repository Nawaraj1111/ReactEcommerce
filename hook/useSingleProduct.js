import { useEffect, useState } from "react";

const useSingleProduct =(productId)=>{
    const [singleProduct, setSingleProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchSingleproduct();
    })
    const fetchSingleproduct =async()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const dataJson = await response.json();
        setSingleProduct(dataJson);
        setLoading(false);
    }   
    return {singleProduct,loading};
}
export default useSingleProduct;