import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("booking", JSON.stringify(data));
    navigate("/payment");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book Your Trip</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Full Name" className="border p-2 w-full" required />
        <input {...register("email")} placeholder="Email" type="email" className="border p-2 w-full" required />
        <input {...register("destination")} placeholder="Destination" className="border p-2 w-full" required />
        <input {...register("date")} type="date" className="border p-2 w-full" required />
        <button className="bg-blue-600 text-white py-2 px-4 rounded">Proceed to Payment</button>
      </form>
    </div>
  );
}
