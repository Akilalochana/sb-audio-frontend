import { useState } from "react";

export default function Testing() {

    const [count, setCount] = useState(0);
    const itemName = "coconut";

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-7xl">{count}+{itemName}s</h1>

            <button className="w-[100px] h-[50px] bg-black text-white rounded-lg text-3xl" onClick={
                ()=>{
                   const newCount = count + 1;
                   setCount(newCount);
                }
            }>
                count
            </button>
            <div className="">

            </div>
        </div>
        
    );
}