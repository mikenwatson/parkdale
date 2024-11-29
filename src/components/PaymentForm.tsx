import React, { useState } from 'react';
import { Lock, CreditCard, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PaymentFormProps {
  amount: number;
  onComplete: () => void;
}

export default function PaymentForm({ amount, onComplete }: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentTiming, setPaymentTiming] = useState<'now' | 'later'>('now');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      alert('Please accept the Terms of Service to proceed');
      return;
    }

    if (paymentTiming === 'later') {
      // Send booking details via email
      alert('Thank you for your booking. We will contact you shortly to arrange payment.');
      onComplete();
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const discountedAmount = amount * 0.9; // 10% discount for immediate payment

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-serif">Payment Details</h3>
        <div className="flex items-center text-gray-500">
          <Lock size={16} className="mr-2" />
          Secure Payment
        </div>
      </div>

      {/* Payment Timing Selection */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">Choose Payment Option</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setPaymentTiming('now')}
            className={`p-4 border rounded-lg text-left transition-all ${
              paymentTiming === 'now'
                ? 'border-gold bg-gold/5'
                : 'border-gray-200 hover:border-gold'
            }`}
          >
            <div className="flex items-center mb-2">
              <CreditCard className="text-gold w-5 h-5 mr-2" />
              <span className="font-medium">Pay Now</span>
            </div>
            <p className="text-sm text-gray-600">
              Get 10% off (Save £{(amount * 0.1).toFixed(2)})
            </p>
            <p className="text-lg font-semibold text-gold mt-2">
              £{discountedAmount.toFixed(2)}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setPaymentTiming('later')}
            className={`p-4 border rounded-lg text-left transition-all ${
              paymentTiming === 'later'
                ? 'border-gold bg-gold/5'
                : 'border-gray-200 hover:border-gold'
            }`}
          >
            <div className="flex items-center mb-2">
              <Clock className="text-gold w-5 h-5 mr-2" />
              <span className="font-medium">Pay Later</span>
            </div>
            <p className="text-sm text-gray-600">
              Standard rate, pay on the day
            </p>
            <p className="text-lg font-semibold text-gold mt-2">
              £{amount.toFixed(2)}
            </p>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {paymentTiming === 'now' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                value={cardDetails.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="number"
                  required
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  value={cardDetails.number}
                  onChange={handleInputChange}
                />
                <CreditCard className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiry"
                  required
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  value={cardDetails.expiry}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  name="cvc"
                  required
                  maxLength={3}
                  placeholder="123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  value={cardDetails.cvc}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                By selecting Pay Later, you agree to pay the full amount of £{amount.toFixed(2)} on the day of service. 
                We will contact you shortly to confirm your booking details.
              </p>
            </div>
          </div>
        )}

        {/* Terms of Service Checkbox */}
        <div className="mt-6 mb-6">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 form-checkbox text-gold rounded border-gray-300 focus:ring-gold"
            />
            <span className="text-gray-600">
              I accept the{' '}
              <Link 
                to="/terms"
                target="_blank"
                className="text-gold hover:text-gold/80 underline"
              >
                Terms of Service
              </Link>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-gold text-white py-4 rounded-lg text-lg font-semibold hover:bg-gold/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            paymentTiming === 'now' 
              ? `Pay £${discountedAmount.toFixed(2)} Now`
              : 'Confirm Booking'
          )}
        </button>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Your payment is secured by 256-bit SSL encryption</p>
        </div>
      </form>
    </div>
  );
}