const destinations = [
  { id: 1, name: "Paris", price: 1200 },
  { id: 2, name: "Bali", price: 1500 },
  { id: 3, name: "New York", price: 1000 },
];

export default function Destinations() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
      <ul className="grid md:grid-cols-3 gap-6">
        {destinations.map((d) => (
          <li key={d.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold text-xl">{d.name}</h3>
            <p>${d.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
