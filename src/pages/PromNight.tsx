import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Star, Music, Camera, Clock, Shield, Car, ArrowRight } from 'lucide-react';

export default function PromNight() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&q=80"
            alt="Prom Night Celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-serif mb-6">Your Perfect Prom Night</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Arrive in style and create unforgettable memories with our luxury transportation service
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1551952237-798f36b097b0?auto=format&fit=crop&q=80"
              alt="Mercedes V-Class"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-lg font-serif">Luxury Mercedes V-Class</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80"
              alt="Friends at Prom"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-lg font-serif">Create Memories Together</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
              alt="Red Carpet Arrival"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-lg font-serif">Red Carpet Treatment</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
              <Car className="text-gold" size={24} />
            </div>
            <h3 className="text-xl font-serif mb-2">Luxury Vehicle</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Spacious Mercedes V-Class</li>
              <li>• Premium sound system</li>
              <li>• Ambient lighting</li>
              <li>• Climate control</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
              <Star className="text-gold" size={24} />
            </div>
            <h3 className="text-xl font-serif mb-2">VIP Experience</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Red carpet arrival</li>
              <li>• Professional photos</li>
              <li>• Soft drinks included</li>
              <li>• Music of your choice</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-gold" size={24} />
            </div>
            <h3 className="text-xl font-serif mb-2">Safety First</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Professional chauffeur</li>
              <li>• Full insurance</li>
              <li>• Vehicle tracking</li>
              <li>• 24/7 support</li>
            </ul>
          </div>
        </div>

        {/* Package Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-serif mb-6 text-center">Prom Night Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">What's Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Clock className="text-gold mr-2" size={20} />
                  <span>6 hours of service</span>
                </li>
                <li className="flex items-center">
                  <Camera className="text-gold mr-2" size={20} />
                  <span>Professional photo opportunities</span>
                </li>
                <li className="flex items-center">
                  <Music className="text-gold mr-2" size={20} />
                  <span>Premium sound system with your playlist</span>
                </li>
                <li className="flex items-center">
                  <Star className="text-gold mr-2" size={20} />
                  <span>Red carpet arrival service</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="mb-4">
                <span className="text-3xl font-serif text-gold">£399</span>
                <span className="text-gray-600"> / night</span>
              </div>
              <Link
                to="/booking"
                className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold/90 transition group"
              >
                Book Your Prom Night
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic text-gray-600 mb-4">
              "The Mercedes V-Class was amazing! Our group had the best time, and the red carpet arrival made us feel like celebrities. Definitely recommend!"
            </p>
            <p className="font-serif">- Sarah & Friends, Class of 2023</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic text-gray-600 mb-4">
              "Everything was perfect from start to finish. The chauffeur was professional, the vehicle was luxurious, and we got some incredible photos!"
            </p>
            <p className="font-serif">- James & Group, Class of 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}