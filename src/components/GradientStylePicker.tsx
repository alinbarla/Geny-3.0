import React from 'react';
import { GradientStyle } from '../types';

interface GradientStylePickerProps {
  gradientStyle: GradientStyle;
  onChange: (style: GradientStyle) => void;
}

export const GradientStylePicker: React.FC<GradientStylePickerProps> = ({
  gradientStyle,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Gradient Style
      </label>
      <div className="flex gap-4">
        <button
          onClick={() => onChange('linear')}
          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
            gradientStyle === 'linear'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-purple-50'
          }`}
        >
          Linear
        </button>
        <button
          onClick={() => onChange('radial')}
          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
            gradientStyle === 'radial'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-purple-50'
          }`}
        >
          Radial
        </button>
      </div>
    </div>
  );
};