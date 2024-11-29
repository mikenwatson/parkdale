import React from 'react';
import Navbar from '../components/Navbar';
import WeddingEnquiryForm from '../components/WeddingEnquiryForm';

export default function WeddingEnquiry() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-black/95">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white text-center">
            Wedding Transportation Enquiry
          </h1>
          <p className="mt-4 text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Let us help make your special day perfect with our luxury wedding car service
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <WeddingEnquiryForm />
        </div>
      </div>
    </div>
  );
}