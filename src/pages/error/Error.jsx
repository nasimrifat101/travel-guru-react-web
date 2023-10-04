import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
                 <h1 className="text-[400px] font-black text-center -mt-20 text-gray-800">404</h1>   
                 <h2 className="text-4xl text-gray-800 text-center -mt-32 font-display">page Not found</h2> 
                 <p className="text-2xl text-center mt-10">go <span className="text-green-400 underline"><Link to='/'>Home</Link></span></p>   
        </div>
    );
};

export default Error;