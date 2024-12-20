import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50">
      <div className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
        <Logo />
        
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className={`
          absolute top-full left-0 right-0 mt-2 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg
          lg:static lg:mt-0 lg:p-0 lg:bg-transparent lg:shadow-none lg:backdrop-blur-none
          ${isMenuOpen ? 'block' : 'hidden lg:block'}
        `}>
          <NavMenu onItemClick={closeMenu} />
        </div>
      </div>
    </header>
  );
};