import React, { useState } from 'react';
import { socialLogoPaths } from './logos/socialLogoPaths';
import { Link, Check } from 'lucide-react';

export const SocialShare: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;
  const title = "Generate beautiful QR codes with QR Code Geny";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = [
    {
      ...socialLogoPaths.find(logo => logo.name === 'X'),
      url: `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    },
    {
      ...socialLogoPaths.find(logo => logo.name === 'LinkedIn'),
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      ...socialLogoPaths.find(logo => logo.name === 'Facebook'),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }
  ].filter(Boolean);

  return (
    <div className="lg:flex lg:flex-col lg:gap-3 lg:fixed lg:right-[calc(56%-42rem)] lg:top-1/2 lg:-translate-y-1/2 flex flex-row gap-3 justify-center mt-8 lg:mt-0">
      <button
        onClick={handleCopy}
        className={`p-2 rounded-full shadow-lg transition-all ${
          copied 
            ? 'bg-green-500 text-white' 
            : 'bg-white/90 backdrop-blur-sm hover:bg-purple-50'
        }`}
        title="Copy link"
      >
        {copied ? (
          <Check className="w-5 h-5" />
        ) : (
          <Link className="w-5 h-5" />
        )}
      </button>

      {shareLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => window.open(link.url, '_blank')}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-purple-50 transition-all"
          title={`Share on ${link.name}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            style={{ color: link.color }}
            fill="currentColor"
          >
            <path d={link.path} />
          </svg>
        </button>
      ))}
    </div>
  );
};