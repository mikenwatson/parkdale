import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string; from: 'user' | 'agent'}[]>([
    { text: "Hello! How can we assist you today?", from: 'agent' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, from: 'user' }]);
    setInput('');

    // Simulate agent response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. One of our agents will respond shortly.",
        from: 'agent'
      }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gold text-white p-4 rounded-full shadow-lg hover:bg-gold/90 transition-colors duration-300 z-40"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-2xl z-40">
          <div className="p-4 bg-gold text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Support</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.from === 'user'
                      ? 'bg-gold/10 text-gray-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
              />
              <button
                type="submit"
                className="bg-gold text-white px-4 py-2 rounded-lg hover:bg-gold/90 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}