export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" 
         style={{ background: "rgba(15, 143, 217, 0.6)" }}>
      <div className="p-12 bg-white bg-opacity-90 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">
          Welcome to WanderLust!
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Explore amazing destinations and book your dream vacation today.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            Start Exploring
          </button>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
