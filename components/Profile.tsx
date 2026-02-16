
import React from 'react';
import { useAuth } from './AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <section id="profile" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-zinc-950 p-8 border border-[#D4AF37]/30">
              <h2 className="text-2xl font-bold mb-6">User Node</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-1">Identity</label>
                  <p className="text-white font-bold">{user.name}</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-1">Endpoint</label>
                  <p className="text-white font-mono text-sm">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#D4AF37]"></span> Active Projects
              </h3>
              <div className="space-y-4">
                {user.projects.map(p => (
                  <div key={p.name} className="bg-zinc-950 p-6 border border-white/5 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-white">{p.name}</h4>
                      <p className="text-xs text-gray-500">Infrastructure Build</p>
                    </div>
                    <span className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#D4AF37]"></span> Saved VCD Designs
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-8 border border-dashed border-white/10 flex flex-col items-center justify-center text-center opacity-40">
                   <p className="text-xs uppercase font-bold tracking-widest">No Designs Saved</p>
                   <a href="#vcd-generator" className="text-[#D4AF37] text-[10px] font-black uppercase mt-2">Initialize Tool &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
