
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import MotivationalCard from './components/MotivationalCard';
import AICoach from './components/AICoach';
import ThemePicker from './components/ThemePicker';
import { THEMES, CARDS } from './constants';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(THEMES[0]);

  useEffect(() => {
    document.body.style.transition = 'background-color 0.8s ease-in-out';
  }, []);

  const scrollToCards = () => {
    const element = document.getElementById('motivational-cards');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout theme={theme}>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-12 py-16 md:py-40 animate-in fade-in slide-in-from-top-6 duration-1000 px-4 relative">
        <div className="relative">
          <h1 className="text-6xl md:text-9xl font-extrabold leading-tight tracking-tight drop-shadow-sm select-none">
            Take a Deep <br className="hidden md:block" /> Breath 🌤️
          </h1>
          {/* Decorative icons that float near the title */}
          <span className="absolute -top-16 -left-12 text-5xl md:text-7xl opacity-40 animate-pulse">✨</span>
          <span className="absolute -bottom-8 -right-8 text-5xl md:text-7xl opacity-40 animate-bounce">🍃</span>
        </div>
        
        <p className="text-2xl md:text-5xl opacity-90 max-w-4xl leading-relaxed font-semibold">
          Chào mừng bạn đến với góc nhỏ bình yên. <br className="hidden md:block" /> 
          Dành vài phút cho bản thân cùng 
          <span 
            className="mx-3 px-6 py-2 rounded-[1.5rem] transition-all duration-500 inline-block shadow-sm transform hover:rotate-1" 
            style={{ 
              backgroundColor: theme.accent + '25', 
              color: theme.text,
              border: `2px solid ${theme.accent}30`
            }}
          >
            Dedicated Friend
          </span> 
          nhé.
        </p>

        <button 
          onClick={scrollToCards}
          className="px-16 py-7 md:px-24 md:py-10 rounded-full text-3xl md:text-5xl font-black shadow-2xl hover:shadow-indigo-200/50 hover:scale-105 active:scale-95 transition-all duration-300 transform"
          style={{ backgroundColor: theme.accent, color: 'white' }}
        >
          Bắt đầu thư giãn 🍃
        </button>
      </section>

      {/* Motivational Grid Section */}
      <section id="motivational-cards" className="py-24 px-2 md:px-0">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold opacity-90">Món quà tinh thần 🎁</h2>
          <div className="h-2 w-24 mx-auto mt-6 rounded-full" style={{ backgroundColor: theme.accent }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {CARDS.map((card, index) => (
            <div 
              key={card.id}
              className="animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <MotivationalCard item={card} theme={theme} />
            </div>
          ))}
        </div>
      </section>

      {/* AI Coach Section */}
      <AICoach theme={theme} />

      {/* Footer */}
      <footer className="mt-40 text-center py-24 opacity-70 text-2xl md:text-3xl font-bold">
        <div className="flex justify-center space-x-6 mb-6 text-4xl">
          <span className="sway-flower">🌸</span>
          <span className="float-cloud">☁️</span>
          <span className="sway-flower" style={{ animationDelay: '1s' }}>🌼</span>
        </div>
        <p className="mb-4">Hơi thở là cầu nối của sự sống.</p>
        <p className="text-sm md:text-xl font-medium tracking-widest uppercase opacity-50">Breathe & Smile — Chúc bạn một đời an nhiên. 🫂</p>
        
        {/* Subtle bottom text as requested */}
        <div className="mt-20 text-[10px] md:text-xs opacity-20 font-normal tracking-widest uppercase select-none">
          Made By Tran Minh Thai Family
        </div>
      </footer>

      {/* Theme Picker Overlay */}
      <ThemePicker 
        currentThemeId={theme.id} 
        onThemeChange={setTheme} 
        theme={theme}
      />
    </Layout>
  );
};

export default App;
