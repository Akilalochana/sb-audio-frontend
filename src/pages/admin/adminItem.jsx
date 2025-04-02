const sampleArr = [
    {
        key: "gem001",
        name: "Ruby",
        price: 500,
        category: "Precious",
        dimensions: "10mm x 8mm",
        description: "A stunning deep red ruby, perfect for fine jewelry.",
        availability: true,
        image: ["https://example.com/images/ruby.jpg"]
    },
    {
        key: "gem002",
        name: "Sapphire",
        price: 450,
        category: "Precious",
        dimensions: "9mm x 7mm",
        description: "A beautiful blue sapphire with excellent clarity.",
        availability: true,
        image: ["https://example.com/images/sapphire.jpg"]
    },
    {
        key: "gem003",
        name: "Emerald",
        price: 600,
        category: "Precious",
        dimensions: "11mm x 9mm",
        description: "A high-quality emerald with a rich green hue.",
        availability: true,
        image: ["https://example.com/images/emerald.jpg"]
    },
    {
        key: "gem004",
        name: "Amethyst",
        price: 150,
        category: "Semi-Precious",
        dimensions: "12mm x 10mm",
        description: "A vibrant purple amethyst, perfect for collectors.",
        availability: true,
        image: ["https://example.com/images/amethyst.jpg"]
    },
    {
        key: "gem005",
        name: "Topaz",
        price: 200,
        category: "Semi-Precious",
        dimensions: "14mm x 10mm",
        description: "A bright yellow topaz with a brilliant cut.",
        availability: true,
        image: ["https://example.com/images/topaz.jpg"]
    }
];


import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function AdminItem() {

    const [items, setItems] = useState(sampleArr);

    return(
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimensions</th>
                    <th>Availability</th>

                </thead>
                <tbody>
                    {
                        items.map((product, index)=>{
                            console.log(product);
                            return (
                                <tr key={index}>
                                    <td>{product.key}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.availability}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Link to="/admin/items/add">
                <CiCirclePlus className="text-[50px] absolute right-10 bottom-10 hover:text-red-900"/>
            </Link>

        </div>
        
    )
}