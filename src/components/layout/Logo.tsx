import React from 'react';
import { QrCode, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link 
      to="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      aria-label="Go to homepage"
    >
      <div className="relative">
        <QrCode className="w-8 h-8 text-purple-600" />
        <Sparkles className="w-4 h-4 text-pink-500 absolute -top-1 -right-1" />
      </div>
      <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        QR Code Geny
      </div>
    </Link>
  );
};