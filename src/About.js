// import './css/about.css';
import {Link} from "react-router-dom";
 const About =()=>{
    return(
        <div className="bg-emerald-400 justify-between ml-4">
        <h1>About us</h1>
        <h1><Link to="/" className="text-deco">Top product</Link></h1>
        </div>
    );
}

export default About;

