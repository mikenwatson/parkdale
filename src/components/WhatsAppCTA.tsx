import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/447123456789" // Replace with your WhatsApp Business number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 z-50 flex items-center gap-2 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}