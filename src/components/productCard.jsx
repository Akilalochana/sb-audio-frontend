import { Link } from "react-router-dom";


// Updated ProductCard component
export default function ProductCard({ item }) {
  return (
    <div className="w-[300px] bg-gray-800 bg-opacity-70 shadow-lg rounded-xl p-4 m-4 hover:shadow-xl hover:bg-opacity-80 transition-all duration-300 text-white">
      <div className="relative">
        <img
          src={item.image[0]}
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <span className={`absolute top-2 right-2 text-sm px-2 py-1 rounded-full ${
          item.availability ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {item.availability ? 'Available' : 'Out of Stock'}
        </span>
      </div>
      <h2 className="text-xl font-semibold mt-4 text-white">{item.name}</h2>
      <p className="text-gray-300 text-sm mt-1 h-12 overflow-hidden">{item.description}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-400">Rs. {item.price}</span>
        <span className="text-sm text-gray-300">{item.category}</span>
      </div>
      <div className="mt-2 text-sm text-gray-400 mb-4">
        <p>Size: {item.dimensions}</p>
      </div>

      <Link 
        to={"/product/"+item.key} 
        className="block w-full text-center mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
      >
        View Details
      </Link>
    </div>
  );
}
