"use client";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function ProductDetail({ params }: { params: { product: string } }) {
  const { product } = params;
  const { addToCart } = useCart();
  const router = useRouter();
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!product) {
          console.error("Product ID is missing.");
          return notFound();
        }

        const res = await fetch(`https://fakestoreapi.com/products/${product}`);
        if (!res.ok) {
          console.error("Failed to fetch product data:", res.status);
          return notFound();
        }

        const data = await res.json();
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        return notFound();
      }
    };

    fetchProduct();
  }, [product]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-dotted rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Loading Product Details...
          </p>
        </div>
      </div>
    );
  }

  if (!productData) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: productData.id,
      title: productData.title,
      price: productData.price,
      image: productData.image,
      quantity: 1,
    });
    router.push("/cart");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          src={productData.image}
          alt={productData.title}
          width={400}
          height={400}
          className="mx-auto p-4"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{productData.title}</h1>
          <p className="mt-4 text-gray-600">{productData.description}</p>
          <p className="mt-4 text-2xl font-semibold text-gray-800">
            ${productData.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
