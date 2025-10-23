import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-6 px-8 flex justify-center items-center shadow-lg">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <Link to="/" className="group transition-all duration-300 ease-in-out">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <span className="transform group-hover:rotate-45 transition-transform duration-300 text-4xl">✈️</span>
            <span className="group-hover:text-blue-200">WanderLust Travel</span>
          </h1>
        </Link>
        
        <div className="space-x-8">
          <Link 
            to="/" 
            className="text-lg hover:text-blue-200 transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-blue-200"
          >
            Home
          </Link>
          <Link 
            to="/destinations" 
            className="text-lg hover:text-blue-200 transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-blue-200"
          >
            Destinations
          </Link>
          <Link 
            to="/booking" 
            className="text-lg bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors duration-300 font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
