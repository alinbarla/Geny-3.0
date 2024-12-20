import React from 'react';
import { Sparkles } from 'lucide-react';

export const Description: React.FC = () => {
  return (
    <div className="relative mb-8 p-6 bg-gradient-to-r from-purple-100/90 to-pink-100/90 rounded-2xl backdrop-blur-sm">
      <div className="absolute -top-3 -left-3 p-2 bg-white rounded-xl">
        <Sparkles className="w-5 h-5 text-purple-500" />
      </div>
      <p className="text-center text-gray-700 leading-relaxed">
        Transform your links into stunning, customizable QR codes with our intuitive generator. 
        Create professional QR codes with custom logos, colors, and styles in seconds.
      </p>
    </div>
  );
};