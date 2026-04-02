"use client";
import { User, Copy, CheckCircle2, LogOut, Heart } from 'lucide-react';

export default function Profile() {
  const user = {
    name: "Chidi Benson",
    email: "chidi@gmail.com",
    phone: "2348012345678",
    refCode: "A9B3C1",
    isVerified: true
  };

  const copyRef = () => {
    navigator.clipboard.writeText(user.refCode);
    alert("Referral code copied!");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8 border-b border-slate-100 flex items-center gap-4">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {user.name[0]}
        </div>
        <div>
          <h2 className="text-xl font-black flex items-center gap-2">
            {user.name} {user.isVerified && <CheckCircle2 size={18} className="text-blue-500" />}
          </h2>
          <p className="text-slate-400 text-sm">{user.email}</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Referral Card */}
        <div className="bg-slate-900 rounded-[2rem] p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Your Referral Code</p>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-3xl font-black tracking-tighter">{user.refCode}</h3>
              <button onClick={copyRef} className="p-3 bg-white/10 rounded-xl"><Copy size={20}/></button>
            </div>
            <p className="mt-4 text-xs text-slate-400 italic">Earn ₦10 commission on every data purchase your friends make.</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <User size={120} />
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-5 bg-slate-50 rounded-2xl font-bold text-slate-700">
                <span className="flex items-center gap-3"><Heart size={20} className="text-red-500"/> Support & Help</span>
            </button>
            <button className="w-full flex items-center justify-between p-5 bg-red-50 rounded-2xl font-bold text-red-600">
                <span className="flex items-center gap-3"><LogOut size={20}/> Log Out</span>
            </button>
        </div>
      </div>
    </div>
  );
}