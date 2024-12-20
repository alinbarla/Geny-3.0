import React from 'react';
import { Circle, Square, Hexagon } from 'lucide-react';

interface DotStylePickerProps {
  value: 'dots' | 'squares' | 'rounded' | 'classy' | 'extra-rounded';
  onChange: (style: 'dots' | 'squares' | 'rounded' | 'classy' | 'extra-rounded') => void;
}

const styles = [
  { name: 'Dots', value: 'dots', icon: Circle },
  { name: 'Squares', value: 'squares', icon: Square },
  { name: 'Rounded', value: 'rounded', icon: Circle },
  { name: 'Classy', value: 'classy', icon: Hexagon },
  { name: 'Extra Rounded', value: 'extra-rounded', icon: Circle },
] as const;

export const DotStylePicker: React.FC<DotStylePickerProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">Dot Style</h3>
      <div className="grid grid-cols-3 gap-2">
        {styles.map((style) => {
          const Icon = style.icon;
          return (
            <button
              key={style.value}
              onClick={() => onChange(style.value)}
              className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all ${
                value === style.value
                  ? 'bg-purple-100 text-purple-700'
                  : 'hover:bg-purple-50 text-gray-600'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{style.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}