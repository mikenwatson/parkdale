import React from 'react';
import { ArrowRight, Star, Clock, Shield, Car, Award, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import SecurityBadges from '../components/SecurityBadges';
import CostCalculator from '../components/CostCalculator';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80"
            alt="Luxury Vehicle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                Experience Luxury Transportation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Premium chauffeur services with Europe's finest luxury vehicles
              </p>
              <Link
                to="/booking"
                className="button-hover-effect inline-flex items-center bg-gold text-white px-8 py-4 rounded text-lg font-semibold group"
              >
                Book Your Journey
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored transportation solutions for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1549520018-841e8c2c5ed9?auto=format&fit=crop&q=80"
                alt="Wedding Transportation"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">Wedding Service</h3>
                  <p className="text-gray-300 mb-4">Make your special day unforgettable with our luxury wedding car service</p>
                  <Link to="/services" className="text-gold flex items-center hover:text-white transition">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1551952237-798f36b097b0?auto=format&fit=crop&q=80"
                alt="Prom Night Special"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">Prom Night Special</h3>
                  <p className="text-gray-300 mb-4">Travel in style with our luxurious Mercedes V-Class</p>
                  <Link to="/services" className="text-gold flex items-center hover:text-white transition">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <div className="grid grid-cols-2 h-80">
                <img
                  src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80"
                  alt="Private Jet"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80"
                  alt="Mercedes S-Class"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">Airport Transfers</h3>
                  <p className="text-gray-300 mb-4">Reliable and luxurious airport transportation</p>
                  <Link to="/services" className="text-gold flex items-center hover:text-white transition">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Parkdale */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Why Choose Parkdale Limousines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 15 years of excellence in luxury transportation, we deliver an unmatched experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Unparalleled Luxury"
              description="Our meticulously maintained fleet features the latest models from Rolls-Royce, Bentley, and other premium marques. Each vehicle undergoes rigorous quality checks and is detailed to perfection before every journey."
              Icon={Car}
            />
            <ServiceCard
              title="Elite Chauffeurs"
              description="Our chauffeurs are more than drivers - they're hospitality professionals with extensive training in etiquette, safety, and discretion. Each undergoes thorough background checks and regular performance evaluations."
              Icon={Award}
            />
            <ServiceCard
              title="Bespoke Service"
              description="Every journey is tailored to your specific needs. From corporate events to weddings, we provide personalized service with attention to the smallest details, ensuring a truly memorable experience."
              Icon={HeartHandshake}
            />
          </div>
        </div>
      </div>

      {/* Cost Calculator */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <CostCalculator />
        </div>
      </div>

      {/* Security Badges */}
      <SecurityBadges />

      {/* CTA Section */}
      <div className="relative py-24 bg-black">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your premium transportation service today and travel in unparalleled style
          </p>
          <Link
            to="/booking"
            className="button-hover-effect inline-block bg-gold text-white px-8 py-4 rounded text-lg font-semibold"
          >
            Reserve Your Vehicle
          </Link>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif text-gold mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold mb-2">10k+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold mb-2">100%</div>
              <div className="text-gray-600">Service Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}