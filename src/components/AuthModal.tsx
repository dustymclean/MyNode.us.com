
import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const AuthModal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { login, user } = useAuth();

  if (user) return null;

  return (
    <section id="auth" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-black p-10 border border-[#D4AF37]/30 shadow-2xl">
          <h2 className="text-3xl font-bold mb-2">Secure Access</h2>
          <p className="text-gray-500 text-sm mb-8">Establish your Node identity to track progress.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); login(email, name); }} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
              <input required value={name} onChange={e => setName(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 p-4 outline-none focus:border-[#D4AF37] transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 p-4 outline-none focus:border-[#D4AF37] transition-colors" />
            </div>
            <button type="submit" className="w-full py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest shadow-lg hover:brightness-110">
              Initialize Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthModal;
