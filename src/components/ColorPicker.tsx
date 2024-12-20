import React from 'react';
import { Palette } from 'lucide-react';

interface ColorPickerProps {
  onChange: (colors: { fg: string }) => void;
}

const colorThemes = [
  { 
    name: 'Teal', 
    fg: '#115e59',
    preview: 'bg-teal-700'
  },
  { 
    name: 'Lavender', 
    fg: '#553C9A',
    preview: 'bg-purple-600'
  },
  { 
    name: 'Forest', 
    fg: '#1b4332',
    preview: 'bg-green-600'
  },
  { 
    name: 'Gold', 
    fg: '#854d0e',
    preview: 'bg-yellow-600'
  },
  { 
    name: 'Sapphire', 
    fg: '#1e40af',
    preview: 'bg-blue-700'
  },
  { 
    name: 'Ruby', 
    fg: '#9f1239',
    preview: 'bg-rose-600'
  }
];

export const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Palette className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-800">Choose Theme</h3>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {colorThemes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => onChange({ fg: theme.fg })}
            className="group relative aspect-square rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
          >
            <div className={`absolute inset-0 ${theme.preview} opacity-20`} />
            <div
              className="absolute inset-4 rounded-xl"
              style={{ backgroundColor: theme.fg }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-medium text-gray-700 bg-white/90 px-3 py-1 rounded-full">
                {theme.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};