export default function Contact() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6 md:px-16">
        <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Contact Us</h1>
          <p className="text-gray-700 text-center mb-6">
            We'd love to hear from you! Whether you have a question, feedback, or a special request, feel free to reach out.
          </p>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
  
        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Or reach out to us directly at{" "}
            <a href="mailto:info@myshop.com" className="text-blue-600 underline">
              info@myshop.com
            </a>{" "}
            or call us at{" "}
            <span className="font-bold text-teal-600">+1-800-555-5555</span>.
          </p>
        </div>
      </div>
    );
  }
  