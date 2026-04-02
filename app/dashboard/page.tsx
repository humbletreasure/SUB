"use client";
import { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Wifi, 
  Tv, 
  Dribbble, 
  Plus, 
  HeartHandshake, 
  MessageSquare,
  Share2,
  ChevronRight
} from 'lucide-react';

export default function Dashboard() {
  const [showAI, setShowAI] = useState(true);
  const [balance, setBalance] = useState(0.00);

  // Logic: AI Assistant disappears after 30s inactivity, reappears on scroll
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleScroll = () => {
      setShowAI(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowAI(false), 30000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Airtime', icon: <Smartphone />, color: 'bg-orange-500', border: 'border-orange-200' },
    { name: 'Data', icon: <Wifi />, color: 'bg-green-600', border: 'border-green-200' },
    { name: 'TV Sub', icon: <Tv />, color: 'bg-purple-600', border: 'border-purple-200' },
    { name: 'Betting', icon: <Dribbble />, color: 'bg-red-500', border: 'border-red-200' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header & Wallet Section */}
      <div className="bg-blue-600 pt-12 pb-20 px-6 rounded-b-[3rem] shadow-2xl">
        <div className="flex justify-between items-center mb-8 text-white">
          <div>
            <p className="text-blue-100 text-sm">Good morning,</p>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              Chidi <span className="text-blue-300 text-lg">✔️</span>
            </h2>
          </div>
          <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
            <Share2 size={20} />
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-6 shadow-xl">
          <p className="text-slate-500 font-medium text-sm">Wallet Balance</p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-bold text-slate-900">₦</span>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">
              {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </h3>
          </div>
          
          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
              <Plus size={20} /> Deposit
            </button>
            <button className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition">
              <HeartHandshake size={20} /> Donate
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 -mt-8 grid grid-cols-2 gap-4">
        {services.map((service) => (
          <button key={service.name} className={`bg-white p-6 rounded-[2rem] shadow-sm border-b-4 ${service.border} flex flex-col items-center gap-3 active:scale-95 transition`}>
            <div className={`${service.color} text-white p-4 rounded-2xl shadow-lg`}>
              {service.icon}
            </div>
            <span className="font-bold text-slate-800">{service.name}</span>
          </button>
        ))}
      </div>

      {/* Admin Notification Area */}
      <div className="px-6 mt-8">
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
          <p className="text-sm text-blue-800 font-medium italic">
            Admin: "MTN Data Gifting is now 10% cheaper! 🚀"
          </p>
        </div>
      </div>

      {/* Floating AI Assistant */}
      {showAI && (
        <button 
          className="fixed bottom-8 right-6 bg-slate-900 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center animate-bounce z-50 cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'none' }}
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Bottom Nav (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-8 py-4 flex justify-between items-center z-40">
        <div className="text-blue-600 flex flex-col items-center">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mb-1" />
            <span className="text-xs font-bold uppercase tracking-widest text-[10px]">Home</span>
        </div>
        <div className="text-slate-300 flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[10px]">Profile</span>
        </div>
        <div className="text-slate-300 flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[10px]">History</span>
        </div>
      </nav>
    </div>
  );
}