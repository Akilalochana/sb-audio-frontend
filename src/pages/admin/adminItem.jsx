import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";



export default function AdminItem() {
  const [items, setItems] = useState([]);

  const [itemsLoaded, setItemsLoaded] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    if(!itemsLoaded){
      const token = localStorage.getItem("token");
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
        setItemsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [itemsLoaded]);//if item loded change , above all in useeffect things are rerun!

  const handleDelete = (key) => {
    if(window.confirm("Are you sure you want to delete this item?")){
        setItems(items.filter((item) => item.key !== key));
         const token = localStorage.getItem("token");
         axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`, {
            headers: { "Authorization": `Bearer ${token}` }     
        }).then((res) => {
            console.log(res.data);
            setItemsLoaded(false);
        }).catch((err)=>{
            console.log(err);
        })
    }
  };



  return (
    <div className="w-full h-full p-6 bg-gray-50 relative flex items-center flex-col">
      {!itemsLoaded && <div className=" border-4 border-gray-300 border-b-green-600 animate-spin rounded-full my-4 w-[100px] h-[100px]"></div>}
      {itemsLoaded &&<div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Key</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Price</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Dimensions</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Availability</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{product.key}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">${product.price}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{product.dimensions}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${product.availability ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {product.availability ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          navigate('/admin/items/edit', {state:product})
                        }}
                        className="text-indigo-600 hover:text-indigo-900 p-1 rounded hover:bg-indigo-50 transition-colors"
                      >
                        <FiEdit className="w-5 h-5" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.key)}
                        className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                      >
                        <RiDeleteBin6Line className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>}
      <Link to="/admin/items/add" className="fixed right-10 bottom-10">
        <div className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-colors">
          <CiCirclePlus className="w-8 h-8" />
        </div>
      </Link>
    </div>
  );
}