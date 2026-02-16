import React, { useState, useEffect } from 'react';

const IntakeForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('IDLE');

  useEffect(() => {
    if (isSubmitting) setStatus('UPLOADING');
    else if (submitted) setStatus('COMPLETE');
    else setStatus('IDLE');
  }, [isSubmitting, submitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/mqelgeag', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Transmission interrupted. Protocol error. Retry initialization.');
      }
    } catch (error) {
      alert('Network failure. Connection to Node Architecture lost.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="brief" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-[#1A1A1B] p-12 border border-[#E5B1B1] shadow-[0_0_50px_rgba(229,177,177,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5B1B1] to-transparent"></div>
            <div className="text-5xl mb-6">📡</div>
            <h2 className="text-3xl font-black mb-4 text-[#F8F8F8] uppercase tracking-tighter">Brief Logged</h2>
            <p className="text-gray-400 mb-8 leading-relaxed font-mono text-sm">ARCHITECT_STATUS: NOTIFIED<br/>PROJECT_DNA: STORED<br/>HANDSHAKE: SUCCESS</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-[#E5B1B1] text-[#1A1A1B] font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl"
            >
              Start New Brief
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="brief" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="w-full flex items-center justify-between mb-4 border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E5B1B1] animate-pulse"></span>
              <span className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-500">Intelligent.Brief_v4.2026</span>
            </div>
            <div className="text-[10px] font-mono text-[#E5B1B1]">LINK_STATE: {status}</div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-center text-[#F8F8F8] tracking-tighter leading-none mb-6">
            Initiate <span className="text-[#E5B1B1]">System Design</span>
          </h2>
          <p className="text-gray-500 text-center max-w-xl font-light italic">
            Qualified project intake. Define your requirements, identify your quirks, and deploy your DNA to the architect.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-[#E5B1B1]/10 blur-xl"></div>
          <form 
            onSubmit={handleSubmit}
            className="bg-[#0A0A0B] p-8 md:p-12 border border-[#E5B1B1]/30 shadow-2xl relative grid md:grid-cols-12 gap-x-8 gap-y-6"
          >
            <div className="md:col-span-12 border-b border-white/5 pb-2 mb-2 flex items-center gap-4">
              <span className="text-[8px] font-black uppercase tracking-widest text-gray-600">01 / Endpoint Identification</span>
              <div className="flex-grow h-[1px] bg-white/5"></div>
            </div>

            <div className="md:col-span-6 space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-[#E5B1B1] font-black">Operator_Name</label>
              <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 focus:border-[#E5B1B1] p-4 text-white outline-none transition-all placeholder:text-gray-800 font-mono text-sm" placeholder="INPUT NAME" />
            </div>
            <div className="md:col-span-6 space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-[#E5B1B1] font-black">Operator_Email</label>
              <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 focus:border-[#E5B1B1] p-4 text-white outline-none transition-all placeholder:text-gray-800 font-mono text-sm" placeholder="INPUT EMAIL" />
            </div>

            <div className="md:col-span-12 border-b border-white/5 pb-2 mt-4 flex items-center gap-4">
              <span className="text-[8px] font-black uppercase tracking-widest text-gray-600">02 / Architecture Parameters</span>
              <div className="flex-grow h-[1px] bg-white/5"></div>
            </div>

            <div className="md:col-span-12 space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-[#E5B1B1] font-black">Infrastructure_Type</label>
              <select name="service" className="w-full bg-white/5 border border-white/10 focus:border-[#E5B1B1] p-4 text-white outline-none transition-all appearance-none cursor-pointer font-mono text-sm">
                <option className="bg-zinc-950">Foundational_Build ($500+)</option>
                <option className="bg-zinc-950">Executive_Node (NFC Hardware)</option>
                <option className="bg-zinc-950">Engineered_Ecosystem (CRM/API)</option>
                <option className="bg-zinc-950">Custom_Industrial_Logic</option>
              </select>
            </div>

            <div className="md:col-span-12 space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-[#E5B1B1] font-black">Project_Scope_Details</label>
              <textarea required name="message" rows={3} className="w-full bg-white/5 border border-white/10 focus:border-[#E5B1B1] p-4 text-white outline-none transition-all resize-none placeholder:text-gray-800 font-mono text-sm" placeholder="DESCRIBE_UTILITY..."></textarea>
            </div>

            <div className="md:col-span-12 pt-8">
              <button type="submit" disabled={isSubmitting} className={`group relative w-full overflow-hidden py-6 bg-[#E5B1B1] text-[#1A1A1B] font-black uppercase tracking-[0.6em] shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? 'UPLOADING_BRIEF...' : 'Initiate System Design'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;