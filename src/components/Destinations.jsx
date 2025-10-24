import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();


  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

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
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous destination"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next destination"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Slides */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {destinations.map((d) => (
              <div key={d.id} className="w-full flex-shrink-0">
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white mx-4">
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
                    <button
                     onClick={() => navigate("/booking", { state: { destination: d.name } })}
                     className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
