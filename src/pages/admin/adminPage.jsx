import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";

import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";
import AdminOrdersPage from "./adminBooking";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminItem from "./adminItem";

export default function AdminPage() {
  const [userValidated, setUserValidated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const validateUser = async () => {
      const token = localStorage.getItem("token");
      
      // Skip validation during development or for testing
      // Remove this if you want to always require authentication
      if (import.meta.env.DEV) {
        setUserValidated(true);
        setLoading(false);
        return;
      }
      
      if (!token) {
        setUserValidated(false);
        setLoading(false);
        // Don't redirect immediately, let the component handle it
        return;
      }
      
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        const user = res.data;
        if (user.role === "admin") {
          setUserValidated(true);
        } else {
          setUserValidated(false);
        }
      } catch (err) {
        console.error(err);
        setUserValidated(false);
      } finally {
        setLoading(false);
      }
    };
    
    validateUser();
  }, []);
  
  // Show loading while checking authentication
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  // If not validated, show a message with login link instead of redirecting
  if (!userValidated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
        <p className="mb-4">You need to be logged in as an admin to view this page</p>
        <Link to="/login" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Go to Login
        </Link>
      </div>
    );
  }
  
  return (
    <div className="w-full h-screen flex">
      <div className="w-[200px] h-full bg-green-200">
        <Link to="/admin" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <BsGraphDown className="mr-2" />
          Dashboard
        </Link>
        <Link to="/admin/orders" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegBookmark className="mr-2" />
          Orders
        </Link>
        <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <MdOutlineSpeaker className="mr-2" />
          Items
        </Link>
        <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegUser className="mr-2" />
          Users
        </Link>
        <Link to="/items" className="w-full h-[40px] text-[20px] font-bold flex justify-center mt-8 items-center">
          Go to customer home page
        </Link>
      </div>
      
      <div className="w-[calc(100vw-200px)] p-4">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrdersPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="items" element={<AdminItem />} /> 
          <Route path="items/add" element={<AddItemPage />} />
          <Route path="items/edit" element={<UpdateItemPage />} />
        </Routes>
      </div>
    </div>
  );
}

// Simple dashboard component
function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Use the sidebar to navigate to different sections.</p>
    </div>
  );
}