import { useState } from 'react'
import './App.css'
import { MdBluetoothAudio } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";

function App() {
 
  return (
    <div className='w-full h-screen flex'>
      <div className='w-[300px] h-full bg-green-500'>
        <button className='w-full h-[50px] text-[20px] font-bold bg-red-200 flex justify-center items-center'>
          <MdAutoGraph/>
          Dashboard
        </button>

        <button className='w-full h-[50px] text-[20px] font-bold '>
          Bookings
        </button>

        <button className='w-full h-[50px] text-[20px] font-bold '>
          Items
        </button>

        <button className='w-full h-[50px] text-[20px] font-bold '>
          reviews
        </button>
      </div> 


      <div className='w-full bg-red-900'>
        <MdBluetoothAudio className= 'text-[300px] text-white'/>

      </div>
      
    </div>
  );
}

export default App
