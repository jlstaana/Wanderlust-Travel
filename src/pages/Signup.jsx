import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost/backend/api/users/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (result.message === "Registration successful.") {
        alert("✅ Account created successfully! You can now sign in.");
        navigate("/login");
      } else {
        setError(result.message || "Registration failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server.");
    }
  };

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80";

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(15, 143, 217, 0.6)" }}
      ></div>

      <div className="p-10 bg-white bg-opacity-95 rounded-3xl shadow-2xl max-w-md w-full z-10 relative m-4 transform hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">
          Create Your Account
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-semibold">{error}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative group">
            <label className="absolute left-6 -top-3 bg-white px-2 text-sm text-blue-600 font-medium">
              Full Name
            </label>
            <input
              {...register("name")}
              required
              placeholder="Name"
              className="w-full px-6 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white shadow-inner"
            />
          </div>

          <div className="relative group">
            <label className="absolute left-6 -top-3 bg-white px-2 text-sm text-blue-600 font-medium">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-6 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white shadow-inner"
            />
          </div>

          <div className="relative group">
            <label className="absolute left-6 -top-3 bg-white px-2 text-sm text-blue-600 font-medium">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-6 py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white shadow-inner"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-500/50">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
