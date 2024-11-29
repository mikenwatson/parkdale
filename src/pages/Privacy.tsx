import React from 'react';
import Navbar from '../components/Navbar';
import { Shield, Mail, Lock, Database, UserCheck, FileText, AlertTriangle } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white text-center">
            Privacy & GDPR Compliance
          </h1>
          <p className="mt-4 text-xl text-gray-300 text-center max-w-2xl mx-auto">
            How we protect your data and comply with GDPR regulations
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Email Marketing Compliance */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Mail className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">Email Marketing Compliance</h2>
            </div>
            <p className="text-gray-600 mb-6">
              At Parkdale Luxury Travel, we take your privacy seriously and ensure full compliance with GDPR regulations regarding email marketing and communications.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Data Collection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Only essential personal information collected</li>
                  <li>• Clear purpose specification for data usage</li>
                  <li>• Transparent data collection processes</li>
                  <li>• Minimal data retention period</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Consent Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Explicit opt-in mechanisms</li>
                  <li>• Clear consent withdrawal options</li>
                  <li>• Separate consent for different purposes</li>
                  <li>• Documented consent records</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Principles */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">Key GDPR Principles</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Lock className="text-gold w-6 h-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Data Security</h3>
                  <p className="text-gray-600">
                    All personal data is encrypted and stored securely using industry-standard protocols. Regular security audits ensure the ongoing protection of your information.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Database className="text-gold w-6 h-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Data Storage & Processing</h3>
                  <p className="text-gray-600">
                    Your data is stored within the EU/EEA, and any international transfers comply with GDPR requirements. We maintain detailed records of processing activities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <UserCheck className="text-gold w-6 h-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Your Rights</h3>
                  <p className="text-gray-600">
                    You have the right to access, rectify, erase, and port your personal data. You can also object to processing and request processing restrictions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Marketing Communications */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">Marketing Communications</h2>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Our Commitment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Clear opt-in choices for different types of communications
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Easy unsubscribe options in every email
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Regular review and cleanup of marketing lists
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Transparent information about data usage
                </li>
              </ul>
            </div>
          </section>

          {/* Data Breach Protocol */}
          <section>
            <div className="flex items-center mb-6">
              <AlertTriangle className="text-gold w-8 h-8 mr-3" />
              <h2 className="text-2xl font-serif">Data Breach Protocol</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              In the unlikely event of a data breach, we have comprehensive procedures in place:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold mr-2">1.</span>
                  Immediate notification to affected individuals within 72 hours
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">2.</span>
                  Full cooperation with supervisory authorities
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">3.</span>
                  Detailed documentation of the breach and response measures
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">4.</span>
                  Implementation of additional security measures as needed
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}