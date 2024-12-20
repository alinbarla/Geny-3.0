import React from 'react';
import { Square, Circle, Hash } from 'lucide-react';

interface CornerStylePickerProps {
  value: 'dot' | 'square' | 'extra-rounded';
  onChange: (style: 'dot' | 'square' | 'extra-rounded') => void;
}

const styles = [
  { name: 'Dot', value: 'dot', icon: Circle },
  { name: 'Square', value: 'square', icon: Square },
  { name: 'Extra Rounded', value: 'extra-rounded', icon: Hash },
] as const;

export const CornerStylePicker: React.FC<CornerStylePickerProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">Corner Style</h3>
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