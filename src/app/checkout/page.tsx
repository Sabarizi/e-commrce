"use client";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Add any form validation or order processing logic here
    router.push("/submit-order"); // Redirect to Submit Order page
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Delivery Details</h1>
      <form className="space-y-6" onSubmit={handleSubmitOrder}>
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Address</label>
          <textarea
            placeholder="Enter your address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
