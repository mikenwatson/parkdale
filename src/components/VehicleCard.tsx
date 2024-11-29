import React from 'react';
import { Users, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

interface Feature {
  icon: string;
  text: string;
}

interface VehicleCardProps {
  name: string;
  description: string;
  images: string[];
  capacity: number;
  features: Feature[];
  hourlyRate: string;
}

export default function VehicleCard({
  name,
  description,
  images,
  capacity,
  features,
  hourlyRate,
}: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg group card-3d">
      <div className="relative">
        <ImageCarousel images={images} name={name} />
        <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full flex items-center z-10">
          <Users size={18} className="mr-2" />
          {capacity} passengers
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-serif mb-3">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center text-gray-700 transform hover:translate-x-1 hover:translateZ(5px) transition-all duration-200"
            >
              <Car size={16} className="text-gold mr-2" />
              {feature.text}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="text-gold font-serif transform-gpu hover:scale-105 transition-transform">
            <span className="text-sm">Starting at</span>
            <div className="text-2xl">{hourlyRate}/hr</div>
          </div>
          
          <Link
            to="/booking"
            className="button-3d bg-gold text-white px-6 py-3 rounded-lg flex items-center"
          >
            Book Now
            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}