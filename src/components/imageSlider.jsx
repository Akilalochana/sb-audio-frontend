import { useState } from "react";

export default function ImageSlider(props){
    const images = props.images;
    console.log(images)
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return(
        <div className="w-full  h-full flex justify-center flex-col">

            <img src={selectedImage} alt="product" className="w-full h-[450px] object-contain mt-2 mb-1"/>

            <div className="w-full h-[150px] flex justify-center">
                {
                
                    images.map((image,index) =>{
                    return <img key={index} src={image} alt="product" className={`w-[100px] h-[100px] object-cover mr-1 cursor-pointer ${image == selectedImage && "border border-accent"}`} onClick={()=>{
                        setSelectedImage(image)
                    }}/>

                })}

            </div>
        </div>
    )

}