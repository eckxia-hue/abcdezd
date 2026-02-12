
import { GoogleGenAI } from "@google/genai";
import React, { useState, useRef, useEffect } from 'react';
import { Theme, Message } from '../types';
import { SUGGESTIONS } from '../constants';
import { getAIResponse } from '../services/geminiService';

interface AICoachProps {
  theme: Theme;
}

const AICoach: React.FC<AICoachProps> = ({ theme }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Chào bạn, mình là Dedicated Friend.\n\nMình ở đây để lắng nghe và chia sẻ mọi nỗi lòng cùng bạn. Bạn cần lời khuyên hay đơn giản là một người để tâm sự? 🫂',
      timestamp: Date.now(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Giả lập một chút thời gian "đang suy nghĩ" để cảm giác thật hơn
    const response = await getAIResponse(text);
    
    // Thêm một chút delay nhỏ sau khi nhận kết quả để animation typing mượt mà
    setTimeout(() => {
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section className="mt-20 mb-20 w-full max-w-4xl mx-auto px-2">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">🫂 Dedicated Friend</h2>
        <p className="text-xl md:text-2xl opacity-75">Người bạn tận tâm, luôn lắng nghe và bảo vệ không gian bình yên của bạn.</p>
      </div>

      <div className="mb-8">
        <p className="text-sm md:text-base font-bold uppercase tracking-widest opacity-60 mb-4 ml-2 border-l-4 border-pink-400 pl-3">
          Hãy chọn một chủ đề để nhận lời khuyên:
        </p>
        <div className="flex flex-wrap gap-3">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => handleSendMessage(s)}
              disabled={isTyping}
              className="px-5 py-3 text-lg md:text-xl rounded-2xl border-2 transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-xl font-bold bg-white disabled:opacity-50"
              style={{ 
                borderColor: theme.accent + '60',
                color: theme.text 
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div 
        className="rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col h-[550px] md:h-[750px] border-4 md:border-8"
        style={{ backgroundColor: theme.card, borderColor: theme.accent + '20' }}
      >
        <div 
          ref={scrollRef}
          className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar space-y-6"
          style={{ backgroundImage: `radial-gradient(${theme.accent}08 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }}
        >
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex items-end space-x-2 md:space-x-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex-shrink-0 bg-white shadow-md flex items-center justify-center border-2 border-pink-100 overflow-hidden pulse-avatar">
                  <img 
                    src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Dedicated&backgroundColor=ffd5dc" 
                    alt="Dedicated Friend Avatar" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              
              <div 
                className={`max-w-[85%] md:max-w-[75%] p-5 md:p-7 rounded-[2rem] md:rounded-[3rem] shadow-md text-xl md:text-3xl leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'rounded-br-none font-semibold text-white bubble-in-right' 
                    : 'rounded-bl-none border border-black/5 bg-white bubble-in'
                }`}
                style={{ 
                  backgroundColor: msg.role === 'user' ? theme.accent : theme.aiBubble,
                  color: msg.role === 'user' ? '#FFFFFF' : theme.text,
                }}
              >
                {msg.content}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex-shrink-0 bg-white border-2 border-gray-100 flex items-center justify-center text-xl overflow-hidden shadow-sm">
                  👤
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-end space-x-3 justify-start bubble-in">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex-shrink-0 bg-white shadow-md flex items-center justify-center border-2 border-pink-100 overflow-hidden pulse-avatar">
                <img src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Dedicated&backgroundColor=ffd5dc" alt="AI Avatar" className="w-full h-full" />
              </div>
              <div 
                className="p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] rounded-bl-none border border-black/5 flex items-center space-x-2 bg-white shadow-sm"
              >
                <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-pink-300 dot-wave-item" style={{ animationDelay: '0s' }}></div>
                <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-pink-400 dot-wave-item" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-pink-300 dot-wave-item" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 md:p-8 bg-white/90 backdrop-blur-md border-t-2" style={{ borderColor: theme.accent + '20' }}>
          <div className="flex items-center space-x-3 md:space-x-5">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="Nhắn tin cho Dedicated Friend..."
              className="flex-1 bg-gray-100/50 rounded-full border-2 border-transparent focus:border-pink-300 focus:bg-white outline-none text-xl md:text-3xl py-4 md:py-6 px-8 md:px-12 transition-all font-medium"
              style={{ color: theme.text }}
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="w-14 h-14 md:w-24 md:h-24 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-90 transition-all disabled:opacity-50 disabled:scale-100"
              disabled={!inputValue.trim() || isTyping}
              style={{ backgroundColor: theme.accent, color: 'white' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICoach;
