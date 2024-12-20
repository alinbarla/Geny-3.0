import React from 'react';
import type { LogoPath } from './types';

interface LogoIconProps extends LogoPath {
  isSelected: boolean;
  onClick: () => void;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ name, path, color, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full aspect-square flex items-center justify-center rounded-xl transition-all ${
        isSelected 
          ? 'bg-purple-100 ring-2 ring-purple-500 ring-offset-2'
          : 'hover:bg-purple-50'
      }`}
      title={name}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full transition-transform group-hover:scale-110"
          style={{ color: color }}
          fill="currentColor"
        >
          <path d={path} />
        </svg>
      </div>
      <span className="sr-only">{name}</span>
    </button>
  );
};