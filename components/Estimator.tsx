
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    paymentMethod: 'invoice',
    paymentIdentifier: ''
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
      nfc: false,
      crm: false,
      ecommerce: false,
      vcdLogic: false,
      redirectControl: false,
      tapAnalytics: false,
      pages: 1 
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const addOns = config.foundationType === 'website' 
      ? [config.nfc && 'Hardware Bridge', config.crm && 'Lead Automation', config.ecommerce && 'E-Commerce'].filter(Boolean)
      : [config.vcdLogic && 'VCD Profile', config.redirectControl && 'Managed Redirects', config.tapAnalytics && 'Tap Intelligence'].filter(Boolean);

    const messageBody = `
--- SERVICE ESTIMATE SUMMARY ---
Foundation: ${config.foundationType.toUpperCase()}
Total Pages: ${config.pages}
Add-ons: ${addOns.length > 0 ? addOns.join(', ') : 'None'}
Estimated Investment: $${totalPrice}
Deposit Due: $50

--- OPERATOR DETAILS ---
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Payment Method: ${formData.paymentMethod}
Payment Identifier: ${formData.paymentIdentifier}
--- END TRANSMISSION ---
    `;

    try {
      const response = await fetch('https://formspree.io/f/xvzbgoal', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          payment: `${formData.paymentMethod}: ${formData.paymentIdentifier}`,
          message: messageBody,
          service: `Build Slot: ${config.foundationType}`,
          price: totalPrice
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Transmission Error. Please verify connection and retry.');
      }
    } catch (err) {
      alert('System Network Failure. Unable to reach destination.');
    } finally {
      setIsSubmitting(false);
    }
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
                onClick={() => setIsModalOpen(true)}
                className="w-full px-10 py-5 bg-[#E5B1B1] text-black font-black uppercase tracking-widest hover:brightness-110 text-center transition-all active:scale-95 shadow-xl"
              >
                Secure Build Slot ($50 Deposit)
              </button>
              <p className="text-[8px] text-center text-gray-600 uppercase tracking-widest font-black">Deposit applied to final balance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Build Slot Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="w-full max-w-2xl bg-[#1A1A1B] border border-[#E5B1B1]/30 shadow-2xl relative">
            <button 
              onClick={() => { setIsModalOpen(false); setIsSubmitted(false); }}
              className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl font-black"
            >
              &times;
            </button>

            <div className="p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 bg-[#E5B1B1] rounded-full animate-pulse"></span>
                      <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#E5B1B1]">Infrastructure Reservation</span>
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Secure <span className="rose-gold-shine">Build Slot</span></h2>
                  </div>

                  <div className="bg-black/40 p-6 border border-white/5 space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-gray-400">
                      <span>Configuration: {config.foundationType}</span>
                      <span>Estimated: ${totalPrice}</span>
                    </div>
                    <div className="h-[1px] bg-white/5 w-full"></div>
                    <p className="text-[10px] text-[#E5B1B1] font-bold italic">Deposit Protocol: $50 applied to final architecture balance.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Full Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                        placeholder="OPERATOR_NAME"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Phone Number</label>
                      <input 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                        placeholder="PROTOCOL_PHONE"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Email Address</label>
                      <input 
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                        placeholder="RELAY_ENDPOINT"
                      />
                    </div>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-white/5">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Payment Protocol</label>
                        <select 
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleInputChange}
                          className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none appearance-none cursor-pointer"
                        >
                          <option value="venmo" className="bg-zinc-900">Venmo</option>
                          <option value="cash-app" className="bg-zinc-900">Cash App</option>
                          <option value="paypal" className="bg-zinc-900">PayPal</option>
                          <option value="invoice" className="bg-zinc-900">Direct Invoice</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">
                          {formData.paymentMethod === 'invoice' || formData.paymentMethod === 'paypal' ? 'Billing Email' : 'User Handle'}
                        </label>
                        <input 
                          required
                          name="paymentIdentifier"
                          value={formData.paymentIdentifier}
                          onChange={handleInputChange}
                          className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                          placeholder="INPUT_ID"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-6 bg-[#E5B1B1] text-black font-black uppercase tracking-[0.4em] text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        Initializing Transmission...
                      </>
                    ) : (
                      'Initialize Build Reservation'
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-20 text-center animate-fadeIn space-y-8">
                  <div className="text-7xl">📡</div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Reservation Logged</h2>
                    <p className="text-gray-400 font-mono text-xs uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                      Slot confirmed. Digital handshake sequence successful. 
                    </p>
                  </div>
                  <div className="bg-black/40 border border-[#E5B1B1]/30 p-8 max-w-md mx-auto">
                    <p className="text-[#E5B1B1] text-xs italic mb-6">
                      "Project scope and $50 reservation intent for your {config.foundationType} build have been received. I will reach out to {formData.email} to initiate the formal design handshake."
                    </p>
                    <button 
                      onClick={() => { setIsModalOpen(false); setIsSubmitted(false); }}
                      className="text-white text-[10px] font-black uppercase tracking-widest hover:text-[#E5B1B1] transition-colors"
                    >
                      Return to Estimator
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Estimator;
