import React from 'react';
import { BookingDetails } from '../types/booking';
import { Clock, Calendar, Users, Car } from 'lucide-react';

interface BookingSummaryProps {
  details: BookingDetails | null;
}

const extras = {
  champagne: { name: 'Champagne Service', price: 45 },
  decoration: { name: 'Vehicle Decoration', price: 35 },
  refreshments: { name: 'Premium Refreshments', price: 25 },
  wifi: { name: 'Mobile Wi-Fi Hotspot', price: 15 }
};

export default function BookingSummary({ details }: BookingSummaryProps) {
  if (!details) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 sticky top-24">
        <h2 className="text-2xl font-serif mb-4">Booking Summary</h2>
        <p className="text-gray-500">
          Complete the form to see your booking summary
        </p>
      </div>
    );
  }

  const baseRates: Record<string, number> = {
    'Rolls Royce Ghost': 299,
    'Bentley Mulsanne': 279,
    'Bentley Flying Spur': 239,
    'BMW 7 Series Long': 219,
    'Audi A8 L': 209,
    'Bentley Mulsanne Extended': 279
  };

  const hourlyRate = baseRates[details.vehicle] || 200;
  const duration = parseInt(details.duration);
  const basePrice = hourlyRate * duration;
  const extrasTotal = details.extras.reduce((sum, extra) => sum + extras[extra as keyof typeof extras].price, 0);
  const total = basePrice + extrasTotal;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 sticky top-24">
      <h2 className="text-2xl font-serif mb-6">Booking Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center text-gray-600">
          <Calendar size={18} className="mr-2" />
          <span>{details.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={18} className="mr-2" />
          <span>{details.time} ({duration} hours)</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users size={18} className="mr-2" />
          <span>{details.passengers} passengers</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Car size={18} className="mr-2" />
          <span>{details.vehicle}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <span>Base Price ({duration} hours)</span>
          <span>£{basePrice}</span>
        </div>
        
        {details.extras.length > 0 && (
          <>
            {details.extras.map(extra => (
              <div key={extra} className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{extras[extra as keyof typeof extras].name}</span>
                <span>£{extras[extra as keyof typeof extras].price}</span>
              </div>
            ))}
          </>
        )}
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between text-xl font-serif">
            <span>Total</span>
            <span className="text-gold">£{total}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Your booking is protected by our secure payment system
      </p>
    </div>
  );
}