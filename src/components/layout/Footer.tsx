import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 text-center">
      <div className="bg-black/50 backdrop-blur-sm mx-auto inline-block px-6 py-2 rounded-full shadow-lg">
        <p className="text-white text-sm font-medium flex items-center justify-center gap-1.5">
          Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Alin Barla
        </p>
      </div>
    </footer>
  );
};