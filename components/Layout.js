import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes, FaBars, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Cart />
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="/sweetmed-logo.svg" 
                alt="SweetMed Pharmacy" 
                className="h-14 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-sweetmed-pink transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-sweetmed-pink transition-colors font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-sweetmed-pink transition-colors font-medium"
              >
                Contact
              </button>
              <button
                onClick={toggleCart}
                className="relative text-gray-700 hover:text-sweetmed-pink transition-colors"
                aria-label="Shopping cart"
              >
                <FaShoppingCart className="text-2xl" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sweetmed-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
            {/* Mobile menu button and cart */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleCart}
                className="relative text-gray-700 hover:text-sweetmed-pink transition-colors"
                aria-label="Shopping cart"
              >
                <FaShoppingCart className="text-xl" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sweetmed-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-sweetmed-pink"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-sweetmed-pink transition-colors font-medium rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-sweetmed-pink transition-colors font-medium rounded"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-sweetmed-pink transition-colors font-medium rounded"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/sweetmed-logo.svg" 
                alt="SweetMed Pharmacy" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300">
                Your trusted pharmacy partner for premium supplements and healthcare products.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-sweetmed-pink-light transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-gray-300 hover:text-sweetmed-pink-light transition-colors"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-sweetmed-pink-light transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <span>+234 801 234 5678</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <span>info@sweetmedpharmacy.com</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Warri, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} SweetMedPharmacy. All rights reserved.</p>
            <p className="mt-2">Built by SweetMed Development Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
