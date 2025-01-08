"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart(); // Access addToCart function

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Save the resolved data in the state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Product List
        </h1>
        {/* "View Cart" Button */}
        <Link href="/cart">
          <button
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
          >
            View Cart
          </button>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/Products/${product.id}`}>
              <img
                className="p-6 rounded-t-lg object-cover h-50px w-full"
                src={product.image}
                alt={product.title}
              />
            </Link>
            <div className="px-5 pb-5">
              <Link href={`/Products/${product.id}`}>
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                  {product.title}
                </h5>
              </Link>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
