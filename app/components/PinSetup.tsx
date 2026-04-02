"use client";
import { useState } from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export default function PinSetup({ onSuccess }: { onSuccess: (pin: string) => void }) {
  const [pin, setPin] = useState("");

  const handleSubmit = () => {
    if (pin.length >= 4 && pin.length <= 6) {
      onSuccess(pin);
    } else {
      alert("PIN must be 4 to 6 digits");
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-6 z-[100]">
      <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl animate__animated animate__zoomIn">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
          <Lock size={32} />
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-2">Create Secure PIN</h2>
        <p className="text-slate-500 text-center mb-8 text-sm">
          This PIN will be required for every purchase to keep your wallet safe.
        </p>

        <input
          type="password"
          maxLength={6}
          placeholder="••••••"
          className="w-full text-center text-3xl tracking-[1rem] py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:outline-none mb-6 font-mono"
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2"
        >
          <ShieldCheck size={20} />
          Set Secure PIN
        </button>
      </div>
    </div>
  );
}