import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = 'signin' | 'register' | 'forgot';

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [resetSent, setResetSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'forgot' && !resetSent) {
      setResetSent(true);
      return;
    }
    // Handle authentication logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-serif mb-6 text-center">
            {mode === 'signin' && 'Welcome Back'}
            {mode === 'register' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  <input
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  <input
                    type="password"
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            )}

            {mode === 'forgot' && resetSent ? (
              <div className="text-center py-4">
                <div className="text-green-600 mb-4">
                  Password reset instructions have been sent to your email.
                </div>
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className="text-gold hover:text-gold/80"
                >
                  Return to Sign In
                </button>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-gold text-white py-2 rounded-lg hover:bg-gold/90 transition flex items-center justify-center group"
              >
                {mode === 'signin' && 'Sign In'}
                {mode === 'register' && 'Create Account'}
                {mode === 'forgot' && 'Send Reset Link'}
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </form>

          <div className="mt-6 text-center text-sm">
            {mode === 'signin' && (
              <>
                <button
                  onClick={() => setMode('forgot')}
                  className="text-gold hover:text-gold/80"
                >
                  Forgot Password?
                </button>
                <div className="mt-2">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('register')}
                    className="text-gold hover:text-gold/80 font-medium"
                  >
                    Register
                  </button>
                </div>
              </>
            )}
            {mode === 'register' && (
              <div>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="text-gold hover:text-gold/80 font-medium"
                >
                  Sign In
                </button>
              </div>
            )}
            {mode === 'forgot' && !resetSent && (
              <button
                onClick={() => setMode('signin')}
                className="text-gold hover:text-gold/80"
              >
                Back to Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}