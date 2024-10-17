import Accordian from "./Accordian.js"
import { useState } from "react";

const Category = ()=>{
    const [show, setShow] =useState(null);

    return(
        <div className="">
            <h1 className="text-2xl text-black">Filter option</h1>
            {
                ["Title","Mens","Womens","Child"].map((title,index)=>(
                    <Accordian 
                    type={title} 
                    key={index} 
                    show={index===show}   
                    setShow={()=>setShow(index)}
                />
                ))
            }
            
        </div>
    )
}
export default Category;