import React from 'react';
import { CheckCircle2, Copy, ExternalLink } from 'lucide-react';

interface ResultDisplayProps {
  result: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const isUrl = (text: string) => {
    try {
      new URL(text);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="w-full p-6 bg-purple-50 rounded-2xl">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-900 mb-4">
        <CheckCircle2 className="w-5 h-5 text-green-500" />
        QR Code Content
      </h3>
      
      <div className="relative">
        <pre className="w-full p-4 bg-white rounded-xl text-gray-700 font-mono text-sm whitespace-pre-wrap break-words">
          {result}
        </pre>
        
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={copyToClipboard}
            className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="w-4 h-4" />
          </button>
          
          {isUrl(result) && (
            <a
              href={result}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              title="Open link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      {copied && (
        <div className="mt-2 text-sm text-green-600 flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4" />
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};