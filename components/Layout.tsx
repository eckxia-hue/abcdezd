
import React from 'react';
import { Theme } from '../types';

interface LayoutProps {
  theme: Theme;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ theme, children }) => {
  return (
    <div 
      className="min-h-screen transition-colors duration-1000 relative overflow-hidden"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      {/* Background Layer: Sky & Patterns */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sky Gradient Overlay */}
        <div className="absolute inset-0 sky-gradient opacity-60" />
        
        {/* Floating Clouds - Subtle & Large */}
        <div className="absolute top-[10%] left-[5%] float-cloud text-[120px] md:text-[200px] opacity-10 select-none">☁️</div>
        <div className="absolute top-[35%] right-[-5%] float-cloud text-[150px] md:text-[250px] opacity-10 select-none" style={{ animationDelay: '-5s' }}>☁️</div>
        <div className="absolute bottom-[20%] left-[15%] float-cloud text-[80px] md:text-[150px] opacity-10 select-none" style={{ animationDelay: '-10s' }}>☁️</div>

        {/* Delicate Swaying Flowers & Sparkles */}
        <div className="absolute top-[20%] right-[10%] sway-flower opacity-30 text-5xl md:text-7xl">🌸</div>
        <div className="absolute bottom-[10%] left-[8%] sway-flower opacity-30 text-6xl md:text-8xl" style={{ animationDelay: '1.5s' }}>🌼</div>
        <div className="absolute top-[60%] right-[15%] sway-flower opacity-20 text-4xl md:text-6xl" style={{ animationDelay: '3s' }}>🌻</div>
        <div className="absolute top-[15%] left-[20%] sparkle-dot opacity-40 text-2xl">✨</div>
        <div className="absolute bottom-[30%] right-[25%] sparkle-dot opacity-40 text-xl" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute top-[80%] left-[40%] sparkle-dot opacity-20 text-3xl" style={{ animationDelay: '1s' }}>✨</div>

        {/* Subtle Decorative Pattern Dots */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(${theme.text} 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
