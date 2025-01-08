"use client"
import React from "react";

const SubmitOrderPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          🎉 Congratulations!
        </h1>
        <p className="text-gray-700 text-lg">
          Your order has been successfully placed! 🎊
        </p>
        <p className="mt-2 text-gray-600">
          Thank you for shopping with us. We are thrilled to serve you and
          will ensure your order is delivered promptly.
        </p>
        <p className="mt-4 font-medium">
          Need help? Feel free to reach out to our{" "}
          <span className="text-blue-600 underline">support team</span>.
        </p>
        <button
          onClick={() => (window.location.href = "/Products")} // Redirect to the product page
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SubmitOrderPage;
