import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export default function Header(){
    return(
        <header className="w-full border-b border-b-black h-[70px] flex justify-center items-center relative text-white">

            <img src="/audiologo.png" alt="logo" className="w-[90px] h-[90px] object-cover absolute left-20"/>

            <Link to="/" className="text-[20px] mr-20 text-black" style={{ textDecoration: 'none' }}>Home</Link>

            <Link to="/contact" className="text-[20px] mr-20  text-black" style={{ textDecoration: 'none' }}>Contact</Link>
            
            <Link to="/gallery" className="text-[20px] mr-20  text-black" style={{ textDecoration: 'none' }}>Gallery</Link>
            
            <Link to="/items" className="text-[20px] mr-20  text-black" style={{ textDecoration: 'none' }}>Items</Link>
            <Link
                  to="/booking"
                  className="text-[25px] font-bold m-1  text-black absolute right-3" >
                <FaCartShopping/>
                </Link>

 
        </header>

    
    )
}