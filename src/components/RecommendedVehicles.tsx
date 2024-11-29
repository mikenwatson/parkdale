import React, { useEffect, useState } from 'react';
import { generateRecommendations } from '../utils/recommendations';
import VehicleCard from './VehicleCard';
import { Vehicle } from '../types/vehicle';
import { ArrowRight } from 'lucide-react';

interface RecommendedVehiclesProps {
  vehicles: Vehicle[];
}

export default function RecommendedVehicles({ vehicles }: RecommendedVehiclesProps) {
  const [recommendations, setRecommendations] = useState<Vehicle[]>([]);

  useEffect(() => {
    const sortedVehicles = generateRecommendations(vehicles);
    setRecommendations(sortedVehicles.slice(0, 3));
  }, [vehicles]);

  if (recommendations.length === 0) return null;

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif">Recommended for You</h2>
        <p className="text-gray-600">Based on your preferences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recommendations.map((vehicle, index) => (
          <div
            key={vehicle.name}
            className="transform transition-all duration-500"
            style={{ 
              animationDelay: `${index * 150}ms`,
              opacity: 0,
              animation: 'fadeIn 0.5s forwards'
            }}
          >
            <VehicleCard {...vehicle} />
          </div>
        ))}
      </div>
    </div>
  );
}