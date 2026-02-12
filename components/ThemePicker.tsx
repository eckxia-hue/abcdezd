
import React, { useState } from 'react';
import { THEMES } from '../constants';
import { Theme } from '../types';

interface ThemePickerProps {
  currentThemeId: string;
  onThemeChange: (theme: Theme) => void;
  theme: Theme;
}

const ThemePicker: React.FC<ThemePickerProps> = ({ currentThemeId, onThemeChange, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        style={{ backgroundColor: theme.accent, color: 'white' }}
      >
        🎨
      </button>

      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 p-4 rounded-3xl shadow-2xl border border-black/5 animate-in slide-in-from-bottom-4 duration-300 w-48"
          style={{ backgroundColor: theme.card, color: theme.text }}
        >
          <p className="text-xs font-bold mb-3 opacity-50 uppercase tracking-wider">Chọn không gian</p>
          <div className="grid grid-cols-2 gap-3">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  onThemeChange(t);
                  setIsOpen(false);
                }}
                className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all ${
                  currentThemeId === t.id ? 'ring-2 ring-offset-2' : 'hover:scale-105'
                }`}
                // Fix: 'ringColor' is not a valid CSS property. Using the CSS variable '--tw-ring-color' used by Tailwind's ring utility.
                style={{ '--tw-ring-color': t.accent } as React.CSSProperties}
              >
                <div 
                  className="w-10 h-10 rounded-full border border-black/10"
                  style={{ backgroundColor: t.bg }}
                />
                <span className="text-[10px] font-medium text-center leading-tight">{t.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemePicker;
