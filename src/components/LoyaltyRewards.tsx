import React from 'react';
import { Trophy, Gift, Crown, Star } from 'lucide-react';
import { useVehicleTracking } from '../hooks/useVehicleTracking';
import { getInitialPreferences } from '../utils/recommendations';

const tiers = [
  {
    name: 'Silver',
    icon: Star,
    bookings: 3,
    benefits: ['5% discount on bookings', 'Priority customer service']
  },
  {
    name: 'Gold',
    icon: Crown,
    bookings: 5,
    benefits: ['10% discount on bookings', 'Complimentary refreshments', 'Flexible cancellation']
  },
  {
    name: 'Platinum',
    icon: Trophy,
    bookings: 10,
    benefits: ['15% discount on bookings', 'Airport lounge access', 'Personal concierge service']
  }
];

export default function LoyaltyRewards() {
  const preferences = getInitialPreferences();
  const bookingsCount = preferences.previousBookings.length;
  
  const currentTier = tiers.reduce((prev, tier) => {
    return bookingsCount >= tier.bookings ? tier : prev;
  }, tiers[0]);

  const nextTier = tiers.find(tier => bookingsCount < tier.bookings);
  const bookingsToNext = nextTier ? nextTier.bookings - bookingsCount : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif">Loyalty Rewards</h2>
        <Gift className="text-gold w-6 h-6" />
      </div>

      {/* Current Tier */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <currentTier.icon className="w-8 h-8 text-gold mr-3" />
          <div>
            <h3 className="text-xl font-semibold">{currentTier.name} Member</h3>
            <p className="text-gray-600">
              {bookingsCount} booking{bookingsCount !== 1 ? 's' : ''} completed
            </p>
          </div>
        </div>

        {nextTier && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              {bookingsToNext} more booking{bookingsToNext !== 1 ? 's' : ''} to {nextTier.name}
            </p>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-gold rounded-full transition-all duration-500"
                style={{ 
                  width: `${(bookingsCount / nextTier.bookings) * 100}%`
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Benefits */}
      <div className="space-y-4">
        <h4 className="font-semibold">Your Benefits:</h4>
        <ul className="space-y-2">
          {currentTier.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Star className="w-4 h-4 text-gold mr-2" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Next Tier Preview */}
      {nextTier && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Next Tier Benefits:</h4>
          <ul className="space-y-2">
            {nextTier.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Star className="w-4 h-4 text-gray-400 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}