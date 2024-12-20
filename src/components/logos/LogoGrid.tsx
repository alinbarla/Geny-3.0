import React from 'react';
import { LogoIcon } from './LogoIcon';
import type { LogoPath } from './types';

interface LogoGridProps {
  logos: LogoPath[];
  onSelect: (name: string) => void;
  selectedLogo: string | null;
}

export const LogoGrid: React.FC<LogoGridProps> = ({ logos, onSelect, selectedLogo }) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      {logos.map((logo) => (
        <div key={logo.name} className="aspect-square">
          <LogoIcon
            {...logo}
            isSelected={selectedLogo === logo.name}
            onClick={() => onSelect(logo.name)}
          />
        </div>
      ))}
    </div>
  );
};