"use client";
import { useState } from 'react';
import { signIn } from 'next-auth/react";
import { CheckCircle2, Send, Mail } from 'lucide-react';

export default function SignUp() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Create Account</h2>
          <p className="mt-2 text-slate-600">Join thousands of Nigerians using NaijaSub</p>
        </div>

        <div className="mt-8 space-y-4">
          {/* Privacy & Terms Checkbox - MANDATORY */}
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <input 
              type="checkbox" 
              id="terms"
              className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm text-slate-600 leading-tight">
              I agree to the <span className="text-blue-600 font-medium">Terms of Service</span>, 
              <span className="text-blue-600 font-medium"> Privacy Policy</span>, and 
              <span className="text-blue-600 font-medium"> Refund Policy</span>.
            </label>
          </div>

          {/* Social Sign In Buttons */}
          <button
            disabled={!agreed}
            onClick={() => signIn('google')}
            className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold transition shadow-sm border
              ${agreed ? 'bg-white hover:bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
          >
            <Mail className="text-red-500" />
            Continue with Gmail
          </button>

          <button
            disabled={!agreed}
            className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold transition shadow-sm border
              ${agreed ? 'bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
          >
            <Send className="text-blue-500" />
            Verify via Telegram
          </button>
          
          <p className="text-center text-xs text-slate-400 mt-4 italic">
            WhatsApp Verification: <span className="font-bold text-blue-400 underline cursor-not-allowed">Coming Soon</span>
          </p>
        </div>
      </div>
    </div>
  );
}