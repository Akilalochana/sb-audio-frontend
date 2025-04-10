import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative bg-accent text-white">

            <img src="/audiologo.png" alt="logo" className="w-[100px] h-[100px] object-cover absolute left-2"/>

            <Link to="/" className="text-[25px] font-bold m-1">Home</Link>

            <Link to="/contact" className="text-[25px] font-bold m-1">Contact</Link>
            
            <Link to="/gallery" className="text-[25px] font-bold m-1">Gallery</Link>
            
            <Link to="/items" className="text-[25px] font-bold m-1">Items</Link>
            <Link
         to="/booking"
         className="text-[25px] font-bold m-1 absolute right-3"
       >
         <FaCartShopping/>
       </Link>

 
        </header>

    
    )
}