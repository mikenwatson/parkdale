import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FleetHero from '../components/FleetHero';
import VehicleCard from '../components/VehicleCard';
import VehicleQuiz from '../components/VehicleQuiz';
import LoyaltyRewards from '../components/LoyaltyRewards';
import { useVehicleTracking } from '../hooks/useVehicleTracking';
import { Vehicle } from '../types/vehicle';

const vehicles: Vehicle[] = [
  {
    name: "Rolls Royce Ghost",
    description: "The pinnacle of British automotive luxury, handcrafted for unparalleled sophistication.",
    images: [
      "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631295867233-60c589c914da?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631295869239-79f33779166c?auto=format&fit=crop&q=80"
    ],
    capacity: 4,
    features: [
      { icon: "luxury", text: "Hand-stitched leather interior" },
      { icon: "comfort", text: "Starlight headliner" },
      { icon: "bar", text: "Bespoke champagne cooler" },
      { icon: "tech", text: "Theatre configuration" }
    ],
    hourlyRate: "£299"
  },
  {
    name: "Bentley Mulsanne",
    description: "The ultimate expression of British luxury motoring, combining heritage with modern refinement.",
    images: [
      "https://images.unsplash.com/photo-1549520018-841e8c2c5ed9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549520018-c7d27e7a5a09?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549520018-303e781d9869?auto=format&fit=crop&q=80"
    ],
    capacity: 4,
    features: [
      { icon: "luxury", text: "Hand-finished wood veneers" },
      { icon: "comfort", text: "Rear-seat entertainment" },
      { icon: "tech", text: "Naim for Bentley audio" },
      { icon: "bar", text: "Refrigerated bottle cooler" }
    ],
    hourlyRate: "£279"
  },
  {
    name: "Mercedes S-Class",
    description: "The benchmark for luxury sedans, offering cutting-edge technology and supreme comfort.",
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516936?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516937?auto=format&fit=crop&q=80"
    ],
    capacity: 4,
    features: [
      { icon: "tech", text: "MBUX Infotainment System" },
      { icon: "comfort", text: "Executive Rear Seats" },
      { icon: "luxury", text: "Burmester 4D Sound" },
      { icon: "climate", text: "4-Zone Climate Control" }
    ],
    hourlyRate: "£219"
  },
  {
    name: "Mercedes V-Class",
    description: "Spacious luxury for group travel, perfect for corporate teams or special occasions.",
    images: [
      "https://images.unsplash.com/photo-1551952237-798f36b097b0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551952237-798f36b097b1?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551952237-798f36b097b2?auto=format&fit=crop&q=80"
    ],
    capacity: 7,
    features: [
      { icon: "luxury", text: "Conference seating layout" },
      { icon: "comfort", text: "Panoramic sunroof" },
      { icon: "tech", text: "Ambient lighting" },
      { icon: "climate", text: "3-zone climate control" }
    ],
    hourlyRate: "£199"
  }
];

export default function Fleet() {
  const [recommendedVehicle, setRecommendedVehicle] = useState<Vehicle | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  vehicles.forEach(vehicle => {
    useVehicleTracking(vehicle.name, 'view');
  });

  const handleQuizComplete = (vehicle: Vehicle) => {
    setRecommendedVehicle(vehicle);
    setShowQuiz(false);
    
    const element = document.getElementById(`vehicle-${vehicle.name}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FleetHero />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        {!showQuiz ? (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowQuiz(true)}
              className="button-hover-effect bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Take Our Vehicle Quiz
            </button>
          </div>
        ) : (
          <VehicleQuiz 
            vehicles={vehicles}
            onComplete={handleQuizComplete}
          />
        )}

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((vehicle, index) => (
                <div
                  key={vehicle.name}
                  id={`vehicle-${vehicle.name}`}
                  className={`transform transition-all duration-500 ${
                    recommendedVehicle?.name === vehicle.name
                      ? 'ring-2 ring-gold ring-offset-4'
                      : ''
                  }`}
                >
                  <VehicleCard {...vehicle} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <LoyaltyRewards />
          </div>
        </div>
      </div>
    </div>
  );
}