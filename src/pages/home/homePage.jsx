import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Home from "./home";
import Gallery from "./gallery";
import Items from "./items";
import Contact from "./contact";
import ErrorNotFound from "./error";
import ProductOverview from "./productOverview";
import BookingPage from "./bookingPage";

export default function HomePage(){
    return(
        <>
            <Header/>
            <div className="h-full w-full bg-[#121212]">
                <Routes path="/*">
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/items" element={<Items/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/" element={<Home/>} />
                    <Route path="/*" element={<ErrorNotFound/>}/>
                    <Route path="/product/:key" element={<ProductOverview/>}/>
                    <Route path="/booking" element={<BookingPage/>}/>

                </Routes>
            </div>
        </>
    )
}