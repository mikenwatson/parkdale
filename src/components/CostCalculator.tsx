import React, { useState } from 'react';
import { Calculator, Clock, MapPin, Users, CreditCard, Mail } from 'lucide-react';
import { vehicles } from '../data/vehicles';

export default function CostCalculator() {
  const [details, setDetails] = useState({
    vehicle: vehicles[0].name,
    hours: '3',
    distance: '50',
    passengers: '2',
    paymentOption: 'later'
  });

  const calculateCost = (applyDiscount = false) => {
    const baseRate = parseInt(vehicles.find(v => v.name === details.vehicle)?.hourlyRate.replace('£', '') || '0');
    const hours = parseInt(details.hours);
    const distance = parseInt(details.distance);
    
    const hourlyTotal = baseRate * hours;
    const distanceCharge = distance * 2; // £2 per mile
    const subtotal = hourlyTotal + distanceCharge;
    
    return applyDiscount ? subtotal * 0.9 : subtotal;
  };

  const handlePaymentOptionChange = (option: 'now' | 'later') => {
    setDetails(prev => ({ ...prev, paymentOption: option }));
  };

  const handleBookNow = () => {
    // In a real implementation, this would integrate with your booking system
    if (details.paymentOption === 'now') {
      // Redirect to payment page
      window.location.href = '/booking';
    } else {
      // Send booking request via email
      alert('Thank you for your booking request. We will contact you shortly to confirm the details.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-3d">
      <div className="flex items-center mb-6">
        <Calculator className="text-gold w-6 h-6 mr-2" />
        <h3 className="text-xl font-serif">Cost Calculator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle</label>
          <select
            value={details.vehicle}
            onChange={(e) => setDetails(prev => ({ ...prev, vehicle: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
          >
            {vehicles.map(vehicle => (
              <option key={vehicle.name} value={vehicle.name}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Clock size={16} className="inline mr-1" />
              Duration (hours)
            </label>
            <select
              value={details.hours}
              onChange={(e) => setDetails(prev => ({ ...prev, hours: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
            >
              {[3, 4, 5, 6, 8, 10, 12].map(hours => (
                <option key={hours} value={hours}>{hours}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin size={16} className="inline mr-1" />
              Est. Distance (miles)
            </label>
            <input
              type="number"
              value={details.distance}
              onChange={(e) => setDetails(prev => ({ ...prev, distance: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Users size={16} className="inline mr-1" />
              Passengers
            </label>
            <select
              value={details.passengers}
              onChange={(e) => setDetails(prev => ({ ...prev, passengers: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
            >
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Payment Option</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => handlePaymentOptionChange('now')}
              className={`p-4 border rounded-lg text-left transition-all ${
                details.paymentOption === 'now'
                  ? 'border-gold bg-gold/5'
                  : 'border-gray-200 hover:border-gold'
              }`}
            >
              <div className="flex items-center mb-2">
                <CreditCard className="text-gold w-5 h-5 mr-2" />
                <span className="font-medium">Pay Now</span>
              </div>
              <p className="text-sm text-gray-600">
                Get 10% off when you pay in advance
              </p>
            </button>

            <button
              onClick={() => handlePaymentOptionChange('later')}
              className={`p-4 border rounded-lg text-left transition-all ${
                details.paymentOption === 'later'
                  ? 'border-gold bg-gold/5'
                  : 'border-gray-200 hover:border-gold'
              }`}
            >
              <div className="flex items-center mb-2">
                <Mail className="text-gold w-5 h-5 mr-2" />
                <span className="font-medium">Pay Later</span>
              </div>
              <p className="text-sm text-gray-600">
                Standard rate, pay on the day
              </p>
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">£{calculateCost().toFixed(2)}</span>
            </div>
            
            {details.paymentOption === 'now' && (
              <>
                <div className="flex justify-between items-center text-green-600">
                  <span>Early Payment Discount (10%):</span>
                  <span>-£{(calculateCost() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between items-center">
                  <span className="font-medium">Final Total:</span>
                  <span className="text-2xl font-serif text-gold">£{calculateCost(true).toFixed(2)}</span>
                </div>
              </>
            )}
            
            {details.paymentOption === 'later' && (
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="font-medium">Total Due:</span>
                <span className="text-2xl font-serif text-gold">£{calculateCost().toFixed(2)}</span>
              </div>
            )}
          </div>
          
          <button
            onClick={handleBookNow}
            className="w-full mt-4 bg-gold text-white py-3 rounded-lg hover:bg-gold/90 transition flex items-center justify-center"
          >
            {details.paymentOption === 'now' ? (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </>
            ) : (
              <>
                <Mail className="w-5 h-5 mr-2" />
                Request Booking
              </>
            )}
          </button>
          
          <p className="text-sm text-gray-500 mt-2">
            *Final price may vary based on specific requirements and additional services
          </p>
        </div>
      </div>
    </div>
  );
}