import React from 'react';
import Navbar from '../components/Navbar';
import ServiceHero from '../components/ServiceHero';
import DetailedServiceCard from '../components/DetailedServiceCard';

const services = [
  {
    title: "Wedding Limousine Service",
    description: "Your wedding day deserves nothing but perfection. Our dedicated wedding coordinators work closely with you to understand every detail of your special day. From the ceremony timing to your preferred champagne, we ensure every moment is meticulously planned. We understand that your wedding transportation needs to be more than just a journey - it's an integral part of your celebration. Our experienced team will coordinate with your wedding planner, photographer, and venue to ensure seamless timing and picture-perfect moments. We provide special touches like elegant ribbon decorations, champagne service, and red carpet treatment to make your day truly extraordinary.",
    features: [
      "Personal wedding coordinator to plan your perfect day",
      "Choice of classic white or elegant black luxury vehicles",
      "Immaculate vehicles dressed with ribbons and flowers",
      "Red carpet service for the perfect photo opportunity",
      "Complimentary vintage champagne",
      "Professional chauffeur in formal attire",
      "Flexible scheduling for photos between venues",
      "Early arrival for peace of mind",
      "Wet weather contingency planning",
      "Wedding car decoration to match your theme"
    ],
    image: "https://images.unsplash.com/photo-1549520018-841e8c2c5ed9?auto=format&fit=crop&q=80",
    price: "£499",
    isWeddingService: true
  },
  {
    title: "Corporate Transportation",
    description: "Impress your clients and ensure punctual arrivals with our premium corporate limo service. Perfect for executives and business professionals.",
    features: [
      "Late-model luxury vehicles",
      "Professional, suited chauffeurs",
      "Wi-Fi enabled fleet",
      "Airport meet & greet service",
      "Corporate account management"
    ],
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&q=80",
    price: "£299"
  },
  {
    title: "Prom Night Special",
    description: "Travel in style with our luxurious Mercedes V-Class. Perfect for groups, offering spacious comfort and sophistication for your special night. Our professional chauffeurs ensure a safe and memorable experience for your prom celebration.",
    features: [
      "Luxurious Mercedes V-Class",
      "Spacious interior for up to 7 passengers",
      "Professional photography opportunities",
      "Complimentary soft drinks",
      "Red carpet arrival service",
      "Professional chauffeur in formal attire",
      "State-of-the-art entertainment system",
      "Safe and reliable transportation"
    ],
    image: "https://images.unsplash.com/photo-1551952237-798f36b097b0?auto=format&fit=crop&q=80",
    price: "£399"
  },
  {
    title: "Airport Transfer",
    description: "Start and end your journey in comfort with our reliable airport transfer service. We monitor flight times to ensure punctual pickup and drop-off.",
    features: [
      "Flight tracking system",
      "Meet & greet service",
      "Luggage assistance",
      "Comfortable Mercedes S-Class",
      "Fixed competitive rates"
    ],
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80",
    price: "£199",
    secondaryImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ServiceHero />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <DetailedServiceCard
              key={index}
              {...service}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}