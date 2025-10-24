import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const backgroundImageUrl = "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80";

  const onSubmit = (data) => {
    localStorage.setItem("booking", JSON.stringify(data));
    navigate("/payment");
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
      {/* Overlay div for the blue tint */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(15, 143, 217, 0.6)" }}
      ></div>

      {/* Content div */}
      <div className="p-12 bg-white bg-opacity-90 rounded-lg shadow-xl max-w-xl z-10 relative m-4 transform hover:scale-105 transition-all duration-300">
        <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Book Your Adventure</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="group">
            <input 
              {...register("name")} 
              placeholder="Full Name" 
              className="w-full px-6 py-4 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
              required 
            />
          </div>

          <div className="group">
            <input 
              {...register("email")} 
              placeholder="Email" 
              type="email" 
              className="w-full px-6 py-4 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
              required 
            />
          </div>

          <div className="group">
            <select 
              {...register("destination")} 
              className="w-full px-6 py-4 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
              required
            >
              <option value="">Select Destination</option>
              <option value="paris">Paris</option>
              <option value="bali">Bali</option>
              <option value="newyork">New York</option>
            </select>
          </div>

          <div className="group">
            <input 
              {...register("date")} 
              type="date" 
              className="w-full px-6 py-4 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
              required 
            />
          </div>

          <button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Proceed to Payment →
          </button>
        </form>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-50"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-50"></div>
      </div>
    </div>
  );
}
