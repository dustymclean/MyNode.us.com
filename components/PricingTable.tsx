
import React, { useState } from 'react';

interface Tier {
  name: string;
  target: string;
  setup: string;
  monthly: string;
  features: string[];
  highlight: boolean;
}

const PricingTable: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    paymentMethod: 'invoice',
    paymentIdentifier: ''
  });

  const tiers: Tier[] = [
    {
      name: 'Professional',
      target: 'Personal / Contact',
      setup: '$249',
      monthly: '$15',
      features: ['1x Premium NFC Card', 'VCD Profile Hosting', 'Real-time Redirection', 'Standard Support'],
      highlight: false
    },
    {
      name: 'Operator',
      target: 'Small Business / Utility',
      setup: '$749',
      monthly: '$45',
      features: ['3x Custom Branded Cards', 'Lead Capture Logic', 'CRM/Workflow Integration', 'Priority Shipping'],
      highlight: true
    },
    {
      name: 'Architect',
      target: 'Custom / Industrial',
      setup: '$2,500+',
      monthly: '$120+',
      features: ['Full Stack Development', 'Custom Hardware Engineering', 'API / IoT Integration', 'Direct Engineer Access'],
      highlight: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRenderPayment = (tier: Tier) => {
    setSelectedTier(tier);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageBody = `
--- SERVICE PAYMENT INITIALIZATION ---
Tier Selected: ${selectedTier?.name.toUpperCase()}
Setup Investment: ${selectedTier?.setup}
Monthly Infrastructure: ${selectedTier?.monthly}

--- OPERATOR DETAILS ---
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Payment: ${formData.paymentMethod}
ID / Handle: ${formData.paymentIdentifier}
--- END TRANSMISSION ---
    `;

    try {
      const response = await fetch('https://formspree.io/f/xvzbgoal', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          payment_info: `${formData.paymentMethod}: ${formData.paymentIdentifier}`,
          message: messageBody,
          service_tier: selectedTier?.name,
          total_setup: selectedTier?.setup
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Transmission Error. Protocol interrupted.');
      }
    } catch (err) {
      alert('Network failure. Connection to Node lost.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#1A1A1B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#E5B1B1]"></span>
            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#E5B1B1]">Investment Framework</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-[#F8F8F8] tracking-tighter italic">Simple, Transparent <span className="rose-gold-shine">Investment</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            Paying for industrial-grade hardware, bespoke software, and secure infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative p-10 bg-[#0F0F0F] border ${tier.highlight ? 'border-[#E5B1B1]' : 'border-white/5'} flex flex-col shadow-2xl group hover:border-[#E5B1B1]/30 transition-all`}>
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E5B1B1] text-[#1A1A1B] text-[10px] font-black px-4 py-1 uppercase tracking-widest shadow-lg">
                  Most Deployed
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1 text-[#F8F8F8]">{tier.name}</h3>
              <p className="text-[#E5B1B1] text-[10px] font-black uppercase tracking-widest mb-6">{tier.target}</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-white">{tier.setup}</span>
                  <span className="text-gray-600 text-[10px] uppercase font-bold">One-Time</span>
                </div>
                <div className="text-gray-500 text-sm italic">{tier.monthly} / monthly infrastructure</div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map(f => (
                  <li key={f} className="text-sm text-gray-500 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#E5B1B1] rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleRenderPayment(tier)}
                className={`w-full py-5 font-black uppercase tracking-widest text-xs transition-all ${tier.highlight ? 'bg-[#E5B1B1] text-[#1A1A1B] hover:brightness-110 shadow-xl' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                Render Payment: {tier.setup}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-white/5 pt-12">
          <blockquote className="text-xl text-gray-400 font-light italic leading-relaxed mb-8">
            "Once payment is confirmed, I will immediately begin the engineering process for your custom Node environment. Requirement lock triggers hardware manufacturing."
          </blockquote>
          <p className="text-xs text-[#E5B1B1] uppercase tracking-widest font-black">Hardware ships within 3-5 business days of logic finalization.</p>
        </div>
      </div>

      {/* Payment Initiation Modal */}
      {selectedTier && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="w-full max-w-2xl bg-[#1A1A1B] border border-[#E5B1B1]/30 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedTier(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl font-black"
            >
              &times;
            </button>

            <div className="p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 bg-[#E5B1B1] rounded-full animate-pulse"></span>
                      <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#E5B1B1]">Initialization: {selectedTier.name} Tier</span>
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Handshake <span className="rose-gold-shine">Sequence</span></h2>
                  </div>

                  <div className="bg-black/40 p-6 border border-white/5 space-y-4">
                    <p className="text-sm text-gray-400 italic">
                      To initiate the {selectedTier.name} build, please provide your contact details and preferred billing platform. I will transmit a formal invoice and setup brief to the endpoint provided.
                    </p>
                    <div className="h-[1px] bg-white/5 w-full"></div>
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-[#E5B1B1]">
                      <span>Setup: {selectedTier.setup}</span>
                      <span>Logic: Verified</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Operator Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                        placeholder="FULL_NAME"
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
                      <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Billing Email Address</label>
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
                        <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Payment Platform</label>
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
                          Platform Identifier
                        </label>
                        <input 
                          required
                          name="paymentIdentifier"
                          value={formData.paymentIdentifier}
                          onChange={handleInputChange}
                          className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                          placeholder={formData.paymentMethod === 'invoice' || formData.paymentMethod === 'paypal' ? 'BILLING_EMAIL' : 'USER_HANDLE'}
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
                        Initializing Handshake...
                      </>
                    ) : (
                      'Initiate Handshake & Request Invoice'
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-20 text-center animate-fadeIn space-y-10">
                  <div className="text-7xl">📡</div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Protocol Authenticated</h2>
                    <p className="text-gray-400 font-mono text-xs uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                      Payment intent logged. Engineering handshake sequence successful. 
                    </p>
                  </div>
                  <div className="bg-black/40 border border-[#E5B1B1]/30 p-8 max-w-md mx-auto">
                    <p className="text-[#E5B1B1] text-xs italic mb-6">
                      "I have received your request for the {selectedTier.name} environment. I will transmit an invoice for {selectedTier.setup} to {formData.email} shortly. Once rendered, your build enters the active engineering queue."
                    </p>
                    <button 
                      onClick={() => { setSelectedTier(null); setIsSubmitted(false); }}
                      className="text-white text-[10px] font-black uppercase tracking-widest hover:text-[#E5B1B1] transition-colors"
                    >
                      Return to Pricing
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

export default PricingTable;
