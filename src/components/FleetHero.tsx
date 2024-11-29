import React from 'react';

export default function FleetHero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549520018-841e8c2c5ed9?auto=format&fit=crop&q=80"
          alt="European Luxury Fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-serif mb-6">Parkdale's European Luxury Fleet</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Experience the finest selection of European luxury automobiles, meticulously maintained for your comfort
        </p>
      </div>
    </div>
  );
}