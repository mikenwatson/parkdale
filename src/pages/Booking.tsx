import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
import BookingSummary from '../components/BookingSummary';
import PaymentForm from '../components/PaymentForm';
import { BookingDetails } from '../types/booking';

export default function Booking() {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleBookingSubmit = (details: BookingDetails) => {
    setBookingDetails(details);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    // Handle successful payment
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    // Reset form or redirect to confirmation page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-black/95">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white text-center">
            Book Your Parkdale Experience
          </h1>
          <p className="mt-4 text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Complete your booking in minutes and let us handle the rest
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {!showPayment ? (
              <BookingForm onSubmit={handleBookingSubmit} />
            ) : (
              <PaymentForm 
                amount={calculateTotal(bookingDetails!)} 
                onComplete={handlePaymentComplete}
              />
            )}
          </div>
          <div className="lg:col-span-1">
            <BookingSummary details={bookingDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateTotal(details: BookingDetails): number {
  const baseRates: Record<string, number> = {
    'Rolls Royce Ghost': 299,
    'Bentley Mulsanne': 279,
    'Bentley Flying Spur': 239,
    'BMW 7 Series Long': 219,
    'Audi A8 L': 209,
    'Bentley Mulsanne Extended': 279
  };

  const extrasCost: Record<string, number> = {
    'champagne': 45,
    'decoration': 35,
    'refreshments': 25,
    'wifi': 15
  };

  const hourlyRate = baseRates[details.vehicle] || 200;
  const duration = parseInt(details.duration);
  const baseTotal = hourlyRate * duration;
  
  const extrasTotal = details.extras.reduce((sum, extra) => sum + (extrasCost[extra] || 0), 0);
  
  return baseTotal + extrasTotal;
}