"use client";
import { Megaphone, X } from 'lucide-react';
import { useState } from 'react';

export default function AdminNotification({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  if (!visible || !message) return null;

  return (
    <div className="mx-6 mt-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg flex items-center justify-between animate__animated animate__fadeInDown">
      <div className="flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-lg">
          <Megaphone size={18} />
        </div>
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button onClick={() => setVisible(false)} className="text-white/60">
        <X size={18} />
      </button>
    </div>
  );
}