import React from 'react';
import { Upload } from 'lucide-react';

const platformLogos = [
  { name: 'Google', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'YouTube', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg' },
  { name: 'Facebook', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg' },
  { name: 'Instagram', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg' },
  { name: 'Twitter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg' },
  { name: 'LinkedIn', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
  { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Twitch', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitch/twitch-original.svg' },
  { name: 'Discord', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg' },
  { name: 'Reddit', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reddit/reddit-original.svg' },
  { name: 'TikTok', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tiktok/tiktok-original.svg' },
  { name: 'Slack', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
  { name: 'WhatsApp', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg' },
  { name: 'Telegram', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/telegram/telegram-original.svg' },
  { name: 'WordPress', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Shopify', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
  { name: 'Wix', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wix/wix-original.svg' },
  { name: 'Squarespace', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/squarespace/squarespace-original.svg' },
  { name: 'Medium', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/medium/medium-original.svg' },
  { name: 'Behance', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg' },
];

interface LogoSelectorProps {
  onLogoSelect: (logoUrl: string) => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LogoSelector: React.FC<LogoSelectorProps> = ({ onLogoSelect, onFileUpload }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Choose Platform Logo</h3>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {platformLogos.map((logo) => (
          <button
            key={logo.name}
            onClick={() => onLogoSelect(logo.url)}
            className="p-3 bg-white rounded-xl hover:bg-purple-50 transition-all group relative"
            title={logo.name}
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="w-8 h-8 mx-auto transition-transform group-hover:scale-110"
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-700 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
              {logo.name}
            </span>
          </button>
        ))}
      </div>

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