import React from 'react';
import { Link } from 'react-router-dom';
import { getInitialPreferences } from '../utils/recommendations';
import { ArrowRight } from 'lucide-react';

export default function PersonalizedCTA() {
  const preferences = getInitialPreferences();
  const hasHistory = preferences.previousBookings.length > 0;
  
  const lastBooking = hasHistory ? preferences.previousBookings[0] : null;
  const occasion = lastBooking?.service || 'luxury travel';
  
  return (
    <div className="bg-black/95 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            {hasHistory 
              ? `Welcome Back to Parkdale Luxury Travel`
              : 'Experience Luxury Travel with Parkdale'}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {hasHistory
              ? `Based on your previous ${occasion} experience, we've curated some exclusive offers for your next journey.`
              : 'Discover our handpicked selection of luxury vehicles for your next special occasion.'}
          </p>
          
          <Link
            to="/booking"
            className="button-hover-effect inline-flex items-center bg-gold text-white px-8 py-4 rounded text-lg font-semibold group"
          >
            {hasHistory ? 'Book Your Next Journey' : 'Start Your Luxury Experience'}
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}