export default function About() {
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
      <div className="p-12 bg-white bg-opacity-90 rounded-lg shadow-xl max-w-4xl z-10 relative m-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">
          About WanderLust Travel
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                At WanderLust Travel, we believe that travel has the power to transform lives. 
                Our mission is to make extraordinary travel experiences accessible to everyone, 
                creating memories that last a lifetime.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Us</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Expert travel planning and 24/7 support
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Best price guarantee on all bookings
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Curated experiences and hidden gems
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Sustainable and responsible tourism
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Story</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2020 by passionate travelers, WanderLust Travel started as a small 
                team with big dreams. We've grown from planning local trips to organizing 
                adventures across the globe, always maintaining our commitment to quality 
                and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>Email:</strong> info@wanderlusttravel.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Travel Street, Adventure City, AC 12345</p>
                <p><strong>Hours:</strong> Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your next adventure? Let us help you create unforgettable memories!
          </p>
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Start Planning
            </button>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
