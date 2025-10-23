import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">✈️ TravelEase</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/booking">Book Now</Link>
      </div>
    </nav>
  );
}
