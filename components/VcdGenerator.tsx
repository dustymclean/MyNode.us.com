
import React, { useState } from 'react';
import { VcdData } from '../types';

const VcdGenerator: React.FC = () => {
  const [data, setData] = useState<Partial<VcdData>>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    website: '',
    organization: '',
    title: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const generateVcf = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${data.lastName};${data.firstName};;;
FN:${data.firstName} ${data.lastName}
ORG:${data.organization}
TITLE:${data.title}
TEL;TYPE=CELL,VOICE:${data.phone}
EMAIL;TYPE=PREF,INTERNET:${data.email}
URL:${data.website}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${data.firstName || 'contact'}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="vcd-generator" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#E5B1B1]"></span>
              <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#E5B1B1]">Live Capability</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-[#F8F8F8]">The DIY Platform</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A streamlined generator for custom VCD (Virtual Contact) cards. Save your professional identity directly to any smartphone wallet. 
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">The Benefit</h4>
                <p className="text-gray-500 text-sm">Instant deployment to smartphone wallets. Zero cost.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">The Goal</h4>
                <p className="text-gray-500 text-sm">A low-friction entry point to the My Node ecosystem.</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 border border-white/10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5B1B1]/5 blur-3xl pointer-events-none"></div>
            <h3 className="text-xl font-bold mb-6 border-b border-[#E5B1B1]/30 pb-4 text-[#F8F8F8]">Generate Digital Identity</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">First Name</label>
                <input name="firstName" value={data.firstName} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#E5B1B1] p-3 text-white outline-none transition-colors font-mono text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Last Name</label>
                <input name="lastName" value={data.lastName} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#E5B1B1] p-3 text-white outline-none transition-colors font-mono text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Phone</label>
                <input name="phone" value={data.phone} onChange={handleChange} placeholder="+1..." className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#E5B1B1] p-3 text-white outline-none transition-colors font-mono text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
                <input name="email" value={data.email} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#E5B1B1] p-3 text-white outline-none transition-colors font-mono text-sm" />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Website</label>
                <input name="website" value={data.website} onChange={handleChange} placeholder="https://..." className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#E5B1B1] p-3 text-white outline-none transition-colors font-mono text-sm" />
              </div>
            </div>
            <button
              onClick={generateVcf}
              className="w-full bg-[#E5B1B1] text-black font-black uppercase tracking-widest py-4 hover:brightness-110 transition-all shadow-lg active:scale-95"
            >
              Deploy Free VCD Card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VcdGenerator;
