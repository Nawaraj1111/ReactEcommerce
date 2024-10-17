import { useState } from "react";
import ListItem from "./ListItem"

const Accordian = ({type,show,setShow})=>{
    const showData =()=>
    {
        setShow();
    }
    return(
        <div className="bg-emerald-100 m-1 p-1 w-1/5">
                <div className="" >
                    <div className='flex p-2 '>
                        <h1>{type}</h1>
                        <button onClick={showData}
                        className='bg-yellow-600 mx-10 shadow-md'>select</button>
                    </div>
                </div>
                {show&&<ListItem />}
                
        </div>
        
    )
}

export default Accordian;