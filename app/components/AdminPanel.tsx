"use client";
import { useState } from 'react';
import { Send, AlertTriangle } from 'lucide-react';

export default function AdminPanel() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const sendBroadcast = async () => {
    setLoading(true);
    // Call File 24
    const res = await fetch('/api/admin/notify', {
      method: 'POST',
      body: JSON.stringify({ 
        adminKey: "your-secret-key", // Store this in Vercel Env
        message: msg,
        type: 'alert' 
      })
    });
    if (res.ok) {
       alert("Message pushed to all users!");
       setMsg("");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="text-orange-500" size={20} />
        <h3 className="font-black text-slate-800 uppercase tracking-tight">System Broadcast</h3>
      </div>
      
      <textarea 
        className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none text-sm font-medium h-32 mb-4"
        placeholder="Type important update (e.g., MTN SME is currently down)..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button 
        onClick={sendBroadcast}
        disabled={loading || !msg}
        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition disabled:opacity-50"
      >
        <Send size={18} /> {loading ? "Sending..." : "Push to All Users"}
      </button>
    </div>
  );
}