'use client';

import Layout from '../components/Layout';
import { FaWhatsapp, FaClock, FaPhone, FaMapMarkerAlt, FaShieldAlt, FaTruck, FaUserMd, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Magnesium Glycinate 500mg',
    description: 'Premium bioavailable magnesium for muscle relaxation and sleep support',
    price: '₦4,500',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Vitamin C 1000mg',
    description: 'High-potency immune support with rose hips and bioflavonoids',
    price: '₦3,200',
    image: '/vitamin_c_supplement_973af89b.jpg'
  },
  {
    id: 3,
    name: 'Probiotic 50 Billion CFU',
    description: 'Advanced gut health formula with 10 probiotic strains',
    price: '₦6,800',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Omega-3 Fish Oil 2000mg',
    description: 'Triple strength EPA/DHA for heart and brain health',
    price: '₦5,500',
    image: '/omega_3_fish_oil_sup_d2bcf1c2.jpg'
  },
  {
    id: 5,
    name: 'Vitamin D3 5000 IU',
    description: 'Essential sunshine vitamin for bone health and immunity',
    price: '₦3,800',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Multivitamin Premium',
    description: 'Complete daily nutrition with 25+ vitamins and minerals',
    price: '₦4,200',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    name: 'Collagen Peptides',
    description: 'Hydrolyzed collagen for skin, hair, and joint support',
    price: '₦7,200',
    image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?w=400&h=300&fit=crop'
  },
  {
    id: 8,
    name: 'Ashwagandha 1300mg',
    description: 'Premium adaptogen for stress relief and energy balance',
    price: '₦5,900',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop'
  }
];

export default function Home() {
  const { addToCart } = useCart();

  const scrollToProducts = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-purple-600 via-sweetmed-pink to-orange-400 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Premium Supplements for Optimal Health
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
            Quality vitamins and supplements delivered to your doorstep
          </p>
          <button
            onClick={scrollToProducts}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Products
            </h2>
            <p className="text-gray-600 text-lg">
              Browse our selection of quality healthcare products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-sweetmed-pink">
                      {product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center justify-center bg-sweetmed-pink hover:bg-sweetmed-pink-dark text-white px-4 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md w-full"
                  >
                    <FaShoppingCart className="mr-2 text-lg" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About SweetMed Pharmacy
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Your wellness partner dedicated to providing premium, science-backed supplements for optimal health and vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-sweetmed-pink rounded-full mb-4">
                <FaShieldAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Third-party tested supplements from trusted brands, ensuring purity and potency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-sweetmed-green rounded-full mb-4">
                <FaTruck className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and secure delivery to ensure your supplements arrive fresh and on time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-sweetmed-pink rounded-full mb-4">
                <FaUserMd className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Professional guidance to help you choose the right supplements for your health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg">
              Get in touch with us for any inquiries or support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sweetmed-pink">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-sweetmed-pink text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                    <p className="text-gray-600">
                      185 Jakpa Road Opp HQ filling Station<br />
                      Warri, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sweetmed-green">
                <div className="flex items-start">
                  <FaPhone className="text-sweetmed-green text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">+234 801 234 5678</p>
                    <p className="text-gray-600">+234 809 876 5432</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sweetmed-pink">
                <div className="flex items-start">
                  <FaClock className="text-sweetmed-pink text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7276711123!2d3.4215996!3d6.4280556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%20Island!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
