import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DetailedServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  secondaryImage?: string;
  price: string;
  reverse?: boolean;
  isWeddingService?: boolean;
}

export default function DetailedServiceCard({
  title,
  description,
  features,
  image,
  secondaryImage,
  price,
  reverse = false,
  isWeddingService = false,
}: DetailedServiceCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg overflow-hidden shadow-lg card-3d`}>
      <div className="md:w-1/2 relative overflow-hidden group">
        {secondaryImage ? (
          <div className="grid grid-cols-2 h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
            <img
              src={secondaryImage}
              alt={`${title} Secondary`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
          />
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-serif mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center text-gray-700 transform hover:translate-x-1 hover:translateZ(5px) transition-all duration-200"
              >
                <ArrowRight size={16} className="text-gold mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
          <span className="text-2xl font-serif text-gold mb-4 sm:mb-0 transform-gpu hover:scale-105 transition-transform">
            Starting at {price}
          </span>
          <Link
            to={isWeddingService ? "/wedding-enquiry" : "/booking"}
            className="button-3d bg-gold text-white px-6 py-3 rounded flex items-center group"
          >
            {isWeddingService ? 'Enquire Now' : 'Book This Service'}
            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}