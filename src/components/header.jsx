import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export default function Header(){
    return(
        <header className="w-full border-b border-b-black h-[70px] flex justify-center items-center relative text-white bg-[#121212]">

            <img src="/audiologo.png" alt="logo" className="w-[90px] h-[90px] object-cover absolute left-20"/>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mr-130">SB AUDIO</h1>

            <Link to="/" className="text-[20px] mr-20 " style={{ textDecoration: 'none' }}>Home</Link>

            <Link to="/contact" className="text-[20px] mr-20  " style={{ textDecoration: 'none' }}>Contact</Link>
            
            <Link to="/gallery" className="text-[20px] mr-20  " style={{ textDecoration: 'none' }}>Gallery</Link>
            
            <Link to="/items" className="text-[20px] mr-20  " style={{ textDecoration: 'none' }}>Items</Link>
            <Link
                  to="/booking"
                  className="text-[25px] font-bold m-1   absolute right-3" >
                <FaCartShopping/>
                </Link>

 
        </header>

    
    )
}