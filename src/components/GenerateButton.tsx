import React from 'react';
import { QrCode } from 'lucide-react';

interface GenerateButtonProps {
  onGenerate: () => void;
  isGenerating: boolean;
  progress: number;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ 
  onGenerate, 
  isGenerating, 
  progress 
}) => {
  return (
    <button
      id="conversion"
      onClick={onGenerate}
      disabled={isGenerating}
      className="relative px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors flex items-center gap-2 overflow-hidden"
    >
      <QrCode className="w-4 h-4" />
      Generate
      {isGenerating && (
        <div 
          className="absolute inset-0 bg-purple-500/30"
          style={{
            width: `${progress}%`,
            transition: 'width 0.3s ease-in-out'
          }}
        />
      )}
    </button>
  );
};
