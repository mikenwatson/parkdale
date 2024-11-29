import React, { useState } from 'react';
import { Calendar, Clock, Users, Car, Send } from 'lucide-react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

export default function WeddingEnquiryForm() {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    pickupAddress: '',
    ceremonyAddress: '',
    receptionAddress: '',
    additionalInfo: '',
    preferredVehicle: 'Rolls Royce Ghost'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the enquiry to your backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="bg-green-50 text-green-800 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-serif mb-4">Thank You!</h3>
          <p>
            Your wedding transportation enquiry has been received. Our dedicated wedding coordinator will contact you within 24 hours to discuss your requirements in detail.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-gold hover:text-gold/80 underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Couple's Names
          </label>
          <input
            type="text"
            name="names"
            required
            placeholder="e.g., Sarah & James"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
            value={formData.names}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar size={16} className="inline mr-2" />
            Wedding Date
          </label>
          <DatePicker
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Clock size={16} className="inline mr-2" />
            Ceremony Time
          </label>
          <TimePicker
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Users size={16} className="inline mr-2" />
            Number of Guests Requiring Transport
          </label>
          <select
            name="guests"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
            value={formData.guests}
            onChange={handleChange}
          >
            {[2, 4, 6, 8, 10, '10+'].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pickup Address
        </label>
        <input
          type="text"
          name="pickupAddress"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
          value={formData.pickupAddress}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ceremony Address
        </label>
        <input
          type="text"
          name="ceremonyAddress"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
          value={formData.ceremonyAddress}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Reception Address (if different)
        </label>
        <input
          type="text"
          name="receptionAddress"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
          value={formData.receptionAddress}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <Car size={16} className="inline mr-2" />
          Preferred Vehicle
        </label>
        <select
          name="preferredVehicle"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
          value={formData.preferredVehicle}
          onChange={handleChange}
        >
          <option value="Rolls Royce Ghost">Rolls Royce Ghost</option>
          <option value="Bentley Mulsanne">Bentley Mulsanne</option>
          <option value="Bentley Flying Spur">Bentley Flying Spur</option>
          <option value="Not Sure">Not Sure - Please Advise</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Information
        </label>
        <textarea
          name="additionalInfo"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
          placeholder="Please share any additional requirements or questions..."
          value={formData.additionalInfo}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold text-white py-4 rounded-lg text-lg font-semibold hover:bg-gold/90 transition flex items-center justify-center group"
      >
        Submit Enquiry
        <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-sm text-gray-500 text-center">
        Our wedding coordinator will contact you within 24 hours to discuss your requirements in detail.
      </p>
    </form>
  );
}