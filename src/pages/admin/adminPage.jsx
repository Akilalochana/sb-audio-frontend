import React from 'react'
import { MdAutoGraph } from 'react-icons/md';
import { Link, Route, Routes } from 'react-router-dom';

function AdminPage() {
  return (
    <div className='w-full h-screen flex'>

      <div className='w-[300px] h-full bg-green-500'>

        <button className='w-full h-[50px] text-[20px] font-bold bg-red-200 flex justify-center items-center'>
          <MdAutoGraph/>
          Dashboard
        </button>

        <Link to="/admin/bookings" className='w-full h-[50px] text-[20px] font-bold '>
          Bookings
        </Link>

        <Link to="/admin/items" className='w-full h-[50px] text-[20px] font-bold '>
          Items
        </Link>

        <button className='w-full h-[50px] text-[20px] font-bold '>
          reviews
        </button>
      </div> 

      <div className='w-[calc(100vw-300px)] bg-blue-900'>
    
        <Routes path="/*">
            <Route path="/bookings" element={<h1>Bookings</h1>} />
            <Route path="/items" element={<h1>Items</h1>} />
        </Routes>

      </div>
      
    </div>
  )
}

export default AdminPage;