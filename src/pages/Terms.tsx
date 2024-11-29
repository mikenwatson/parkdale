import React from 'react';
import Navbar from '../components/Navbar';
import { Scale, Clock, AlertCircle, PoundSterling, Shield, FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white text-center">
            Terms of Service
          </h1>
          <p className="mt-4 text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Scale className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">1. Introduction</h2>
            </div>
            <p className="text-gray-600 mb-4">
              These terms and conditions govern your use of Parkdale Luxury Travel's chauffeur and luxury vehicle hire services. By booking our services, you agree to be bound by these terms.
            </p>
          </section>

          {/* Booking and Cancellation */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Clock className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">2. Booking and Cancellation</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <h3 className="font-semibold text-black">2.1 Booking Confirmation</h3>
              <p>
                All bookings are subject to availability and confirmation. A booking is only confirmed upon receipt of a written confirmation from Parkdale Luxury Travel and payment of the required deposit or full payment as specified.
              </p>

              <h3 className="font-semibold text-black">2.2 Cancellation Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made more than 48 hours before the service: Full refund less 10% administration fee</li>
                <li>24-48 hours notice: 50% of the total booking fee</li>
                <li>Less than 24 hours notice: No refund</li>
                <li>No-shows: Full charge applies</li>
              </ul>
            </div>
          </section>

          {/* Service Terms */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <AlertCircle className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">3. Service Terms</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <h3 className="font-semibold text-black">3.1 Vehicle Provision</h3>
              <p>
                While every effort will be made to provide the specific vehicle requested, we reserve the right to substitute an alternative vehicle of similar or higher specification if necessary.
              </p>

              <h3 className="font-semibold text-black">3.2 Chauffeur Services</h3>
              <p>
                Our chauffeurs are professionally trained and licensed. They will follow all applicable road safety and traffic regulations. The chauffeur's decision regarding safety matters is final.
              </p>

              <h3 className="font-semibold text-black">3.3 Passenger Conduct</h3>
              <p>
                Passengers must comply with all applicable laws and regulations. We reserve the right to terminate service without refund if passengers engage in illegal or disruptive behavior.
              </p>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <PoundSterling className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">4. Payment Terms</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <h3 className="font-semibold text-black">4.1 Pricing</h3>
              <p>
                All prices are in GBP and include VAT where applicable. Additional charges may apply for waiting time, additional mileage, or special requests.
              </p>

              <h3 className="font-semibold text-black">4.2 Payment Methods</h3>
              <p>
                We accept major credit/debit cards and bank transfers. Corporate accounts are available subject to credit checks and approval.
              </p>

              <h3 className="font-semibold text-black">4.3 Additional Charges</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Waiting time: Charged at £45 per hour after the first 15 minutes</li>
                <li>Additional mileage: £2 per mile beyond the agreed distance</li>
                <li>Cleaning fee: Up to £200 may apply for excessive soiling</li>
                <li>Damage: Repair costs plus loss of earnings may be charged</li>
              </ul>
            </div>
          </section>

          {/* Liability and Insurance */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">5. Liability and Insurance</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <h3 className="font-semibold text-black">5.1 Insurance Coverage</h3>
              <p>
                All vehicles are fully insured for passenger and third-party liability as required by UK law. Our insurance does not cover passenger belongings.
              </p>

              <h3 className="font-semibold text-black">5.2 Limitation of Liability</h3>
              <p>
                Our liability is limited to the cost of the service provided. We are not liable for indirect or consequential losses, including missed flights or appointments.
              </p>
            </div>
          </section>

          {/* General Terms */}
          <section>
            <div className="flex items-center mb-6">
              <FileText className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">6. General Terms</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <h3 className="font-semibold text-black">6.1 Force Majeure</h3>
              <p>
                We are not liable for delays or service failures due to circumstances beyond our reasonable control, including but not limited to weather conditions, traffic, or civil unrest.
              </p>

              <h3 className="font-semibold text-black">6.2 Governing Law</h3>
              <p>
                These terms are governed by English law. Any disputes shall be subject to the exclusive jurisdiction of the English courts.
              </p>

              <h3 className="font-semibold text-black">6.3 Modifications</h3>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of the modified terms.
              </p>
            </div>
          </section>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-500">
            <p>
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <p>
              For questions about these terms, please contact our customer service team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}