
import React from "react/";
import ReactDOM from "react-dom/client";
import { CompanyName } from "./CompanyName";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import { Body } from "./Body";

const Container = ()=>{
    return(
        <>
        <div className="navBar">
        <CompanyName/>
        <About/>
        <ContactUs/>
        </div>
        <div className="body">
            <Body/>
        </div>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);

