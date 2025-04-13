import { Link } from "react-router-dom";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { RetroGrid } from "@/components/magicui/retro-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "@/components/productCard";

export default function Items(){
    const [state, setState] = useState("loading"); // loading, success, error
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
      
    useEffect(() => {
      if(state === "loading"){
        axios.get(`${import.meta.env.VITE_HOST_BACKEND_URL}/api/products`)
          .then((res) => {
            console.log(res.data);
            setItems(res.data);
            setState("success");
          })
          .catch((err) => {
            toast.error(err?.response?.data?.error || "An error occurred");
            setState("error");
          });
      }
    }, [state]);
  
    // Filter items based on category
    const filteredItems = items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filter === "all" || item.category === filter;
      return matchesSearch && matchesCategory;
    });

    const categories = items.length > 0 
      ? ["all", ...new Set(items.map(item => item.category))] 
      : ["all"];
  
    return (
      <div className="min-h-screen w-full flex flex-col bg-[#121212] text-white relative">
        <RetroGrid className="absolute inset-0 opacity-30" />
        
        <div className="relative z-10 w-full px-8 py-6 flex flex-col">
          <h1 className="text-3xl font-bold mb-2">Audio Equipment</h1>
          <p className="text-gray-300 mb-6">Browse our collection of professional audio equipment</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search equipment..."
              className="bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                    filter === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 bg-opacity-70 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
  

        {state === "loading" && (
          <div className="w-full flex-grow flex justify-center items-center relative z-10">
            <div className="w-16 h-16 rounded-full border-4 border-t-blue-600 border-blue-600/30 animate-spin"></div>
          </div>
        )}
  

        {state === "error" && (
          <div className="w-full flex-grow flex justify-center items-center relative z-10">
            <div className="text-center">
              <p className="text-red-500 text-xl mb-4">Failed to load products</p>
              <button 
                onClick={() => setState("loading")} 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
  

        {state === "success" && (
          <div className="w-full flex-grow flex flex-wrap justify-center gap-4 px-4 pb-12 relative z-10">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <ProductCard key={item.key} item={item} />
              ))
            ) : (
              <div className="w-full text-center py-12">
                <p className="text-gray-400 text-xl">No items match your search</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }