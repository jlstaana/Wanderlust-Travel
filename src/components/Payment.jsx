import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_12345YOURPUBLICKEY");

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const booking = JSON.parse(localStorage.getItem("booking"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Payment successful for ${booking.destination}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-2">Payment for {booking?.destination}</h2>
      <CardElement className="border p-2 rounded" />
      <button
        disabled={!stripe}
        className="bg-green-600 text-white py-2 px-4 rounded w-full"
      >
        Pay Now
      </button>
    </form>
  );
}

export default function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
