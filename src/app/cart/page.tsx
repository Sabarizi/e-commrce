"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateCartItem } = useCart();
  const [showForm, setShowForm] = useState(false); // Toggle for delivery form
  const router = useRouter(); // Next.js router

  // Increment item quantity
  const increment = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateCartItem(id, { quantity: item.quantity + 1 });
    }
  };

  // Decrement item quantity
  const decrement = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateCartItem(id, { quantity: item.quantity - 1 });
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle form submission
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the submit order page
    router.push("/submit-order");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decrement(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
            </h2>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {showForm && (
        <div className="mt-8 p-6 border rounded-lg bg-white shadow-md">
          <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
          <form className="space-y-4" onSubmit={handleSubmitOrder}>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <textarea
                placeholder="Enter your address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
