import { Menu, X, Phone, UserCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-gold' : 'text-gray-300 hover:text-white';
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        {/* Top Bar with Sign In and Phone */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-end space-x-6">
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center text-gray-300 hover:text-white transition text-sm"
            >
              <UserCircle size={16} className="mr-1" />
              Sign In
            </button>
            <a 
              href="tel:+44 (0)800 061 4989" 
              className="flex items-center text-gray-300 hover:text-white transition text-sm"
            >
              <Phone size={16} className="mr-1" />
              +44 (0)800 061 4989
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex-shrink-0 text-white font-deco text-3xl tracking-wider hover:text-gold transition-colors duration-300" 
              onClick={closeMenu}
            >
              Parkdale
              <span className="text-gold"> Limousines</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/services" className={`transition text-sm ${isActive('/services')}`}>Services</Link>
              <Link to="/fleet" className={`transition text-sm ${isActive('/fleet')}`}>Fleet</Link>
              <Link to="/booking" className={`transition text-sm ${isActive('/booking')}`}>Book Now</Link>
              <Link to="/testimonials" className={`transition text-sm ${isActive('/testimonials')}`}>Testimonials</Link>
              <Link
                to="/booking"
                className="bg-gold text-white px-3 py-1.5 rounded text-sm hover:bg-gold/90 transition ml-2"
              >
                Reserve Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
              <Link 
                to="/services" 
                className={`block px-3 py-2 ${isActive('/services')}`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                to="/fleet" 
                className={`block px-3 py-2 ${isActive('/fleet')}`}
                onClick={closeMenu}
              >
                Fleet
              </Link>
              <Link 
                to="/booking" 
                className={`block px-3 py-2 ${isActive('/booking')}`}
                onClick={closeMenu}
              >
                Book Now
              </Link>
              <Link 
                to="/testimonials" 
                className={`block px-3 py-2 ${isActive('/testimonials')}`}
                onClick={closeMenu}
              >
                Testimonials
              </Link>
              <Link
                to="/booking"
                className="block px-3 py-2 text-white bg-gold rounded mt-2"
                onClick={closeMenu}
              >
                Reserve Now
              </Link>
            </div>
          </div>
        )}
      </div>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
