import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-300 border-dashed rounded-2xl cursor-pointer bg-purple-50/50 hover:bg-purple-50 transition-colors">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <Upload className="w-12 h-12 mb-4 text-purple-500" />
        <p className="mb-2 text-sm text-gray-500">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">PNG, JPG, or JPEG</p>
      </div>
      <input 
        type="file" 
        className="hidden" 
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleFileChange}
      />
    </label>
  );
};