"use client";
import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

const NETWORKS = [
  { id: 'mtn', name: 'MTN', color: 'bg-yellow-400', logo: '🟡' },
  { id: 'glo', name: 'Glo', color: 'bg-green-500', logo: '🟢' },
  { id: 'airtel', name: 'Airtel', color: 'bg-red-600', logo: '🔴' },
  { id: '9mobile', name: '9Mobile', color: 'bg-green-900', logo: '🟤' },
];

export default function PurchaseModal({ type, onClose }: { type: string, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [selectedNet, setSelectedNet] = useState('');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');

  // Logic: Format phone number to 234...
  const formatPhone = (val: string) => {
    let cleaned = val.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
      cleaned = '234' + cleaned.substring(1);
    }
    return cleaned;
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-end">
      <div className="bg-white w-full rounded-t-[3rem] p-8 animate__animated animate__slideInUp">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold capitalize">Buy {type}</h2>
          <button onClick={onClose} className="p-2 bg-slate-100 rounded-full"><X size={20}/></button>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <p className="text-sm text-slate-500 font-medium">Select Network Provider</p>
            <div className="grid grid-cols-4 gap-4">
              {NETWORKS.map((net) => (
                <button 
                  key={net.id}
                  onClick={() => {setSelectedNet(net.id); setStep(2);}}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition
                    ${selectedNet === net.id ? 'border-blue-600 bg-blue-50' : 'border-slate-100'}`}
                >
                  <span className="text-2xl">{net.logo}</span>
                  <span className="text-[10px] font-bold">{net.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate__animated animate__fadeIn">
             <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="08012345678"
                  className="w-full p-4 mt-1 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none text-lg font-bold"
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                />
                <p className="text-[10px] mt-1 text-slate-400 italic">Format: {phone || '234...'}</p>
             </div>

             <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Transaction PIN</label>
                <input 
                  type="password" 
                  maxLength={6}
                  placeholder="••••"
                  className="w-full p-4 mt-1 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none text-center tracking-widest"
                  onChange={(e) => setPin(e.target.value)}
                />
             </div>

             <button 
                disabled={pin.length < 4}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 disabled:bg-slate-300"
                onClick={() => setStep(3)}
             >
                Confirm Purchase
             </button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-10 animate__animated animate__bounceIn">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-black">Success!</h3>
            <p className="text-slate-500 mt-2">Your {type} is being processed for {phone}.</p>
            <button 
                onClick={onClose}
                className="mt-8 w-full py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-600"
            >
                Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}