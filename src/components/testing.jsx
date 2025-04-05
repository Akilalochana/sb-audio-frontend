import { useState } from "react";
import mediaUplod from "../utils/mediaUplod";


export default function Testing() {
    const [file, setFlie] = useState(null);

    function uploadFile(){
        console.log(file);
        mediaUplod(file).then((url)=>{
            console.log(url);
        })
    }


    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1>
                <input type="file" multiple onChange={(e)=>{setFlie(e.target.files[0])}}/>
                <button onClick={uploadFile} className="bg-[#efac38] ">upload</button>
            </h1>

        
        </div>
        
    );
}