import React, { useState } from 'react';
import { Palette, ChevronDown } from 'lucide-react';

interface Theme {
  name: string;
  fg: string;
  bg: string;
  preview: string;
}

const themes: Theme[] = [
  { 
    name: 'Teal', 
    fg: '#115e59',
    bg: '#fff',
    preview: 'bg-teal-700'
  },
  { 
    name: 'Lavender', 
    fg: '#553C9A',
    bg: '#fff',
    preview: 'bg-purple-600'
  },
  { 
    name: 'Forest', 
    fg: '#1b4332',
    bg: '#fff',
    preview: 'bg-green-600'
  },
  { 
    name: 'Gold', 
    fg: '#854d0e',
    bg: '#fff',
    preview: 'bg-yellow-600'
  },
  { 
    name: 'Sapphire', 
    fg: '#1e40af',
    bg: '#fff',
    preview: 'bg-blue-700'
  },
  { 
    name: 'Ruby', 
    fg: '#9f1239',
    bg: '#fff',
    preview: 'bg-rose-600'
  },
  { 
    name: 'Noir', 
    fg: '#000000',
    bg: '#fff',
    preview: 'bg-black'
  },
  { 
    name: 'Midnight', 
    fg: '#1e293b',
    bg: '#fff',
    preview: 'bg-slate-800'
  },
  { 
    name: 'Neon', 
    fg: '#16a34a',
    bg: '#fff',
    preview: 'bg-gradient-to-r from-green-400 to-emerald-500'
  }
];

interface ThemeSelectorProps {
  onChange: (colors: { fg: string }) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    onChange({ fg: theme.fg });
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Palette className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-800">Choose Theme</h3>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border-2 border-purple-200 rounded-xl hover:border-purple-300 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full ${selectedTheme.preview}`} />
            <span className="font-medium text-gray-700">{selectedTheme.name}</span>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 py-2 bg-white rounded-xl shadow-lg border border-gray-100 max-h-64 overflow-y-auto">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => handleThemeSelect(theme)}
                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-purple-50 transition-colors"
              >
                <div className={`w-6 h-6 rounded-full ${theme.preview}`} />
                <span className="font-medium text-gray-700">{theme.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};