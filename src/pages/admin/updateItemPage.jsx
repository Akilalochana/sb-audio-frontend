import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemPage() {

    const location = useLocation();
    console.log(location);

    const [productKey, setProductKey] = useState(location.state.key);
    const [productName, setProductName] = useState(location.state.name);
    const [productPrice, setProductPrice] = useState(location.state.price);
    const [productCategory, setProductCategory] = useState(location.state.category);
    const [productDimension, setProductDimension] = useState(location.state.dimensions);
    const [productDescription, setProductDescription] = useState(location.state.description);


    const navigate = useNavigate();


  
    async function handleAddItems(){
        console.log(productKey, productName, productPrice, productCategory, productDimension, productDescription);

        const token = localStorage.getItem("token");
        if(token){

            try{


  
            const result =await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productKey}`,{
                key : productKey,
                name : productName,
                price : productPrice,
                category : productCategory,
                dimensions : productDimension,
                description : productDescription

            },{
                headers : {
                    Authorization : "Bearer " + token
                }
            });
            toast.success(result.data.message);
            navigate("/admin/items")

        }catch(err){
            toast.error(err.response.data.error);
        }
        }else{
            toast.error("Please login first");
        }
    }

    return (
        <div className="w-full h-full bg-amber-600 flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">update Item</h1>
            <div className="w-[400px] border-2 p-4 flex flex-col items-center space-y-3 bg-white rounded-lg shadow-lg">
                <input 
                    disabled
                    className="p-2 border rounded w-full"
                    onChange={(e) => setProductKey(e.target.value)} 
                    value={productKey} 
                    type="text" 
                    placeholder="Product Key" 
                />

                <input 
                    className="p-2 border rounded w-full"
                    onChange={(e) => setProductName(e.target.value)} 
                    value={productName} 
                    type="text" 
                    placeholder="Product Name" 
                />

                <input 
                    className="p-2 border rounded w-full"
                    onChange={(e) => setProductPrice(e.target.value)} 
                    value={productPrice} 
                    type="number" 
                    placeholder="Product Price" 
                />

                <select 
                    className="p-2 border rounded w-full"
                    value={productCategory} 
                    onChange={(e) => setProductCategory(e.target.value)}
                >
                    <option value="audio">Audio</option>
                    <option value="lights">Lights</option>
                </select>

                <input 
                    className="p-2 border rounded w-full"
                    onChange={(e) => setProductDimension(e.target.value)} 
                    value={productDimension} 
                    type="text" 
                    placeholder="Product Dimension" 
                />

                <textarea 
                    className="p-2 border rounded w-full"
                    onChange={(e) => setProductDescription(e.target.value)} 
                    value={productDescription} 
                    type="text" 
                    placeholder="Product Description" 
                />

                <button 
                    className="p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600"
                    onClick={handleAddItems}
                >
                    update Item
                </button>
                <button onClick={()=>{navigate("/admin/items")}} className="p-2 bg-red-500 text-white rounded w-full hover:bg-red-600">
                    cancel
                </button>
            </div>
        </div>
    );
}
