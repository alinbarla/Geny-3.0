import React from 'react';
import { QrCode } from 'lucide-react';

interface ReadButtonProps {
  onClick: () => void;
  isReading: boolean;
  progress: number;
}

export const ReadButton: React.FC<ReadButtonProps> = ({ onClick, isReading, progress }) => {
  return (
    <button
      onClick={onClick}
      disabled={isReading}
      className="relative w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg overflow-hidden"
    >
      <div className="flex items-center justify-center gap-2">
        <QrCode className="w-5 h-5" />
        {isReading ? 'Reading QR Code...' : 'Read QR Code'}
      </div>
      {isReading && (
        <div 
          className="absolute inset-0 bg-white/20 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      )}
    </button>
  );
};