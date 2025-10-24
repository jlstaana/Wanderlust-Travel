import { Link } from "react-router-dom";

export default function Home() {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80";
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay div for the blue tint */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(15, 143, 217, 0.6)" }}
      ></div>
      
      {/* Content div */}
      <div className="p-12 bg-white bg-opacity-90 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 max-w-2xl z-10 relative m-4">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">
          Welcome to WanderLust!
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Explore amazing destinations and book your dream vacation today.
        </p>
        <div className="space-x-4">
          <Link to="/destinations">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
              Start Exploring
            </button>
          </Link>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
