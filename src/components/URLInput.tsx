import React from 'react';
import { GenerateButton } from './GenerateButton';
import { Download } from 'lucide-react';

interface URLInputProps {
  url: string;
  setUrl: (url: string) => void;
  onDownload: () => void;
}

export const URLInput: React.FC<URLInputProps> = ({ url, setUrl, onDownload }) => {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [showDownload, setShowDownload] = React.useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowDownload(false);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setShowDownload(true);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    if (!url.trim()) {
      setUrl('https://google.com');
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        URL or Text
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          placeholder="Enter URL or text to generate QR code"
        />
        <div className="flex gap-2">
          <GenerateButton 
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            progress={progress}
          />
          {showDownload && (
            <button
              onClick={onDownload}
              className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2 animate-fade-in whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
};