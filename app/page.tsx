import Link from 'next/link';
import { ShieldCheck, Zap, Smartphone, Wallet } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
          🇳🇬 Strictly for Nigerian Users (+234)
        </div>
        <h1 className="max-w-4xl mx-auto text-5xl font-extrabold tracking-tight md:text-7xl">
          One Wallet for all your <span className="text-blue-600 font-black">Naija Bills.</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-600">
          Instant Airtime, Data, and TV Subscriptions. Fund your Betting Wallets with zero stress and automated verification.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
          <Link href="/signup" className="w-full px-8 py-4 text-lg font-bold text-white transition bg-blue-600 rounded-2xl sm:w-auto hover:bg-blue-700 shadow-lg shadow-blue-200">
            Create Free Account
          </Link>
          <Link href="/login" className="w-full px-8 py-4 text-lg font-bold text-slate-900 transition bg-white border border-slate-200 rounded-2xl sm:w-auto hover:bg-slate-50">
            Sign In
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-4 px-6 md:grid-cols-4 max-w-6xl mx-auto mb-20">
        <div className="p-4 text-center">
            <Zap className="mx-auto text-orange-500 mb-2" />
            <p className="font-bold">Instant Delivery</p>
        </div>
        <div className="p-4 text-center">
            <ShieldCheck className="mx-auto text-green-600 mb-2" />
            <p className="font-bold">Secure PINs</p>
        </div>
        <div className="p-4 text-center">
            <Smartphone className="mx-auto text-blue-500 mb-2" />
            <p className="font-bold">Mobile First</p>
        </div>
        <div className="p-4 text-center">
            <Wallet className="mx-auto text-purple-600 mb-2" />
            <p className="font-bold">No Hidden Fees</p>
        </div>
      </div>
    </div>
  );
}