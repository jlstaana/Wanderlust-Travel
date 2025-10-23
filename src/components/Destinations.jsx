const destinations = [
  { id: 1, name: "Paris", price: 1200 },
  { id: 2, name: "Bali", price: 1500 },
  { id: 3, name: "New York", price: 1000 },
];

export default function Destinations() {
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
      <div className="p-12 bg-white bg-opacity-90 rounded-lg shadow-xl max-w-6xl z-10 relative m-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">Popular Destinations</h2>
        <ul className="grid md:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <li 
              key={d.id} 
              className="border border-blue-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <h3 className="font-semibold text-2xl text-blue-600 mb-3">{d.name}</h3>
              <p className="text-gray-700 text-lg">Starting from</p>
              <p className="text-3xl font-bold text-blue-600">${d.price}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 w-full">
                Book Now
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
