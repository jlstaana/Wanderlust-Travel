import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const backgroundImageUrl = "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80";

 const onSubmit = async (data) => {
  try {
    const response = await fetch("http://localhost/backend/api/bookings/create.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      localStorage.setItem("booking", JSON.stringify(data));
      navigate("/payment");
    } else {
      alert("Booking failed: " + (result.message || "Please try again."));
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error connecting to server.");
  }
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
        className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-500/50 backdrop-blur-sm"
      ></div>

      <div className="p-12 bg-white/95 rounded-3xl shadow-2xl max-w-xl w-full z-10 relative m-4 transform hover:scale-102 transition-all duration-300">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full p-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
        </div>

        <h2 className="text-4xl font-bold mb-2 text-blue-600 text-center mt-4">Book Your Adventure</h2>
        <p className="text-gray-600 text-center mb-8">Start your journey with us today!</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="group relative">
            <label className="absolute left-6 -top-3 bg-white px-2 text-sm text-blue-600 font-medium">
              Full Name
            </label>
            <input 
              {...register("name")} 
              className="w-full px-6 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white shadow-inner"
              required 
            />
          </div>

          <div className="group relative">
            <label className="absolute left-6 -top-3 bg-white px-2 text-sm text-blue-600 font-medium">
              Email Address
            </label>
            <input 
              {...register("email")} 
              type="email" 
              className="w-full px-6 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white shadow-inner"
              required 
            />
          </div>

          <div className="group relative">
            <label className="absolute left-6 -top-3 bg-white px-2 text-sm text-blue-600 font-medium">
              Destination
            </label>
            <select 
              {...register("destination")} 
              className="w-full px-6 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white shadow-inner appearance-none"
              required
            >
              <option value="">Select your destination</option>
              <option value="paris">Paris, France</option>
              <option value="bali">Bali, Indonesia</option>
              <option value="newyork">New York, USA</option>
            </select>
          </div>

          <div className="group relative">
            <label className="absolute left-6 -top-3 bg-white px-2 text-sm text-blue-600 font-medium">
              Travel Date
            </label>
            <input 
              {...register("date")} 
              type="date" 
              className="w-full px-6 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white shadow-inner"
              required 
            />
          </div>

          <button 
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-500/50"
          >
            <span className="flex items-center justify-center gap-2">
              Proceed to Payment
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          By booking, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
}
