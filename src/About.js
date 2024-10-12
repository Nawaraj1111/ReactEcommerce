// import './css/about.css';
import {Link} from "react-router-dom";
export const About =()=>{
    return(
        <div className="about-us">
        <h1>About us</h1>
        <h1><Link to="/" className="text-deco">Top product</Link></h1>
        </div>
    );
}