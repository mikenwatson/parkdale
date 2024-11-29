import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Worthington",
    role: "Corporate Executive, London",
    quote: "Absolutely brilliant service from Parkdale. Their attention to detail is remarkable, and the Rolls-Royce Ghost was immaculate. Perfect for impressing our international clients during their London visit.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Victoria Pembroke",
    role: "Bride, Surrey",
    quote: "We couldn't have been more pleased with Parkdale for our wedding day. The chauffeur was wonderfully professional, and the Bentley Mulsanne made for the most splendid photographs. Simply magnificent!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Richard Hamilton",
    role: "Investment Director, Mayfair",
    quote: "Having used numerous luxury car services in London, Parkdale stands head and shoulders above the rest. Their fleet is exceptional, and their service is consistently first-class.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Elizabeth Hartley",
    role: "Event Organiser, Chelsea",
    quote: "Organising transport for high-profile events requires absolute reliability and discretion. Parkdale delivers both with remarkable consistency. They're our go-to for all luxury transport needs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "Charles Blackwood",
    role: "Private Client, Knightsbridge",
    quote: "The level of service is truly outstanding. From airport transfers to evening events, Parkdale's attention to detail and professionalism is unmatched. Their drivers are proper gentlemen.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what our distinguished clients have to say about their Parkdale experience
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-start mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-serif">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -left-2 -top-2 text-gold/20 w-8 h-8" />
                <p className="text-gray-700 italic pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gold/10 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Experience Our Service</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our distinguished clientele and experience the epitome of luxury transportation
          </p>
          <Link
            to="/booking"
            className="inline-block bg-gold text-white px-8 py-4 rounded text-lg font-semibold hover:bg-gold/90 transition"
          >
            Book Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}