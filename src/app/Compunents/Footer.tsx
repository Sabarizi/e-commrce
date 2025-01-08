export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold text-white">
              <span className="text-teal-400">My</span>Shop
            </a>
          </div>
  
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a href="/" className="hover:text-teal-400 transition">
              Home
            </a>
            <a href="/privacy-policy" className="hover:text-teal-400 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-teal-400 transition">
              Terms
            </a>
            <a href="/contact" className="hover:text-teal-400 transition">
              Contact
            </a>
          </nav>
  
          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            © {new Date().getFullYear()} MyShop. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  