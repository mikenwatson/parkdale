import React from 'react';

export default function ServiceHero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&q=80"
          alt="Luxury Rolls Royce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-serif mb-6">Our Premium Services</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Experience unparalleled luxury and comfort with Parkdale Limousines' comprehensive range of transportation services
        </p>
      </div>
    </div>
  );
}