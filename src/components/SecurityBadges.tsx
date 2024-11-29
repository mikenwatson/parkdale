import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

export default function SecurityBadges() {
  return (
    <div className="bg-white/50 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          <div className="flex items-center space-x-2">
            <Shield className="text-gold w-8 h-8" />
            <div>
              <div className="font-semibold">SSL Secure</div>
              <div className="text-sm text-gray-600">256-bit encryption</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Award className="text-gold w-8 h-8" />
            <div>
              <div className="font-semibold">Licensed</div>
              <div className="text-sm text-gray-600">PCO Registered</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-gold w-8 h-8" />
            <div>
              <div className="font-semibold">Verified</div>
              <div className="text-sm text-gray-600">Identity Checked</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Shield className="text-gold w-8 h-8" />
            <div>
              <div className="font-semibold">GDPR</div>
              <div className="text-sm text-gray-600">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}