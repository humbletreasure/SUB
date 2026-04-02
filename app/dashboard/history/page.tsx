"use client";
import { ArrowDownLeft, ArrowUpRight, Calendar } from 'lucide-react';

const TRANSACTIONS = [
  { id: 1, type: 'Deposit', amount: 5000, date: 'Oct 24, 2:30 PM', status: 'Success' },
  { id: 2, type: 'Data (MTN)', amount: -1200, date: 'Oct 23, 11:15 AM', status: 'Success' },
  { id: 3, type: 'Ref Commission', amount: 10, date: 'Oct 22, 09:00 AM', status: 'Success' },
];

export default function History() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h2 className="text-2xl font-black mb-6">Transaction History</h2>
      
      <div className="space-y-4">
        {TRANSACTIONS.map((tx) => (
          <div key={tx.id} className="bg-white p-5 rounded-3xl flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl ${tx.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {tx.amount > 0 ? <ArrowDownLeft size={20}/> : <ArrowUpRight size={20}/>}
              </div>
              <div>
                <p className="font-bold text-slate-800">{tx.type}</p>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar size={12}/> {tx.date}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-black ${tx.amount > 0 ? 'text-green-600' : 'text-slate-900'}`}>
                {tx.amount > 0 ? `+₦${tx.amount}` : `-₦${Math.abs(tx.amount)}`}
              </p>
              <p className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}