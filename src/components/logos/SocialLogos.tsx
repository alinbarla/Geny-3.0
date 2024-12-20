import React from 'react';
import { LogoGrid } from './LogoGrid';
import { socialLogoPaths } from './socialLogoPaths';
import { UploadButton } from '../UploadButton';
import { X } from 'lucide-react';

interface SocialLogosProps {
  onSelect: (name: string) => void;
  selectedLogo: string | null;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SocialLogos: React.FC<SocialLogosProps> = ({ onSelect, selectedLogo, onFileUpload, onClear }) => {
  return (
    <div className="w-full max-w-[364px]">
      <div className="relative p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium text-gray-700">Popular Platforms</h3>
          <button
            onClick={onClear}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors"
          >
            <X className="w-3 h-3" />
            Clear
          </button>
        </div>
        <LogoGrid logos={socialLogoPaths} onSelect={onSelect} selectedLogo={selectedLogo} />
      </div>
      <div className="mt-4">
        <UploadButton onFileUpload={onFileUpload} />
      </div>
    </div>
  );
};