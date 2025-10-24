const destinations = [
  { 
    id: 1, 
    name: "Paris",
    price: 1200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnzwmby9XgxKfqQDCH2DFRls32JM-woDf-8UUtYNRmahKFNFc9I5b5X4OlROqoLyG12c&usqp=CAU",
    description: "Experience the city of love and lights"
  },
  { 
    id: 2, 
    name: "Bali",
    price: 1500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeTaOOkBy71wDtzlmgv07gb0Y8z3tvH_npA&s",
    description: "Discover tropical paradise and culture"
  },
  { 
    id: 3, 
    name: "New York",
    price: 1000,
    image: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/shutterstock_329662223_ss_non-editorial_3_csm8lw?_a=BAVAZGE70",
    description: "Experience the city that never sleeps"
  },
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
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(15, 143, 217, 0.6)" }}
      ></div>

      <div className="p-12 bg-white bg-opacity-90 rounded-lg shadow-xl max-w-6xl z-10 relative m-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">
          Popular Destinations
        </h2>
        <ul className="grid md:grid-cols-3 gap-8">
          {destinations.map((d) => (
            <li 
              key={d.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={d.image} 
                  alt={d.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-2xl text-blue-600 mb-2">{d.name}</h3>
                <p className="text-gray-600 mb-3">{d.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-500 text-sm">Starting from</p>
                    <p className="text-3xl font-bold text-blue-600">${d.price}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  Book Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
