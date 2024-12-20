import React from 'react';
import { Upload } from 'lucide-react';

interface UploadButtonProps {
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadButton: React.FC<UploadButtonProps> = ({ onFileUpload }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-sm text-gray-500 font-medium">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <label className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg cursor-pointer w-full">
        <Upload className="w-5 h-5" />
        Upload Custom Logo
        <input
          type="file"
          accept="image/*"
          onChange={onFileUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};