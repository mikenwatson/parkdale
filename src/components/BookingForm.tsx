import React, { useState } from 'react';
import { Calendar, Clock, Users, Car, Gift } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { BookingDetails } from '../types/booking';

interface BookingFormProps {
  onSubmit: (details: BookingDetails) => void;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '3',
    service: 'airport',
    vehicle: vehicles[0].name,
    passengers: '2',
    extras: [],
  });

  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { title: 'Personal Details', icon: Users },
    { title: 'Journey Details', icon: Calendar },
    { title: 'Vehicle Selection', icon: Car },
    { title: 'Additional Services', icon: Gift }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleExtraToggle = (extra: string) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(extra)
        ? prev.extras.filter(e => e !== extra)
        : [...prev.extras, extra]
    }));
  };

  const validateSection = (sectionIndex: number): boolean => {
    switch (sectionIndex) {
      case 0:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      case 1:
        return !!(formData.date && formData.time);
      case 2:
        return !!formData.vehicle;
      case 3:
        return true; // Extras are optional
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!validateSection(activeSection)) {
      alert('Please fill in all required fields');
      return;
    }
    setActiveSection(prev => Math.min(sections.length - 1, prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all sections
    for (let i = 0; i < sections.length; i++) {
      if (!validateSection(i)) {
        setActiveSection(i);
        alert('Please complete all required fields');
        return;
      }
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              index <= activeSection ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => index <= activeSection && setActiveSection(index)}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors duration-300 ${
                index <= activeSection ? 'bg-gold text-white' : 'bg-gray-200'
              }`}
            >
              <section.icon size={20} />
            </div>
            <span className="text-sm hidden md:block">{section.title}</span>
          </div>
        ))}
      </div>

      {/* Form Sections */}
      <div className="space-y-8 animate-fade-in">
        {/* Personal Details */}
        <div className={activeSection === 0 ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-serif mb-6">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus-effect"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus-effect"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus-effect"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus-effect"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Journey Details */}
        <div className={activeSection === 1 ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-serif mb-6">Journey Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar size={16} className="inline mr-2" />
                Date
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
                Time
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
                Number of Passengers
              </label>
              <select
                name="passengers"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus-effect"
                value={formData.passengers}
                onChange={handleChange}
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (hours)
              </label>
              <select
                name="duration"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg input-focus-effect"
                value={formData.duration}
                onChange={handleChange}
              >
                {[3, 4, 5, 6, 8].map(hours => (
                  <option key={hours} value={hours}>{hours} hours</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vehicle Selection */}
        <div className={activeSection === 2 ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-serif mb-6">
            <Car size={20} className="inline mr-2" />
            Select Your Vehicle
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {vehicles.map(vehicle => (
              <label
                key={vehicle.name}
                className={`p-4 border rounded-lg cursor-pointer hover-lift ${
                  formData.vehicle === vehicle.name
                    ? 'border-gold bg-gold/5'
                    : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="vehicle"
                  value={vehicle.name}
                  checked={formData.vehicle === vehicle.name}
                  onChange={handleChange}
                  className="hidden"
                />
                <div className="flex justify-between items-center">
                  <span className="font-medium">{vehicle.name}</span>
                  <span className="text-gold">{vehicle.hourlyRate}/hour</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div className={activeSection === 3 ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-serif mb-6">
            <Gift size={20} className="inline mr-2" />
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'champagne', label: 'Champagne Service', price: '£45' },
              { id: 'decoration', label: 'Vehicle Decoration', price: '£35' },
              { id: 'refreshments', label: 'Premium Refreshments', price: '£25' },
              { id: 'wifi', label: 'Mobile Wi-Fi Hotspot', price: '£15' }
            ].map(extra => (
              <label
                key={extra.id}
                className={`flex items-center p-4 border rounded-lg cursor-pointer hover-lift ${
                  formData.extras.includes(extra.id)
                    ? 'border-gold bg-gold/5'
                    : 'border-gray-200'
                }`}
              >
                <input
                  type="checkbox"
                  className="form-checkbox text-gold rounded border-gray-300 focus:ring-gold"
                  checked={formData.extras.includes(extra.id)}
                  onChange={() => handleExtraToggle(extra.id)}
                />
                <span className="ml-2 flex-1">{extra.label}</span>
                <span className="text-gold">{extra.price}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={() => setActiveSection(prev => Math.max(0, prev - 1))}
          className={`px-6 py-2 rounded-lg text-gold border border-gold hover:bg-gold/5 transition ${
            activeSection === 0 ? 'invisible' : ''
          }`}
        >
          Previous
        </button>
        {activeSection < sections.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="button-hover-effect bg-gold text-white px-6 py-2 rounded-lg"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="button-hover-effect bg-gold text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Proceed to Payment
          </button>
        )}
      </div>
    </form>
  );
}