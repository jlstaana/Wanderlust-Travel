import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // check login state

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully.");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white py-6 px-8 flex justify-center items-center shadow-lg">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        {/* Logo / Brand */}
        <Link to="/" className="group transition-all duration-300 ease-in-out">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <span className="transform group-hover:rotate-45 transition-transform duration-300 text-4xl">✈️</span>
            <span className="group-hover:text-blue-200">WanderLust Travel</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
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
            to="/about" 
            className="text-lg hover:text-blue-200 transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-blue-200"
          >
            About
          </Link>
          <Link 
            to="/booking" 
            className="text-lg bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors duration-300 font-semibold"
          >
            Book Now
          </Link>

          {/* 👇 Add Login / Logout Button */}
          {!user ? (
            <Link
              to="/login"
              className="text-lg bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Sign In
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-lg bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Logout ({user.name})
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
