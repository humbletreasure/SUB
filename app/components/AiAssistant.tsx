"use client";
import { useState, useEffect } from 'react';
import { Bot, X, MessageSquare } from 'lucide-react';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const hideOnInactivity = () => {
      setVisible(true); // Re-show on scroll
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!isOpen) setVisible(false); // Only hide if chat window isn't open
      }, 30000); // 30 seconds
    };

    window.addEventListener('scroll', hideOnInactivity);
    return () => window.removeEventListener('scroll', hideOnInactivity);
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-72 h-96 rounded-[2rem] shadow-2xl mb-4 border border-slate-100 flex flex-col animate__animated animate__fadeInUp">
          <div className="bg-slate-900 p-4 rounded-t-[2rem] text-white flex justify-between items-center">
             <div className="flex items-center gap-2 font-bold text-sm italic">
                <Bot size={18} className="text-blue-400" /> NaijaSub AI
             </div>
             <button onClick={() => setIsOpen(false)}><X size={18}/></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-xs space-y-3">
             <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none">
                How can I help you today? Try: "How to buy data?"
             </div>
          </div>
          <div className="p-4 border-t border-slate-50">
             <input type="text" placeholder="Type a keyword..." className="w-full bg-slate-50 p-3 rounded-xl outline-none text-xs" />
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition active:scale-95"
      >
        <MessageSquare />
      </button>
    </div>
  );
}