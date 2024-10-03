import { Products } from "../Utils/Products";
import { Product } from "./Product.js";

export const Body=()=>{
    return(
        <div className="bodyProduct">
            {
                Products.map((product,index)=>{
                    return(
                        <Product key={product.id} product={product}/>
                    );
                })
            }
        </div>
    );
}