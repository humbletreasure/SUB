"use client";
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  Settings, 
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';

export default function AdminDashboard() {
  // Mock Data - This will eventually come from your Database
  const stats = [
    { label: 'Total Profit', value: '₦145,200', icon: <TrendingUp />, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Total Users', value: '1,240', icon: <Users />, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Deposits', value: '₦2,400,000', icon: <CreditCard />, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 underline decoration-blue-600">Admin Control</h1>
          <p className="text-slate-500 font-medium">Platform performance & management</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              <h2 className="text-3xl font-black mt-1 text-slate-900">{stat.value}</h2>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pricing Controls */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="text-slate-400" />
              <h3 className="text-xl font-bold">Pricing Rules (Markup)</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                <span className="font-bold">Airtime Markup</span>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">₦5.00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                <span className="font-bold">Data Markup</span>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">₦10.00</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                <span className="font-bold">Deposit Fee</span>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">₦15.00</span>
              </div>
            </div>
            <button className="w-full mt-6 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:border-blue-300 hover:text-blue-600 transition">
              Edit Pricing Endpoints
            </button>
          </div>

          {/* Recent Support Issues */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-orange-400" />
              <h3 className="text-xl font-bold">Pending Support</h3>
            </div>
            <div className="space-y-4">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm">Chidi: "My data hasn't arrived"</p>
                    <p className="text-[10px] text-white/40 italic uppercase">2 mins ago</p>
                  </div>
                  <ArrowUpRight size={16} className="text-blue-400" />
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm">Benson: "Deposit verification failed"</p>
                    <p className="text-[10px] text-white/40 italic uppercase">1 hour ago</p>
                  </div>
                  <ArrowUpRight size={16} className="text-blue-400" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}