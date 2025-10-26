'use client';

import { useCart } from '../context/CartContext';
import { FaTimes, FaWhatsapp, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

export default function Cart() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart } = useCart();

  const createWhatsAppOrderLink = () => {
    if (cart.length === 0) return '#';

    let message = 'Hi! I would like to order the following items:\n\n';
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} - ${item.price}\n`;
    });
    
    message += '\nPlease confirm availability and total cost. Thank you!';
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/2349033306914?text=${encodedMessage}`;
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-sweetmed-pink text-white">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="hover:bg-sweetmed-pink-dark p-2 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p className="text-lg">Your cart is empty</p>
                <p className="text-sm mt-2">Add some products to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-grow pr-2">
                        <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                        <p className="text-sweetmed-pink font-bold mt-1">{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="font-semibold text-gray-800 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded transition-colors"
                          aria-label="Increase quantity"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Total Items:</span>
                  <span className="font-semibold">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
              </div>
              
              <a
                href={createWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] text-white px-4 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md w-full mb-2"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                Order via WhatsApp
              </a>
              
              <button
                onClick={clearCart}
                className="w-full text-red-500 hover:text-red-700 text-sm font-medium transition-colors py-2"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
