
import React, { useState } from 'react';
import { CardItem, Theme } from '../types';

interface MotivationalCardProps {
  item: CardItem;
  theme: Theme;
}

const MotivationalCard: React.FC<MotivationalCardProps> = ({ item, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);

  const toggleModal = () => {
    if (!isOpen) {
      setCurrentQuoteIdx(Math.floor(Math.random() * item.quotes.length));
    }
    setIsOpen(!isOpen);
  };

  const nextQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * item.quotes.length);
    } while (nextIdx === currentQuoteIdx && item.quotes.length > 1);
    setCurrentQuoteIdx(nextIdx);
  };

  return (
    <>
      <div 
        onClick={toggleModal}
        className="group p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center space-y-6 hover:-translate-y-2 hover-jiggle border-2 border-transparent hover:border-white/40"
        style={{ backgroundColor: theme.card }}
      >
        <span className="text-6xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
        <h3 className="text-2xl font-bold text-center leading-tight">{item.title}</h3>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md animate-in fade-in duration-300"
          onClick={toggleModal}
        >
          <div 
            className="w-full max-w-xl p-10 rounded-[3rem] shadow-2xl relative animate-in zoom-in-95 duration-300"
            style={{ backgroundColor: theme.card, color: theme.text }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={toggleModal}
              className="absolute top-6 right-6 text-3xl hover:rotate-90 transition-transform p-2"
            >
              ✕
            </button>
            <div className="flex flex-col items-center space-y-8">
              <span className="text-8xl">{item.icon}</span>
              <h2 className="text-3xl font-bold border-b-4 border-dashed pb-2" style={{ borderColor: theme.accent }}>{item.title}</h2>
              <div className="min-h-[120px] flex items-center justify-center">
                <p className="text-center text-2xl font-medium leading-relaxed animate-in slide-in-from-bottom-2 duration-700">
                  {item.quotes[currentQuoteIdx]}
                </p>
              </div>
              <button
                onClick={nextQuote}
                className="px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: theme.accent, color: 'white' }}
              >
                Xem câu khác ✨
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MotivationalCard;
