import React from 'react';

interface PresetStylesProps {
  onSelect: (colors: { fg: string; bg: string; gradient: string }) => void;
}

export const PresetStyles: React.FC<PresetStylesProps> = ({ onSelect }) => {
  const presetStyles = [
    { fg: '#FF6B6B', bg: '#4ECDC4', gradient: '#45B7AF' },
    { fg: '#845EC2', bg: '#FF9671', gradient: '#FFC75F' },
    { fg: '#009EFA', bg: '#FFFFFF', gradient: '#00F5D4' },
    { fg: '#F72585', bg: '#4CC9F0', gradient: '#7209B7' },
    { fg: '#2B2D42', bg: '#8D99AE', gradient: '#EDF2F4' },
    { fg: '#5F0F40', bg: '#FB8B24', gradient: '#E36414' },
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Preset Styles
      </label>
      <div className="grid grid-cols-3 gap-3">
        {presetStyles.map((style, index) => (
          <button
            key={index}
            onClick={() => onSelect(style)}
            className="aspect-square rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all shadow-sm hover:shadow-md"
            style={{
              background: `linear-gradient(45deg, ${style.bg}, ${style.gradient})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};