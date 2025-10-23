import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="group transition-all duration-300 ease-in-out">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="transform group-hover:rotate-45 transition-transform duration-300">✈️</span>
          <span className="group-hover:text-blue-200">WanderLust Travel</span>
        </h1>
      </Link>
      
      <div className="space-x-6">
        <Link 
          to="/" 
          className="hover:text-blue-200 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-200"
        >
          Home
        </Link>
        <Link 
          to="/destinations" 
          className="hover:text-blue-200 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-200"
        >
          Destinations
        </Link>
        <Link 
          to="/booking" 
          className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
