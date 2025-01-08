import Image from "next/image";
export default function About() {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <span className="font-bold text-teal-600">MyShop</span>, your trusted partner in online shopping. 
            We are committed to bringing you the finest products at unbeatable prices. Our mission is to provide 
            a seamless and enjoyable shopping experience for every customer.
          </p>
          <div className="my-8">
            <Image
              src="/about.jpg"
              alt="About Us"
              height={200}
              width={200}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-bold text-teal-600">MyShop</span>, we believe in quality, affordability, 
            and excellent customer service. We are constantly updating our catalog with new and exciting 
            products to meet your needs and desires.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  }
  