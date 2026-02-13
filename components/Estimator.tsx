
import React, { useState, useMemo } from 'react';
import { PricingState, FoundationType } from '../types';

const Estimator: React.FC = () => {
  const [config, setConfig] = useState<PricingState>({
    foundationType: 'website',
    pages: 1,
    nfc: false,
    crm: false,
    ecommerce: false,
    vcdLogic: false,
    redirectControl: false,
    tapAnalytics: false
  });

  const totalPrice = useMemo(() => {
    let base = config.foundationType === 'website' ? 500 : 100;
    
    // Pages logic: Website has $100 per extra page. NFC Tag Page is $50 per extra page.
    let pageCost = config.foundationType === 'website' ? (config.pages - 1) * 100 : (config.pages - 1) * 50;
    
    let optionsCost = 0;
    if (config.foundationType === 'website') {
      if (config.nfc) optionsCost += 150;
      if (config.crm) optionsCost += 250;
      if (config.ecommerce) optionsCost += 500;
    } else {
      if (config.vcdLogic) optionsCost += 50;
      if (config.redirectControl) optionsCost += 75;
      if (config.tapAnalytics) optionsCost += 50;
    }
    
    return base + pageCost + optionsCost;
  }, [config]);

  const setFoundation = (type: FoundationType) => {
    setConfig(prev => ({ 
      ...prev, 
      foundationType: type,
      // Reset foundation-specific options when switching
      nfc: false,
      crm: false,
      ecommerce: false,
      vcdLogic: false,
      redirectControl: false,
      tapAnalytics: false,
      pages: 1 
    }));
  };

  return (
    <section id="estimator" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#F8F8F8]">Project Estimator</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Qualify your build. Establish your base architecture and scale with logic-driven add-ons custom to your deployment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-950 p-8 border border-[#E5B1B1]/20 rounded-sm shadow-[0_0_50px_rgba(229,177,177,0.05)]">
          {/* Foundation Selection */}
          <div className="mb-12">
            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 block mb-6">01 / Choose Your Foundation</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => setFoundation('nfc-tag')}
                className={`p-6 border text-left transition-all relative overflow-hidden group ${config.foundationType === 'nfc-tag' ? 'border-[#E5B1B1] bg-[#E5B1B1]/10' : 'border-zinc-800 bg-zinc-900'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">NFC Tag Page</h3>
                  <span className="text-[#E5B1B1] font-black">$100</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">Standalone optimized single-page destination for hardware targets.</p>
                {config.foundationType === 'nfc-tag' && <div className="absolute bottom-0 left-0 h-1 bg-[#E5B1B1] w-full"></div>}
              </button>

              <button 
                onClick={() => setFoundation('website')}
                className={`p-6 border text-left transition-all relative overflow-hidden group ${config.foundationType === 'website' ? 'border-[#E5B1B1] bg-[#E5B1B1]/10' : 'border-zinc-800 bg-zinc-900'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">Foundational Website</h3>
                  <span className="text-[#E5B1B1] font-black">$500</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">High-performance multi-page architecture with full utility logic.</p>
                {config.foundationType === 'website' && <div className="absolute bottom-0 left-0 h-1 bg-[#E5B1B1] w-full"></div>}
              </button>
            </div>
          </div>

          {/* Scaling */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">02 / Scale Infrastructure</label>
              <span className="text-[#E5B1B1] font-black text-2xl">{config.pages} {config.pages === 1 ? 'Page' : 'Pages'}</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={config.pages}
              onChange={(e) => setConfig({ ...config, pages: parseInt(e.target.value) })}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#E5B1B1]"
            />
            <div className="flex justify-between mt-2 text-[8px] text-gray-600 font-black uppercase tracking-widest">
              <span>{config.foundationType === 'nfc-tag' ? 'Single' : 'Base'} (1)</span>
              <span>Enterprise (15+)</span>
            </div>
          </div>

          {/* Foundation-Specific Add-ons */}
          <div className="mb-12">
            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 block mb-6">03 / Engineering Add-ons</label>
            <div className="grid md:grid-cols-3 gap-4">
              {config.foundationType === 'website' ? (
                <>
                  <label className={`cursor-pointer group flex flex-col p-5 border ${config.nfc ? 'border-[#E5B1B1] bg-[#E5B1B1]/5' : 'border-zinc-800 bg-zinc-900'} transition-all`}>
                    <input type="checkbox" className="hidden" checked={config.nfc} onChange={() => setConfig({ ...config, nfc: !config.nfc })} />
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[8px] font-black uppercase tracking-widest ${config.nfc ? 'text-[#E5B1B1]' : 'text-gray-500'}`}>Utility</span>
                      <span className="text-white text-xs font-bold">+$150</span>
                    </div>
                    <h3 className="text-sm font-bold mb-1">Hardware Bridge</h3>
                    <p className="text-[10px] text-gray-500 leading-tight">Physical card integration with destination control.</p>
                  </label>

                  <label className={`cursor-pointer group flex flex-col p-5 border ${config.crm ? 'border-[#E5B1B1] bg-[#E5B1B1]/5' : 'border-zinc-800 bg-zinc-900'} transition-all`}>
                    <input type="checkbox" className="hidden" checked={config.crm} onChange={() => setConfig({ ...config, crm: !config.crm })} />
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[8px] font-black uppercase tracking-widest ${config.crm ? 'text-[#E5B1B1]' : 'text-gray-500'}`}>Automation</span>
                      <span className="text-white text-xs font-bold">+$250</span>
                    </div>
                    <h3 className="text-sm font-bold mb-1">Lead Automation</h3>
                    <p className="text-[10px] text-gray-500 leading-tight">Direct CRM pipeline to Airtable or HubSpot.</p>
                  </label>

                  <label className={`cursor-pointer group flex flex-col p-5 border ${config.ecommerce ? 'border-[#E5B1B1] bg-[#E5B1B1]/5' : 'border-zinc-800 bg-zinc-900'} transition-all`}>
                    <input type="checkbox" className="hidden" checked={config.ecommerce} onChange={() => setConfig({ ...config, ecommerce: !config.ecommerce })} />
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[8px] font-black uppercase tracking-widest ${config.ecommerce ? 'text-[#E5B1B1]' : 'text-gray-500'}`}>Sales</span>
                      <span className="text-white text-xs font-bold">+$500</span>
                    </div>
                    <h3 className="text-sm font-bold mb-1">E-Commerce Logic</h3>
                    <p className="text-[10px] text-gray-500 leading-tight">Secure payment processing and checkout.</p>
                  </label>
                </>
              ) : (
                <>
                  <label className={`cursor-pointer group flex flex-col p-5 border ${config.vcdLogic ? 'border-[#E5B1B1] bg-[#E5B1B1]/5' : 'border-zinc-800 bg-zinc-900'} transition-all`}>
                    <input type="checkbox" className="hidden" checked={config.vcdLogic} onChange={() => setConfig({ ...config, vcdLogic: !config.vcdLogic })} />
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[8px] font-black uppercase tracking-widest ${config.vcdLogic ? 'text-[#E5B1B1]' : 'text-gray-500'}`}>Feature</span>
                      <span className="text-white text-xs font-bold">+$50</span>
                    </div>
                    <h3 className="text-sm font-bold mb-1">VCD Profile Logic</h3>
                    <p className="text-[10px] text-gray-500 leading-tight">Encodes a custom vCard for instant phone saving.</p>
                  </label>

                  <label className={`cursor-pointer group flex flex-col p-5 border ${config.redirectControl ? 'border-[#E5B1B1] bg-[#E5B1B1]/5' : 'border-zinc-800 bg-zinc-900'} transition-all`}>
                    <input type="checkbox" className="hidden" checked={config.redirectControl} onChange={() => setConfig({ ...config, redirectControl: !config.redirectControl })} />
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[8px] font-black uppercase tracking-widest ${config.redirectControl ? 'text-[#E5B1B1]' : 'text-gray-500'}`}>Control</span>
                      <span className="text-white text-xs font-bold">+$75</span>
                    </div>
                    <h3 className="text-sm font-bold mb-1">Managed Redirects</h3>
                    <p className="text-[10px] text-gray-500 leading-tight">Remote control of your hardware destination.</p>
                  </label>

                  <label className={`cursor-pointer group flex flex-col p-5 border ${config.tapAnalytics ? 'border-[#E5B1B1] bg-[#E5B1B1]/5' : 'border-zinc-800 bg-zinc-900'} transition-all`}>
                    <input type="checkbox" className="hidden" checked={config.tapAnalytics} onChange={() => setConfig({ ...config, tapAnalytics: !config.tapAnalytics })} />
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[8px] font-black uppercase tracking-widest ${config.tapAnalytics ? 'text-[#E5B1B1]' : 'text-gray-500'}`}>Data</span>
                      <span className="text-white text-xs font-bold">+$50</span>
                    </div>
                    <h3 className="text-sm font-bold mb-1">Tap Intelligence</h3>
                    <p className="text-[10px] text-gray-500 leading-tight">Track physical scan metrics and conversion data.</p>
                  </label>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center bg-zinc-900 p-8 border-t border-[#E5B1B1]/50 gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold block mb-1">Estimated Investment</span>
              <div className="text-5xl font-black text-white">${totalPrice}</div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 mt-2 font-bold italic">
                *plus cost of your domain
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button 
                className="w-full px-10 py-5 bg-[#E5B1B1] text-black font-black uppercase tracking-widest hover:brightness-110 text-center transition-all active:scale-95 shadow-xl"
              >
                Secure Build Slot ($50 Deposit)
              </button>
              <p className="text-[8px] text-center text-gray-600 uppercase tracking-widest font-black">Deposit applied to final balance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
