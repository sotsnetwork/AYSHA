
import React, { useState, useRef, useEffect } from 'react';
import { getDesignAdvice } from '../services/aiCuratorService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AICurator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to AYSHA Furniture & Electronics. I am your AI Curator. How may I assist you in designing your sanctuary today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getDesignAdvice(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm here to help with your luxury design needs." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] md:w-[400px] flex flex-col border border-primary/20 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-stone-850 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white">smart_toy</span>
              </div>
              <div>
                <p className="font-bold text-sm">AYSHA Design Curator</p>
                <p className="text-[10px] text-primary uppercase tracking-widest">Heritage Concierge</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-background-light">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-stone-850 border border-stone-200 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-stone-100 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about design advice..." 
                className="flex-1 bg-stone-50 border-none focus:ring-1 focus:ring-primary rounded-lg text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-stone-850 text-white p-2 rounded-lg hover:bg-primary transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center gap-2 group"
        >
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold uppercase tracking-widest">
            AYSHA Curator
          </span>
        </button>
      )}
    </div>
  );
};

export default AICurator;
