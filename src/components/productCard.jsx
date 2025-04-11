import { Link } from "react-router-dom";

export default function ProductCard({ item }) {

    
    return (
        <div className="w-[300px] h-[430px] bg-white shadow-lg rounded-2xl p-4 m-4 hover:shadow-xl transition-shadow duration-300">
            <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            <div className="mt-2 flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">Rs. {item.price}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                    item.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                    {item.availability ? 'Available' : 'Out of Stock'}
                </span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
                <p>Category: {item.category}</p>
                <p>Size: {item.dimensions}</p>
            </div>

            <Link to={"/product/"+item.key} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                viwe details
            </Link>
        </div>
    );
}
