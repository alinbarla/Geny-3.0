import React from 'react';
import { QrCode, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavMenuProps {
  onItemClick?: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onItemClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Close menu on mobile when clicking any link
    if (window.innerWidth < 1024) { // lg breakpoint
      onItemClick?.();
    }
  };

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
        <li>
          <Link 
            to="/"
            onClick={handleClick}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
          >
            <div className="relative">
              <QRCode className="w-5 h-5" />
              <Wand2 className="w-3 h-3 text-pink-500 absolute -top-1 -right-1" />
            </div>
            <span className="font-medium">QR Code Geny</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/qr-code-reader"
            onClick={handleClick}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
          >
            <QrCode className="w-5 h-5" />
            <span className="font-medium">QR Code Reader</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
